import AcademyCatalog from '../academy/AcademyCatalog.vue';
import AccountHome from '../account/AccountHome.vue';
import AccountSettings from '../account/AccountSettings.vue';
import ArrangementComposer from '../studio/ArrangementComposer.vue';
import ArrangementPanel from '../studio/ArrangementPanel.vue';
import ArrangementPicker from '../studio/ArrangementPicker.vue';
import ArrangementResult from '../studio/ArrangementResult.vue';
import ArtistDNA from '../account/ArtistDNA.vue';
import ArtistDNAEditor from '../account/ArtistDNAEditor.vue';
import ArtistManager from '../account/ArtistManager.vue';
import EventActions from '../account/EventActions.vue';
import EventCollection from '../account/EventCollection.vue';
import EventEditor from '../account/EventEditor.vue';
import EventReminders from '../account/EventReminders.vue';
import GenreDetail from '../academy/GenreDetail.vue';
import GenreMixer from '../studio/GenreMixer.vue';
import HomeDashboard from '../home/HomeDashboard.vue';
import IdeaCollections from '../poetry/IdeaCollections.vue';
import IdeaFields from '../poetry/IdeaFields.vue';
import IdeasPage from '../ideas/IdeasPage.vue';
import LibraryCollection from '../account/LibraryCollection.vue';
import LyricsSource from '../poetry/LyricsSource.vue';
import LyricsTools from '../poetry/LyricsTools.vue';
import Notifications from '../workspace/Notifications.vue';
import PerformanceTags from '../poetry/PerformanceTags.vue';
import PlayerAB from '../player/PlayerAB.vue';
import PlayerLab from '../player/PlayerLab.vue';
import PoetryAnalysis from '../poetry/PoetryAnalysis.vue';
import ProducerSongDetail from '../producer/ProducerSongDetail.vue';
import ProducerSongList from '../producer/ProducerSongList.vue';
import ProjectCollection from '../account/ProjectCollection.vue';
import ProjectCreator from '../account/ProjectCreator.vue';
import ProjectDetail from '../account/ProjectDetail.vue';
import PromptAuditor from '../studio/PromptAuditor.vue';
import PromptCollection from '../account/PromptCollection.vue';
import PromptEditor from '../account/PromptEditor.vue';
import SharedSongPage from '../account/SharedSongPage.vue';
import SongBlueprint from '../workspace/SongBlueprint.vue';
import SongCards from '../account/SongCards.vue';
import SongDetail from '../account/SongDetail.vue';
import SongEditor from '../account/SongEditor.vue';
import StudioBuilder from '../studio/StudioBuilder.vue';
import TrackPassportDetail from '../account/TrackPassportDetail.vue';
import TrackPassportEditor from '../account/TrackPassportEditor.vue';
import TrackPassportList from '../account/TrackPassportList.vue';
import WorkspaceControls from '../workspace/WorkspaceControls.vue';
import {navigateFromVueShortcut} from '../navigation/navigation-dispatch.js';
const definitions={
 'sb-vue-dashboard':[HomeDashboard,'DASHBOARD','model'],
 'sb-vue-account-home':[AccountHome,'ACCOUNT_HOME','initial'],
 'sb-vue-account-settings':[AccountSettings,'SETTINGS','model'],
 'sb-vue-ideas-page':[IdeasPage,'IDEAS_PAGE','initial'],
 'sb-vue-library-collection':[LibraryCollection,'LIBRARY','model'],
 'sb-vue-projects-list':[ProjectCollection,'PROJECT_LIST','model'],
 'sb-vue-project-creator':[ProjectCreator,'PROJECT_CREATOR','initial'],
 'sb-vue-project-detail':[ProjectDetail,'PROJECT_DETAIL','initial'],
 'sb-vue-events-list':[EventCollection,'EVENT_LIST','model'],
 'sb-vue-event-fields':[EventEditor,'EVENT_EDITOR','initial'],
 'sb-vue-event-reminders':[EventReminders,'EVENT_REMINDERS','initial'],
 'sb-vue-event-actions':[EventActions,'EVENT_ACTIONS','model'],
 'sb-vue-prompts-list':[PromptCollection,'PROMPT_LIST','model'],
 'sb-vue-prompt-form':[PromptEditor,'PROMPT_EDITOR','initial'],
 'sb-vue-idea-collections':[IdeaCollections,'IDEA_COLLECTIONS','model'],
 'sb-vue-idea-fields':[IdeaFields,'IDEA_EDITOR','initial'],
 'sb-vue-lyrics-source':[LyricsSource,'IDEA_EDITOR','initial'],
 'sb-vue-lyrics-tools':[LyricsTools,'IDEA_EDITOR','initial'],
 'sb-vue-track-list':[TrackPassportList,'TRACK_LIST','model'],
 'sb-vue-track-detail':[TrackPassportDetail,'TRACK_DETAIL','model'],
 'sb-vue-track-editor':[TrackPassportEditor,'TRACK_EDITOR','model'],
 'sb-vue-dna-view':[ArtistDNA,'DNA','model'],
 'sb-vue-dna-editor':[ArtistDNAEditor,'DNA_EDITOR','model'],
 'sbpc-list':[ProducerSongList,'PRODUCER_LIST','model'],
 'sb-vue-producer-detail':[ProducerSongDetail,'PRODUCER_DETAIL','model'],
 'sb-vue-player-lab':[PlayerLab,'PLAYER_LAB','initialModel'],
 'sb-vue-player-ab':[PlayerAB,'PLAYER_AB','initialModel'],
 'sb-vue-song-cards':[SongCards,'SONG_CARDS',''],
 'sb-vue-song-detail':[SongDetail,'SONG_DETAIL','model'],
 'sb-vue-song-editor':[SongEditor,'SONG_EDITOR','model'],
 'sb-vue-artist-manager':[ArtistManager,'ARTIST_MANAGER','model'],
 'sbsong-shared':[SharedSongPage,'SHARED_SONG','model'],
 'sb-vue-genre-detail':[GenreDetail,'GENRE','genre'],
 'sb-vue-academy-root':[AcademyCatalog,'ACADEMY','snapshot'],
 'studio-grid':[StudioBuilder,'STUDIO',''],
 'sb-vue-mixer-root':[GenreMixer,'MIXER',''],
 'sbpa-auditor':[PromptAuditor,'AUDITOR',''],
 'sb-vt-workbench':[PerformanceTags,'TAGS',''],
};
const arrangerKinds={'sba-cards':'cards','sba-snake-track':'snake','sba-transition-hub-list':'transitions','sba-energy-chart':'energy','sba-add-editor':'composer','sba-preset-confirm':'preset-confirm'};
function firstSnapshot(api,model){let first=true;return {...api,snapshot(...args){if(first&&!args.length){first=false;return model;}return api.snapshot(...args);}};}
export function createPageFeatures({sharedUi,host=window}){
 const models=new Map();
 const read=name=>{if(!models.has(name)){const api=host['SUNOBOOM_LEGACY_'+name];if(!api?.snapshot)throw Error('Missing page API: '+name);const model=api.snapshot();if(!model)throw Error('Unavailable page model: '+name);models.set(name,model);}return models.get(name);};
 return key=>{
  if(definitions[key]){
   const [component,name,prop]=definitions[key],api=host['SUNOBOOM_LEGACY_'+name];let model=read(name);
   if(name==='ACCOUNT_HOME')model={...model,profileName:host.SUNOBOOM_VIEW_INPUTS.field('profile-name')?.value??model.profileName};
   const field=(id,fallback,check=false)=>{const draft=host.SUNOBOOM_VIEW_INPUTS.field(id);return draft?(check?draft.checked:draft.value):fallback;};
   if(name==='SETTINGS')model={...model,name:field('sbs-name',model.name)};
   if(name==='DNA_EDITOR'){
    const ids={projectId:'project',otherGenres:'othergenres',tempoMin:'tempo-min',tempoMax:'tempo-max',noWhisper:'whisper',noRasp:'rasp',noLive:'live',noChoir:'choir'};
    model={...model,fields:Object.fromEntries(Object.entries(model.fields).map(([key,value])=>[key,field('dna-'+(ids[key]||key),value,typeof value==='boolean')]))};
   }
   if(name==='PRODUCER_DETAIL')model={...model,title:field('sbpc-title',model.title),artist:field('sbpc-artist',model.artist),notes:field('sbpc-notes',model.notes),links:model.links.map(link=>({...link,value:field('sbpc-'+link.field,link.value)})),stages:model.stages.map(stage=>({...stage,status:field('stage:'+stage.key,stage.status)}))};
   if(name==='SONG_DETAIL')model={...model,versions:model.versions.map(version=>({...version,draftLabel:field('version-title:'+version.id,version.label),draftNotes:field('version-note:'+version.id,version.notes)}))};
   const props=prop?{[prop]:model}:{};
   if(component.props?.api)props.api=prop?api:firstSnapshot(api,model);
   if(name==='DASHBOARD'){sharedUi.publishDashboardStats(model);props.navigate=id=>navigateFromVueShortcut(id,{legacyApi:host.SUNOBOOM_LEGACY_NAV});}
   if(name==='GENRE')Object.assign(props,{selectTab:(id,tab)=>api.selectTab(id,tab),tabContent:(id,tab)=>api.tabContent(id,tab),artistCatalog:host.SUNOBOOM_ARTIST_CATALOG||null,artistProfiles:host.SUNOBOOM_ARTIST_PROFILES||null});
   if(name==='ACADEMY')Object.assign(props,{artistProfiles:host.SUNOBOOM_ARTIST_PROFILES||null,search:q=>api.search(q),searchIcon:api.searchIcon||'',setExpanded:(kind,id,value)=>api.setExpanded(kind,id,value)});
   return {component,props};
  }
  if(key==='sb-poetry-result'){
   const api=host.SUNOBOOM_LEGACY_POETRY,initial=api.analysis();let first=true;
   return {component:PoetryAnalysis,props:{api:{...api,analysis(){if(first){first=false;return initial;}return api.analysis();}}}};
  }
  if(arrangerKinds[key]||key.startsWith('arranger-controls:')||['sba-preset-picker','sba-result'].includes(key)){
   const kind=arrangerKinds[key]||key.split(':')[1],model=read('ARRANGER'),api=host.SUNOBOOM_LEGACY_ARRANGER;
   const component=key==='sba-preset-picker'?ArrangementPicker:key==='sba-result'?ArrangementResult:['cards','snake','transitions','energy'].includes(kind)?ArrangementPanel:ArrangementComposer;
   return {component,props:component===ArrangementComposer?{kind,initial:model,api}:{...(component===ArrangementPanel?{kind}:{}),api:firstSnapshot(api,model)}};
  }
  const name=key==='song-blueprint'?'blueprint':key,api=host.SUNOBOOM_WORKSPACE_UI,initial=api?.snapshot(name);
  if(!initial)throw Error('Missing workspace model: '+name);
  return {component:name==='blueprint'?SongBlueprint:name==='notice-banner'?Notifications:WorkspaceControls,props:{api,name,initial}};
 };
}
