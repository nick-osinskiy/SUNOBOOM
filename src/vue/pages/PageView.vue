<script>
import { defineComponent, h, onMounted, ref } from 'vue';

// Only these named editor/lazy boundaries retain native structural DOM writes.
const NativeBoundary=defineComponent({
  inheritAttrs:false,props:['tag','attrs','nodes'],
  setup(props){const element=ref(null);onMounted(()=>{element.value.append(...props.nodes);});
    return ()=>h(props.tag,{...props.attrs,ref:element});}
});
function renderNode(node){
  if('text' in node)return node.text;
  if('nativeNodes' in node)return h(NativeBoundary,{tag:node.tag,attrs:node.props,nodes:node.nativeNodes});
  if(node.feature)return h(node.tag,node.props,[h(node.feature.component,node.feature.props)]);
  return h(node.tag,node.props,node.children.map(renderNode));
}
export default defineComponent({
  name:'WorkspacePageView',props:{model:{type:Object,required:true}},
  setup(props){return ()=>props.model.layout.map(renderNode);}
});
</script>
