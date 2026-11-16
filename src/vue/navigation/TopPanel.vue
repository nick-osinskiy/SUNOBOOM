<script setup>
import {onMounted,onUnmounted,ref} from 'vue';
const panel=ref(null);
let observer,previous='',last='';
function measure(){
 if(!panel.value)return;
 const next=Math.ceil(panel.value.getBoundingClientRect().height)+'px';
 if(next===last)return;
 last=next;
 document.documentElement.style.setProperty('--sb-top-panel-height',last);
}
onMounted(()=>{
 previous=document.documentElement.style.getPropertyValue('--sb-top-panel-height');
 measure();
 if(typeof ResizeObserver!=='undefined'){observer=new ResizeObserver(measure);observer.observe(panel.value);}
 else window.addEventListener('resize',measure);
});
onUnmounted(()=>{
 observer?.disconnect();window.removeEventListener('resize',measure);
 if(document.documentElement.style.getPropertyValue('--sb-top-panel-height')===last){
  if(previous)document.documentElement.style.setProperty('--sb-top-panel-height',previous);
  else document.documentElement.style.removeProperty('--sb-top-panel-height');
 }
});
</script>
<template>
 <header ref="panel" class="sb-top-panel" aria-label="Навигация и управление SUNOBOOM"><slot /></header>
</template>
