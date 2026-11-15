import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import '../page-models.js';
import '../core/application-core.js';
import '../core/preferences-core.js';
import {pageLayout,pageTemplateNames} from '../src/vue/pages/page-layout-model.js';
import {reactive} from 'vue';
import {rememberNativeBoundaries,attachNativeBoundary,restoreNativeBoundaries} from '../src/vue/pages/native-boundary-handoff.js';

function walk(nodes,visit){for(const node of nodes){visit(node);if(node.children)walk(node.children,visit);}}
function setup(saved={}){
 const values=new Map(Object.entries(saved).map(([key,value])=>[key,JSON.stringify(value)]));let failure=false,writes=0;
 const kernel=SUNOBOOM_CORE_FACTORY.createKernel({storage:{getItem:key=>values.get(key)??null,setItem(key,value){if(failure)throw Error('quota');writes++;values.set(key,value);}}});
 const app=kernel.createWorkspace({defaults:{projects:[],savedPrompts:[],favorites:[],savedIdeas:[]}}),preferences=kernel.createPreferences();
 return {app,preferences,values,fail:value=>{failure=value;},get writes(){return writes;}};
}

test('all 27 explicit screen states resolve with no native layout or document dependency',()=>{
 assert.equal(pageTemplateNames.length,27);assert.equal(typeof document,'undefined');
 for(const key of pageTemplateNames){
  const layout=pageLayout({key,values:{productionCount:4,songNotice:'Draft <img>',treeOpen:true}});
  assert.ok(layout.length,key);let slots=0;
  walk(layout,node=>{
   assert.ok('text'in node||node.children||node.slot||node.native,key+' has an incomplete descriptor');
   if(node.slot)slots++;
   assert.equal('innerHTML'in node,false);assert.equal('outerHTML'in node,false);
  });
  assert.ok(slots,key);
 }
 assert.throws(()=>pageLayout({key:'unknown'}),/Unknown page/);
});

test('page models bind counts, notices, tree opening and player visibility from explicit values',()=>{
 const lookup=(key,predicate,values)=>{let result;walk(pageLayout({key,values}),n=>{if(predicate(n))result=n;});return result;};
 const tree=lookup('catalog',n=>n.props?.id==='sb-genre-tree',{treeOpen:true});assert.equal(tree.props.open,true);
 assert.equal(lookup('catalog',n=>n.props?.id==='sb-genre-tree',{treeOpen:false}).props.open,false);
 const notice=lookup('songs-detail',n=>n.props?.id==='sbsong-notice',{songNotice:'<img src=x>'});assert.equal(notice.props.hidden,false);assert.deepEqual(notice.children,[{text:'<img src=x>'}]);
 assert.equal(lookup('player',n=>n.props?.id==='sb-vue-player-ab',{playerAB:false}).props.hidden,false);
 assert.equal(lookup('player',n=>n.props?.id==='sb-vue-player-lab',{playerLab:true}).props.hidden,true);
 const texts=[];walk(pageLayout({key:'tracks-detail',values:{trackCount:7,trackPublisher:2,trackReleased:3}}),n=>{if('text'in n)texts.push(n.text);});assert.ok(texts.includes('7'));assert.ok(texts.includes('2'));
});

test('page layouts and account definitions cannot be mutated by a prior consumer',()=>{
 const first=pageLayout({key:'projects'});first[0].props.class='changed';assert.equal(pageLayout({key:'projects'})[0].props.class,'account-back');
 const tiles=SUNOBOOM_UI_MODELS.accountTiles({songs:8});tiles[0].attrs.class='changed';assert.notEqual(SUNOBOOM_UI_MODELS.accountTiles()[0].attrs.class,'changed');
 const html=SUNOBOOM_UI_MODELS.renderAccountTiles({projects:'"><img src=x>'});assert.ok(html.includes('&lt;img'));assert.equal(html.includes('<img'),false);
});

test('live editor nodes stay in the UI handoff and survive reactive model wrapping and failed mounts',()=>{
 const model={layout:[{nativeBoundary:'editor'}]},nodes=[{value:'draft',selectionStart:3}],moves=[];
 rememberNativeBoundaries(model,new Map([['editor',nodes]]));
 attachNativeBoundary(reactive(model),'editor',{replaceChildren:(...items)=>moves.push(items)});
 restoreNativeBoundaries({querySelector:selector=>selector==='#editor'?{replaceChildren:(...items)=>moves.push(items)}:null},model);
 assert.equal(moves.length,2);assert.equal(moves[0][0],nodes[0]);assert.equal(moves[1][0],nodes[0]);assert.equal(JSON.stringify(model).includes('draft'),false);
});

test('recent genre and performance preferences commands preserve old keys and roll back failed writes',()=>{
 const env=setup({'sunoboom-v1':{projects:[],savedPrompts:[],favorites:[],recent:['old'],performanceTagSettings:{intensity:2,future:'keep'}}});
 assert.equal(env.writes,0);assert.equal(env.app.execute('genre.recent',{id:'new'}).ok,true);assert.deepEqual(env.app.state.recent,['new','old']);
 assert.equal(env.app.execute('performance.preferences',{intensity:99,source:'original'}).ok,true);assert.equal(env.app.performancePreferences().intensity,5);assert.equal(env.app.performancePreferences().future,'keep');
 const before=structuredClone(env.app.state),stored=env.values.get('sunoboom-v1');env.fail(true);
 assert.equal(env.app.execute('genre.recent',{id:'failed'}).ok,false);assert.equal(env.app.execute('performance.preferences',{intensity:1}).ok,false);assert.deepEqual(env.app.state,before);assert.equal(env.values.get('sunoboom-v1'),stored);
});

test('artist favorites share the original key and Set owner and roll back storage failures',()=>{
 const env=setup({'sunoboom-artist-profile-favorites-v1':['кино','daft punk']}),p=env.preferences,owner=p.artistFavorites;
 assert.equal(env.writes,0);assert.equal(p.execute('artist.favorite.toggle',{key:'кино'}).ok,true);assert.deepEqual([...owner],['daft punk']);
 env.fail(true);assert.equal(p.execute('artist.favorite.toggle',{key:'new'}).ok,false);assert.equal(p.artistFavorites,owner);assert.deepEqual([...owner],['daft punk']);assert.deepEqual(JSON.parse(env.values.get('sunoboom-artist-profile-favorites-v1')),['daft punk']);
});

test('old workspace normalization stays in the owner and backup round-trip preserves records, links and unknown fields',()=>{
 const old={projects:[{id:'p-old',future:{keep:true}}],savedPrompts:[],favorites:['genre-old'],savedIdeas:[],tracks:[{id:'t-old',projectId:'p-old',artistDnaId:'dna-old',versions:[{id:'v-old'}]}],artistDNAs:[{id:'dna-old',name:'Артист'}],futureRoot:{keep:true}};
 const {app,writes}=setup({'sunoboom-v1':old});assert.equal(writes,0);const owner=app.state,backup=app.exportBackup();
 app.execute('profile.save',{name:'Changed'});assert.equal(app.importBackup(backup).ok,true);assert.equal(app.state,owner);
 assert.deepEqual(app.state.tracks,old.tracks);assert.deepEqual(app.state.artistDNAs,old.artistDNAs);assert.deepEqual(app.state.futureRoot,old.futureRoot);assert.deepEqual(app.state.projects,old.projects);
});

test('production UI no longer writes user records or derives page and tile layouts from native markup',()=>{
 const read=p=>readFileSync(new URL('../'+p,import.meta.url),'utf8');
 for(const path of ['index.html','performance-tags.js','genre-mixer.js','artist-profiles.js','account-settings.js','my-songs.js','producer-center.js','arrangement-builder.js']){
  assert.doesNotMatch(read(path),/data\.[A-Za-z]+\s*=(?!=)|data\.[A-Za-z]+\.(?:push|splice|unshift)\(/,path);
 }
 assert.doesNotMatch(read('src/vue/pages/page-model.js'),/document|querySelector|innerHTML|childNodes|nodeType/);
 assert.doesNotMatch(read('src/vue/account/account-home-model.js'),/querySelector|innerHTML|textContent/);
 assert.doesNotMatch(read('src/vue/pages/page-layout-model.js'),/document|querySelector|innerHTML|childNodes/);
});
