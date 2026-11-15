import {defineComponent,h,onMounted,onErrorCaptured,ref} from 'vue';
import PageView from '../pages/PageView.vue';
const NativeFallback=defineComponent({props:['resources','revision'],setup(p){
 const host=ref(null);onMounted(()=>p.resources.attach(p.revision,host.value));
 return ()=>h('div',{'data-sb-native-page-fallback':'',ref:host});
}});
export default defineComponent({name:'ApplicationPage',props:['model','revision','resources'],setup(p){
 const failed=ref(false);
 onErrorCaptured(error=>{failed.value=true;p.resources.failed(p.revision,error);return false;});
 return ()=>p.model&&!failed.value?h(PageView,{model:p.model}):h(NativeFallback,{resources:p.resources,revision:p.revision});
}});
