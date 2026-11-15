(function setupGenreMixer() {
  'use strict';
  const mixer=SUNOBOOM_CORE.createMixer({studio:studioCore,getGenres:()=>GENRES});
  const {MIN,MAX,LANGS,MOODS,VOCALS,ENERGIES,DEFAULT_SETTINGS,byId,clone,distribute,normalize,initial,state,bpm,finalTempo,makePrompt}=mixer;
  function command(name,payload){const result=mixer.execute(name,payload);if(!result.ok)toast(result.error);return result;}
  function rebalance(index,value){return command('weight',{index,value,persist:false});}
  // SUNOBOOM 0.50 — Genre Mixer. Runs inside the existing application.

  const esc=x=>escapeHTML(x);
  const choice=(items,value)=>options(items,value);

  function saveDraft(){return command('persist');}

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
    return `<div class="gm-page" id="sb-vue-mixer-root">
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
    window.dispatchEvent(new Event('sunoboom:mixer-updated'));
  }
  function savePrompt(){if(command('savePrompt').ok)toast('Промпт сохранён в «Мои промпты»');}
  function action(button){
    const a=button.dataset.action,s=state();
    if(!a||!a.startsWith('gm-'))return false;
    switch(a){
      case 'gm-add':if(command('add').ok)render();break;
      case 'gm-remove':if(command('remove',{index:Number(button.dataset.slot)}).ok)render();break;
      case 'gm-equal':if(command('equal').ok)updateLive();break;
      case 'gm-copy':copyText(makePrompt(s.rows,s.settings));break;
      case 'gm-save-prompt':savePrompt();break;
      case 'gm-save-mix':if(command('saveMix').ok){render();toast('Формула сохранена');}break;
      case 'gm-load':if(command('load',{id:button.dataset.id}).ok){render();toast('Сочетание открыто');}break;
      case 'gm-delete':if(confirm('Удалить это сохранённое сочетание?')&&command('delete',{id:button.dataset.id}).ok){render();toast('Сочетание удалено');}break;
      case 'gm-to-studio':if(command('toStudio').ok){go('studio');toast('Микс перенесён в Suno Studio');}break;
      case 'gm-unlink':studioCore.execute('patch',{["mixerBlend"]:null});render();toast('Обычный конструктор восстановлен');break;
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
      ?`<div class="gm-studio-banner gm-studio-active" data-sb-workspace="mixer-banner"><strong>🎛️ Активен жанровый микс</strong><span>${esc(builder.mixerBlend.map(r=>byId(r.id)?.name||'').join(' + '))}. Настройки студии влияют на готовый промпт.</span><button class="btn ghost small" data-action="nav" data-nav="mixer">Изменить микс</button><button class="btn ghost small" data-action="gm-unlink">Обычный жанр</button></div>`
      :`<div class="gm-studio-banner" data-sb-workspace="mixer-banner"><strong>🎚️ Жанровый миксер</strong><span>Смешай 2–4 направления в одной аранжировке.</span><button class="btn ghost small" data-action="nav" data-nav="mixer">Открыть миксер →</button></div>`;
    return oldStudio().replace('<div class="studio-grid">',info+'<div class="studio-grid">');
  };
  studioCore.setMixerCompiler(makePrompt);
  const oldBuilder=updateBuilder;
  updateBuilder=function(key,value){if(key==='genre')studioCore.execute('patch',{["mixerBlend"]:null});return oldBuilder(key,value)};
  const oldHandle=handleAction;
  handleAction=function(button){if(action(button))return;return oldHandle(button)};
  document.addEventListener('input',event=>{
    const t=event.target;if(view.nav!=='mixer')return;
    if(t.hasAttribute('data-gm-weight')){rebalance(Number(t.dataset.gmWeight),t.value);updateLive();return}
    if(t.hasAttribute('data-gm-title')){command('title',{value:t.value,persist:false});return}
    if(t.hasAttribute('data-gm-setting')&&!t.matches('select')){
      const k=t.dataset.gmSetting;command('setting',{key:k,value:t.type==='checkbox'?t.checked:k==='tempo'?Number(t.value):t.value,persist:false});
      if(k==='autoTempo'){const slider=document.getElementById('gm-tempo');if(slider)slider.disabled=t.checked}
      updateLive();
    }
  });
  document.addEventListener('change',event=>{
    const t=event.target;if(view.nav!=='mixer')return;
    if(t.hasAttribute('data-gm-genre')){
      const i=Number(t.dataset.gmGenre);
      if(!byId(t.value)||state().rows.some((r,j)=>j!==i&&r.id===t.value)){toast('Этот жанр уже выбран');render();return}
      command('genre',{index:i,id:t.value});render();return;
    }
    if(t.hasAttribute('data-gm-setting')){const k=t.dataset.gmSetting;command('setting',{key:k,value:t.type==='checkbox'?t.checked:k==='tempo'?Number(t.value):t.value,persist:false});saveDraft();updateLive();return}
    if(t.hasAttribute('data-gm-weight')||t.hasAttribute('data-gm-title')){saveDraft()}
  });
  // Read-only UI projection of the canonical mixer core.
  window.SUNOBOOM_LEGACY_MIXER=Object.freeze({
    snapshot(){
      if(view.nav!=='mixer')return null;
      const s=state();
      return {
        rows:s.rows.map(r=>{
          const g=byId(r.id);
          return {id:r.id,weight:r.weight,name:g?.name||'',family:g?.family||'',
            tagline:g?.tagline||'',instruments:String(g?.instruments||'').slice(0,150),
            color:/^#[0-9a-fA-F]{6}$/.test(g?.color||'')?g.color:'#bb78ed'};
        }),
        settings:{...s.settings},title:s.title,tempo:finalTempo(s),
        prompt:makePrompt(s.rows,s.settings),
        genres:GENRES.map(g=>({id:g.id,name:g.name,family:g.family||'Прочее'})),
        options:{moods:MOODS,energies:ENERGIES,vocals:VOCALS,languages:LANGS},
        saved:(Array.isArray(data.savedMixes)?data.savedMixes:[]).map(item=>({
          id:item.id,title:item.title,
          summary:(item.rows||[]).map(r=>((byId(r.id)?.name)||'')+' '+r.weight+'%').join(' · ')
        }))
      };
    }
  });
  // Preserve the currently visible page after loading the add-on.
  render();
 window.SUNOBOOM_WORKSPACE_UI?.register('mixer-banner',()=>{
 const active=Array.isArray(builder.mixerBlend)&&builder.mixerBlend.length>=2;
 return {kind:'mixer-banner',active,description:active?builder.mixerBlend.map(r=>byId(r.id)?.name||'').join(' + ')+'. Настройки студии влияют на готовый промпт.':'Смешай 2–4 направления в одной аранжировке.'};});
})();
