import {pageLayout} from './page-layout-model.js';
import {rememberNativeBoundaries,restoreNativeBoundaries} from './native-boundary-handoff.js';
export {restoreNativeBoundaries};
import { withFeatureCollection } from '../legacy/featureCollection.js';

export function captureFields(root){
  return [...root.querySelectorAll('input,select,textarea,button')].map((node,index)=>({
    index,node,wrap:node._sbStressMirror?node.closest('.sb-stress-highlight-wrap'):null,
    id:node.id,name:node.name,value:node.value,checked:node.checked,
    start:node.selectionStart,end:node.selectionEnd,direction:node.selectionDirection
  }));
}
export function restoreFields(root,fields){
  const nodes=[...root.querySelectorAll('input,select,textarea,button')];
  for(const field of fields){
    const node=field.id?nodes.find(node=>node.id===field.id):nodes[field.index];
    if(!node)continue;
    if(node!==field.node){
      const wrap=node.closest('.sb-stress-highlight-wrap');
      if(field.wrap&&wrap)wrap.replaceWith(field.wrap);else node.replaceWith(field.node);
    }
    if(field.node.type!=='file')field.node.value=field.value;
    if(typeof field.checked==='boolean')field.node.checked=field.checked;
    if(typeof field.start==='number')try{field.node.setSelectionRange(field.start,field.end,field.direction);}catch{}
  }
}

export function composePage(page,activations,sharedUi){
  const features=new Map(),savedAttributes=new Map();
  const capture=(node,component,props={})=>{
    if(!page.contains(node))return ()=>{};
    if(!savedAttributes.has(node))savedAttributes.set(node,[...node.attributes].map(a=>[a.name,a.value]));
    features.set(node,{component,props});
    return ()=>{};
  };
  try{
    withFeatureCollection(({root,selectTarget,readSnapshot,mount})=>{
      const target=selectTarget(root);
      if(!target?.isConnected||!page.contains(target))return;
      const snapshot=readSnapshot(target);
      if(!snapshot)return;
      mount(target,snapshot);
      const feature=features.get(target);
      // Components that read an API in setup must receive the first snapshot
      // captured while the native fields still exist. Later reads stay live.
      if(feature?.props.api?.snapshot){
        const definition=feature.component.props||{};
        const explicit=['model','initial','initialModel','snapshot'].some(k=>k in definition&&k in feature.props);
        if(!explicit){
          const api=feature.props.api;let first=true;
          feature.props={...feature.props,api:{...api,snapshot(...args){
            if(first&&!args.length){first=false;return snapshot;}
            return api.snapshot(...args);
          }}};
        }
      }
    },()=>{for(const activate of activations)activate({mountVueFeature:capture,sharedUi});});
  }finally{
    // A compatibility bridge may set a marker after its mount callback.
    for(const [node,attrs] of savedAttributes){
      const before=new Map(attrs),feature=features.get(node);
      if(feature)feature.wrapperProps=Object.fromEntries([...node.attributes].filter(a=>before.get(a.name)!==a.value).map(a=>[a.name,a.value]));
      for(const a of [...node.attributes])node.removeAttribute(a.name);
      for(const [name,value] of attrs)node.setAttribute(name,value);
    }
  }
  const snapshot=window.SUNOBOOM_PAGE_STATE?.snapshot();
  if(!snapshot)return null;
  const declared=pageLayout(snapshot),byKey=new Map();
  for(const [node,feature]of features)byKey.set(node.id||node.getAttribute('data-sb-workspace')||(node.hasAttribute('data-sb-arranger-controls')?'arranger-controls:'+node.getAttribute('data-sb-arranger-controls'):node.className),feature);
  const used=[],boundaries=new Map();
  function connect(node){
    if(node.slot){const feature=byKey.get(node.slot);if(!feature)throw Error('Missing page feature: '+node.slot);used.push(node.slot);return {tag:node.tag,props:{...node.props,...feature.wrapperProps,'data-v-app':'','data-sb-composed-feature':''},feature};}
    if(node.native){const boundary=page.querySelector('#'+node.props.id);if(!boundary)throw Error('Missing native editor boundary: '+node.props.id);boundaries.set(node.props.id,[...boundary.childNodes]);return {tag:node.tag,props:node.props,nativeBoundary:node.props.id};}
    if(node.children)return {...node,children:node.children.map(connect)};
    return node;
  }
  const model={layout:declared.map(connect),features:used};rememberNativeBoundaries(model,boundaries);return model;
}
