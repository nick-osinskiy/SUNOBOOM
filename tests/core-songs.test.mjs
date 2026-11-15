import test from 'node:test';
import assert from 'node:assert/strict';
import '../core/application-core.js';
import '../core/song-library.js';
import '../core/production-workflow.js';

const factory=globalThis.SUNOBOOM_CORE_FACTORY;
function setup(saved=[]){
 const values=new Map([[factory.keys.songs,JSON.stringify(saved)]]),files=new Map();
 let jsonFailure=false,fileFailure=false,lateFailure=false,batches=0;
 const storage={getItem:key=>values.get(key)??null,setItem(key,value){if(jsonFailure)throw Error('quota');values.set(key,value);}};
 const kernel=factory.createKernel({storage,now:()=>1770000000000,random:()=>.125});
 const app=kernel.createWorkspace({defaults:{projects:[],tracks:[],manualIdeas:[],savedPrompts:[],savedGeneratedIdeas:[]}});
 const json=kernel.repositories.json;
 const media={get:async key=>files.get(key),async commitBatch({puts,deletes},commit){
  batches++;if(fileFailure)throw Error('IDB failure');
  const next=new Map(files);for(const [key,value]of puts)next.set(key,value);for(const key of deletes)next.delete(key);
  commit();if(lateFailure)throw Error('transaction aborted');files.clear();for(const [key,value]of next)files.set(key,value);
 }};
 const songs=globalThis.SUNOBOOM_SONGS_FACTORY.create({json,media,workspace:app,now:()=>1770000000000,random:()=>.125,getGenre:id=>({name:id==='rock'?'Рок':id})});
 const productions=globalThis.SUNOBOOM_PRODUCTIONS_FACTORY.create({workspace:app,getSongs:songs.getCards,now:()=>1770000000000,random:()=>.125});
 return {app,songs,productions,files,values,get batches(){return batches;},failJSON:v=>jsonFailure=v,failFiles:v=>fileFailure=v,failLate:v=>lateFailure=v};
}
const audio=(name='song.wav')=>new File([new Uint8Array([82,73,70,70,212])],name,{type:'audio/wav'});
const cover=()=>new File(['image'],'cover.png',{type:'image/png'});
const success=result=>{assert.equal(result.ok,true,result.error);return result.value;};

test('old song IDs, original audio keys, active versions and read-only startup survive normalization',async()=>{
 const env=setup([{id:'old',title:'Старая',hasAudio:true,hasCover:true,createdAt:123,extra:'legacy'}]);
 env.files.set('old:audio',audio());env.files.set('old:cover',cover());
 assert.equal(typeof globalThis.document,'undefined');assert.equal(env.batches,0);
 assert.equal(env.songs.versions(env.songs.get('old'))[0].id,'original');
 assert.equal(await env.songs.readAudio('old','original'),env.files.get('old:audio'));
 const song=success(await env.songs.execute('save',{id:'old',title:'Изменено',artist:'Артист'}));
 assert.equal(song.id,'old');assert.equal(song.createdAt,123);assert.equal(song.hasCover,true);assert.equal(song.activeVersionId,'original');
 assert.equal(env.batches,0);assert.equal(env.app.state.songArtists[0].name,'Артист');
});

test('songs and queued versions have distinct IDs even with a fixed clock and random source',async()=>{
 const {songs,files}=setup();
 const [a,b]=await Promise.all([songs.execute('save',{title:'Один',audio:audio()}),songs.execute('save',{title:'Два'})]);
 assert.notEqual(success(a).id,success(b).id);
 const results=await Promise.all(Array.from({length:4},(_,i)=>songs.execute('version.add',{id:a.value.id,file:audio(),label:'Дубль '+i})));
 results.forEach(success);const all=songs.versions(songs.get(a.value.id));assert.equal(all.length,5);assert.equal(new Set(all.map(x=>x.id)).size,5);
 for(const version of all)assert.ok(files.has(songs.audioKey(a.value.id,version.id)));
});

test('song validation checks HTTPS, file types, cover and WAV limits before any write',async()=>{
 const env=setup(),before=env.values.get(factory.keys.songs);
 for(const payload of [{title:' '},{title:'A',audioUrl:'http://unsafe.test/a'},{title:'A',audio:{name:'song.exe',type:'application/octet-stream',size:1}},{title:'A',audio:{name:'song.wav',size:501*1048576}},{title:'A',audio:{name:'song.mp3',size:151*1048576}},{title:'A',cover:{name:'a.png',size:11*1048576}}])assert.equal((await env.songs.execute('save',payload)).ok,false);
 assert.equal(env.values.get(factory.keys.songs),before);assert.equal(env.batches,0);
 // Validation accepts a WAV above the former non-WAV ceiling.
 success(await env.songs.execute('save',{title:'WAV',audio:{name:'song.wav',size:160*1048576}}));
});

test('metadata quota failure aborts audio and cover writes, retaining the old cover bytes',async()=>{
 const env=setup();const song=success(await env.songs.execute('save',{title:'A',audio:audio(),cover:cover()}));
 const old=env.files.get(song.id+':cover'),before=structuredClone(env.songs.records),stored=env.values.get(factory.keys.songs);
 env.failJSON(true);
 const result=await env.songs.execute('save',{id:song.id,title:'B',audio:audio(),cover:new File(['new'],'new.png',{type:'image/png'})});
 assert.equal(result.ok,false);assert.equal(result.code,'storage');assert.deepEqual(env.songs.records,before);
 assert.equal(env.values.get(factory.keys.songs),stored);assert.equal(env.files.get(song.id+':cover'),old);assert.equal(env.files.size,2);
});

test('file failure and late transaction abort preserve records and compensate metadata',async()=>{
 const env=setup();const song=success(await env.songs.execute('save',{title:'A',audio:audio()}));
 const before=structuredClone(env.songs.records),stored=env.values.get(factory.keys.songs);
 for(const mode of ['failFiles','failLate']){
  env[mode](true);assert.equal((await env.songs.execute('version.add',{id:song.id,file:audio()})).ok,false);env[mode](false);
  assert.deepEqual(env.songs.records,before);assert.equal(env.values.get(factory.keys.songs),stored);assert.equal(env.files.size,1);
 }
 success(await env.songs.execute('version.add',{id:song.id,file:audio()}));
});

test('main/edit/remove version commands preserve other files and roll back failed deletions',async()=>{
 const env=setup(),song=success(await env.songs.execute('save',{title:'A',audio:audio()}));
 const added=await env.songs.execute('version.add',{id:song.id,file:audio(),label:'Второй',notes:'Дубль'});success(added);
 const versionId=added.meta.version.id;
 success(await env.songs.execute('version.save',{id:song.id,versionId,label:'Финал',notes:'Выбран'}));
 assert.equal(success(await env.songs.execute('version.main',{id:song.id,versionId})).activeVersionId,versionId);
 env.failJSON(true);assert.equal((await env.songs.execute('version.remove',{id:song.id,versionId})).ok,false);assert.equal(env.files.size,2);env.failJSON(false);
 const remaining=success(await env.songs.execute('version.remove',{id:song.id,versionId}));assert.equal(remaining.activeVersionId,'original');assert.equal(env.files.size,1);
 env.failFiles(true);assert.equal((await env.songs.execute('remove',{id:song.id})).ok,false);assert.equal(env.songs.records.length,1);env.failFiles(false);
 success(await env.songs.execute('remove',{id:song.id}));assert.equal(env.files.size,0);assert.equal(env.songs.records.length,0);
});

test('passport reimport preserves song identity and all locally recorded media',async()=>{
 const env=setup();env.app.state.tracks=[{id:'t-old',title:'Паспорт',genre:'rock',audioUrl:'https://suno.test/song/1'}];
 const song=success(await env.songs.execute('passport.import',{id:'t-old'}));assert.equal(song.genre,'Рок');assert.equal(song.listenUrl,'https://suno.test/song/1');
 success(await env.songs.execute('version.add',{id:song.id,file:audio()}));
 env.app.state.tracks[0].title='Новый заголовок';const again=success(await env.songs.execute('passport.import',{id:'t-old'}));
 assert.equal(again.id,song.id);assert.equal(again.hasAudio,true);assert.equal(env.files.size,1);assert.equal(env.songs.records.length,1);
});

test('version cap and embedded-cover extraction failure preserve existing audio',async()=>{
 const env=setup([{id:'old',title:'A',hasAudio:true,versions:Array.from({length:100},(_,i)=>({id:'v-'+i,label:'Версия'}))}]);
 assert.equal((await env.songs.execute('version.add',{id:'old',file:audio()})).ok,false);assert.equal(env.batches,0);
 const second=setup(),song=success(await second.songs.execute('save',{title:'A',audio:audio(),embeddedCover:Promise.reject(Error('bad metadata'))}));
 assert.equal(song.hasAudio,true);assert.equal(song.hasCover,false);assert.equal(second.files.size,1);
});

test('object URL scopes revoke only owned URLs once and can be reused after cleanup',()=>{
 const {songs}=setup(),revoked=[];let i=0;
 const scope=songs.createUrlScope({createURL:()=> 'blob:'+(++i),revokeURL:url=>revoked.push(url)});
 const first=scope.create(audio());scope.create(audio());scope.release('foreign');scope.release(first);scope.release(first);scope.releaseAll();scope.releaseAll();
 assert.deepEqual(revoked,['blob:1','blob:2']);assert.equal(scope.size,0);scope.create(audio());assert.equal(scope.size,1);scope.releaseAll();
});

test('Master seeds linked materials and opens the existing work without duplicates',async()=>{
 const env=setup();env.app.state.tracks=[{id:'passport',title:'Песня',ideaId:'idea',projectId:'project',promptId:'prompt'}];
 env.app.state.manualIdeas=[{id:'idea',title:'Замысел'}];
 const song=success(await env.songs.execute('passport.import',{id:'passport'}));
 const work=success(env.productions.execute('create',{type:'song',id:song.id}));
 assert.equal(work.passportId,'passport');assert.equal(work.ideaId,'idea');assert.equal(work.projectId,'project');
 const repeated=env.productions.execute('create',{type:'idea',id:'idea'});assert.equal(repeated.existing,true);assert.equal(repeated.value.id,work.id);assert.equal(env.productions.items().length,1);
});

test('Master commands validate links and stages, isolate snapshots and cap history',()=>{
 const {productions,app}=setup(),a=success(productions.execute('create',{title:'A'})),b=success(productions.execute('create',{title:'B'}));
 assert.notEqual(a.id,b.id);success(productions.execute('links',{id:a.id,songId:'old-song'}));
 assert.equal(productions.execute('links',{id:b.id,songId:'old-song'}).ok,false);
 assert.equal(productions.execute('stage',{id:a.id,step:'unknown',status:'done'}).ok,false);
 success(productions.execute('stage',{id:a.id,step:'lyrics',status:'done'}));assert.equal(productions.completed(productions.find(a.id)),1);
 const draft={blocks:[{type:'verse',text:'Слова'}]};success(productions.execute('arrangement.capture',{id:a.id,draft,duration:'0:30'}));draft.blocks[0].text='changed';
 assert.equal(productions.find(a.id).arrangementDraft.blocks[0].text,'Слова');assert.equal(productions.find(b.id).arrangementDraft,null);
 for(let i=0;i<85;i++)success(productions.execute('note',{id:a.id,text:'Заметка '+i}));assert.equal(productions.find(a.id).history.length,80);
 const projects=app.state.projects;success(productions.execute('remove',{id:a.id}));assert.equal(productions.items().length,1);assert.equal(app.state.projects,projects);
});

test('Master rolls back failed saves while retaining workspace owner and original records',()=>{
 const env=setup(),work=success(env.productions.execute('create',{title:'A'})),owner=env.app.state,records=env.app.state.productions;
 env.failJSON(true);
 for(const [command,payload]of [['details',{title:'Changed',notes:'Draft'}],['stage',{step:'lyrics',status:'done'}],['remove',{}],['create',{title:'B'}]])assert.equal(env.productions.execute(command,{id:work.id,...payload}).ok,false);
 assert.equal(env.app.state,owner);assert.equal(env.app.state.productions,records);assert.equal(env.productions.find(work.id).title,'A');
});
