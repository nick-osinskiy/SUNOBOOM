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


function controlKey(node){
 if(node.id)return node.id;
 if(node.dataset?.sbsongVersionTitle)return 'version-title:'+node.dataset.sbsongVersionTitle;
 if(node.dataset?.sbsongVersionNote)return 'version-note:'+node.dataset.sbsongVersionNote;
 if(node.dataset?.pcStage)return 'stage:'+node.dataset.pcStage;
 return '';
}
// Capture only transient input values at the UI boundary, never serialized HTML.
export function captureInputs(root){
 const fields={},named={};
 for(const node of root?.querySelectorAll('input,select,textarea')||[]){
  const value={value:node.value,checked:node.checked,_sbStressMirror:!!node._sbStressMirror};
  if(typeof node.selectionStart==='number')Object.assign(value,{start:node.selectionStart,end:node.selectionEnd,direction:node.selectionDirection});
  const key=controlKey(node);if(key)fields[key]=value;
  if(node.name)(named[node.name]??=[]).push(value);
 }
 const analysis=root?.querySelector('#sb-poetry-result');
 if(analysis)fields['sb-poetry-result']={dataset:{analyzed:analysis.dataset.analyzed,poetryDirty:analysis.dataset.poetryDirty}};
 const active=root?.ownerDocument?.activeElement;
 return {fields,named,...(active&&root.contains(active)?{focus:controlKey(active)}:{})};
}
export function captureBoundaries(root){
 const boundaries=new Map();
 for(const node of root?.querySelectorAll('[data-sb-native-boundary],#sb-poetry-auto-stress,#sb-gt-inner')||[])if(node.id)boundaries.set(node.id,[...node.childNodes]);
 return boundaries;
}

// The initial native-to-Vue handoff restores raw, uncontrolled drafts and caret
// positions without dispatching input/change or writing any user records.
export function restoreInputValues(root,inputs){
 for(const node of root?.querySelectorAll('input,select,textarea')||[]){
  const key=controlKey(node),value=inputs?.fields?.[key];
  if(!value||node.type==='file')continue;
  node.value=value.value;
  if(typeof value.checked==='boolean')node.checked=value.checked;
  if(inputs.focus===key)node.focus({preventScroll:true});
  if(typeof value.start==='number')try{node.setSelectionRange(value.start,value.end,value.direction);}catch{}
 }
}
