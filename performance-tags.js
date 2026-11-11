(function installPerformanceTags() {
 'use strict';
 /* SUNOBOOM 0.51 — performance tags inside the existing Poetry Editor.
    The original lyrics are never overwritten; generated tags require explicit approval. */
 const prefDefaults={mode:'smart',intensity:3,density:'balanced',melisma:true,falsetto:true,harmonies:true,noWhisper:true,noRasp:true,source:'auto',artistId:''};
 const modeOptions=[['smart','Интеллектуальный · Gemini'],['rules','Автоматический · без API'],['manual','Ручной · по секциям']];
 const densityOptions=[['minimal','Минимально'],['balanced','Сбалансированно'],['detailed','Подробно']];
 const sourceOptions=[['auto','Авто: готовая Lyrics, если есть'],['original','Оригинальный текст'],['tagged','Готовая версия Lyrics']];
 const tagPresets=[
  ['','Без тега'],['Intimate Clear Vocals','Мягкая, близкая подача'],
  ['Warm Emotional Vocals','Тёплая эмоциональная подача'],
  ['Confident Clear Lead Vocals','Уверенное чистое исполнение'],
  ['Soft Melodic Vocals','Мягкий мелодичный вокал'],
  ['Expressive Rising Vocal Intensity','Постепенное усиление вокала'],
  ['Strong Melodic Lead Vocals','Сильный мелодичный вокал'],
  ['Powerful Full-Voice Chorus','Мощный припев полным голосом'],
  ['Tender Restrained Vocals','Сдержанное нежное исполнение'],
  ['Airy Falsetto Accents','Лёгкие акценты фальцетом'],
  ['Tasteful Vocal Runs','Аккуратные мелизмы'],
  ['Layered Backing Harmonies','Многослойные бэк-гармонии'],
  ['Full-Voice Emotional Climax','Кульминация полным голосом']
 ];
 const E=s=>escapeHTML(s);
 const prefs=()=>({...prefDefaults,...(data.performanceTagSettings&&typeof data.performanceTagSettings==='object'?data.performanceTagSettings:{})});
 let draft=null, requestSerial=0, busy=false;
 let notice={text:'',kind:'info'};
 let previewState='Текст в оригинальном редакторе не изменён.';
 const emit=()=>window.dispatchEvent(new Event('sunoboom:tags-updated'));
 const lyricId='custom-idea-lyrics', taggedId='custom-idea-tagged';
 const el=id=>document.getElementById(id);
 const get=id=>el(id)?.value||'';
 const setText=(id,text)=>{const node=el(id);if(node)node.textContent=text;};
 const clamp=(v,min,max)=>Math.max(min,Math.min(max,Math.round(Number(v)||min)));
 const linesOf=s=>String(s||'').replace(/\r\n?/g,'\n').split('\n');
 const roleTitle=(s)=>String(s||'').replace(/\s+/g,' ').trim();
 function savePrefs(changes){
  const next={...prefs(),...changes};
  next.intensity=clamp(next.intensity,1,5);
  data.performanceTagSettings=next;persist();emit();return next;
 }
 function artistList(){return Array.isArray(data.artistDNAs)?data.artistDNAs:[]}
 function selectedArtist(p){return artistList().find(a=>a.id===p.artistId)||null}
 function endpoint(){
  const value=String(window.SUNOBOOM_GEMINI_ENDPOINT||document.querySelector('meta[name="sunoboom-gemini-endpoint"]')?.content||'').trim();
  if(!value)return '';
  try{
   const url=new URL(value,window.location.href);
   if(url.protocol!=='https:' && !(url.hostname==='localhost' && url.protocol==='http:'))return '';
   return url.href;
  }catch(_){return ''}
 }
 function sourceField(p){
  if(p.source==='original')return lyricId;
  if(p.source==='tagged')return taggedId;
  return get(taggedId).trim()?taggedId:lyricId;
 }
 function genreData(){const id=get('custom-idea-genre');return GENRES.find(g=>g.id===id)||GENRES[0]}
 function modeHint(p){
  if(p.mode==='smart'){
   if(!endpoint())return 'Gemini пока не подключён к защищённому серверу. При генерации применится локальный анализ по правилам; текст никуда не отправляется.';
   return 'Gemini доступен через настроенный защищённый сервер. Для отправки текста потребуется отдельное согласие ниже.';
  }
  if(p.mode==='rules')return 'Работает полностью в браузере: подбирает исполнительские приёмы по структуре, динамике и словам песни.';
  return 'Предпросмотр будет создан без автоматических тегов. Для каждой секции выбери исполнение из списка или введи своё.';
 }
 function optionsHTML(options,value){
  return options.map(([v,name])=>`<option value="${E(v)}" ${v===value?'selected':''}>${E(name)}</option>`).join('');
 }
 function panel(){
  const p=prefs(),artists=artistList(),available=!!endpoint();
  return `<section class="sb-vt-panel" id="sb-vt-workbench" aria-label="Генератор тегов исполнения">
   <div class="sb-vt-header"><span class="sb-vt-symbol">🎭</span><div><h3>Генератор тегов исполнения</h3><p>Вокальная драматургия по секциям. Без изменения слов песни; результат можно проверить и применить только вручную.</p></div></div>
   <div class="sb-vt-field"><label for="sb-vt-mode">Способ генерации</label><select id="sb-vt-mode" data-vt-pref="mode">${optionsHTML(modeOptions,p.mode)}</select></div>
   <p class="sb-vt-hint" id="sb-vt-mode-hint">${E(modeHint(p))}</p>
   <div class="sb-vt-grid">
    <div class="sb-vt-field"><label for="sb-vt-source">Источник текста</label><select id="sb-vt-source" data-vt-pref="source">${optionsHTML(sourceOptions,p.source)}</select></div>
    <div class="sb-vt-field"><label for="sb-vt-density">Детализация метатегов</label><select id="sb-vt-density" data-vt-pref="density">${optionsHTML(densityOptions,p.density)}</select></div>
   </div>
   ${artists.length?`<div class="sb-vt-field"><label for="sb-vt-artist">Учесть «ДНК артиста» (необязательно)</label><select id="sb-vt-artist" data-vt-pref="artistId"><option value="">Без привязки к артисту</option>${artists.map(a=>`<option value="${E(a.id)}" ${a.id===p.artistId?'selected':''}>${E(a.name||'Без названия')}</option>`).join('')}</select></div>`:''}
   <div class="sb-vt-intensity"><div class="sb-vt-between"><label for="sb-vt-intensity">Максимальная интенсивность исполнения</label><strong id="sb-vt-intensity-label">${p.intensity} / 5</strong></div>
   <input type="range" id="sb-vt-intensity" min="1" max="5" step="1" value="${p.intensity}" data-vt-pref="intensity"><div class="sb-vt-between sb-vt-scale"><span>Сдержанная</span><span>Экспрессивная</span></div></div>
   <div class="sb-vt-options">
    <label><input type="checkbox" data-vt-pref="melisma" ${p.melisma?'checked':''}> Мелизмы</label>
    <label><input type="checkbox" data-vt-pref="falsetto" ${p.falsetto?'checked':''}> Фальцет</label>
    <label><input type="checkbox" data-vt-pref="harmonies" ${p.harmonies?'checked':''}> Гармонии</label>
    <label><input type="checkbox" data-vt-pref="noWhisper" ${p.noWhisper?'checked':''}> Без шёпота</label>
    <label><input type="checkbox" data-vt-pref="noRasp" ${p.noRasp?'checked':''}> Без хрипотцы</label>
   </div>
   ${available?`<label class="sb-vt-consent" id="sb-vt-consent-row"><input type="checkbox" id="sb-vt-consent"> Разрешаю отправить выбранный текст песни на защищённый сервер для анализа Gemini.</label>`:''}
   <div class="sb-vt-buttons">
     <button type="button" class="btn primary" data-action="vt-generate">✨ Создать предпросмотр</button>
     <span class="sb-vt-note">Никакого автоматического применения к Lyrics.</span>
   </div>
   <div id="sb-vt-notice" class="sb-vt-notice" role="status" aria-live="polite"></div>
   <div id="sb-vt-result" aria-live="polite"></div>
  </section>`;
 }
 function recognizeHeading(line){
  const trimmed=line.trim();
  const en=trimmed.match(/^\[((?:Verse(?:\s*\d+)?|Pre[- ]?Chorus|Chorus(?:\s*\d+)?|Final Chorus|Post[- ]?Chorus|Bridge|Intro|Outro|Hook|Build|Drop|Breakdown|Instrumental(?: Break)?|Ending|End))(?:(?:\s*[-|:]\s*)([^\]]*))?\]$/i);
  if(en){
   let label=en[1].replace(/\s+/g,' ').trim();
   if(/^pre/i.test(label))label='Pre-Chorus';
   if(/^post/i.test(label))label='Post-Chorus';
   return {label,oldNote:String(en[2]||'').trim(),english:true,original:line};
  }
  const ru=trimmed.match(/^(Куплет(?:\s*\d+)?|Предприпев|Пред-припев|Припев(?:\s*\d+)?|Финальный припев|Бридж|Переход|Вступление|Интро|Аутро|Финал|Проигрыш|Постприпев)\s*:?\s*$/i);
  if(!ru)return null;
  const kind=ru[1].toLowerCase().replace(/\s+/g,' ');
  let label='Verse 1';
  const num=kind.match(/\d+/)?.[0];
  if(kind.startsWith('куплет'))label='Verse'+(num?' '+num:'');
  else if(kind.startsWith('пред'))label='Pre-Chorus';
  else if(kind.startsWith('припев'))label='Chorus'+(num?' '+num:'');
  else if(kind.startsWith('финальный припев'))label='Final Chorus';
  else if(kind==='бридж'||kind==='переход')label='Bridge';
  else if(kind==='вступление'||kind==='интро')label='Intro';
  else if(kind==='проигрыш')label='Instrumental Break';
  else if(kind==='аутро'||kind==='финал')label='Outro';
  else if(kind==='постприпев')label='Post-Chorus';
  return {label,oldNote:'',english:false,original:line};
 }
 function cleanExistingNote(note){
  // Only remove this generator's previous segment, never other author's instructions.
  return String(note||'').replace(/\s*\|\s*Vocal delivery:[^|]*/ig,'').replace(/^Vocal delivery:[^|]*/ig,'').trim().replace(/[,;|\s]+$/,'').trim();
 }
 function headingsType(label){
  const l=label.toLowerCase();
  if(l.startsWith('final chorus'))return 'final';
  if(l.startsWith('pre-chorus'))return 'pre';
  if(l.startsWith('post-chorus'))return 'post';
  if(l.startsWith('chorus')||l==='hook')return 'chorus';
  if(l.startsWith('verse'))return 'verse';
  if(l.startsWith('bridge'))return 'bridge';
  if(l.startsWith('intro'))return 'intro';
  if(l.startsWith('outro')||l==='ending'||l==='end')return 'outro';
  if(l.startsWith('instrumental')||l==='drop'||l==='build'||l==='breakdown')return 'instrumental';
  return 'verse';
 }
 function parse(raw){
  const lines=linesOf(raw);
  const explicit=[];
  lines.forEach((line,i)=>{const info=recognizeHeading(line);if(info)explicit.push({...info,index:i})});
  let arr=[];
  if(explicit.length){
   if(lines.slice(0,explicit[0].index).some(line=>line.trim() && !/^\[[^\]]*\]$/.test(line.trim()))){
    const first=lines.findIndex(line=>line.trim() && !/^\[[^\]]*\]$/.test(line.trim()));
    if(first>=0)arr.push({id:'s0',label:'Intro',type:'intro',index:first,explicit:false,oldNote:'',english:true});
   }
   for(const x of explicit)arr.push({id:'s'+arr.length,label:x.label,type:headingsType(x.label),index:x.index,explicit:true,oldNote:x.oldNote,english:x.english});
  }else{
   let positions=[],hasLine=false;
   for(let i=0;i<lines.length;i++){
    if(lines[i].trim() && !hasLine){positions.push(i);hasLine=true}
    if(!lines[i].trim())hasLine=false;
   }
   const order=['Verse 1','Chorus','Verse 2','Chorus','Bridge','Final Chorus','Outro'];
   positions.forEach((idx,i)=>arr.push({id:'s'+i,label:order[i]||((i%2)?'Chorus':'Verse '+(Math.floor(i/2)+2)),type:headingsType(order[i]||'Verse'),index:idx,explicit:false,oldNote:'',english:true}));
  }
  // Extract lyrics for each section without changing their contents.
  arr.forEach((section,i)=>{
   const start=section.index+(section.explicit?1:0),stop=arr[i+1]?.index??lines.length;
   section.body=lines.slice(start,stop).filter(line=>!recognizeHeading(line)&&!(/^\s*\[Vocal delivery:.*\]\s*$/i.test(line))).join('\n').slice(0,4500);
  });
  return {lines,sections:arr};
 }
 function allowedCue(raw,p){
  let value=String(raw||'').replace(/[\r\n\[\]<>]/g,' ').replace(/[^\p{L}\p{N}\s,;.\-/]/gu,' ').replace(/\s+/g,' ').trim().slice(0,165);
  let bits=value.split(/\s*,\s*|\s*;\s*/).map(x=>x.trim()).filter(Boolean);
  if(p.noWhisper)bits=bits.filter(x=>!/(?:whisper|hush(?:ed)?|breathy|ш[её]пот)/i.test(x)||/\b(?:no|without)\s+(?:whisper|hush|breathy)/i.test(x));
  if(p.noRasp)bits=bits.filter(x=>!/(?:rasp|hoarse|growl|gritty|gruff|хрип)/i.test(x)||/\b(?:no|without)\s+(?:rasp|hoarse|growl|gritty)/i.test(x));
  if(!p.falsetto)bits=bits.filter(x=>!/falsetto/i.test(x));
  if(!p.melisma)bits=bits.filter(x=>!/melisma|vocal runs|ad.?libs|riffs/i.test(x));
  if(!p.harmonies)bits=bits.filter(x=>!/harmon(?:y|ies)|backing vocals|choir/i.test(x));
  return bits.join(', ').slice(0,155).replace(/[,;.\s]+$/,'');
 }
 function ruleCue(section,p,artist){
  const type=section.type,intensity=clamp(p.intensity,1,5);
  const text=section.body.toLowerCase();
  const heartfelt=/(люб|прост|помн|серд|слез|слёз|печал|ждал|верн|любов|ты|скуч|мам|отц|душ|вер[аы]|hope|love|miss|heart)/i.test(text);
  const upbeat=/(танц|ритм|лет|жизн|свобод|улыб|солнц|dance|party|move)/i.test(text);
  let base='';
  if(type==='instrumental')return '';
  if(p.density==='minimal' && !['chorus','final','bridge'].includes(type))return '';
  if(type==='intro')base=p.density==='detailed'?'Short, Clear Vocal Entrance':'';
  else if(type==='verse')base=intensity>=4?'Confident Expressive Lead Vocals':heartfelt?'Warm Emotional Vocals':'Intimate Clear Vocals';
  else if(type==='pre')base=intensity===1?'Gentle Vocal Build':intensity>=4?'Rising Powerful Vocal Intensity':'Rising Emotional Intensity';
  else if(type==='chorus')base=intensity<=2?'Warm Melodic Chorus':intensity>=5?'Explosive Melodic Lead Vocals':'Strong Melodic Lead Vocals';
  else if(type==='final')base=intensity<=2?'Warm Emotional Final Chorus':intensity>=4?'Full-Voice Emotional Climax':'Strong Melodic Final Chorus';
  else if(type==='bridge')base=intensity<=2?'Tender Restrained Vocals':heartfelt?'Heartfelt Expressive Vocals':'Contrasting Clear Vocals';
  else if(type==='post')base='Rhythmic Clear Vocal Hook';
  else if(type==='outro')base=p.density==='detailed'?'Gentle Closing Vocals':'';
  else base='Clear Expressive Lead Vocals';
  let additions=[];
  if(p.harmonies&&(type==='final'||(type==='chorus' && intensity>=3 && p.density!=='minimal')))additions.push('Layered Backing Harmonies');
  if(p.falsetto&&(type==='bridge'||(type==='final' && intensity>=4))&&p.density==='detailed')additions.push('Tasteful Falsetto Accents');
  if(p.melisma&&(type==='final'||(type==='chorus' && upbeat))&&p.density==='detailed')additions.push('Tasteful Melismatic Runs');
  if(artist?.vocal==='male' && type==='verse' && p.density==='detailed')additions.push('Clear Male Lead');
  if(artist?.vocal==='female' && type==='verse' && p.density==='detailed')additions.push('Clear Female Lead');
  return allowedCue([base,...additions].filter(Boolean).join(', '),p);
 }
 function tagsFromRules(sections,p){const artist=selectedArtist(p);return sections.map(s=>ruleCue(s,p,artist))}
 function baselineLyrics(raw){
  return linesOf(raw)
   .filter(line=>!recognizeHeading(line)&&!/^\s*\[Vocal delivery:.*\]\s*$/i.test(line))
   .filter(line=>line.trim()!=='')
   .join('\n');
 }
 function compose(parsed,tags,p){
  const replaced=new Map(),insertBefore=new Map();
  parsed.sections.forEach((s,i)=>{
   const cue=allowedCue(tags[i],p);
   if(s.explicit){
    const existing=cleanExistingNote(s.oldNote);
    const merged=[existing,cue?'Vocal delivery: '+cue:''].filter(Boolean).join(' | ');
    replaced.set(s.index,`[${s.label}${merged?' - '+merged:''}]`);
   }else{
    const heading=`[${s.label}${cue?' - Vocal delivery: '+cue:''}]`;
    insertBefore.set(s.index,heading);
   }
  });
  const final=[];
  parsed.lines.forEach((line,i)=>{
   if(insertBefore.has(i))final.push(insertBefore.get(i));
   final.push(replaced.has(i)?replaced.get(i):line);
  });
  return final.join('\n').trim();
 }
 function renderDraft(){
  if(!draft)return '';
  const p=prefs();
  const count=draft.sections.length;
  const cards=draft.sections.map((s,i)=>{
   const options=tagPresets.map(([v,label])=>`<option value="${E(v)}" ${draft.tags[i]===v?'selected':''}>${E(label)}</option>`).join('');
   return `<div class="sb-vt-section"><div class="sb-vt-section-heading"><strong>${E(s.label)}</strong><span>${i+1}/${count}</span></div>
     <div class="sb-vt-section-controls"><select data-vt-preset="${i}" aria-label="Готовые теги для ${E(s.label)}">${options}</select>
     <input data-vt-cue="${i}" value="${E(draft.tags[i]||'')}" maxlength="165" placeholder="Например: Warm Emotional Vocals" aria-label="Тег исполнения ${E(s.label)}"></div></div>`;
  }).join('');
  return `<div class="sb-vt-draft">
   <div class="sb-vt-draft-head"><h4>Предпросмотр · ${count} секций</h4><span class="sb-vt-method">${E(draft.method)}</span></div>
   <p class="sb-vt-small">Проверь каждую секцию. Теги можно выбрать из списка или переписать вручную. Оригинальные строки песни остаются неизменными.</p>
   <div class="sb-vt-section-list">${cards}</div>
   <div class="sb-vt-field"><label for="sb-vt-preview">Готовый Lyrics — разрешено редактировать только инструкции, не слова песни</label>
   <textarea id="sb-vt-preview" spellcheck="false" rows="13" maxlength="25000">${E(draft.preview)}</textarea></div>
   <p class="sb-vt-small" id="sb-vt-preview-state">Текст в оригинальном редакторе не изменён.</p>
   <div class="sb-vt-draft-actions">
    <button type="button" class="btn primary" data-action="vt-apply">✓ Применить к Lyrics</button>
    <button type="button" class="btn ghost" data-action="vt-copy">Копировать предпросмотр</button>
    <button type="button" class="btn ghost" data-action="vt-refresh">Обновить предпросмотр</button>
    <button type="button" class="btn ghost" data-action="vt-cancel">Отменить</button>
   </div>
  </div>`;
 }
 function showNotice(t,kind='info'){
  notice={text:t,kind};
  const box=el('sb-vt-notice');
  if(box&&!box.closest('#sb-vt-workbench[data-v-app]')){box.className='sb-vt-notice '+kind;box.textContent=t;}
  emit();
 }
 function showPreviewState(t){
  previewState=t;
  const node=el('sb-vt-preview-state');
  if(node&&!node.closest('#sb-vt-workbench[data-v-app]'))node.textContent=t;
  emit();
 }
 // v0.181: comparisons stay with the native draft; only flags leave this closure.
 // Freshness does not validate edited cues/words or authorize applying Lyrics.
 function previewFreshness(){
  const sourceChanged=!!draft && get(draft.sourceId)!==draft.source;
  const targetChanged=!!draft && get(taggedId)!==draft.targetSnapshot;
  const settingsChanged=!!draft && draft.settingsSnapshot!==JSON.stringify(prefs());
  return {previewFresh:!!draft&&!sourceChanged&&!targetChanged&&!settingsChanged,
   sourceChanged,targetChanged,settingsChanged};
 }
 function draftValid(){
  if(!draft)return false;
  const freshness=previewFreshness();
  if(freshness.settingsChanged){showNotice('Настройки исполнения изменились. Создай новый предпросмотр, чтобы учесть их.','warning');return false}
  if(freshness.sourceChanged || freshness.targetChanged){
   showNotice('Текст или поле Lyrics изменились после генерации. Создай новый предпросмотр — старый применять нельзя.','warning');
   return false;
  }
  if(!el('sb-vt-preview')){showNotice('Предпросмотр недоступен. Сгенерируй теги заново.','warning');return false}
  return true;
 }
 function updatePreview(force=false){
  if(!draft)return;
  if(draft.previewEdited&&!force){showPreviewState('Есть ручные изменения в предпросмотре. Чтобы собрать новую версию из тегов, нажми «Обновить предпросмотр».');return}
  const next=compose({lines:linesOf(draft.source),sections:draft.sections},draft.tags,prefs());
  draft.preview=next;draft.previewEdited=false;
  const preview=el('sb-vt-preview');if(preview)preview.value=next;
  showPreviewState('Предпросмотр собран. Исходный текст не изменён.');
 }
 function validateOutput(candidate){
  if(candidate.length>25000){showNotice('Слишком длинная версия Lyrics (предел — 25 000 символов).','warning');return false}
  if(baselineLyrics(candidate)!==baselineLyrics(draft.source)){
   showNotice('В предпросмотре изменились слова песни или исходные инструкции. Исправь их: генератор может менять только теги исполнения.','warning');
   return false;
  }
  return true;
 }
 function setBusy(active){
  busy=active;
  const button=document.querySelector('[data-action="vt-generate"]');
  if(button&&!button.closest('#sb-vt-workbench[data-v-app]')){button.disabled=active;button.textContent=active?'Анализируем…':'✨ Создать предпросмотр'}
  emit();
 }
 async function geminiCues(parsed,p,raw){
  const url=endpoint();
  if(!url || !el('sb-vt-consent')?.checked)return null;
  const controller=new AbortController();
  const timeout=setTimeout(()=>controller.abort(),25000);
  try{
   const artist=selectedArtist(p),genre=genreData();
   const req={
    task:'sunoboom-performance-tags-v1',
    text:raw,
    preferences:{intensity:p.intensity,density:p.density,melisma:p.melisma,falsetto:p.falsetto,harmonies:p.harmonies,noWhisper:p.noWhisper,noRasp:p.noRasp},
    genre:{name:genre?.name||'',family:genre?.family||''},
    artist:artist?{vocal:artist.vocal||'',timbre:String(artist.timbre||'').slice(0,150),delivery:String(artist.delivery||'').slice(0,150)}:null,
    sections:parsed.sections.map(s=>({id:s.id,section:s.label,type:s.type,lyrics:s.body.slice(0,2500)})),
    instructions:'Return JSON only: {"sections":[{"id":"s0","tag":"Warm Emotional Vocals"}]}. Return one short English vocal delivery tag per section. Do not rewrite lyrics or headings. Avoid whispers and rasp when prohibited.'
   };
   const response=await fetch(url,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(req),signal:controller.signal,credentials:'omit',mode:'cors',cache:'no-store'});
   if(!response.ok)throw Error('HTTP '+response.status);
   const result=await response.json();
   if(!Array.isArray(result?.sections))throw Error('Неверный формат ответа сервера');
   const map=new Map(result.sections.filter(x=>typeof x?.id==='string'&&typeof x?.tag==='string').map(x=>[x.id,x.tag]));
   if(!parsed.sections.every(s=>map.has(s.id)))throw Error('В ответе не все секции');
   return parsed.sections.map(s=>allowedCue(map.get(s.id),p));
  }finally{clearTimeout(timeout)}
 }
 async function generate(){
  if(busy)return;
  const p=prefs();
  const sourceId=sourceField(p),text=get(sourceId);
  if(!text.trim()){showNotice(sourceId===taggedId?'Поле готовой версии Lyrics пустое. Выбери оригинальный текст или заполни Lyrics.':'Сначала вставь текст песни в оригинальный редактор.','warning');return}
  const parsed=parse(text);
  if(!parsed.sections.length){showNotice('Не удалось определить ни одного фрагмента песни. Проверь текст.','warning');return}
  const requestId=++requestSerial,targetSnapshot=get(taggedId);
  let tags=[],method='';
  if(p.mode==='manual'){tags=parsed.sections.map(s=>{const prior=s.oldNote.match(/Vocal delivery:\s*(.*)$/i);return prior?allowedCue(prior[1],p):''});method='Ручной режим'}
  else if(p.mode==='rules'){tags=tagsFromRules(parsed.sections,p);method='Локальный анализ'}
  else if(!endpoint()){
   tags=tagsFromRules(parsed.sections,p);method='Локальный анализ · Gemini не подключён';
  }else if(!el('sb-vt-consent')?.checked){
   tags=tagsFromRules(parsed.sections,p);method='Локальный анализ · нет согласия на отправку';
  }else{
   setBusy(true);
   showNotice('Отправляем выбранный текст на защищённый сервер Gemini. Исходный редактор останется без изменений.');
   try{
    tags=await geminiCues(parsed,p,text);
    method='Gemini';
   }catch(err){
    console.warn('SUNOBOOM performance tags Gemini:',err);
    tags=tagsFromRules(parsed.sections,p);
    method='Локальный анализ · Gemini недоступен';
   }finally{setBusy(false)}
  }
  if(requestSerial!==requestId||get(sourceId)!==text||get(taggedId)!==targetSnapshot){showNotice('Пока создавались теги, текст изменился. Создай предпросмотр заново.','warning');return}
  const lyricOriginal=baselineLyrics(text);
  const output=compose(parsed,tags,p);
  if(baselineLyrics(output)!==lyricOriginal){showNotice('Ошибка сверки исходных слов. Применение отменено.','warning');return}
  draft={source:text,sourceId,targetSnapshot,sections:parsed.sections,tags,method,preview:output,previewEdited:false,settingsSnapshot:JSON.stringify(p)};
  const region=el('sb-vt-result');
  if(region&&!region.closest('#sb-vt-workbench[data-v-app]'))region.innerHTML=renderDraft();
  previewState='Текст в оригинальном редакторе не изменён.';
  emit();
  showNotice(method==='Gemini'?'Теги предложены Gemini. Проверь и подтверди применение.':method.includes('Gemini')||method.includes('согласия')?'Предпросмотр создан локально: Gemini не вызывался.':'Предпросмотр готов. Проверь теги и нажми «Применить к Lyrics».',method==='Gemini'?'success':'info');
  el('sb-vt-result')?.scrollIntoView({behavior:'smooth',block:'nearest'});
 }
 function apply(){
  if(!draftValid())return;
  const candidate=get('sb-vt-preview'),target=el(taggedId);
  if(!validateOutput(candidate))return;
  if(target.value.trim() && target.value!==candidate &&
     !confirm('В поле «Готовая версия Lyrics» уже есть текст. Заменить его проверенным предпросмотром? Оригинальный текст останется без изменений.'))return;
  target.value=candidate;
  target.dispatchEvent(new Event('input',{bubbles:true}));
  draft=null;
  if(el('sb-vt-result')&&!el('sb-vt-result').closest('#sb-vt-workbench[data-v-app]'))el('sb-vt-result').innerHTML='';
  emit();
  showNotice('Теги применены к полю Lyrics. Исходный текст песни не изменён. Нажми «Сохранить идею», чтобы записать изменения.','success');
  toast('Теги исполнения применены к Lyrics');
 }
 function copy(){
  if(!draftValid())return;
  const candidate=get('sb-vt-preview');if(!validateOutput(candidate))return;
  copyText(candidate);
 }
 function setTag(index,value){
  if(!draft||index<0||index>=draft.tags.length)return;
  draft.tags[index]=allowedCue(value,prefs());
  updatePreview();
  emit();
 }
 function onAction(button){
  const a=button.dataset.action;
  if(!a?.startsWith('vt-'))return false;
  if(a==='vt-generate'){generate().catch(err=>{setBusy(false);showNotice('Не удалось создать предпросмотр. Повтори попытку.','warning');console.warn(err)});return true}
  if(a==='vt-cancel'){requestSerial++;draft=null;const result=el('sb-vt-result');if(result&&!result.closest('#sb-vt-workbench[data-v-app]'))result.innerHTML='';showNotice('');return true}
  if(a==='vt-apply'){apply();return true}
  if(a==='vt-copy'){copy();return true}
  if(a==='vt-refresh'){
   if(!draftValid())return true;
   if(draft.previewEdited && !confirm('Заменить ручные изменения предпросмотра тегами из полей секций?'))return true;
   updatePreview(true);return true;
  }
  return false;
 }
 const priorMyIdeas=myideas;
 myideas=function(){
  const original=priorMyIdeas();
  const marker='</section>\n<div class="section-title"><h2>✨ Теги и усиление</h2></div>';
  return original.includes(marker)?original.replace(marker,panel()+'\n'+marker):original;
 };
 const priorAction=handleAction;
 handleAction=function(button){
  if(onAction(button))return;
  if(button.dataset.action==='format-idea-lyrics' && /Vocal delivery:/i.test(get(taggedId)) &&
    !confirm('В поле Lyrics уже есть теги исполнения. Повторное создание общих тегов заменит текущую разметку. Продолжить?'))return;
  return priorAction(button);
 };
 document.addEventListener('input',event=>{
  const t=event.target;
  if(!t)return;
  if(t.dataset.vtPref==='intensity'){savePrefs({intensity:clamp(t.value,1,5)});setText('sb-vt-intensity-label',prefs().intensity+' / 5');return}
  if(t.dataset.vtPref && t.type==='checkbox'){savePrefs({[t.dataset.vtPref]:t.checked});return}
  if(t.hasAttribute('data-vt-cue')){setTag(Number(t.dataset.vtCue),t.value);return}
  if(t.id==='sb-vt-preview' && draft){draft.preview=t.value;draft.previewEdited=true;showPreviewState('Предпросмотр изменён вручную. Проверь слова и теги перед применением.');return}
  if(t.id===lyricId||t.id===taggedId)syncSourceFreshness();
 });
 function syncSourceFreshness(){
  if(!draft)return;
  const freshness=previewFreshness();
  if(freshness.sourceChanged||freshness.targetChanged){
   showNotice('Текст изменён. Этот предпросмотр устарел; создай новый.','warning');
  }else{
   showNotice('Текст соответствует предпросмотру. Проверь настройки и теги перед применением.');
  }
 }
 // setRangeText in the existing manual-accent action does not dispatch input.
 document.addEventListener('click',event=>{
  if(event.target.closest?.('[data-action="sb-poetry-accent"]'))syncSourceFreshness();
 });
 document.addEventListener('change',event=>{
  const t=event.target;if(!t)return;
  const k=t.dataset.vtPref;
  if(k && t.type!=='checkbox' && k!=='intensity'){
   savePrefs({[k]:t.value});
   if(k==='mode'){setText('sb-vt-mode-hint',modeHint(prefs()));}
   if(k==='mode'||k==='source'||k==='artistId'){
    draft=null;const result=el('sb-vt-result');if(result&&!result.closest('#sb-vt-workbench[data-v-app]'))result.innerHTML='';
    showNotice('Настройки обновлены. Создай новый предпросмотр.');
   }
   return;
  }
  if(t.hasAttribute('data-vt-preset')){
   const i=Number(t.dataset.vtPreset);
   const input=el('sb-vt-result')?.querySelector(`[data-vt-cue="${i}"]`);
   if(input)input.value=t.value;
   setTag(i,t.value);
  }
 });
 window.SUNOBOOM_LEGACY_TAGS=Object.freeze({
  snapshot(){
   if(view.nav!=='myideas')return null;
   return {
    prefs:prefs(),modeHint:modeHint(prefs()),
    hasEndpoint:!!endpoint(),busy,freshness:previewFreshness(),
    artists:artistList().map(a=>({id:a.id,name:a.name||'Без названия'})),
    presets:tagPresets,
    notice:{...notice},previewState,
    draft:draft?{
     method:draft.method,
     sections:draft.sections.map(x=>({id:x.id,label:x.label})),
     tags:draft.tags.slice(),preview:draft.preview
    }:null
   };
  }
 });
 // The editor wrapper takes effect on the next render. Do not reset any saved lyrics.
 render();
})();
