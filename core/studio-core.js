/* Canonical ephemeral Studio builder and unchanged prompt compiler. */
(function(root){'use strict';
function create({getGenre,getGenres=()=>[],random=()=>Math.random()}){
const findGenre=getGenre,state={genre:'alternative-rock',mood:'melancholic',vocal:'male',language:'Russian',tempo:115,energy:'medium',theme:'Поиск себя в большом городе',extra:'',studio:true,noWhisper:true,noChoir:true,noIntro:false};let mixerCompiler;
function basePrompt(builder){const g=findGenre(builder.genre),voice=({male:'expressive clean male vocals',female:'expressive clean female vocals',duet:'expressive male and female duet'})[builder.vocal],energy=({soft:'restrained intimate energy',medium:'dynamic balanced energy',high:'powerful high energy'})[builder.energy];let parts=[g.name+' music',`${builder.tempo} BPM`,`${builder.mood} mood`,g.style,energy,voice,`${builder.language} lyrics`];if(builder.theme.trim())parts.push('song about '+builder.theme.trim());if(builder.extra.trim())parts.push(builder.extra.trim());if(builder.studio)parts.push('clean studio production, no live ambience, no crowd noise');if(builder.noWhisper)parts.push('no whispering');if(builder.noChoir)parts.push('no choir');if(builder.noIntro)parts.push('start immediately with lead vocals, no long intro');let s=parts.join(', ')+'.';if(s.length>1000){s=parts.slice(0,7).join(', ')+'.'}return s}
function prompt(candidate=state){return mixerCompiler&&Array.isArray(candidate.mixerBlend)&&candidate.mixerBlend.length>=2?mixerCompiler(candidate.mixerBlend,{...candidate,noLive:candidate.studio,noRasp:candidate.mixerNoRasp!==false,autoTempo:false}):basePrompt(candidate);}
function execute(name,p={}){
 const mood=value=>['dark','romantic','uplifting','dreamy','nostalgic','melancholic','energetic'].includes(value)?value:'energetic';
 if(name==='useGenre'){const g=findGenre(p.id);return execute('patch',{genre:p.id,tempo:Math.round((g.bpm[0]+g.bpm[1])/2),...(p.soft?{energy:'soft',mood:'melancholic'}:{})});}
 if(name==='useManualIdea'){const x=p.idea;if(!x)return {ok:false,error:'Идея не найдена.'};const g=findGenre(x.genre);return execute('patch',{genre:x.genre,tempo:Math.round((g.bpm[0]+g.bpm[1])/2),theme:(x.title+': '+x.pitch+(x.hook?' Припев: '+x.hook:'')).slice(0,450)});}
 if(name==='useGeneratedIdea'){const x=p.idea;if(!x)return {ok:false,error:'Идея не найдена.'};const g=findGenre(x.genre);return execute('patch',{genre:g.id,tempo:Math.round((g.bpm[0]+g.bpm[1])/2),mood:x.mood,vocal:x.vocal,language:x.language,energy:x.mood==='energetic'?'high':x.mood==='melancholic'?'soft':'medium',theme:[x.title+': '+x.pitch,x.detail?'Деталь: '+x.detail:'','Хук: '+x.hook].filter(Boolean).join(' ').slice(0,400)});}
 if(name==='useCatalogIdea'){const g=findGenre(p.id),x=g.ideas?.[p.index];if(!x)return {ok:false,error:'Идея не найдена.'};return execute('patch',{genre:p.id,tempo:Math.round((g.bpm[0]+g.bpm[1])/2),theme:x.title+': '+x.pitch,mood:mood(x.mood)});}
 if(name==='randomIdea'){const genres=getGenres(),g=genres[Math.floor(random()*genres.length)],x=g?.ideas?.[Math.floor(random()*(g?.ideas?.length||0))];if(!x)return {ok:false,error:'Идея не найдена.'};return execute('patch',{genre:g.id,theme:x.pitch,mood:mood(x.mood)});}

 if(name==='dna'){const a=p.dna,next=structuredClone(state);
 if(!a)return {ok:false,error:"ДНК не найдена."};
 if(getGenre(a.genre)?.id===a.genre)next.genre=a.genre;
 if(['male','female','duet'].includes(a.vocal))next.vocal=a.vocal;
 if(['Russian','English','Spanish','Kazakh'].includes(a.language))next.language=a.language;
 if(a.tempoMin){
  const min=Number(a.tempoMin),max=Number(a.tempoMax)||min;
  next.tempo=Math.min(200,Math.max(65,Math.round((min+max)/2)));
 }
 if(a.noWhisper)next.noWhisper=true;
 if(a.noLive)next.studio=true;
 if(a.noChoir)next.noChoir=true;

 next.extra='';
 const baseline=prompt(next);
 const allowed=Math.max(0,990-baseline.length-3);
 const style=String(p.style||'');
 let cut=style.slice(0,allowed);
 if(cut.length<style.length&&cut.lastIndexOf(',')>cut.length*.45)cut=cut.slice(0,cut.lastIndexOf(','));
 next.extra=cut.replace(/[,;.\s]+$/,'').trim();
 if(prompt(next).length>1000)next.extra='';
 Object.assign(state,next);return {ok:true,value:state};

}
 if(name==='patch'){for(const [key,value]of Object.entries(p))if(Object.hasOwn(state,key)||['mixerBlend','mixerNoRasp'].includes(key))state[key]=structuredClone(value);return {ok:true,value:state};}
 if(name==='field'&&Object.hasOwn(state,p.key)){
  state[p.key]=p.value;if(p.key==='genre'){const g=findGenre(p.value);state.tempo=Math.round((g.bpm[0]+g.bpm[1])/2);state.theme='';state.mixerBlend=null;}return {ok:true,value:state};
 }
 return {ok:false,error:'Неизвестный параметр Studio.'};
}
return Object.freeze({state,execute,prompt,setMixerCompiler:compiler=>{mixerCompiler=compiler;}});
}
root.SUNOBOOM_STUDIO_FACTORY=Object.freeze({create});
})(globalThis);
