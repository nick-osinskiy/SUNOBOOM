/* SUNOBOOM • Player Lab v0.60. No external services: local files + browser Audio API. */
(function installSunoboomPlayer(){
  "use strict";
  if(typeof navs==="undefined"||typeof chrome!=="function"||typeof render!=="function")return;
  if(!navs.some(n=>n[0]==="player"))navs.splice(4,0,["player","Плеер","music"]);
  const KEY="sunoboom-player-lab-v060-prefs";
  const IS_IOS=typeof navigator!=="undefined"&&(/iPad|iPhone|iPod/.test(navigator.userAgent||"")||(navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1));
  const E=x=>escapeHTML(String(x??""));
  const icon=(name)=>I(name);
  let settings={volume:0.85,rate:1,repeat:"off",shuffle:false};
  try{
    const saved=JSON.parse(localStorage.getItem(KEY)||"{}");
    if(Number.isFinite(saved.volume))settings.volume=Math.min(1,Math.max(0,saved.volume));
    if([0.75,1,1.25,1.5,2].includes(saved.rate))settings.rate=saved.rate;
    if(["off","all","one"].includes(saved.repeat))settings.repeat=saved.repeat;
    settings.shuffle=saved.shuffle===true;
  }catch(e){}
  const save=()=>{try{localStorage.setItem(KEY,JSON.stringify(settings));}catch(e){}};
  const tracks=[];
  let cursor=-1, counter=0, dragCounter=0, hasPlayIntent=false, inPlayer=false;
  const audio=new Audio();
  audio.preload="metadata";
  audio.volume=settings.volume;
  audio.playbackRate=settings.rate;
  audio.playsInline=true;

  const formatTime=value=>{
    if(!Number.isFinite(value)||value<0)return "0:00";
    const s=Math.floor(value);
    return Math.floor(s/60)+":"+String(s%60).padStart(2,"0");
  };
  const current=()=>tracks[cursor]||null;
  const notice=message=>{
    const node=document.getElementById("sbp-message");
    if(node){node.textContent=message;node.hidden=!message;}
    else if(typeof toast==="function")toast(message);
  };
  const prefsLabel=()=>settings.repeat==="one"?"Повтор трека":settings.repeat==="all"?"Повтор списка":"Повтор выключен";
  const waveform=Array.from({length:37},(_,i)=>'<i style="--sbp-i:'+i+';--sbp-h:'+(17+((i*37+i*i*19)%72))+'%"></i>').join("");

  function page(){
    return '<section class="sbp-wrap" id="sbp-page">'+
      '<header class="sbp-hero"><div><span class="sbp-eyebrow">SUNOBOOM · ЭКСПЕРИМЕНТАЛЬНАЯ ЗОНА</span><h1>Аудиоплеер <em>LAB</em></h1><p>Тестируем музыкальный плеер перед интеграцией с проектами и паспортами треков. Здесь можно слушать свои аудиофайлы прямо на устройстве.</p></div><span class="sbp-test-badge">🧪 ТЕСТОВАЯ ВЕРСИЯ</span></header>'+
      '<div class="sbp-layout"><section class="sbp-main" aria-label="Плеер">'+
        '<div class="sbp-art"><div class="sbp-art-orb">♫</div><div class="sbp-bars" aria-hidden="true">'+waveform+'</div><span>SONIC LAB / PRIVATE PREVIEW</span></div>'+
        '<div class="sbp-title-area"><div><div id="sbp-now-tag" class="sbp-now-tag">НЕТ ТРЕКА</div><h2 id="sbp-title">Добавь аудиофайл</h2><p id="sbp-artist">или попробуй встроенный демо-звук</p></div><span id="sbp-counter" class="sbp-counter">0 / 0</span></div>'+
        '<div class="sbp-progress"><label for="sbp-seek" class="sbp-sr">Позиция воспроизведения</label><input id="sbp-seek" type="range" min="0" max="1000" step="1" value="0" aria-label="Перемотка трека" disabled><div class="sbp-times"><span id="sbp-time-current">0:00</span><span id="sbp-time-total">0:00</span></div></div>'+
        '<div class="sbp-transport"><button type="button" class="sbp-secondary" data-sbp-action="shuffle" id="sbp-shuffle" aria-label="Случайный порядок" aria-pressed="false" title="Случайный порядок">⤨</button><button type="button" class="sbp-secondary sbp-skip" data-sbp-action="prev" aria-label="Предыдущий трек"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M6 5v14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/><path d="M18 5 8 12l10 7V5Z" fill="currentColor"/></svg></button><button type="button" class="sbp-play" id="sbp-play" data-sbp-action="play" aria-label="Воспроизвести">▶</button><button type="button" class="sbp-secondary sbp-skip" data-sbp-action="next" aria-label="Следующий трек"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M18 5v14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/><path d="m6 5 10 7-10 7V5Z" fill="currentColor"/></svg></button><button type="button" class="sbp-secondary" data-sbp-action="repeat" id="sbp-repeat" title="Режим повтора" aria-label="Режим повтора">↻</button></div>'+
        '<div class="sbp-extras"><div class="sbp-volume">'+(IS_IOS?'<span class="sbp-ios-volume">📱 Громкость регулируется кнопками iPhone</span>':'<label for="sbp-volume">Громкость</label><span id="sbp-volume-icon" aria-hidden="true">◖))</span><input id="sbp-volume" type="range" min="0" max="100" value="85" aria-label="Громкость"><output id="sbp-volume-label">85%</output>')+'</div><label class="sbp-speed" for="sbp-rate">Скорость <select id="sbp-rate" aria-label="Скорость воспроизведения"><option value="0.75">0.75×</option><option value="1">1×</option><option value="1.25">1.25×</option><option value="1.5">1.5×</option><option value="2">2×</option></select></label></div>'+
        '<div class="sbp-message" id="sbp-message" role="status" aria-live="polite" hidden></div>'+
      '</section><aside class="sbp-side"><div class="sbp-side-head"><div><h2>Очередь воспроизведения</h2><small id="sbp-list-count">0 аудиофайлов</small></div><button type="button" class="sbp-clear" data-sbp-action="clear" id="sbp-clear">Очистить</button></div>'+
        '<div class="sbp-dropzone" id="sbp-dropzone"><div class="sbp-drop-icon">'+icon("upload")+'</div><strong>Загрузи свои треки</strong><p>MP3, WAV, M4A, AAC, OGG, FLAC — если формат поддерживается браузером. Файлы никуда не отправляются.</p><label class="sbp-upload-label" for="sbp-file">Выбрать аудиофайлы</label><input id="sbp-file" type="file" accept="audio/*,.mp3,.m4a,.aac,.wav,.ogg,.flac,.opus" multiple></div>'+
        '<div class="sbp-demo-box"><div><strong>Нет аудиофайлов?</strong><p>Создать 3 коротких оригинальных демо-сигнала для проверки управления.</p></div><button type="button" data-sbp-action="demo" id="sbp-demo">+ Демо-треки</button></div>'+
        '<div class="sbp-track-list" id="sbp-list" aria-label="Список треков"></div>'+
      '</aside></div>'+
      '<section class="sbp-bottom"><div><strong>🔒 Приватность</strong><p>Локальные аудиофайлы воспроизводятся из памяти браузера и не загружаются на сервер SUNOBOOM.</p></div><div><strong>💾 Сохранение</strong><p>После обновления вкладки файлы нужно добавить заново. Сохраняются только настройки громкости, скорости и повтора.</p></div><div><strong>🔧 Тестовый режим</strong><p>Плеер пока не привязан к «Паспорту трека», «Моим проектам» и другим инструментам сайта.</p></div></section>'+
    '</section>';
  }

  function renderList(){
    const list=document.getElementById("sbp-list");
    if(!list)return;
    const count=document.getElementById("sbp-list-count");
    if(count)count.textContent=tracks.length+" "+(tracks.length===1?"трек":tracks.length>1&&tracks.length<5?"трека":"треков");
    const clear=document.getElementById("sbp-clear");
    if(clear)clear.disabled=!tracks.length;
    list.innerHTML=tracks.length?tracks.map((t,i)=>
      '<article class="sbp-track'+(i===cursor?" is-current":"")+'" data-sbp-item="'+t.id+'">'+
        '<button type="button" class="sbp-track-play" data-sbp-action="select" data-index="'+i+'" aria-label="Включить '+E(t.name)+'"><span class="sbp-track-index">'+(i===cursor&&!audio.paused?"♫":String(i+1).padStart(2,"0"))+'</span><span class="sbp-track-meta"><strong>'+E(t.name)+'</strong><small>'+E(t.artist)+' · '+E(t.source==="demo"?"Демо-сигнал":"Локальный файл")+'</small></span></button>'+
        '<span class="sbp-track-duration">'+(Number.isFinite(t.duration)?formatTime(t.duration):"—")+'</span><button type="button" class="sbp-track-remove" data-sbp-action="remove" data-index="'+i+'" title="Удалить из списка" aria-label="Удалить '+E(t.name)+'">×</button>'+
      '</article>'
    ).join(""):'<div class="sbp-empty">Плейлист пока пуст. Добавь MP3 или нажми «Демо-треки», чтобы начать тест.</div>';
  }
  function sync(){
    if(view.nav!=="player")return;
    const t=current(),playing=!!t&&!audio.paused&&!audio.ended;
    const put=(id,value)=>{const n=document.getElementById(id);if(n)n.textContent=value;};
    put("sbp-title",t?t.name:"Добавь аудиофайл");
    put("sbp-artist",t?t.artist:"или попробуй встроенный демо-звук");
    put("sbp-counter",t?(cursor+1)+" / "+tracks.length:"0 / "+tracks.length);
    put("sbp-now-tag",t?(playing?"● ВОСПРОИЗВЕДЕНИЕ":audio.ended?"● ЗАВЕРШЕНО":"● ГОТОВ К ПРОСЛУШИВАНИЮ"):"НЕТ ТРЕКА");
    put("sbp-time-current",formatTime(audio.currentTime));
    const duration=Number.isFinite(audio.duration)?audio.duration:(t?.duration||0);
    put("sbp-time-total",formatTime(duration));
    const seek=document.getElementById("sbp-seek");
    if(seek){seek.disabled=!t||!Number.isFinite(audio.duration)||audio.duration<=0;seek.value=seek.disabled?0:Math.round(audio.currentTime/audio.duration*1000);seek.style.setProperty("--fill",(Number(seek.value)/10)+"%");}
    const button=document.getElementById("sbp-play");
    if(button){button.textContent=playing?"❚❚":"▶";button.setAttribute("aria-label",playing?"Пауза":"Воспроизвести");button.disabled=!tracks.length;}
    const volume=document.getElementById("sbp-volume");
    if(volume)volume.value=Math.round(audio.volume*100);
    put("sbp-volume-label",Math.round(audio.volume*100)+"%");
    const speed=document.getElementById("sbp-rate");
    if(speed)speed.value=String(audio.playbackRate);
    const shuffle=document.getElementById("sbp-shuffle");
    if(shuffle){shuffle.classList.toggle("is-on",settings.shuffle);shuffle.setAttribute("aria-pressed",String(settings.shuffle));}
    const repeat=document.getElementById("sbp-repeat");
    if(repeat){repeat.classList.toggle("is-on",settings.repeat!=="off");repeat.textContent=settings.repeat==="one"?"↻₁":"↻";repeat.title=prefsLabel();repeat.setAttribute("aria-label",prefsLabel());}
    const visual=document.querySelector(".sbp-art");
    if(visual)visual.classList.toggle("is-playing",playing);
  }
  function update(){
    renderList();sync();
  }
  function assign(i){
    if(i<0||i>=tracks.length)return false;
    cursor=i;
    const t=current();
    audio.pause();
    audio.src=t.url;
    audio.load();
    audio.playbackRate=settings.rate;audio.volume=settings.volume;
    notice("");
    update();updateMediaSession();
    return true;
  }
  function play(){
    if(!tracks.length){notice("Сначала добавь трек или тестовые демо-сигналы.");return;}
    if(cursor<0)assign(0);
    hasPlayIntent=true;
    const result=audio.play();
    if(result?.catch)result.catch(err=>{hasPlayIntent=false;notice("Не получилось воспроизвести аудио. Проверь формат файла или попробуй другой трек.");sync();});
    sync();
  }
  function togglePlay(){
    if(!audio.paused){audio.pause();hasPlayIntent=false;}
    else play();
  }
  function step(direction,fromEnd=false){
    if(!tracks.length)return;
    if(direction<0&&audio.currentTime>3&&!fromEnd){audio.currentTime=0;sync();return;}
    let target=cursor+direction;
    if(direction>0&&settings.shuffle&&tracks.length>1){
      target=(cursor+1+Math.floor(Math.random()*(tracks.length-1)))%tracks.length;
    }
    if(target<0||target>=tracks.length){
      if(settings.repeat==="all")target=(target+tracks.length)%tracks.length;
      else if(fromEnd){audio.pause();hasPlayIntent=false;sync();return;}
      else target=Math.max(0,Math.min(tracks.length-1,target));
    }
    const auto=fromEnd||(!audio.paused&&hasPlayIntent);
    if(assign(target)&&auto)play();
  }
  function addFiles(files){
    const candidates=[...files].filter(f=>f&&(/audio\//.test(f.type)||/\.(mp3|m4a|aac|wav|ogg|opus|flac|aiff|wma)$/i.test(f.name)));
    if(!candidates.length){notice("Аудиофайлы не найдены. Выбери MP3, WAV, M4A или другой поддерживаемый формат.");return;}
    const space=Math.max(0,150-tracks.length);
    if(!space){notice("В тестовом плейлисте ограничение — 150 файлов.");return;}
    for(const f of candidates.slice(0,space)){
      const name=f.name.replace(/\.[^/.]+$/,"").trim()||f.name;
      const url=URL.createObjectURL(f);
      tracks.push({id:"file-"+(++counter),name,artist:"Мой аудиофайл",source:"local",url,duration:null});
    }
    if(cursor<0)assign(0);
    update();notice("Добавлено аудиофайлов: "+Math.min(candidates.length,space)+". Файлы остались на твоём устройстве.");
  }
  function makeDemo(variant){
    /* Original deterministic test beat rendered into a mono WAV, 12 seconds, without network. */
    const sr=22050,seconds=12,n=sr*seconds,pcm=new Int16Array(n);
    const freqs=[[220,261.63,329.63,392],[174.61,220,261.63,349.23],[293.66,349.23,440,523.25]][variant];
    const beat=variant===1?0.6:variant===2?0.4:0.5;
    let seed=variant*7919+4231;
    for(let i=0;i<n;i++){
      const t=i/sr,beatPos=t%beat,beatNum=Math.floor(t/beat),step=Math.floor(t/(beat/2));
      const f=freqs[(Math.floor(t/(beat*2))+(variant===2?Math.floor(t/(beat*4)):0))%freqs.length];
      const noteDur=variant===2?beat/2:beat,within=t%noteDur;
      const env=Math.exp(-within*(variant===1?4.5:3));
      const fundamental=Math.sin(2*Math.PI*f*t)*(variant===1?0.13:0.16);
      const upper=Math.sin(2*Math.PI*2*f*t)*(variant===0?0.07:0.04);
      const synth=(fundamental+upper)*env;
      const kickPhase=t%(2*beat);
      const kick=Math.sin(2*Math.PI*(72-40*Math.min(1,kickPhase/.16))*kickPhase)*Math.exp(-kickPhase*25)*0.2;
      const snarePhase=(t+beat)%(2*beat);
      seed=(seed*1664525+1013904223)>>>0;
      const noise=((seed/4294967295)*2-1);
      const snare=(variant===1?0.12:0.1)*noise*Math.exp(-snarePhase*30);
      const hat=noise*0.018*Math.exp(-(t%(beat/2))*85);
      const fade=Math.min(1,t/.035,(seconds-t)/.15);
      const x=Math.max(-1,Math.min(1,(synth+kick+snare+hat)*Math.max(0,fade)));
      pcm[i]=Math.round(x*32000);
    }
    const buf=new ArrayBuffer(44+pcm.byteLength),v=new DataView(buf);
    const str=(p,x)=>{for(let i=0;i<x.length;i++)v.setUint8(p+i,x.charCodeAt(i));};
    str(0,"RIFF");v.setUint32(4,buf.byteLength-8,true);str(8,"WAVE");str(12,"fmt ");v.setUint32(16,16,true);
    v.setUint16(20,1,true);v.setUint16(22,1,true);v.setUint32(24,sr,true);v.setUint32(28,sr*2,true);
    v.setUint16(32,2,true);v.setUint16(34,16,true);str(36,"data");v.setUint32(40,pcm.byteLength,true);
    new Int16Array(buf,44).set(pcm);
    return URL.createObjectURL(new Blob([buf],{type:"audio/wav"}));
  }
  function demo(){
    if(tracks.some(t=>t.source==="demo")){notice("Демо-сигналы уже есть в списке.");return;}
    const demos=[["Тестовый грув","Оригинальный синтез · демонстрация"],["Мягкие клавиши","Оригинальный синтез · демонстрация"],["Быстрый ритм","Оригинальный синтез · демонстрация"]];
    for(let i=0;i<demos.length;i++){
      try{
        tracks.push({id:"demo-"+(++counter),name:demos[i][0],artist:demos[i][1],source:"demo",url:makeDemo(i),duration:12});
      }catch(err){notice("Браузер не смог создать тестовый звук. Используй собственный аудиофайл.");break;}
    }
    if(cursor<0&&tracks.length)assign(0);
    update();
  }
  function remove(index){
    if(index<0||index>=tracks.length)return;
    const removed=tracks[index];
    const wasCurrent=index===cursor,wasPlaying=wasCurrent&&!audio.paused;
    if(wasCurrent){audio.pause();audio.removeAttribute("src");audio.load();}
    tracks.splice(index,1);
    URL.revokeObjectURL(removed.url);
    if(!tracks.length){cursor=-1;hasPlayIntent=false;}
    else if(wasCurrent){assign(Math.min(index,tracks.length-1));if(wasPlaying)play();}
    else if(index<cursor)cursor--;
    update();
  }
  function clear(){
    audio.pause();audio.removeAttribute("src");audio.load();
    tracks.forEach(t=>URL.revokeObjectURL(t.url));tracks.length=0;cursor=-1;hasPlayIntent=false;
    update();notice("Плейлист очищен.");
  }
  function updateMediaSession(){
    if(!("mediaSession" in navigator))return;
    const t=current();if(!t)return;
    try{
      navigator.mediaSession.metadata=new MediaMetadata({title:t.name,artist:t.artist,album:"SUNOBOOM · Плеер LAB"});
      navigator.mediaSession.setActionHandler("play",()=>play());
      navigator.mediaSession.setActionHandler("pause",()=>{audio.pause();sync();});
      navigator.mediaSession.setActionHandler("previoustrack",()=>step(-1));
      navigator.mediaSession.setActionHandler("nexttrack",()=>step(1));
      navigator.mediaSession.setActionHandler("seekto",details=>{if(Number.isFinite(details.seekTime)&&Number.isFinite(audio.duration))audio.currentTime=Math.min(audio.duration,Math.max(0,details.seekTime));});
    }catch(e){}
  }
  function restorePage(){
    if(view.nav==="player"){
      inPlayer=true;
      const app=document.getElementById("app");
      if(app)app.innerHTML=chrome(page());
      update();
      const input=document.getElementById("sbp-file");
      if(input)input.value="";
    }else{
      if(inPlayer){audio.pause();hasPlayIntent=false;inPlayer=false;}
    }
  }
  const previousRender=render;
  render=function(){
    if(view.nav==="player"){restorePage();return;}
    restorePage();
    return previousRender.apply(this,arguments);
  };
  audio.addEventListener("play",sync);
  audio.addEventListener("pause",sync);
  audio.addEventListener("loadedmetadata",()=>{
    if(current()&&Number.isFinite(audio.duration)){current().duration=audio.duration;renderList();}
    sync();
  });
  audio.addEventListener("timeupdate",sync);
  audio.addEventListener("durationchange",sync);
  audio.addEventListener("ended",()=>{
    if(settings.repeat==="one"){audio.currentTime=0;play();}
    else step(1,true);
  });
  audio.addEventListener("error",()=>{
    if(!current())return;
    notice("Этот файл не воспроизводится в браузере. Попробуй MP3 или WAV.");
  });
  document.addEventListener("click",event=>{
    const b=event.target.closest?.("[data-sbp-action]");
    if(!b||view.nav!=="player")return;
    const act=b.dataset.sbpAction;
    if(act==="play")togglePlay();
    else if(act==="prev")step(-1);
    else if(act==="next")step(1);
    else if(act==="select"){const index=Number(b.dataset.index);if(Number.isInteger(index)&&assign(index))play();}
    else if(act==="remove"){const index=Number(b.dataset.index);if(Number.isInteger(index))remove(index);}
    else if(act==="clear")clear();
    else if(act==="demo")demo();
    else if(act==="shuffle"){settings.shuffle=!settings.shuffle;save();sync();}
    else if(act==="repeat"){settings.repeat=({off:"all",all:"one",one:"off"})[settings.repeat];save();sync();}
  });
  document.addEventListener("change",event=>{
    if(view.nav!=="player")return;
    const el=event.target;
    if(el.id==="sbp-file"){addFiles(el.files||[]);el.value="";}
    if(el.id==="sbp-rate"){const rate=Number(el.value);if([0.75,1,1.25,1.5,2].includes(rate)){settings.rate=rate;audio.playbackRate=rate;save();sync();}}
  });
  document.addEventListener("input",event=>{
    if(view.nav!=="player")return;
    const el=event.target;
    if(el.id==="sbp-volume"){settings.volume=Math.max(0,Math.min(1,Number(el.value)/100));audio.volume=settings.volume;save();sync();}
    if(el.id==="sbp-seek"&&Number.isFinite(audio.duration)&&audio.duration>0){audio.currentTime=Math.min(audio.duration,Math.max(0,Number(el.value)/1000*audio.duration));sync();}
  });
  document.addEventListener("dragover",event=>{
    if(view.nav!=="player"||!event.target.closest?.("#sbp-dropzone"))return;
    event.preventDefault();event.dataTransfer.dropEffect="copy";
    document.getElementById("sbp-dropzone")?.classList.add("sbp-is-dragging");
  });
  document.addEventListener("dragleave",event=>{
    if(view.nav!=="player"||!event.target.closest?.("#sbp-dropzone"))return;
    const zone=document.getElementById("sbp-dropzone");
    if(zone&&!zone.contains(event.relatedTarget))zone.classList.remove("sbp-is-dragging");
  });
  document.addEventListener("drop",event=>{
    if(view.nav!=="player"||!event.target.closest?.("#sbp-dropzone"))return;
    event.preventDefault();document.getElementById("sbp-dropzone")?.classList.remove("sbp-is-dragging");
    if(event.dataTransfer?.files)addFiles(event.dataTransfer.files);
  });
  document.addEventListener("keydown",event=>{
    if(view.nav!=="player"||event.altKey||event.ctrlKey||event.metaKey)return;
    if(event.target.closest?.("button,input,textarea,select,[contenteditable='true']"))return;
    if(event.code==="Space"){event.preventDefault();togglePlay();}
    else if(event.code==="ArrowRight"&&Number.isFinite(audio.duration)){event.preventDefault();audio.currentTime=Math.min(audio.duration,audio.currentTime+5);}
    else if(event.code==="ArrowLeft"){event.preventDefault();audio.currentTime=Math.max(0,audio.currentTime-5);}
  });
  window.addEventListener("pagehide",()=>{
    audio.pause();tracks.forEach(t=>URL.revokeObjectURL(t.url));tracks.length=0;cursor=-1;
  });
  /* Expose a read-only diagnostics surface for future integration and test scripts. */
  window.SUNOBOOM_PLAYER_LAB=Object.freeze({version:"0.60",getTrackCount:()=>tracks.length,getCurrentTitle:()=>current()?.name||"",getPlaying:()=>!audio.paused&&!!current(),getAudioElement:()=>audio});
  render();
})();