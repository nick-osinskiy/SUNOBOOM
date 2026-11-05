(function setupGenreMixer() {
  'use strict';
  // SUNOBOOM 0.50 — Genre Mixer. Runs inside the existing application.
  const MIN=5, MAX=4, LANGS=[['Russian','Русский'],['English','Английский'],['Spanish','Испанский'],['Kazakh','Казахский']];
  const MOODS=[['energetic','Энергичное'],['melancholic','Меланхоличное'],['romantic','Романтичное'],['dark','Мрачное'],['uplifting','Воодушевляющее'],['dreamy','Мечтательное'],['playful','Игривое'],['epic','Эпическое'],['nostalgic','Ностальгическое']];
  const VOCALS=[['male','Мужской'],['female','Женский'],['duet','Дуэт']];
  const ENERGIES=[['soft','Мягкая'],['medium','Средняя'],['high','Мощная']];
  const DEFAULT_SETTINGS={mood:'energetic',vocal:'female',language:'Russian',energy:'high',theme:'',autoTempo:true,tempo:115,noWhisper:true,noChoir:true,noIntro:true,noLive:true,noRasp:true};
  const byId=id=>GENRES.find(g=>g.id===id);
  const esc=x=>escapeHTML(x);
  const choice=(items,value)=>options(items,value);
  const clone=x=>JSON.parse(JSON.stringify(x));
  let working=null;

  function distribute(total, values){
    const safe=values.map(v=>Math.max(0,Number(v)||0));
    const all=safe.reduce((a,b)=>a+b,0);
    const raw=safe.map(v=>all?total*v/all:total/safe.length);
    const ints=raw.map(Math.floor);
    let left=total-ints.reduce((a,b)=>a+b,0);
    const order=raw.map((v,i)=>({i,fract:v-ints[i]})).sort((a,b)=>b.fract-a.fract||a.i-b.i);
    for(let i=0;i<left;i++)ints[order[i].i]++;
    return ints;
  }
  function normalize(rows){
    let filtered=[],seen=new Set();
    for(const r of Array.isArray(rows)?rows:[]){
      if(!r||!byId(r.id)||seen.has(r.id)||filtered.length>=MAX)continue;
      seen.add(r.id);
      filtered.push({id:r.id,weight:Math.max(MIN,Math.min(100,Math.round(Number(r.weight)||MIN)))});
    }
    for(const preferred of ['afropop','synthpop',...GENRES.map(g=>g.id)]){
      if(filtered.length>=2)break;
      if(byId(preferred)&&!seen.has(preferred)){
        filtered.push({id:preferred,weight:50});seen.add(preferred);
      }
    }
    const extras=distribute(100-MIN*filtered.length,filtered.map(r=>Math.max(0,r.weight-MIN)));
    return filtered.map((r,i)=>({id:r.id,weight:MIN+extras[i]}));
  }
  function initial(){
    const saved=data.mixerDraft;
    return {
      rows:normalize(saved?.rows||[{id:'afropop',weight:55},{id:'synthpop',weight:45}]),
      settings:{...DEFAULT_SETTINGS,...(saved?.settings&&typeof saved.settings==='object'?saved.settings:{})},
      title:typeof saved?.title==='string'?saved.title.slice(0,90):''
    };
  }
  function state(){return working||(working=initial());}
  function saveDraft(){data.mixerDraft=clone(state());persist();}
  function bpm(rows){
    const val=rows.reduce((sum,r)=>{
      const g=byId(r.id);return sum+(g?(Number(g.bpm?.[0]||90)+Number(g.bpm?.[1]||130))/2:110)*r.weight/100;
    },0);
    return Math.min(200,Math.max(65,Math.round(val)));
  }
  function finalTempo(s=state()){
    return s.settings.autoTempo?bpm(s.rows):Math.max(65,Math.min(200,Math.round(Number(s.settings.tempo)||115)));
  }
  function rebalance(index,newWeight){
    const s=state(),n=s.rows.length;
    const desired=Math.max(MIN,Math.min(100-MIN*(n-1),Math.round(Number(newWeight)||MIN)));
    const other=s.rows.map((r,i)=>i).filter(i=>i!==index);
    const shares=distribute(100-desired-MIN*(n-1),other.map(i=>Math.max(0,s.rows[i].weight-MIN)));
    s.rows[index].weight=desired;
    other.forEach((i,j)=>{s.rows[i].weight=MIN+shares[j]});
  }
  function makePrompt(rows,settings){
    const picked=normalize(rows).map(r=>({g:byId(r.id),w:r.weight})).filter(r=>r.g).sort((a,b)=>b.w-a.w);
    const cfg={...DEFAULT_SETTINGS,...settings};
    const tempo=cfg.autoTempo?bpm(normalize(rows)):Math.max(65,Math.min(200,Number(cfg.tempo)||115));
    const voice=({male:'clear expressive male lead vocals',female:'clear expressive female lead vocals',duet:'clear male and female duet'})[cfg.vocal]||'clear lead vocals';
    const energy=({soft:'restrained intimate energy',medium:'balanced dynamic energy',high:'powerful high-energy chorus'})[cfg.energy]||'balanced energy';
    const intro='Original hybrid music production';
    const percentages='Genre blend targets: '+picked.map(x=>`${x.w}% ${x.g.name}`).join(' + ');
    const ending=[
      `${Math.round(tempo)} BPM`,`${String(cfg.mood).replace(/[^a-z-]/gi,'')} mood`,energy,voice,
      `${LANGS.some(x=>x[0]===cfg.language)?cfg.language:'Russian'} lyrics`,
      cfg.theme?.trim()?'song theme: '+String(cfg.theme).trim().slice(0,170):'',
      cfg.extra?.trim()?String(cfg.extra).trim().slice(0,220):'',
      cfg.noLive?'clean studio production, no crowd noise, no stage ambience':'',
      cfg.noWhisper?'no whispering':'',
      cfg.noChoir?'no choir':'',
      cfg.noRasp?'no raspy vocals':'',
      cfg.noIntro?'no long intro, start quickly':''
    ].filter(Boolean);
    const base=[intro,percentages,...ending].join(', ');
    let available=Math.max(0,999-base.length-3);
    const descriptors=[];
    for(let i=0;i<picked.length;i++){
      const x=picked[i];
      const terms=String(x.g.style||'').split(',').map(t=>t.trim()).filter(t=>t&&!/no crowd|no stage|no whisper|live ambience|clean studio|no choir|no rasp/i.test(t)).slice(0,i===0?4:2);
      const chunk=`${i===0?'Lead style':'Supporting texture'} (${x.w}%): ${terms.join(', ')}`;
      if(available<28)break;
      const text=chunk.length<=available?chunk:chunk.slice(0,available).replace(/\s+\S*$/,'');
      descriptors.push(text);available-=text.length+2;
    }
    return [intro,percentages,...descriptors,...ending].filter(Boolean).join(', ').slice(0,999).replace(/[,;.\s]+$/,'')+'.';
  }
  function genresOptions(selectedId,used){
    const families=[...new Set(GENRES.map(g=>g.family||'Прочее'))].sort((a,b)=>a.localeCompare(b,'ru'));
    return families.map(f=>{
      const members=GENRES.filter(g=>(g.family||'Прочее')===f&&(g.id===selectedId||!used.has(g.id))).sort((a,b)=>a.name.localeCompare(b.name,'ru'));
      return members.length?`<optgroup label="${esc(f)}">${members.map(g=>`<option value="${esc(g.id)}" ${g.id===selectedId?'selected':''}>${esc(g.name)}</option>`).join('')}</optgroup>`:'';
    }).join('');
  }
  function rowsHTML(){
    const s=state(),used=new Set(s.rows.map(r=>r.id));
    return s.rows.map((row,i)=>{
      const g=byId(row.id),color=/^#[0-9a-fA-F]{6}$/.test(g.color||'')?g.color:'#bb78ed';
      return `<article class="gm-row" style="--gm-color:${color}">
        <div class="gm-row-top"><span class="gm-rank">${String(i+1).padStart(2,'0')}</span>
          <div class="gm-field gm-genre-select"><label for="gm-genre-${i}">Музыкальное направление</label><select id="gm-genre-${i}" data-gm-genre="${i}">${genresOptions(row.id,used)}</select></div>
          <span class="gm-percent" data-gm-value="${i}">${row.weight}%</span>
          <button class="gm-remove" data-action="gm-remove" data-slot="${i}" aria-label="Убрать жанр ${esc(g.name)}" title="Убрать жанр" ${s.rows.length<=2?'disabled':''}>×</button>
        </div>
        <div class="gm-slider-line"><input type="range" min="${MIN}" max="${100-MIN*(s.rows.length-1)}" step="1" value="${row.weight}" data-gm-weight="${i}" aria-label="Доля жанра ${esc(g.name)}">
          <div class="gm-meter"><span data-gm-meter="${i}" style="width:${row.weight}%"></span></div>
        </div>
        <p class="gm-sub">${esc(g.family)} · ${esc(g.tagline||'')} · ${esc(g.instruments||'').slice(0,150)}</p>
      </article>`;
    }).join('');
  }
  function savedMixes(){
    const mixes=Array.isArray(data.savedMixes)?data.savedMixes:[];
    if(!mixes.length)return '<p class="gm-muted">Сохранённых сочетаний пока нет. Придумай свой микс и сохрани его.</p>';
    return mixes.map(x=>`<article class="gm-saved"><div><strong>${esc(x.title)}</strong><small>${esc((x.rows||[]).map(r=>`${byId(r.id)?.name||''} ${r.weight}%`).join(' · '))}</small></div><div class="gm-saved-actions"><button class="btn ghost small" data-action="gm-load" data-id="${esc(x.id)}">Открыть</button><button class="btn danger small" data-action="gm-delete" data-id="${esc(x.id)}" aria-label="Удалить ${esc(x.title)}">×</button></div></article>`).join('');
  }
  function page(){
    const s=state(),p=makePrompt(s.rows,s.settings),beat=finalTempo(s);
    return `<div class="gm-page">
      <header class="heading"><div class="eyebrow">Suno Studio · новый инструмент</div><h1>Жанровый <span class="gm-highlight">миксер</span></h1>
        <p>Соединяй от 2 до 4 жанров из Академии SUNOBOOM, задавай пропорции и создавай готовый Style-промпт для Suno.</p></header>
      <div class="gm-layout"><section class="gm-panel">
        <div class="gm-section-head"><div><h2>Формула звучания</h2><p>Меняй жанры и двигай ползунки — сумма всегда равна 100%.</p></div><span class="gm-total">Σ 100%</span></div>
        <div class="gm-stack">${rowsHTML()}</div>
        <div class="gm-actions"><button class="btn ghost" data-action="gm-add" ${s.rows.length>=MAX?'disabled':''}>${I('plus')} Добавить жанр</button>
        <button class="btn ghost" data-action="gm-equal">Поровну</button></div>
        <div class="gm-mixture" aria-label="Доли музыкальных жанров">${s.rows.map(r=>`<span data-gm-mixbar="${esc(r.id)}" style="width:${r.weight}%;background:${/^#[0-9a-fA-F]{6}$/.test(byId(r.id)?.color||'')?byId(r.id).color:'#bb78ed'}" title="${esc(byId(r.id)?.name)}: ${r.weight}%"></span>`).join('')}</div>
        <p class="gm-muted">Проценты — творческий ориентир для генерации, а не гарантия точного соотношения в готовой музыке.</p>
        <div class="gm-divider"></div><h2>Характер композиции</h2>
        <div class="gm-form-grid">
          <div class="gm-field"><label for="gm-mood">Настроение</label><select id="gm-mood" data-gm-setting="mood">${choice(MOODS,s.settings.mood)}</select></div>
          <div class="gm-field"><label for="gm-energy">Энергия</label><select id="gm-energy" data-gm-setting="energy">${choice(ENERGIES,s.settings.energy)}</select></div>
          <div class="gm-field"><label for="gm-vocal">Вокал</label><select id="gm-vocal" data-gm-setting="vocal">${choice(VOCALS,s.settings.vocal)}</select></div>
          <div class="gm-field"><label for="gm-language">Язык</label><select id="gm-language" data-gm-setting="language">${choice(LANGS,s.settings.language)}</select></div>
        </div>
        <div class="gm-tempo"><label><input type="checkbox" data-gm-setting="autoTempo" ${s.settings.autoTempo?'checked':''}> Определять темп по жанрам</label><div class="gm-tempo-row"><input id="gm-tempo" type="range" min="65" max="200" value="${beat}" data-gm-setting="tempo" ${s.settings.autoTempo?'disabled':''}><b id="gm-bpm">${beat} BPM</b></div></div>
        <div class="gm-field"><label for="gm-theme">Тема песни (необязательно)</label><textarea id="gm-theme" rows="2" maxlength="170" data-gm-setting="theme" placeholder="Например: ночной город, встреча после долгой разлуки">${esc(s.settings.theme)}</textarea></div>
        <div class="gm-checks">
          <label><input type="checkbox" data-gm-setting="noLive" ${s.settings.noLive?'checked':''}> Студийный звук без публики</label>
          <label><input type="checkbox" data-gm-setting="noWhisper" ${s.settings.noWhisper?'checked':''}> Без шёпота</label>
          <label><input type="checkbox" data-gm-setting="noRasp" ${s.settings.noRasp?'checked':''}> Без хрипотцы</label>
          <label><input type="checkbox" data-gm-setting="noChoir" ${s.settings.noChoir?'checked':''}> Без хора</label>
          <label><input type="checkbox" data-gm-setting="noIntro" ${s.settings.noIntro?'checked':''}> Без длинного интро</label>
        </div>
      </section><aside class="gm-panel gm-output-panel">
        <div class="eyebrow">Результат микширования</div><h2>Гибридный Style-промпт</h2>
        <div class="gm-output" id="gm-prompt" aria-live="polite">${esc(p)}</div>
        <div class="gm-prompt-meta"><span>На английском · готово для Suno</span><b id="gm-count">${p.length} / 1000</b></div>
        <div class="gm-output-actions"><button class="btn primary" data-action="gm-copy">${I('copy')} Копировать</button>
          <button class="btn ghost" data-action="gm-to-studio">${I('studio')} В Suno Studio</button></div>
        <button class="btn ghost gm-full" data-action="gm-save-prompt">${I('saved')} Сохранить в «Мои промпты»</button>
        <div class="gm-divider"></div><h3>Мои сочетания</h3>
        <div class="gm-field"><label for="gm-title">Название сочетания</label><input type="text" id="gm-title" maxlength="90" data-gm-title value="${esc(s.title)}" placeholder="Например: Северный электро-фолк"></div>
        <button class="btn ghost gm-full" data-action="gm-save-mix">${I('check')} Сохранить формулу</button>
        <div class="gm-saved-list">${savedMixes()}</div>
        <p class="gm-muted">Сохраняется в этом браузере и входит в общую JSON-копию данных SUNOBOOM. Подключение к ИИ для смешивания не требуется.</p>
      </aside></div></div>`;
  }
  function updateLive(){
    if(view.nav!=='mixer')return;
    const s=state(),p=makePrompt(s.rows,s.settings);
    s.rows.forEach((r,i)=>{
      const v=document.querySelector(`[data-gm-value="${i}"]`),range=document.querySelector(`[data-gm-weight="${i}"]`),meter=document.querySelector(`[data-gm-meter="${i}"]`);
      if(v)v.textContent=r.weight+'%';
      if(range)range.value=r.weight;
      if(meter)meter.style.width=r.weight+'%';
      const bar=document.querySelector(`[data-gm-mixbar="${r.id}"]`);
      if(bar){bar.style.width=r.weight+'%';bar.title=(byId(r.id)?.name||'')+': '+r.weight+'%'}
    });
    const out=document.getElementById('gm-prompt'),c=document.getElementById('gm-count'),beat=document.getElementById('gm-bpm'),tempo=document.getElementById('gm-tempo');
    if(out)out.textContent=p;if(c)c.textContent=p.length+' / 1000';
    if(beat)beat.textContent=finalTempo(s)+' BPM';
    if(tempo&&s.settings.autoTempo)tempo.value=finalTempo(s);
  }
  function savePrompt(){
    const s=state(), p=makePrompt(s.rows,s.settings);
    const title=s.title.trim()||'Гибрид: '+s.rows.map(r=>byId(r.id).name).join(' + ');
    if(!Array.isArray(data.savedPrompts))data.savedPrompts=[];
    data.savedPrompts.push({id:'gm-p-'+Date.now()+'-'+Math.random().toString(36).slice(2,7),title,genre:s.rows.map(r=>byId(r.id).name).join(' + '),mood:s.settings.mood,date:new Date().toLocaleDateString('ru-RU'),text:p,source:'genre-mixer'});
    persist();toast('Промпт сохранён в «Мои промпты»');
  }
  function action(button){
    const a=button.dataset.action,s=state();
    if(!a||!a.startsWith('gm-'))return false;
    switch(a){
      case 'gm-add':{
        if(s.rows.length>=MAX){toast('Можно смешать не больше четырёх жанров');break}
        const next=GENRES.find(g=>!s.rows.some(r=>r.id===g.id));
        if(!next)break;
        const old=s.rows.map(r=>({...r}));s.rows.push({id:next.id,weight:MIN});
        const additions=distribute(100-MIN*s.rows.length,old.map(r=>Math.max(0,r.weight-MIN)));
        old.forEach((r,i)=>{s.rows[i].weight=MIN+additions[i]});
        saveDraft();render();break;
      }
      case 'gm-remove':{
        const i=Number(button.dataset.slot);
        if(s.rows.length<=2){toast('Для микса нужно минимум два жанра');break}
        if(!Number.isInteger(i)||i<0||i>=s.rows.length)break;
        s.rows.splice(i,1);s.rows=normalize(s.rows);saveDraft();render();break;
      }
      case 'gm-equal':{
        const weights=distribute(100,s.rows.map(()=>1));s.rows.forEach((r,i)=>{r.weight=weights[i]});
        saveDraft();updateLive();break;
      }
      case 'gm-copy':copyText(makePrompt(s.rows,s.settings));break;
      case 'gm-save-prompt':savePrompt();break;
      case 'gm-save-mix':{
        if(!Array.isArray(data.savedMixes))data.savedMixes=[];
        const title=s.title.trim()||s.rows.map(r=>byId(r.id).name).join(' + ');
        data.savedMixes.unshift({id:'gm-'+Date.now()+'-'+Math.random().toString(36).slice(2,7),title:title.slice(0,90),rows:clone(s.rows),settings:clone(s.settings),date:new Date().toLocaleDateString('ru-RU')});
        saveDraft();render();toast('Формула сохранена');break;
      }
      case 'gm-load':{
        const item=(data.savedMixes||[]).find(m=>m.id===button.dataset.id);
        if(!item)break;
        working={rows:normalize(item.rows),settings:{...DEFAULT_SETTINGS,...item.settings},title:item.title};
        saveDraft();render();toast('Сочетание открыто');break;
      }
      case 'gm-delete':{
        if(!confirm('Удалить это сохранённое сочетание?'))break;
        data.savedMixes=(data.savedMixes||[]).filter(m=>m.id!==button.dataset.id);
        persist();render();toast('Сочетание удалено');break;
      }
      case 'gm-to-studio':{
        builder.mixerBlend=clone(s.rows);builder.genre=s.rows[0].id;
        builder.mood=s.settings.mood;builder.vocal=s.settings.vocal;builder.language=s.settings.language;
        builder.energy=s.settings.energy;builder.tempo=finalTempo(s);builder.theme=s.settings.theme;
        builder.extra='';builder.studio=!!s.settings.noLive;builder.noWhisper=!!s.settings.noWhisper;
        builder.noChoir=!!s.settings.noChoir;builder.noIntro=!!s.settings.noIntro;
        builder.mixerNoRasp=!!s.settings.noRasp;
        saveDraft();go('studio');toast('Гибридное звучание передано в Suno Studio');break;
      }
      case 'gm-unlink':builder.mixerBlend=null;render();toast('Обычный конструктор восстановлен');break;
      default:return false;
    }
    return true;
  }

  // Dedicated route, using the real application navigation, storage, and action bus.
  icons.mixer='<path d="M4 7h16M4 17h16M10 4v6M15 14v6"/><circle cx="10" cy="7" r="2" fill="#151827"/><circle cx="15" cy="17" r="2" fill="#151827"/>';
  if(!navs.some(n=>n[0]==='mixer'))navs.splice(navs.findIndex(n=>n[0]==='studio'),0,['mixer','Жанровый миксер','mixer']);
  const oldRender=render;
  render=function(){if(view.nav==='mixer'){document.getElementById('app').innerHTML=chrome(page());return}return oldRender()};
  const oldStudio=studio;
  studio=function(){
    const info=Array.isArray(builder.mixerBlend)&&builder.mixerBlend.length>=2
      ?`<div class="gm-studio-banner gm-studio-active"><strong>🎛️ Активен жанровый микс</strong><span>${esc(builder.mixerBlend.map(r=>byId(r.id)?.name||'').join(' + '))}. Настройки студии влияют на готовый промпт.</span><button class="btn ghost small" data-action="nav" data-nav="mixer">Изменить микс</button><button class="btn ghost small" data-action="gm-unlink">Обычный жанр</button></div>`
      :`<div class="gm-studio-banner"><strong>🎚️ Жанровый миксер</strong><span>Смешай 2–4 направления в одной аранжировке.</span><button class="btn ghost small" data-action="nav" data-nav="mixer">Открыть миксер →</button></div>`;
    return oldStudio().replace('<div class="studio-grid">',info+'<div class="studio-grid">');
  };
  const oldPrompt=promptValue;
  promptValue=function(){
    if(Array.isArray(builder.mixerBlend)&&builder.mixerBlend.length>=2){
      return makePrompt(builder.mixerBlend,{...builder,noLive:builder.studio,noRasp:builder.mixerNoRasp!==false,autoTempo:false});
    }
    return oldPrompt();
  };
  const oldBuilder=updateBuilder;
  updateBuilder=function(key,value){if(key==='genre')builder.mixerBlend=null;return oldBuilder(key,value)};
  const oldHandle=handleAction;
  handleAction=function(button){if(action(button))return;return oldHandle(button)};
  document.addEventListener('input',event=>{
    const t=event.target;if(view.nav!=='mixer')return;
    if(t.hasAttribute('data-gm-weight')){rebalance(Number(t.dataset.gmWeight),t.value);updateLive();return}
    if(t.hasAttribute('data-gm-title')){state().title=t.value.slice(0,90);return}
    if(t.hasAttribute('data-gm-setting')&&!t.matches('select')){
      const k=t.dataset.gmSetting;state().settings[k]=t.type==='checkbox'?t.checked:k==='tempo'?Number(t.value):t.value;
      if(k==='autoTempo'){const slider=document.getElementById('gm-tempo');if(slider)slider.disabled=t.checked}
      updateLive();
    }
  });
  document.addEventListener('change',event=>{
    const t=event.target;if(view.nav!=='mixer')return;
    if(t.hasAttribute('data-gm-genre')){
      const i=Number(t.dataset.gmGenre);
      if(!byId(t.value)||state().rows.some((r,j)=>j!==i&&r.id===t.value)){toast('Этот жанр уже выбран');render();return}
      state().rows[i].id=t.value;saveDraft();render();return;
    }
    if(t.hasAttribute('data-gm-setting')){const k=t.dataset.gmSetting;state().settings[k]=t.type==='checkbox'?t.checked:k==='tempo'?Number(t.value):t.value;saveDraft();updateLive();return}
    if(t.hasAttribute('data-gm-weight')||t.hasAttribute('data-gm-title')){saveDraft()}
  });
  // Preserve the currently visible page after loading the add-on.
  render();
})();
