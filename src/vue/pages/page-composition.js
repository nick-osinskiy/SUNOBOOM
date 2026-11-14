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

const nativeBoundaries=new Set(['sb-poetry-auto-stress','sb-gt-inner']);
const attributes=node=>Object.fromEntries([...node.attributes].filter(a=>!/^on/i.test(a.name)).map(a=>[a.name,a.value]));
const boolAttrs=['hidden','open','disabled','checked','multiple','readonly','selected','required','autofocus'];
function elementProps(node){
  const props=attributes(node);
  for(const key of boolAttrs)if(node.hasAttribute(key))props[key]=true;
  if(node.matches('input,select,textarea')){
    if(node.type==='file')delete props.value;else props.value=node.value;
    if(node.matches('input[type=checkbox],input[type=radio]'))props.checked=node.checked;
  }
  return props;
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
  const used=[];
  function encode(node){
    if(node.nodeType===3)return {text:node.nodeValue};
    if(node.nodeType!==1||node.localName==='script')return null;
    const feature=features.get(node),props=elementProps(node);
    if(nativeBoundaries.has(node.id))return {tag:node.localName,props:{...props,'data-sb-native-boundary':node.id},nativeNodes:[...node.childNodes]};
    if(feature){used.push(node.id||node.getAttribute('data-sb-workspace')||node.className);return {tag:node.localName,props:{...props,...feature.wrapperProps,'data-v-app':'','data-sb-composed-feature':''},feature};}

    return {tag:node.localName,props,children:[...node.childNodes].map(encode).filter(Boolean)};
  }
  const layout=[...page.childNodes].map(encode).filter(Boolean);
  if(!used.length)return null;
  return {layout,features:used};
}

export function restoreNativeBoundaries(root,layout){
  for(const node of layout){
    if(node.nativeNodes){const target=root.querySelector('#'+node.props.id);if(target)target.replaceChildren(...node.nativeNodes);}
    if(node.children)restoreNativeBoundaries(root,node.children);
  }
}
