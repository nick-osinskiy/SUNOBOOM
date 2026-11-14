/* UI descriptors only. Original commands, routing and storage remain authoritative. */
(function installWorkspaceUI(){
  'use strict';
  const readers=new Map();
  const button=(label,action,css='btn ghost',extra={},icon='')=>({label,icon,attrs:{type:'button',class:css,'data-action':action,...extra}});
  const actions=buttons=>({kind:'actions',buttons});
  window.SUNOBOOM_WORKSPACE_UI=Object.freeze({
    register(key,reader){readers.set(key,reader);},
    snapshot(key){return readers.get(key)?.()||null;}
  });
  const register=window.SUNOBOOM_WORKSPACE_UI.register;
  register('tree-launch',()=>({kind:'academy-launch',tree:true}));
  register('artist-launch',()=>({kind:'academy-launch',tree:false}));
  register('back',()=>actions([button(workspaceBackLabel(),'workspace-back','btn ghost small')]));
  register('quick-poetry',()=>({kind:'quick-poetry',...actions([button('Перейти к редактору ↓','jump-poetry','btn ghost small')])}));
  register('stress-actions',()=>actions([button('Применить к тексту','sb-poetry-stress-apply','btn primary'),button('Скопировать разметку','sb-poetry-stress-copy')]));
  register('poetry-tools',()=>actions([
    button('Разобрать текст песни','sb-poetry-analyze','btn primary'),
    button('✨ Автоударения','sb-poetry-auto-stress','btn soft'),
    button('´ Отметить ударение','sb-poetry-accent','btn ghost')
  ]));
  register('idea-actions',()=>actions([
    button((data.manualIdeas||[]).some(x=>x.id===view.editIdea)?'Сохранить изменения':'Сохранить идею','save-manual-idea','btn primary',{},I('check')),
    ...((data.manualIdeas||[]).some(x=>x.id===view.editIdea)?[button('Отменить','cancel-manual-idea')]:[])
  ]));
  register('prompt-actions',()=>actions([
    button((data.savedPrompts||[]).some(x=>x.id===view.editPrompt)?'Сохранить изменения':'Сохранить промпт','save-manual-prompt','btn primary',{},I('check')),
    ...((data.savedPrompts||[]).some(x=>x.id===view.editPrompt)?[button('Отменить','cancel-manual-prompt')]:[]),
    button('Открыть Suno Studio →','nav','btn ghost',{'data-nav':'studio'})
  ]));
  register('prompt-auditor',()=>({kind:'prompt-auditor',buttons:[{label:'🔎 Проверить этот промпт в аудиторе',attrs:{type:'button','data-sbpa-action':'from-editor'}}]}));
  register('track-toolbar',()=>({kind:'actions',hint:'Твоя личная музыкальная библиотека',buttons:[button('+ Новый паспорт','tp-new','btn primary')]}));
  register('dna-toolbar',()=>({kind:'actions',hint:'Профили доступны в Suno Studio и Паспорте трека',buttons:[button('+ Создать ДНК артиста','dna-new','btn primary')]}));
  register('blueprint',()=>({kind:'blueprint',form:songForm,forms:SONG_FORMS.map(f=>({id:f[0],name:f[1],duration:f[2]})),song:songCurrent?structuredClone(songCurrent):null,icons:{ideas:I('ideas'),copy:I('copy'),saved:I('saved')}}));
  const noticeItem=e=>({id:String(e.id),key:e.key,title:String(e.title||''),notes:String(e.notes||'').slice(0,210),today:e.phase==='today',when:sbN35Label(e),time:e.time||'',date:dashboardDate(e.date),type:dashboardEventType(e.type),period:sbN37ReminderPeriod(e.reminderDaysBefore),read:!!data.notificationRead?.[e.key]});
  register('notice-panel',()=>({kind:'notice-panel',items:sbN35ReminderCandidates().map(noticeItem),unread:sbN35Unread().length}));
  register('notice-banner',()=>{
    const unread=sbN35Unread();if(!unread.length)return null;
    const first=unread.find(e=>e.phase==='today')||unread[0],label=sbN35Label(first);
    return {kind:'notice-banner',unread:unread.length,first:noticeItem(first),title:unread.length===1?label+': '+first.title:label+': '+first.title+' и ещё '+(unread.length-1)};
  });
})();
