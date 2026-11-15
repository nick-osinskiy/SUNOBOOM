import {toRaw} from 'vue';
// Live editor nodes are UI resources, never part of a page's data model.
const handoffs=new WeakMap();
export function rememberNativeBoundaries(model,boundaries){handoffs.set(toRaw(model),boundaries);}
export function attachNativeBoundary(model,id,target){
 const nodes=handoffs.get(toRaw(model))?.get(id);
 if(target&&nodes)target.replaceChildren(...nodes);
}
export function restoreNativeBoundaries(root,model){
 for(const id of handoffs.get(toRaw(model))?.keys()||[]){
  attachNativeBoundary(model,id,root.querySelector('#'+id));
 }
}
