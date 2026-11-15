import test from 'node:test';
import assert from 'node:assert/strict';
import {routes,routePath,parseRoute,initialPath} from '../src/vue/shell/route-codec.js';

test('all workspace and top-level routes have stable reloadable URL paths without DOM or storage',()=>{
 assert.equal(typeof document,'undefined');
 for(const nav of routes.filter(x=>!['detail','sharedSong'].includes(x)))assert.equal(parseRoute(routePath({nav})).nav,nav);
 assert.equal(routePath({nav:'projects',projectId:'p-old'}),'/account/projects/p-old');
 assert.equal(routePath({nav:'tracks',trackId:'track-old'}),'/account/tracks/track-old');
 assert.equal(routePath({nav:'producer',productionId:'production-old'}),'/producer/production-old');
});
test('nested records, genre tabs and editors round-trip without changing their IDs',()=>{
 for(const path of ['/catalog/alternative-rock/artists','/account/projects/p-old','/account/tracks/t-old','/account/tracks?edit=new','/account/artists/dna-old','/account/myideas?edit=mi-old','/songs/song-old','/songs/new','/songs/song-old/edit','/producer/production-old','/account/settings'])assert.equal(routePath(parseRoute(path)),path);
});
test('legacy public genre, view and shared-card links normalize to real routes',()=>{
 assert.equal(initialPath('#genre-reggae-ska',{}),'/catalog/reggae-ska/overview');
 assert.equal(initialPath('#view-songs',{}),'/songs');
 assert.equal(initialPath('#view-account',{}),'/account');
 assert.equal(initialPath('#sb-song=abc_DEF-123',{}),'/shared?card=abc_DEF-123');
 assert.equal(initialPath('',{nav:'studio'}),'/studio');
});
test('public card data stays opaque, bounded and isolated from local record state',()=>{
 const state={nav:'sharedSong',card:'abc%def+'},before=structuredClone(state);
 assert.equal(parseRoute(routePath(state)).card,state.card);assert.deepEqual(state,before);
 assert.equal(parseRoute('/shared?card='+'a'.repeat(15000)).card.length,14000);
 assert.equal(parseRoute('/shared').card,'broken');
});
test('malformed and unknown paths cannot select arbitrary records or execute URL content',()=>{
 for(const path of ['/unknown','/%E0%A4%A','/javascript:alert(1)'])assert.equal(parseRoute(path).nav,'home');
 assert.equal(parseRoute('/songs/bad%2Fid').songId,'');assert.equal(parseRoute('/account/tracks?edit=%3Cscript%3E').edit,'');
 assert.equal(routePath({nav:'not-allowed'}),'/home');assert.equal(parseRoute('/catalog/rock/not-a-tab').tab,'overview');
});
test('UI-only artist manager and typed route context remain explicit query inputs',()=>{
 const state={nav:'songs',songId:'song-old',manager:true};assert.equal(routePath(state),'/songs/song-old?artists=1');assert.equal(parseRoute(routePath(state)).manager,true);
 const parsed=parseRoute('/account/events?edit=event-old');assert.equal(parsed.nav,'events');assert.equal(parsed.edit,'event-old');
 assert.equal(initialPath('#/account/projects/p-old',{}),'/account/projects/p-old');
});
