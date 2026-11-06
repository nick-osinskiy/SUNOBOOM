/* SUNOBOOM • Player LAB A/B comparison v0.65
 * Additive mode inside existing Player, independent HTMLAudioElements, all audio stays local.
 */
(function installAudioAB(){
 "use strict";
 if(typeof render!=="function"||typeof chrome!=="function"||typeof view==="undefined")return;
 const rootID="sbab-compare";
 const esc=value=>escapeHTML(String(value??""));
 const audio={A:new Audio(),B:new Audio()};
 const files={A:null,B:null};
 const scores={A:{vocal:0,arrangement:0,mix:0},B:{vocal:0,arrangement:0,mix:0}};
 const notes={A:"",B:""};
 const state={mode:"player",active:"A",segmentStart:null,segmentEnd:null,loop:false,status:"",waitingSeek:{A:null,B:null}};
 let serial=0,wasInPlayer=false;
 for(const side of ["A","B"]){audio[side].preload="auto";audio[side].playsInline=true;audio[side].volume=1;}
 const isIOS=typeof navigator!=="undefined"&&(/iPhone|iPad|iPod/.test(navigator.userAgent||"")||(navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1));
 const activeAudio=()=>audio[state.active];
 const validDuration=a=>Number.isFinite(a.duration)&&a.duration>0;
 const time=t=>{if(!Number.isFinite(t)||t<0)return "0:00";const v=Math.floor(t);return Math.floor(v/60)+":"+String(v%60).padStart(2,"0")};
 const getDuration=()=>validDuration(activeAudio())?activeAudio().duration:(validDuration(audio[state.active==="A"?"B":"A"])?audio[state.active==="A"?"B":"A"].duration:0);
 const currentPosition=()=>Number.isFinite(activeAudio().currentTime)?activeAudio().currentTime:0;
 const supported=f=>f&&(/^(audio\/)/i.test(f.type||"")||/\.(mp3|m4a|aac|wav|flac|ogg|opus|aiff)$/i.test(f.name||""));
 const message=txt=>{state.status=txt;const el=document.getElementById("sbab-status");if(el){el.hidden=!txt;el.textContent=txt;}};
 const pauseAB=()=>{audio.A.pause();audio.B.pause();sync()};
 const haltMain=()=>{try{window.SUNOBOOM_PLAYER_LAB?.getAudioElement?.()?.pause()}catch(e){}};
 const markerName=()=>state.loop?"Повтор фрагмента включён":"Повтор фрагмента выключен";
 function svg(name){
   if(name==="back")return '<svg viewBox="0 0 24 24" width="21" height="21" aria-hidden="true"><path d="M7 5v14M18 5 8 12l10 7V5Z" stroke="currentColor" stroke-width="2" fill="currentColor" stroke-linejoin="round" stroke-linecap="round"/></svg>';
   if(name==="forward")return '<svg viewBox="0 0 24 24" width="21" height="21" aria-hidden="true"><path d="M17 5v14M6 5l10 7-10 7V5Z" stroke="currentColor" stroke-width="2" fill="currentColor" stroke-linejoin="round" stroke-linecap="round"/></svg>';
   return '<svg viewBox="0 0 24 24" width="19" height="19" aria-hidden="true"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';
 }
 function renderSlot(side){
   const f=files[side];
   return '<div class="sbab-file-card '+(side==="A"?"sbab-card-a":"sbab-card-b")+'" data-sbab-card="'+side+'">'+
     '<div class="sbab-file-top"><span class="sbab-side-label">ВЕРСИЯ '+side+'</span><span class="sbab-loaded" id="sbab-ready-'+side+'">'+(f?"Файл добавлен":"Ожидает файл")+'</span></div>'+
     '<strong class="sbab-filename" id="sbab-name-'+side+'">'+esc(f?.name||"Добавь аудиозапись")+'</strong>'+
     '<p class="sbab-filesub" id="sbab-info-'+side+'">'+esc(f?(f.demo?"Оригинальный тестовый звук":"Локальный аудиофайл"):"MP3 · WAV · M4A и другие поддерживаемые форматы")+'</p>'+
     '<div class="sbab-file-bottom"><label class="sbab-upload" for="sbab-file-'+side+'">'+svg("plus")+(f?"Заменить файл":"Выбрать файл")+'</label>'+
       '<input type="file" id="sbab-file-'+side+'" accept="audio/*,.mp3,.wav,.m4a,.aac,.ogg,.flac,.opus" data-sbab-file="'+side+'">'+
       '<button type="button" data-sbab-action="remove" data-side="'+side+'" class="sbab-remove" '+(!f?"disabled":"")+'>Удалить</button>'+
       '<span class="sbab-length" id="sbab-length-'+side+'">'+(validDuration(audio[side])?time(audio[side].duration):"—")+'</span></div>'+
   '</div>';
 }
 function reviewTable(){
   const fields=[["vocal","Вокал"],["arrangement","Аранжировка"],["mix","Сведение и мастеринг"]];
   const selection=(side,key)=>'<select data-sbab-score="'+side+':'+key+'" aria-label="'+esc(fields.find(f=>f[0]===key)[1])+' — версия '+side+'">'+
    '<option value="0">—</option>'+[1,2,3,4,5].map(v=>'<option value="'+v+'"'+(scores[side][key]===v?" selected":"")+'>'+v+'/5</option>').join("")+'</select>';
   return '<section class="sbab-review"><header><h3>Оценка на слух</h3><p>Субъективное сравнение. Оценки выставляешь ты — автоматического анализа качества здесь нет.</p></header>'+
    '<div class="sbab-rating-grid"><div class="sbab-rating-head">Параметр</div><div class="sbab-rating-head">A</div><div class="sbab-rating-head">B</div>'+
    fields.map(([key,label])=>'<div class="sbab-rating-label">'+label+'</div><div>'+selection("A",key)+'</div><div>'+selection("B",key)+'</div>').join("")+'</div>'+
    '<div class="sbab-note-grid"><label for="sbab-note-A">Заметки по A<textarea id="sbab-note-A" data-sbab-note="A" rows="3" maxlength="1000" placeholder="Сильные стороны, что улучшить…">'+esc(notes.A)+'</textarea></label>'+
    '<label for="sbab-note-B">Заметки по B<textarea id="sbab-note-B" data-sbab-note="B" rows="3" maxlength="1000" placeholder="Вокал, баланс, пространство…">'+esc(notes.B)+'</textarea></label></div>'+
    '<div class="sbab-review-actions"><button type="button" data-sbab-action="copy" class="sbab-review-copy">Скопировать результаты</button><button type="button" data-sbab-action="reset-review" class="sbab-review-clear">Очистить оценки</button></div>'+
   '</section>';
 }
 function compareHTML(){
   const bars=Array.from({length:43},(_,i)=>'<i style="--bar-height:'+(15+(i*i*23+i*11)%70)+'%"></i>').join("");
   return '<section class="sbab-shell" id="'+rootID+'" aria-label="Сравнение аудиоверсий A и B">'+
      '<header class="sbab-heading"><div><span class="sbab-kicker">SUNOBOOM · AUDIO TEST LAB</span><h2>A/B-сравнение аудиоверсий</h2><p>Загрузи два варианта песни и переключайся между ними в одной временной точке. Сравнивай вокал, аранжировку и финальное звучание.</p></div><span class="sbab-lab-badge">A ↔ B</span></header>'+
      '<div class="sbab-files">'+renderSlot("A")+renderSlot("B")+'</div>'+
      '<div class="sbab-demo-row"><p>Для первого теста можно создать два разных оригинальных коротких аудиофрагмента.</p><button type="button" data-sbab-action="demo">Создать демо A и B</button></div>'+
      '<div class="sbab-console">'+
       '<div class="sbab-console-top"><span class="sbab-kicker">АКТИВНОЕ ПРОСЛУШИВАНИЕ</span><span id="sbab-active-label">Версия A</span></div>'+
       '<div class="sbab-wave"><div class="sbab-wave-bars" aria-hidden="true">'+bars+'</div><div class="sbab-wave-center">A / B</div></div>'+
       '<div class="sbab-toggle" role="group" aria-label="Выбор версии для прослушивания">'+
         '<button type="button" class="sbab-btn-a" data-sbab-action="select" data-side="A" aria-pressed="true">A <small>Версия A</small></button>'+
         '<button type="button" class="sbab-btn-b" data-sbab-action="select" data-side="B" aria-pressed="false">B <small>Версия B</small></button>'+
       '</div>'+
       '<div class="sbab-scrub"><label for="sbab-seek" class="sbab-sr">Перемотка A/B</label><input type="range" id="sbab-seek" min="0" max="1000" value="0" disabled>'+
         '<div class="sbab-times"><span id="sbab-current">0:00</span><span id="sbab-duration">0:00</span></div></div>'+
       '<div class="sbab-transport"><button type="button" data-sbab-action="back" aria-label="На 5 секунд назад">'+svg("back")+'</button>'+
       '<button type="button" class="sbab-big-play" id="sbab-play" data-sbab-action="toggle" aria-label="Воспроизвести" disabled>▶</button>'+
       '<button type="button" data-sbab-action="forward" aria-label="На 5 секунд вперёд">'+svg("forward")+'</button></div>'+
       '<div class="sbab-clip"><div class="sbab-clip-title"><strong>Повтор выбранного фрагмента</strong><small>Например, только припев или куплет</small></div>'+
         '<div class="sbab-clip-actions"><button type="button" data-sbab-action="mark-start">Начало: <span id="sbab-start">—</span></button>'+
         '<button type="button" data-sbab-action="mark-end">Конец: <span id="sbab-end">—</span></button>'+
         '<button type="button" data-sbab-action="loop" id="sbab-loop" aria-pressed="false">↻ Повтор выкл.</button>'+
         '<button type="button" data-sbab-action="clear-segment" aria-label="Очистить границы фрагмента">✕</button></div></div>'+
       '<div class="sbab-volume">'+(isIOS?'<span>📱 Громкость регулируется кнопками телефона</span>':
       '<label for="sbab-vol-A">Уровень A <input id="sbab-vol-A" data-sbab-vol="A" type="range" min="0" max="100" value="100"></label><label for="sbab-vol-B">Уровень B <input id="sbab-vol-B" data-sbab-vol="B" type="range" min="0" max="100" value="100"></label>')+'</div>'+
       '<p id="sbab-status" class="sbab-status" role="status" aria-live="polite" hidden></p>'+
      '</div>'+
      reviewTable()+
      '<p class="sbab-footer-note">Файлы не передаются на сервер. При переключении используется одинаковая временная позиция в секундах; точное совпадение музыкальных моментов зависит от самих версий. Для честного сравнения выровняй их громкость. На телефоне переключение может иметь небольшую паузу из-за браузера.</p>'+
   '</section>';
 }
 function modeTabs(){
  return '<div class="sbab-modes" role="group" aria-label="Режим плеера">'+
  '<button type="button" data-sbab-action="mode" data-mode="player" aria-pressed="'+(state.mode==="player")+'">♫ Обычный плеер</button>'+
  '<button type="button" data-sbab-action="mode" data-mode="compare" aria-pressed="'+(state.mode==="compare")+'">⇄ Сравнение A/B <span>НОВОЕ</span></button></div>';
 }
 function mount(){
  const host=document.querySelector(".sbp-wrap");
  if(!host)return;
  const hero=host.querySelector(".sbp-hero");
  if(!hero)return;
  if(!host.querySelector(".sbab-modes")){
    hero.insertAdjacentHTML("afterend",modeTabs());
    host.querySelector(".sbab-modes").insertAdjacentHTML("afterend",compareHTML());
  }
  const compare=host.querySelector("#"+rootID);
  if(compare)compare.hidden=state.mode!=="compare";
  host.classList.toggle("sbab-compare-mode",state.mode==="compare");
  host.querySelectorAll(".sbab-modes button").forEach(b=>b.setAttribute("aria-pressed",String(b.dataset.mode===state.mode)));
  sync();
 }
 function sync(){
  if(view.nav!=="player")return;
  const root=document.getElementById(rootID);
  if(!root)return;
  const playing=!activeAudio().paused&&!activeAudio().ended&&!!files[state.active];
  root.classList.toggle("sbab-is-playing",playing);
  root.classList.toggle("sbab-has-files",!!files.A&&!!files.B);
  const label=document.getElementById("sbab-active-label");
  if(label)label.textContent="Версия "+state.active+(playing?" · Воспроизведение":"");
  const play=document.getElementById("sbab-play");
  if(play){play.textContent=playing?"❚❚":"▶";play.setAttribute("aria-label",playing?"Пауза":"Воспроизвести");play.disabled=!files[state.active];}
  for(const side of ["A","B"]){
    const f=files[side],a=audio[side];
    const card=document.querySelector('[data-sbab-card="'+side+'"]');
    if(card){
      card.classList.toggle("sbab-active-card",state.active===side);
      const name=card.querySelector("#sbab-name-"+side);if(name)name.textContent=f?.name||"Добавь аудиозапись";
      const badge=card.querySelector("#sbab-ready-"+side);if(badge)badge.textContent=f?"Файл добавлен":"Ожидает файл";
      const info=card.querySelector("#sbab-info-"+side);if(info)info.textContent=f?(f.demo?"Оригинальный тестовый звук":"Локальный аудиофайл"):"MP3 · WAV · M4A и другие поддерживаемые форматы";
      const timeEl=card.querySelector("#sbab-length-"+side);if(timeEl)timeEl.textContent=validDuration(a)?time(a.duration):"—";
      const upload=card.querySelector(".sbab-upload");if(upload){const text=upload.lastChild;if(text?.nodeType===3)text.textContent=f?"Заменить файл":"Выбрать файл";}
      const del=card.querySelector(".sbab-remove");if(del)del.disabled=!f;
    }
    const vol=document.getElementById("sbab-vol-"+side);if(vol)vol.value=Math.round(a.volume*100);
  }
  root.querySelectorAll(".sbab-toggle button").forEach(b=>{
    const on=b.dataset.side===state.active;b.setAttribute("aria-pressed",String(on));
  });
  const seek=document.getElementById("sbab-seek"),duration=getDuration(),position=currentPosition();
  if(seek){seek.disabled=!files[state.active]||!validDuration(activeAudio());seek.value=!seek.disabled?Math.round(Math.min(position/duration,1)*1000):0;}
  const put=(id,s)=>{const el=document.getElementById(id);if(el)el.textContent=s;};
  put("sbab-current",time(position));put("sbab-duration",time(duration));
  put("sbab-start",state.segmentStart===null?"—":time(state.segmentStart));
  put("sbab-end",state.segmentEnd===null?"—":time(state.segmentEnd));
  const loop=document.getElementById("sbab-loop");
  if(loop){loop.setAttribute("aria-pressed",String(state.loop));loop.textContent=state.loop?"↻ Повтор включён":"↻ Повтор выкл.";loop.setAttribute("aria-label",markerName());}
  const status=document.getElementById("sbab-status");if(status){status.hidden=!state.status;status.textContent=state.status;}
 }
 function safeSeek(a,pos){
   if(!Number.isFinite(pos))return;
   const desired=validDuration(a)?Math.min(Math.max(0,pos),Math.max(0,a.duration-.015)):Math.max(0,pos);
   try{a.currentTime=desired;}catch(e){}
 }
 function align(pos){
  for(const side of ["A","B"]){
    if(!files[side])continue;
    if(audio[side].readyState>=1)safeSeek(audio[side],pos);
    else state.waitingSeek[side]=pos;
  }
 }
 function playActive(){
  if(!files[state.active]){message("Сначала загрузи аудиоверсию "+state.active+".");return;}
  haltMain();
  const a=activeAudio();
  const r=a.play();
  if(r&&typeof r.catch==="function")r.catch(()=>{message("Браузер не смог запустить аудио. Проверь формат или нажми воспроизведение ещё раз.");sync();});
  sync();
 }
 function switchSide(side){
  if(!["A","B"].includes(side))return;
  if(!files[side]){message("Сначала загрузи версию "+side+" для сравнения.");return;}
  const old=activeAudio(),pos=currentPosition(),wasPlaying=!old.paused&&!old.ended;
  old.pause();state.active=side;align(pos);message("");
  if(wasPlaying)playActive();
  sync();
 }
 function setMode(next){
   if(!["player","compare"].includes(next)||state.mode===next)return;
   state.mode=next;
   if(next==="compare")haltMain();else pauseAB();
   mount();
 }
 function toggle(){
  if(!files[state.active]){message("Добавь первую аудиоверсию или создай демо A и B.");return;}
  if(activeAudio().paused)playActive();else{activeAudio().pause();sync();}
 }
 function loadFile(side,file,fromDemo=false){
  if(!["A","B"].includes(side)||!supported(file)){message("Выбери аудиофайл MP3, WAV, M4A или другого поддерживаемого формата.");return false;}
  const el=audio[side],previous=files[side],wasActive=state.active===side;
  el.pause();el.removeAttribute("src");el.load();
  if(previous)URL.revokeObjectURL(previous.url);
  const url=URL.createObjectURL(file);
  files[side]={name:(file.name||"Аудиоверсия").replace(/\.[a-z0-9]+$/i,""),url,demo:!!fromDemo,serial:++serial};
  state.waitingSeek[side]=null;
  el.src=url;el.load();
  if(wasActive){align(0);}
  message("Версия "+side+" добавлена. "+(files.A&&files.B?"Теперь можно сравнивать!":"Добавь вторую версию, чтобы переключаться между ними."));
  sync();return true;
 }
 function removeSide(side){
  const f=files[side];if(!f)return;
  const el=audio[side];el.pause();el.removeAttribute("src");el.load();URL.revokeObjectURL(f.url);
  files[side]=null;state.waitingSeek[side]=null;
  if(state.active===side&&files[side==="A"?"B":"A"])state.active=side==="A"?"B":"A";
  state.loop=false;message("Версия "+side+" удалена.");sync();
 }
 function segmentValid(){return state.segmentStart!==null&&state.segmentEnd!==null&&state.segmentEnd>=state.segmentStart+0.5}
 function loopCheck(){
  if(!state.loop||!segmentValid())return;
  const a=activeAudio();
  if(!a.paused&&a.currentTime>=state.segmentEnd-.04){safeSeek(a,state.segmentStart);}
 }
 function mark(type){
  if(!files[state.active]){message("Сначала загрузи аудиофайл.");return;}
  const p=currentPosition();
  if(type==="start"){state.segmentStart=p;if(state.segmentEnd!==null&&state.segmentEnd< p+0.5){state.segmentEnd=null;state.loop=false;}}
  else{if(state.segmentStart===null){message("Сначала отметь начало фрагмента.");return;}if(p<state.segmentStart+0.5){message("Отметь конец хотя бы на 0,5 секунды позже начала.");return;}state.segmentEnd=p;}
  message("");sync();
 }
 function toggleLoop(){
  if(!segmentValid()){message("Отметь начало и конец фрагмента перед включением повтора.");return;}
  state.loop=!state.loop;
  if(state.loop&&(currentPosition()<state.segmentStart||currentPosition()>=state.segmentEnd))align(state.segmentStart);
  message("");sync();
 }
 function step(amount){
  if(!files[state.active])return;
  let pos=currentPosition()+amount;
  if(state.loop&&segmentValid())pos=Math.min(Math.max(pos,state.segmentStart),state.segmentEnd-.02);
  align(Math.max(0,pos));sync();
 }
 function waveDemo(variant){
  const sr=22050,duration=10,n=sr*duration,buf=new ArrayBuffer(44+n*2),v=new DataView(buf),data=new Int16Array(buf,44);
  const str=(at,t)=>{for(let i=0;i<t.length;i++)v.setUint8(at+i,t.charCodeAt(i));};
  str(0,"RIFF");v.setUint32(4,buf.byteLength-8,true);str(8,"WAVE");str(12,"fmt ");v.setUint32(16,16,true);
  v.setUint16(20,1,true);v.setUint16(22,1,true);v.setUint32(24,sr,true);v.setUint32(28,sr*2,true);
  v.setUint16(32,2,true);v.setUint16(34,16,true);str(36,"data");v.setUint32(40,n*2,true);
  const melody=[220,261.63,329.63,293.66,261.63,196,246.94,220];
  for(let i=0;i<n;i++){
    const t=i/sr,slot=Math.floor(t*2)%melody.length,f=melody[slot],phase=t%0.5;
    const env=Math.exp(-phase*(variant?2.7:4.2));
    const tonal=Math.sin(2*Math.PI*f*t)*.19*env+Math.sin(2*Math.PI*f*2*t)*(variant?.075:.02)*env;
    const kickT=t%1,kick=.17*Math.sin(2*Math.PI*61*kickT)*Math.exp(-kickT*23);
    const hiT=t%.25,hi=.02*Math.sin(2*Math.PI*6900*t)*Math.exp(-hiT*60);
    const pulse=variant?Math.sin(2*Math.PI*110*t)*.035*(1+Math.sin(2*Math.PI*3*t)):.0;
    const amp=Math.min(1,t/.045,(duration-t)/.13);
    data[i]=Math.round(Math.max(-1,Math.min(1,(tonal+kick+hi+pulse)*Math.max(0,amp)))*32000);
  }
  return new File([buf],"SUNOBOOM — демо "+(variant?"B":"A")+".wav",{type:"audio/wav"});
 }
 function demos(){
   try{
    loadFile("A",waveDemo(0),true);loadFile("B",waveDemo(1),true);state.active="A";align(0);message("Две короткие тестовые версии готовы. Нажми ▶ и переключай A / B.");sync();
   }catch(e){message("Не удалось создать тестовые файлы в этом браузере. Загрузи свои аудиоверсии.");}
 }
 function report(){
   const lines=["SUNOBOOM · A/B сравнение","A: "+(files.A?.name||"Нет файла"),"B: "+(files.B?.name||"Нет файла"),""];
   for(const [key,label] of [["vocal","Вокал"],["arrangement","Аранжировка"],["mix","Сведение и мастеринг"]]){
     const score=n=>n?n+"/5":"не оценено";
     lines.push(label+": A "+score(scores.A[key])+" | B "+score(scores.B[key]));
   }
   lines.push("","Заметки A: "+(notes.A||"—"),"Заметки B: "+(notes.B||"—"));
   return lines.join("\n");
 }
 async function copyReport(){
   const text=report();
   try{
    if(!navigator.clipboard?.writeText)throw Error("no clipboard");
    await navigator.clipboard.writeText(text);message("Результаты сравнения скопированы.");
   }catch(e){
    const el=document.createElement("textarea");el.value=text;el.style.position="fixed";el.style.left="-200vw";document.body.appendChild(el);el.select();
    const ok=document.execCommand?.("copy");el.remove();message(ok?"Результаты сравнения скопированы.":"Копирование недоступно — попробуй ещё раз из обычного браузера.");
   }
 }
 const previousRender=render;
 render=function(){
   if(view.nav!=="player")pauseAB();
   const result=previousRender.apply(this,arguments);
   if(view.nav==="player"){wasInPlayer=true;mount();}
   else wasInPlayer=false;
   return result;
 };
 document.addEventListener("click",event=>{
   if(view.nav!=="player")return;
   const b=event.target?.closest?.("[data-sbab-action]");
   if(!b)return;
   const act=b.dataset.sbabAction;
   if(act==="mode"){setMode(b.dataset.mode);return;}
   if(state.mode!=="compare")return;
   if(act==="select")switchSide(b.dataset.side);
   else if(act==="toggle")toggle();
   else if(act==="back")step(-5);
   else if(act==="forward")step(5);
   else if(act==="remove")removeSide(b.dataset.side);
   else if(act==="demo")demos();
   else if(act==="mark-start")mark("start");
   else if(act==="mark-end")mark("end");
   else if(act==="loop")toggleLoop();
   else if(act==="clear-segment"){state.segmentStart=null;state.segmentEnd=null;state.loop=false;message("");sync();}
   else if(act==="copy")copyReport();
   else if(act==="reset-review"){
      for(const side of ["A","B"]){scores[side]={vocal:0,arrangement:0,mix:0};notes[side]="";}
      const r=document.querySelector(".sbab-review");if(r)r.outerHTML=reviewTable();
      message("Оценки и заметки очищены.");
   }
 });
 document.addEventListener("change",event=>{
   if(view.nav!=="player"||state.mode!=="compare")return;
   const e=event.target;
   if(e.dataset.sbabFile){const side=e.dataset.sbabFile;if(e.files?.length)loadFile(side,e.files[0]);e.value="";return;}
   if(e.dataset.sbabScore){const [side,key]=e.dataset.sbabScore.split(":");if(scores[side]&&["vocal","arrangement","mix"].includes(key)){const n=Number(e.value);scores[side][key]=Number.isInteger(n)&&n>=0&&n<=5?n:0;}}
 });
 document.addEventListener("input",event=>{
   if(view.nav!=="player"||state.mode!=="compare")return;
   const e=event.target;
   if(e.id==="sbab-seek"&&validDuration(activeAudio())){align(Number(e.value)/1000*activeAudio().duration);sync();}
   if(e.dataset.sbabVol){const side=e.dataset.sbabVol;if(audio[side])audio[side].volume=Math.max(0,Math.min(1,Number(e.value)/100));}
   if(e.dataset.sbabNote&&notes[e.dataset.sbabNote]!==undefined){notes[e.dataset.sbabNote]=e.value.slice(0,1000);}
 });
 document.addEventListener("keydown",event=>{
   if(view.nav!=="player"||state.mode!=="compare"||event.ctrlKey||event.altKey||event.metaKey)return;
   if(event.target?.closest?.("input,textarea,select,button,[contenteditable]"))return;
   if(event.code==="Space"){event.preventDefault();toggle();}
   else if(event.key.toLowerCase()==="a"&&files.A){switchSide("A");}
   else if(event.key.toLowerCase()==="b"&&files.B){switchSide("B");}
 });
 for(const side of ["A","B"]){
   const a=audio[side];
   a.addEventListener("play",sync);
   a.addEventListener("pause",sync);
   a.addEventListener("timeupdate",()=>{if(state.active===side){loopCheck();sync();}});
   a.addEventListener("loadedmetadata",()=>{
     if(state.waitingSeek[side]!==null){safeSeek(a,state.waitingSeek[side]);state.waitingSeek[side]=null;}
     sync();
   });
   a.addEventListener("durationchange",sync);
   a.addEventListener("ended",()=>{
     if(state.active!==side)return;
     if(state.loop&&segmentValid()){safeSeek(a,state.segmentStart);playActive();}
     else sync();
   });
   a.addEventListener("error",()=>{if(files[side])message("Не удалось воспроизвести версию "+side+". Проверь, поддерживается ли этот формат.");});
 }
 window.addEventListener("pagehide",()=>{
   pauseAB();
   for(const side of ["A","B"]){audio[side].removeAttribute("src");audio[side].load();if(files[side])URL.revokeObjectURL(files[side].url);files[side]=null;}
 });
 window.SUNOBOOM_AB_COMPARE=Object.freeze({version:"0.65",getActive:()=>state.active,hasBoth:()=>!!files.A&&!!files.B,isPlaying:()=>!activeAudio().paused&&!!files[state.active],getMode:()=>state.mode});
 if(view.nav==="player")render();
})();