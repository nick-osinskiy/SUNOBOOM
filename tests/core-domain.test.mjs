import test from 'node:test';
import assert from 'node:assert/strict';
import '../core/application-core.js';

const factory=globalThis.SUNOBOOM_CORE_FACTORY;
const defaults={profileName:'Музыкант',projects:[],manualIdeas:[],savedPrompts:[],favorites:[],savedIdeas:[],savedGeneratedIdeas:[]};
function setup(saved){
 const values=new Map(saved?[['sunoboom-v1',JSON.stringify(saved)]]:[]);let writes=0,fail=false;
 const storage={getItem:key=>values.get(key)??null,setItem(key,value){if(fail)throw Error('quota');writes++;values.set(key,value);}};
 let clock=1770000000000;
 const kernel=factory.createKernel({storage,now:()=>clock++,random:()=>0.125,date:()=> '15.11.2026'});
 const app=kernel.createWorkspace({defaults,getGenre:id=>({id,name:id==='rock'?'Рок':'Поп'})});
 return {app,kernel,values,get writes(){return writes;},fail(value){fail=value;}};
}

test('workspace owns one object, reads the old key, and preserves unknown fields without startup writes',()=>{
 const env=setup({...defaults,projects:[{id:'p-old',title:'Старый',extra:{keep:true}}],futureField:{v:2}});
 assert.equal(env.app,env.kernel.createWorkspace({defaults:{}}));
 assert.equal(env.kernel.workspace.state,env.app.state);assert.equal(env.writes,0);
 assert.deepEqual(env.app.state.futureField,{v:2});
 assert.equal(env.app.execute('project.save',{id:'p-old',notes:'Заметки'}).ok,true);
 assert.deepEqual(JSON.parse(env.values.get('sunoboom-v1')).projects[0],{id:'p-old',title:'Старый',extra:{keep:true},notes:'Заметки'});
 assert.equal(env.writes,1);
});
test('commands execute without document and validate before changing record identities or writing',()=>{
 assert.equal(typeof globalThis.document,'undefined');
 const env=setup(),app=env.app;
 const project=app.execute('project.create',{title:'  '+ 'Я'.repeat(100)+' ',genre:'rock'}).value;
 assert.match(project.id,/^p\d+$/);assert.equal(project.title.length,80);assert.equal(project.genre,'rock');
 const ref=app.state.projects[0],before=structuredClone(app.state),writes=env.writes;
 assert.equal(app.execute('project.create',{title:'   '}).ok,false);
 assert.equal(app.execute('prompt.save',{title:'a',text:'x'.repeat(1001)}).ok,false);
 assert.equal(app.execute('dna.save',{name:'a',tempoMin:'90',tempoMax:'70'}).ok,false);
 assert.equal(app.execute('track.save',{title:'a',audioUrl:'http://unsafe.test'}).ok,false);
 assert.deepEqual(app.state,before);assert.equal(app.state.projects[0],ref);assert.equal(env.writes,writes);
});
test('projects created headlessly in one millisecond have distinct compatible IDs',()=>{
 const storage={getItem:()=>null,setItem(){}};
 const app=factory.createWorkspace({repository:factory.createJsonRepository(storage),defaults,getGenre:()=>({name:'Рок'}),now:()=>1770000000000});
 const a=app.execute('project.create',{title:'Первый',genre:'rock'}).value;
 const b=app.execute('project.create',{title:'Второй',genre:'rock'}).value;
 assert.notEqual(a.id,b.id);assert.match(a.id,/^p\d+$/);assert.match(b.id,/^p\d+$/);
 app.execute('project.save',{id:a.id,notes:'Только первый'});
 assert.equal(app.state.projects.find(p=>p.id===b.id).notes,'');
});
test('manual idea and prompt limits, edit IDs, raw lyrics and metadata round-trip stay compatible',()=>{
 const {app}=setup();
 const idea=app.execute('idea.save',{title:'  Идея ',pitch:'Сюжет',genre:'rock',lyrics:'  За́мок\nВе́тер  ',sunoStyle:'x'.repeat(1100)}).value;
 assert.match(idea.id,/^mi-\d+-/);assert.equal(idea.date,'15.11.2026');assert.equal(idea.lyrics,'  За́мок\nВе́тер  ');assert.equal(idea.sunoStyle.length,1000);
 idea.extra='не удалять';
 const edited=app.execute('idea.save',{id:idea.id,title:'Изменено',pitch:'',lyrics:'Новый текст'}).value;
 assert.equal(edited,idea);assert.equal(edited.extra,'не удалять');assert.equal(app.state.manualIdeas.length,1);
 const prompt=app.execute('prompt.save',{title:'Промпт',text:' a '.repeat(100).trim(),genreId:'rock'}).value;
 assert.equal(prompt.genre,'Рок');assert.match(prompt.id,/^mp-\d+-/);
 const id=prompt.id;app.execute('prompt.save',{id,title:'Новый',text:'b',genreId:'pop'});
 assert.equal(app.state.savedPrompts[0].id,id);assert.equal(app.state.savedPrompts[0].genre,'Поп');
});
test('event schedules clear only matching read markers and reminder rules remain DOM independent',()=>{
 const {app}=setup();
 const event=app.execute('event.save',{title:'Релиз',date:'2026-11-15',time:'12:30',reminderDays:[0,7,7]}).value;
 assert.deepEqual(event.reminderDays,[7,0]);assert.match(event.id,/^ev-\d+-/);
 const reminders=app.reminders('2026-11-15');assert.equal(reminders.length,2);assert.equal(reminders[0].phase,'today');
 app.execute('notification.readAll',{today:'2026-11-15'});
 assert.equal(Object.keys(app.state.notificationRead).length,2);
 app.state.notificationRead.unrelated=true;
 app.execute('event.save',{id:event.id,title:'Релиз',date:'2026-11-16',reminderDays:[1]});
 assert.deepEqual(app.state.notificationRead,{unrelated:true});
 assert.equal(app.reminders('2026-11-15')[0].phase,'tomorrow');
 assert.equal(app.reminders('2026-11-17').length,0);
 const before=structuredClone(app.state);assert.equal(app.execute('event.save',{title:'a',date:'2026-11-15',reminderDays:[366]}).ok,false);assert.deepEqual(app.state,before);
});
test('legacy event defaults, disabled reminders, calendar-day math and leap release dates are retained',()=>{
 const {app}=setup({...defaults,events:[{id:'old',title:'Old',date:'2026-11-15'},{id:'off',title:'Off',date:'2026-11-15',remind:false,reminderDays:[0]}]});
 assert.equal(app.reminders('2026-11-15').length,2);
 assert.deepEqual(app.helpers.selectedDays({}),[1,0]);
 assert.equal(app.helpers.dayDiff('2026-11-16','2026-11-15'),1);
 assert.equal(app.helpers.date7('2024-02-23'),'2024-03-01');assert.equal(app.helpers.date7('2026-02-30'),'');
});
test('passport versions, linked DNA and explicit DNA deletion preserve unrelated entities',()=>{
 const {app}=setup();
 const dna=app.execute('dna.save',{name:'Артист',tempoMin:'60',tempoMax:'120',noWhisper:true}).value;
 const track=app.execute('track.save',{title:'Трек',artistDnaId:dna.id,projectId:'keep-project',submittedAt:'2026-11-15',status:'lyrics',lyricsDraft:'Слова'}).value;
 assert.match(track.id,/^tr-\d+-/);assert.equal(track.releaseAt,'2026-11-22');assert.equal(track.artistDnaId,dna.id);
 assert.equal(app.execute('track.version.add',{id:track.id,label:' Версия ',url:'https://audio.test/take',notes:'  Заметка  '}).ok,true);
 assert.equal(track.versions[0].label,'Версия');assert.equal(track.versions[0].notes,'Заметка');
 const version=track.versions[0].id;app.execute('track.version.remove',{id:track.id,versionId:version});assert.equal(track.versions.length,0);
 app.execute('dna.remove',{id:dna.id});assert.equal(track.artistDnaId,'');assert.equal(track.projectId,'keep-project');assert.equal(track.lyricsDraft,'Слова');
});
test('quota failure rolls back partial edits and link cleanup, without replacing the workspace pointer',()=>{
 const env=setup(),app=env.app,root=app.state;
 const dna=app.execute('dna.save',{name:'Артист'}).value;
 app.execute('track.save',{title:'Трек',artistDnaId:dna.id});
 const before=structuredClone(root),stored=env.values.get('sunoboom-v1'),writes=env.writes;
 env.fail(true);const result=app.execute('dna.remove',{id:dna.id});
 assert.equal(result.ok,false);assert.equal(result.code,'storage');assert.equal(app.state,root);
 assert.deepEqual(root,before);assert.equal(env.values.get('sunoboom-v1'),stored);assert.equal(env.writes,writes);
});
test('release event command keeps the track link, custom schedule and clears only changed-date read markers',()=>{
 const {app}=setup();
 const track=app.execute('track.save',{title:'Релиз',artist:'Автор',submittedAt:'2026-11-15'}).value;
 const event=app.execute('track.releaseEvent',{id:track.id}).value;
 assert.equal(event.id,'track-release-'+track.id);assert.equal(event.trackId,track.id);assert.equal(event.date,'2026-11-22');
 event.reminderDays=[14];app.state.notificationRead={[event.id+'|old']:true,other:true};
 track.releaseAt='2026-12-01';app.execute('track.releaseEvent',{id:track.id});
 assert.equal(app.state.events.length,1);assert.deepEqual(event.reminderDays,[14]);assert.equal(event.date,'2026-12-01');assert.deepEqual(app.state.notificationRead,{other:true});
});
test('backup keeps the existing schema, all IDs/unknown fields and one state owner on import',()=>{
 const env=setup({...defaults,projects:[{id:'p-123',notes:'a'}],tracks:[{id:'tr-old',versions:[{id:'v-1'}]}],future:{keep:true}}),app=env.app,root=app.state;
 const backup=app.exportBackup();assert.equal(backup.app,'SUNOBOOM');assert.ok(backup.exportedAt);assert.equal('files' in backup,false);
 backup.data.projects[0].notes='b';assert.equal(app.state.projects[0].notes,'a');
 assert.equal(app.importBackup(backup).ok,true);assert.equal(app.state,root);assert.equal(root.projects[0].notes,'b');
 assert.deepEqual(root.future,{keep:true});assert.equal(root.tracks[0].versions[0].id,'v-1');
 const before=structuredClone(root),writes=env.writes;assert.equal(app.importBackup({app:'other',data:{}}).ok,false);assert.deepEqual(root,before);assert.equal(env.writes,writes);
 const compatible=JSON.parse(JSON.stringify(backup));Object.defineProperty(compatible.data,'__proto__',{value:{future:true},enumerable:true});
 assert.equal(app.importBackup(compatible).ok,true);assert.equal(Object.getPrototypeOf(root),Object.prototype);assert.deepEqual(Object.getOwnPropertyDescriptor(root,'__proto__').value,{future:true});
});
test('shared JSON repositories preserve keys and do not erase a corrupt legacy value on read',()=>{
 const values=new Map([['sunoboom-v1','broken']]),repository=factory.createJsonRepository({getItem:key=>values.get(key)??null,setItem:(key,value)=>values.set(key,value)});
 assert.throws(()=>repository.read('sunoboom-v1',{}));assert.equal(values.get('sunoboom-v1'),'broken');
 const app=factory.createWorkspace({repository,defaults,getGenre:()=>({name:'x'})});assert.deepEqual(app.state,defaults);assert.equal(values.get('sunoboom-v1'),'broken');
 repository.write(factory.keys.songs,[{id:'old',versions:[{id:'original'}]}]);assert.equal(JSON.parse(values.get('sunoboom-my-songs-v1'))[0].versions[0].id,'original');
});
test('media repository reports unavailable IDB and remains retryable without touching JSON',async()=>{
 const repository=factory.createMediaRepository(undefined);
 await assert.rejects(repository.get('old:audio'),/Хранилище файлов недоступно/);
 await assert.rejects(repository.get('old:audio'),/Хранилище файлов недоступно/);
});
