import {readFileSync,readdirSync,statSync,existsSync} from 'node:fs';
import {resolve,dirname,relative,extname,sep} from 'node:path';
import {fileURLToPath} from 'node:url';
const project=fileURLToPath(new URL('../',import.meta.url));
const normalized=path=>path.split(sep).join('/');
function files(dir){return readdirSync(dir).flatMap(name=>{const path=resolve(dir,name);return statSync(path).isDirectory()?files(path):[path];});}
// Static local ESM edges (including SFC scripts and literal dynamic imports).
// The computed bootstrap URL is represented by an explicit entry.js root.
export function auditVueImports(root=project){
 const directory=resolve(root,'src/vue'),sources=files(directory).filter(file=>/\.(js|vue|json)$/.test(file));
 const reachable=new Set(),missing=[],edges=[];
 function visit(file){
  if(reachable.has(file))return;reachable.add(file);
  let source=readFileSync(file,'utf8');
  if(extname(file)==='.vue')source=[...source.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/g)].map(match=>match[1]).join('\n');
  if(extname(file)==='.json')return;
  const pattern=/(?:\bfrom\s*|\bimport\s*(?:\(\s*)?)(['"])(\.{1,2}\/[^'"]+)\1/g;
  for(const match of source.matchAll(pattern)){
   const specifier=match[2].split('?')[0];let target=resolve(dirname(file),specifier);
   if(!existsSync(target)){const found=['.js','.vue','.json','/index.js'].map(suffix=>target+suffix).find(existsSync);if(found)target=found;}
   edges.push({from:normalized(relative(root,file)),to:normalized(relative(root,target))});
   if(!existsSync(target)){missing.push(edges.at(-1));continue;}
   if(['.js','.vue','.json'].includes(extname(target)))visit(target);
  }
 }
 for(const entry of ['src/vue/bootstrap.js','src/vue/entry.js'])visit(resolve(root,entry));
 const unused=sources.filter(file=>!reachable.has(file)).map(file=>normalized(relative(root,file))).sort();
 return {roots:['src/vue/bootstrap.js','src/vue/entry.js'],sourceCount:sources.length,reachableCount:reachable.size,edges,missing,unused,
  unusedBridges:unused.filter(file=>/legacy[^/]*Bridge\.js$/.test(file))};
}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 const result=auditVueImports();
 const {edges,...summary}=result;console.log(JSON.stringify(process.argv.includes('--json')?result:summary,null,2));
 if(result.missing.length||result.unused.length)process.exitCode=1;
}
