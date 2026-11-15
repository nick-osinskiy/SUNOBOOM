import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {auditVueImports} from '../scripts/audit-vue-imports.mjs';

test('every local Vue import resolves and every source module belongs to the application graph',()=>{
 const result=auditVueImports();
 assert.deepEqual(result.missing,[],'dangling imports');
 assert.deepEqual(result.unused,[],'orphaned source modules');
 assert.ok(result.reachableCount>0);
});

test('the six live compatibility adapters remain reachable after removing archival bridges',()=>{
 const result=auditVueImports();
 const bridges=[...new Set(result.edges.map(edge=>edge.to).filter(path=>/Bridge\.js$/.test(path)))].sort();
 assert.deepEqual(bridges,[
  'src/vue/academy/legacyArtistProfilesBridge.js',
  'src/vue/academy/legacyGenreTreeBridge.js',
  'src/vue/poetry/legacyPoetryBridge.js',
  'src/vue/state/legacyAppearanceBridge.js',
  'src/vue/version-history/legacyVersionHistoryBridge.js',
  'src/vue/workspace/legacyWorkspaceBridge.js'
 ]);
 assert.deepEqual(result.unusedBridges,[]);
});

test('the import audit roots match the real Vite entry and computed production loader',()=>{
 const read=path=>readFileSync(new URL('../'+path,import.meta.url),'utf8');
 assert.match(read('vite.config.js'),/new URL\('\.\/src\/vue\/entry\.js'/);
 assert.match(read('src/vue/bootstrap.js'),/import\(moduleUrl\)/);
 assert.match(read('src/vue/bootstrap.js'),/\.\/entry\.js/);
 assert.deepEqual(auditVueImports().roots,['src/vue/bootstrap.js','src/vue/entry.js']);
});
