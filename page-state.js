/* Read-only page data. DOM belongs to the separate draft/lifecycle adapters. */
(function(root){'use strict';root.SUNOBOOM_PAGE_STATE=Object.freeze({snapshot(){
 const core=SUNOBOOM_CORE,records=core.productions?.items()||[],tracks=data.tracks||[],dna=data.artistDNAs||[],a=core.arrangement,blocks=a?.state.blocks||[],song=core.songs?root.SUNOBOOM_MY_SONGS.layoutState():{};
 let key=view.nav;
 if(key==='account'&&root.SUNOBOOM_LEGACY_SETTINGS?.isOpen())key='account-settings';
 if(key==='tracks'){if(view.sbTrackEdit)key='tracks-editor';else if(tracks.some(t=>t.id===view.sbTrackSelected))key='tracks-detail';}
 if(key==='artists'&&view.sbDnaEdit)key='artists-editor';
 if(key==='producer'&&records.length)key='producer-detail';
 if(key==='songs')key=song.form?'songs-editor':song.manager?(song.detail?'songs-manager-detail':'songs-manager'):song.detail?'songs-detail':'songs';
 const mode=root.SUNOBOOM_LEGACY_PLAYER_AB?.snapshot()?.mode;
 return {key,values:{productionCount:records.length,productionDone:records.filter(w=>core.productions.completed(w)===6).length,
 trackCount:tracks.length,trackPublisher:tracks.filter(t=>t.status==='publisher').length,trackReleased:tracks.filter(t=>t.status==='released').length,
 dnaCount:dna.length,dnaTracks:tracks.filter(t=>t.artistDnaId&&dna.some(a=>a.id===t.artistDnaId)).length,
 ideaEditorTitle:(data.manualIdeas||[]).some(i=>i.id===view.editIdea)?'Редактирование идеи':'Новая идея песни',
 catalogCount:familyOrder.filter(f=>GENRES.some(g=>g.family===f)).length+' музыкальных семейств · '+GENRES.length+' направлений',
 arrangementCount:blocks.length+' секций · ≈ '+(a?.lengthString()||''),
 transitionCount:Math.max(0,blocks.length-1)+' переходов · '+blocks.slice(0,-1).filter(b=>a.makeTransition(b.transitionOut).type!=='none').length+' настроено',
 noticeBanner:sbN35Unread().length>0,
 treeOpen:!!root.SUNOBOOM_LEGACY_GENRE_TREE?.isOpen(),
 energyChart:blocks.map((b,i)=>a.nameFor(b,i)+': '+b.energy+' из 5').join('; '),
 songNotice:song.notice||'',playerAB:mode!=='compare',playerLab:mode==='compare',mixerActive:Array.isArray(core.studio?.state.mixerBlend)&&core.studio.state.mixerBlend.length>=2}};
}});})(globalThis);
