import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
import '../view-inputs.js';
import {createPageModel} from '../src/vue/pages/page-model.js';
import {pageTemplateNames} from '../src/vue/pages/page-layout-model.js';
import {captureInputs} from '../src/vue/pages/ui-handoff.js';
import {captureFileInputs} from '../src/vue/pages/file-input-handoff.js';

test('all declared page variants compose directly without a browser, native page or bridge collection',()=>{
 assert.equal(typeof document,'undefined');
 for(const key of pageTemplateNames){
  const seen=[];const model=createPageModel({key,values:{}},slot=>{seen.push(slot);return {component:{name:slot},props:{model:{title:'<script>plain data</script>'}}};});
  assert.deepEqual(model.features,seen);assert.ok(seen.length>0,key);
  assert.equal(JSON.stringify(model).includes('nodeType'),false);
 }
});

test('direct model construction fails closed for unknown pages or missing feature contracts',()=>{
 assert.throws(()=>createPageModel({key:'unknown'},()=>({})),/Unknown page/);
 assert.throws(()=>createPageModel({key:'projects'},()=>null),/Missing feature/);
 const first=createPageModel({key:'projects'},slot=>({component:{name:slot},props:{}}));
 first.layout[0].props.class='changed';
 assert.notEqual(createPageModel({key:'projects'},()=>({})).layout[0].props.class,'changed');
});

test('plain input scopes preserve empty strings/unchecked values and restore after nesting and failure',()=>{
 const scope=SUNOBOOM_VIEW_INPUTS,outer={fields:{title:{value:'',checked:false}},named:{preset:[{value:'7',checked:true}]}};
 assert.equal(scope.active,false);
 scope.withInputs(outer,()=>{
  assert.equal(scope.field('title').value,'');assert.equal(scope.field('title').checked,false);assert.equal(scope.named('preset')[0].value,'7');
  assert.throws(()=>scope.withInputs({fields:{title:{value:'inner'}}},()=>{assert.equal(scope.field('title').value,'inner');throw Error('injected');}),/injected/);
  assert.equal(scope.field('title').value,'');
 });
 assert.equal(scope.active,false);assert.equal(scope.field('title'),null);assert.deepEqual(scope.named('preset'),[]);
});

test('UI handoff captures plain drafts separately from selected browser file elements',()=>{
 const field={id:'title',name:'title',value:'unsent',checked:false,_sbStressMirror:true};
 const selected={id:'audio',name:'audio',files:[{name:'keep.wav'}]},empty={id:'empty',files:[]};
 const inputs=captureInputs({querySelectorAll:()=>[field],querySelector:()=>null});
 assert.deepEqual(inputs.fields.title,{value:'unsent',checked:false,_sbStressMirror:true});
 assert.notEqual(inputs.fields.title,field);assert.equal(inputs.named.title[0],inputs.fields.title);
 const files=captureFileInputs({querySelectorAll:()=>[selected,empty]});
 assert.equal(files.size,1);assert.equal(files.get('audio'),selected);
});

test('production renderer has direct factories and native generation only inside lazy recovery',()=>{
 const read=file=>readFileSync(new URL('../'+file,import.meta.url),'utf8');
 assert.equal(existsSync(new URL('../src/vue/pages/page-composition.js',import.meta.url)),false);
 assert.doesNotMatch(read('src/vue/pages/page-model.js'),/document|querySelector|innerHTML|childNodes|composePage/);
 assert.doesNotMatch(read('src/vue/pages/page-features.js'),/document|querySelector|innerHTML|selectTarget|withFeatureCollection/);
 const renderer=read('src/vue/shell/application-shell.js');
 assert.match(renderer,/createPageModel\(window\.SUNOBOOM_PAGE_STATE\.snapshot\(\),createPageFeatures/);
 assert.doesNotMatch(renderer,/data-sb-native-stage|composePage|activations/);
 const native=renderer.slice(renderer.indexOf(' function nativePage'),renderer.indexOf(' const resources'));
 assert.match(native,/source\.run\?\.\(\)/);assert.match(native,/nativeFallbacks\+\+/);
 assert.match(read('src/vue/pages/file-input-handoff.js'),/replaceChildren\(original\)/);
});
