import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import '../core/application-core.js';
import '../core/studio-core.js';
import '../core/arrangement-core.js';
import '../core/preferences-core.js';
import '../core/mixer-core.js';
import '../core/prompt-auditor-core.js';

// Hashes were captured from the unmodified v0.212 rules, before extraction.
const fixture=JSON.parse(readFileSync(new URL('./fixtures/studio-rules-212.json',import.meta.url)));
const digest=text=>createHash('sha256').update(text).digest('hex');
function setup(saved={}){
 const values=new Map(Object.entries(saved).map(([key,value])=>[key,typeof value==='string'?value:JSON.stringify(value)]));
 let failure=false,writes=0,clock=1770000000000;
 const storage={getItem:key=>values.get(key)??null,setItem(key,value){if(failure)throw Error('quota');writes++;values.set(key,value);}};
 const kernel=SUNOBOOM_CORE_FACTORY.createKernel({storage,now:()=>clock++,random:()=>.125});
 const workspace=kernel.createWorkspace({defaults:{projects:[],savedPrompts:[],favorites:[]}});
 const studio=kernel.createStudio({getGenre:id=>fixture.catalog.find(g=>g.id===id)||fixture.catalog[0]});
 const arrangement=kernel.createArrangement({getGenres:()=>fixture.catalog});
 const preferences=kernel.createPreferences();
 const mixer=kernel.createMixer({getGenres:()=>fixture.catalog});
 const auditor=kernel.createAuditor({getGenres:()=>fixture.catalog});
 return {kernel,workspace,studio,arrangement,preferences,mixer,auditor,values,fail:value=>{failure=value;},get writes(){return writes;}};
}
const success=result=>{assert.equal(result.ok,true,result.error);return result.value;};

test('Studio, arrangement and preferences have one owner and need no document or startup writes',()=>{
 assert.equal(typeof document,'undefined');const env=setup();
 for(const [method,key]of [['createStudio','studio'],['createArrangement','arrangement'],['createPreferences','preferences'],['createMixer','mixer'],['createAuditor','auditor']])assert.equal(env.kernel[method](),env[key]);
 assert.equal(env.writes,0);assert.equal(env.studio.state.tempo,115);
});

test('all original arrangement templates generate byte-identical Lyrics, Style and duration',()=>{
 const {arrangement}=setup();
 for(const [name,expected]of Object.entries(fixture.arrangements)){
  success(arrangement.execute('preset',{name}));
  assert.deepEqual({lyrics:digest(arrangement.generatedLyrics()),style:digest(arrangement.fullDynamics()),duration:arrangement.lengthString()},expected,name);
 }
});

test('original genre/section/energy/vocal sound rules remain byte-identical',()=>{
 const {arrangement:a}=setup();
 for(const [key,expected]of Object.entries(fixture.smart)){
  const [id,type]=key.split(':'),genre=fixture.catalog.find(g=>g.id===id);
  assert.equal(digest(JSON.stringify(a.soundSuggestions(genre,a.makeBlock(type,4,8,'female','piano','Тихий свет')))),expected,key);
 }
});

test('Studio previews do not mutate the live builder and field changes retain genre behavior',()=>{
 const {studio,mixer}=setup(),owner=studio.state,before=structuredClone(owner),original=studio.prompt();
 assert.match(original,/115 BPM/);assert.match(original,/no whispering/);
 assert.match(studio.prompt({...owner,extra:'unique preview'}),/unique preview/);assert.deepEqual(owner,before);
 success(studio.execute('field',{key:'genre',value:'jazz'}));assert.equal(studio.state,owner);assert.equal(owner.tempo,120);assert.equal(owner.theme,'');assert.equal(owner.mixerBlend,null);
 success(mixer.execute('toStudio'));assert.equal(studio.state,owner);assert.match(studio.prompt(),/Genre blend targets/);
});

test('Studio entry commands preserve manual/generated/catalog ideas, soft genres and random tempo behavior',()=>{
 const catalog=fixture.catalog.map(g=>({...g,ideas:[{title:'Каталог',pitch:'История',mood:'unknown'}]}));
 const studio=SUNOBOOM_STUDIO_FACTORY.create({getGenre:id=>catalog.find(g=>g.id===id)||catalog[0],getGenres:()=>catalog,random:()=>0});
 success(studio.execute('useManualIdea',{idea:{genre:'jazz',title:'Моя идея',pitch:'Сюжет',hook:'Припев'}}));
 assert.equal(studio.state.tempo,120);assert.equal(studio.state.theme,'Моя идея: Сюжет Припев: Припев');
 success(studio.execute('useGenre',{id:'afropop',soft:true}));assert.equal(studio.state.energy,'soft');assert.equal(studio.state.mood,'melancholic');assert.equal(studio.state.theme,'Моя идея: Сюжет Припев: Припев');
 success(studio.execute('useGeneratedIdea',{idea:{genre:'jazz',title:'Сгенерировано',pitch:'Сюжет',detail:'Свет',hook:'Хук',mood:'energetic',vocal:'female',language:'Kazakh'}}));
 assert.equal(studio.state.energy,'high');assert.equal(studio.state.language,'Kazakh');assert.equal(studio.state.theme,'Сгенерировано: Сюжет Деталь: Свет Хук: Хук');
 success(studio.execute('useCatalogIdea',{id:'afropop',index:0}));assert.equal(studio.state.mood,'energetic');
 success(studio.execute('patch',{tempo:77}));success(studio.execute('randomIdea'));assert.equal(studio.state.tempo,77);assert.equal(studio.state.theme,'История');
 assert.equal(studio.execute('useCatalogIdea',{id:'jazz',index:9}).ok,false);
});

test('DNA application preserves the genre on an unknown ID and fits explicit style into the existing prompt limit',()=>{
 const {studio}=setup();success(studio.execute('useGenre',{id:'jazz'}));
 success(studio.execute('dna',{dna:{genre:'missing',vocal:'female',language:'English',tempoMin:90,tempoMax:110,noWhisper:true,noChoir:true,noLive:true},style:'wide guitars, soft drums, '.repeat(100)}));
 assert.equal(studio.state.genre,'jazz');assert.equal(studio.state.tempo,100);assert.equal(studio.state.vocal,'female');assert.equal(studio.state.language,'English');assert.equal(studio.state.noChoir,true);assert.ok(studio.prompt().length<=1000);
});

test('arrangement payload commands handle custom blocks, duplication, movement, transitions and text sanitization',()=>{
 const {arrangement:a}=setup();success(a.execute('preset',{name:'blank'}));
 const first=a.state.blocks[0],added=success(a.execute('add',{type:'custom',title:' [Переход]: <свет> ',afterId:first.id}));
 assert.equal(added.customName,'Переход свет');assert.equal(a.state.blocks[1].id,added.id);
 success(a.execute('field',{id:added.id,key:'energy',value:5}));success(a.execute('field',{id:added.id,key:'bars',value:24}));
 success(a.execute('transition',{id:first.id,mode:'suggest'}));assert.notEqual(first.transitionOut.type,'none');
 success(a.execute('duplicate',{id:added.id}));const duplicate=a.state.blocks[2];assert.notEqual(duplicate.id,added.id);assert.equal(duplicate.customName,added.customName);
 success(a.execute('move',{id:duplicate.id,to:0}));assert.equal(a.state.blocks[0].id,duplicate.id);
 success(a.execute('sound',{id:added.id,value:'soft piano'}));assert.equal(a.state.blocks.find(x=>x.id===added.id).instruments,'soft piano');
 assert.equal(a.execute('sound',{id:added.id,value:'soft piano'}).ok,false);
 success(a.execute('remove',{id:duplicate.id}));assert.equal(a.state.blocks.length,5);
});

test('arrangement rejects invalid fields, imports and the 65th block without changing the saved draft',()=>{
 const env=setup(),a=env.arrangement,id=a.state.blocks[0].id;
 for(const p of [{key:'energy',value:0},{key:'energy',value:1.5},{key:'bars',value:3},{key:'vocal',value:'unknown'}])assert.equal(a.execute('field',{id,...p}).ok,false);
 assert.equal(a.execute('import',{draft:{blocks:[{type:'not-a-section'}]}}).ok,false);
 const draft={activePreset:'blank',blocks:Array.from({length:64},()=>({type:'verse',energy:3,bars:8,vocal:'lead'}))};success(a.execute('import',{draft}));
 draft.blocks[0].energy=1;assert.equal(a.state.blocks[0].energy,3);
 const before=env.values.get('sunoboom-arrangement-v066');assert.equal(a.execute('add',{type:'verse'}).ok,false);assert.equal(env.values.get('sunoboom-arrangement-v066'),before);
});

test('old arrangement key and JSON schema round-trip and failed writes restore the complete draft',()=>{
 const raw={version:1,activePreset:'rock',blocks:[{id:'old',type:'verse',energy:4,bars:16,vocal:'male',instruments:'guitar',transitionOut:{type:'fill',length:'long',strength:'strong'}}]};
 const env=setup({'sunoboom-arrangement-v066':raw}),a=env.arrangement;
 assert.equal(env.writes,0);assert.equal(a.state.activePreset,'rock');assert.equal(a.state.blocks[0].transitionOut.type,'fill');
 const before=a.exportDraft(),id=a.state.blocks[0].id;env.fail(true);
 for(const [name,payload]of [['field',{id,key:'energy',value:1}],['remove',{id}],['preset',{name:'blank'}],['import',{draft:{blocks:[{type:'chorus'}]}}]]){assert.equal(a.execute(name,payload).ok,false);assert.deepEqual(a.exportDraft(),before);}
 assert.deepEqual(JSON.parse(env.values.get('sunoboom-arrangement-v066')),raw);
 env.fail(false);success(a.execute('field',{id,key:'energy',value:2}));assert.equal(JSON.parse(env.values.get('sunoboom-arrangement-v066')).version,1);
});

test('arrangement transfer previews are isolated, reject stale instructions and replace only the previous inserted text',()=>{
 const {studio,arrangement:a}=setup();success(a.execute('preset',{name:'blank'}));success(studio.execute('patch',{extra:'handwritten cue'}));
 success(a.prepareTransfer());assert.equal(studio.state.extra,'handwritten cue');success(studio.execute('patch',{extra:'edited while previewing'}));assert.equal(a.applyTransfer().ok,false);
 success(a.prepareTransfer());success(a.applyTransfer());assert.match(studio.state.extra,/edited while previewing/);const first=studio.state.extra;
 success(a.prepareTransfer());success(a.applyTransfer());assert.equal(studio.state.extra,first);assert.equal(studio.prompt().length<=1000,true);
});

test('appearance and player preferences read old schemas, validate, resolve system theme and roll back quota errors',()=>{
 const env=setup({'sunoboom-ui-settings-v1':{theme:'system',compact:true,startPage:'studio',largeText:'invalid'},'sunoboom-player-lab-v060-prefs':{volume:2,rate:1.5,repeat:'one',shuffle:true}}),p=env.preferences;
 assert.equal(p.resolveTheme(true),'light');assert.equal(p.resolveTheme(false),'dark');assert.equal(p.appearance.compact,true);assert.equal(p.appearance.largeText,false);assert.equal(p.player.volume,1);
 assert.equal(p.execute('appearance.set',{key:'theme',value:'missing'}).ok,false);assert.equal(p.execute('player.set',{key:'rate',value:3}).ok,false);
 const appearance=structuredClone(p.appearance),player=structuredClone(p.player);env.fail(true);
 for(const [name,payload]of [['appearance.set',{key:'theme',value:'pink'}],['appearance.reset',{}],['player.set',{key:'volume',value:.2}]])assert.equal(p.execute(name,payload).ok,false);
 assert.deepEqual(p.appearance,appearance);assert.deepEqual(p.player,player);env.fail(false);
 success(p.execute('appearance.reset'));assert.deepEqual(p.appearance,p.DEFAULTS);assert.deepEqual(p.player,player);assert.deepEqual(env.workspace.state.projects,[]);
});

test('corrupt preference and arrangement JSON is not overwritten at startup',()=>{
 const saved={'sunoboom-ui-settings-v1':'{bad','sunoboom-player-lab-v060-prefs':'{bad','sunoboom-arrangement-v066':'{bad'},env=setup(saved);
 assert.equal(env.writes,0);for(const [key,value]of Object.entries(saved))assert.equal(env.values.get(key),value);
});

test('mixer commands retain normalized weights, saved formulas and source prompt metadata',()=>{
 const {mixer:m,workspace,studio}=setup();success(m.execute('add'));success(m.execute('weight',{index:0,value:73}));
 assert.equal(m.state().rows.reduce((sum,r)=>sum+r.weight,0),100);assert.ok(m.state().rows.every(r=>r.weight>=5));
 success(m.execute('title',{value:'Формула'}));const mix=success(m.execute('saveMix'));
 success(m.execute('equal'));success(m.execute('load',{id:mix.id}));assert.deepEqual(m.state().rows,mix.rows);assert.equal(m.state().title,'Формула');
 const prompt=success(m.execute('savePrompt'));assert.equal(prompt.source,'genre-mixer');assert.equal(prompt.title,'Формула');assert.ok(prompt.text.length<=1000);assert.equal(workspace.state.savedPrompts[0].id,prompt.id);
 success(m.execute('toStudio'));assert.deepEqual(studio.state.mixerBlend,m.state().rows);m.state().rows[0].weight=9;assert.notEqual(studio.state.mixerBlend[0].weight,9);
 success(m.execute('delete',{id:mix.id}));assert.equal(workspace.state.savedMixes.length,0);
});

test('mixer persistence failure retains its previous draft and all saved collections',()=>{
 const env=setup(),m=env.mixer;success(m.execute('persist'));const before=structuredClone(m.state()),data=structuredClone(env.workspace.state);env.fail(true);
 for(const [name,payload]of [['add',{}],['saveMix',{}],['savePrompt',{}],['genre',{index:0,id:'jazz'}]]){assert.equal(m.execute(name,payload).ok,false);assert.deepEqual(m.state(),before);assert.deepEqual(env.workspace.state,data);}
});

test('auditor accepts explicit inputs, detects contradictions and keeps source text and Studio untouched',()=>{
 const {auditor,studio}=setup(),before=structuredClone(studio.state),text='female lead vocals, no vocals, 90 BPM, 140 BPM, bright drums, bright drums';
 const report=auditor.auditReport({text,selectedGenre:fixture.catalog[0],builder:studio.state});
 assert.ok(report.issues.some(x=>x.title.includes('Вокал и инструментал')));assert.ok(report.issues.some(x=>x.title.includes('темпов')));assert.ok(report.repeatCount>0);
 const proposed=auditor.propose(text);assert.ok(proposed.removed.length>0);assert.equal(proposed.text.match(/bright drums/g).length,1);assert.deepEqual(studio.state,before);
});
