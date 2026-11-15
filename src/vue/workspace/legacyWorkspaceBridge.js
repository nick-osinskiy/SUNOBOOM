import Notifications from './Notifications.vue';
import WorkspaceControls from './WorkspaceControls.vue';
import SongBlueprint from './SongBlueprint.vue';
import { observeLegacyIslands } from '../legacy/observeLegacyIslands.js';

const names=['stress-actions','tree-launch','artist-launch','notice-panel','notice-banner','back','quick-poetry','poetry-tools','idea-actions','prompt-actions','prompt-auditor','track-toolbar','dna-toolbar','blueprint','producer-create','producer-search','songs-header','songs-search','player-modes','mixer-banner','arranger-jump'];
export function activateLegacyWorkspace({mountVueFeature}) {
  const api=window.SUNOBOOM_WORKSPACE_UI,root=document.getElementById('app');
  if(!api||!root)return ()=>{};
  return observeLegacyIslands({root,islands:names.map(name=>({
    key:name,selectTarget:root=>root.querySelector(`[data-sb-workspace="${name}"]`),
    // The shell keeps the notification host alive while read markers change.
    readRevision:name==='notice-panel'?()=>JSON.stringify(api.snapshot(name)):undefined,
    readSnapshot:()=>api.snapshot(name),
    mount:(node,initial)=>{
      const stop=mountVueFeature(node,name.startsWith('notice-')?Notifications:name==='blueprint'?SongBlueprint:WorkspaceControls,{api,name,initial});
      // Restore live fields, not just the serialized value attributes, on failure.
      if(!stop){
        const values=({ 'producer-create':{'sbpc-new-title':initial.title,'sbpc-new-source':initial.source},'producer-search':{'sbpc-search':initial.query},'songs-search':{'sbsong-search':initial.query} })[name]||{};
        for(const [id,value] of Object.entries(values)){const field=node.querySelector('#'+id);if(field)field.value=value;}
      }
      return stop;
    }
  })),subscribe:sync=>{
    const events=['sunoboom:poetry-stress-ready','sunoboom:poetry-stress-closed'];
    for(const name of events)window.addEventListener(name,sync);
    return ()=>{for(const name of events)window.removeEventListener(name,sync);};
  }});
}
