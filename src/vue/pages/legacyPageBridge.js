import PageView from './PageView.vue';
import { composePage,captureFields,restoreFields,restoreNativeBoundaries } from './page-composition.js';
import { observeLegacyIsland } from '../legacy/observeLegacyIsland.js';

export function activateLegacyPages({mountVueFeature,activations,sharedUi}){
  const root=document.getElementById('app');
  if(!root)return ()=>{};
  return observeLegacyIsland({root,
    selectTarget:root=>root.querySelector('[data-sb-vue-page]'),
    readSnapshot:node=>{
      const fields=captureFields(node);
      try{return {model:composePage(node,activations,sharedUi),fields};}
      catch(error){node.setAttribute('data-sb-page-fallback','');console.warn('[SUNOBOOM] Page composition unavailable; native page retained.',error);return null;}
    },
    mount:(node,{model,fields})=>{
      if(!model){node.setAttribute('data-sb-page-fallback','');return null;}
      const stop=mountVueFeature(node,PageView,{model});
      if(!stop){node.setAttribute('data-sb-page-fallback','');restoreNativeBoundaries(node,model);restoreFields(node,fields);}
      else node.removeAttribute('data-sb-page-fallback');
      return stop;
    }
  });
}
