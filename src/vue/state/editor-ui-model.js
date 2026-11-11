// v0.176: aggregate draft indicators only; never copy lyrics, prompts or IDs.
const valid=(v,max)=>typeof v==='string'&&v.length<=max;
export function normalizeIdeaDraftSummary(v){
 if(!v||!valid(v.title,100)||!valid(v.genre,128)||!valid(v.text,3000)||!valid(v.hook,240))return null;
 return Object.freeze({ready:true,titleLength:v.title.length,ideaLength:v.text.length,
  hookLength:v.hook.length,hasTitle:!!v.title.trim(),hasGenre:!!v.genre.trim(),
  hasIdea:!!v.text.trim(),hasHook:!!v.hook.trim()});
}
export function normalizePromptDraftSummary(v,editing){
 if(!v||typeof editing!=='boolean'||!valid(v.title,100)||!valid(v.genre,128)||!valid(v.text,1000))return null;
 return Object.freeze({ready:true,editing,titleLength:v.title.length,textLength:v.text.length,
  hasTitle:!!v.title.trim(),hasGenre:!!v.genre.trim(),hasPrompt:!!v.text.trim()});
}
