import {defineComponent,h,inject,onMounted,ref} from 'vue';
export const FILE_INPUT_HANDOFF=Symbol('file-input-handoff');
// Selected FileList and native listeners remain on the original browser element.
// The element is an explicit UI boundary, never a record or a page-model prop.
export const NativeFileInput=defineComponent({inheritAttrs:false,setup(_props,{attrs}){
 const take=inject(FILE_INPUT_HANDOFF,null),original=take?.(attrs),host=ref(null);
 onMounted(()=>{if(original)host.value?.replaceChildren(original);});
 return ()=>original?h('span',{ref:host,style:'display:contents','data-sb-file-boundary':''}):h('input',{...attrs,type:'file'});
}});
export function captureFileInputs(root){
 const files=new Map();for(const node of root?.querySelectorAll('input[type="file"]')||[])if(node.files?.length){const key=node.id||node.name;if(key)files.set(key,node);}return files;
}
