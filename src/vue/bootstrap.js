// Production and development share the same single-root startup.
const localDev=/^(localhost|127\.0\.0\.1)$/.test(location.hostname);
const enabled=!!document.querySelector('meta[name="sunoboom-vue-nav"][content="enabled"]');
const moduleUrl=enabled?'../../dist/vue/sunoboom-vue.js?v=277':localDev?'./entry.js':null;
if(moduleUrl&&window.SUNOBOOM_LEGACY_NAV){
 import(moduleUrl).then(({startApplication})=>startApplication()).catch(error=>{
  console.warn('[SUNOBOOM] Vue navigation unavailable; native interface retained.',error);
 });
}
