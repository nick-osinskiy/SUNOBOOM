import {pageLayout} from './page-layout-model.js';
// Compose explicit layout/props only. No native page, selectors or DOM nodes.
export function createPageModel(snapshot,feature){
 const used=[];
 function connect(node){
  if(node.slot){const item=feature(node.slot);if(!item)throw Error('Missing feature: '+node.slot);used.push(node.slot);return {tag:node.tag,props:{...node.props,'data-v-app':'','data-sb-composed-feature':''},feature:item};}
  if(node.native)return {tag:node.tag,props:node.props,nativeBoundary:node.props.id};
  return node.children?{...node,children:node.children.map(connect)}:node;
 }
 return {layout:pageLayout(snapshot).map(connect),features:used};
}
