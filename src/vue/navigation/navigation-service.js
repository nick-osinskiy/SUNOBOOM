import {currentRoute} from './route-state.js';
import {activeNavigationRoute} from './nav-model.js';
import {parseRoute} from '../shell/route-codec.js';

// Compatibility diagnostics project the ONE browser router; no second history.
export function installNavigationService({shell,sharedUi,legacyApi,root=window}){
 const context=()=>{
  const route=parseRoute(shell.snapshot().route);
  if(route.nav==='detail')return {kind:'genre',id:route.genre,tab:route.tab};
  if(route.nav==='producer'&&route.productionId)return {kind:'production',id:route.productionId};
  if(route.nav==='tracks'&&route.selected)return {kind:'track',id:route.selected};
  return null;
 };
 const snapshot=()=>Object.freeze({path:shell.snapshot().route,active:activeNavigationRoute(currentRoute.value.route),
  canGoBack:shell.canGo('back'),canGoForward:shell.canGo('forward'),context:context()});
 const record=(nav,validate,mode)=>{
  const actual=legacyApi.snapshot();
  if(actual.active!==nav||!validate(actual))return false;
  shell.recordCurrent(mode);return true;
 };
 const api=Object.freeze({
  snapshot:()=>currentRoute.value,
  routerSnapshot:snapshot,
    sharedState: () => Object.freeze({
      route: sharedUi.route.route,
      active: sharedUi.route.active,
      menuIds: sharedUi.navigationItems.map(item => item.id),
      dashboardStats: { ...sharedUi.dashboardStats },
      appearance: { ...sharedUi.appearance },
      academyCatalog: { ...sharedUi.academyCatalog },
      academyFocus: { ...sharedUi.academyFocus },
      academyTree: { ...sharedUi.academyTree },
      studioSummary: { ...sharedUi.studioSummary },
      mixerSummary: { ...sharedUi.mixerSummary },
      auditorSummary: { ...sharedUi.auditorSummary },
      arrangerSummary: { ...sharedUi.arrangerSummary },
      playerLabSummary: { ...sharedUi.playerLabSummary },
      playerAbSummary: { ...sharedUi.playerAbSummary },
      masterListSummary: { ...sharedUi.masterListSummary },
      passportListSummary: { ...sharedUi.passportListSummary },
      masterDetailSummary: { ...sharedUi.masterDetailSummary },
      passportDetailSummary: { ...sharedUi.passportDetailSummary },
      songCollectionSummary: { ...sharedUi.songCollectionSummary },
      songDetailSummary: { ...sharedUi.songDetailSummary },
      artistManagerSummary: { ...sharedUi.artistManagerSummary },
      artistDnaSummary: { ...sharedUi.artistDnaSummary },
      librarySummary: { ...sharedUi.librarySummary },
      ideaDraftSummary: { ...sharedUi.ideaDraftSummary },
      promptDraftSummary: { ...sharedUi.promptDraftSummary },
      poetrySourceSummary: { ...sharedUi.poetrySourceSummary },
      poetryAnalysisSummary: { ...sharedUi.poetryAnalysisSummary },
      poetryAmbiguitySummary: { ...sharedUi.poetryAmbiguitySummary },
      performanceTagsSummary: { ...sharedUi.performanceTagsSummary }
    }),
  back:()=>shell.back(),forward:()=>shell.forward(),
  recordGenre:(id,tab,mode='push')=>record('detail',a=>a.detail?.id===id&&a.detail?.tab===tab&&legacyApi.canRestoreGenre(id,tab),mode),
  recordProduction:(id,mode='push')=>record('producer',a=>a.production?.id===id&&legacyApi.canRestoreProduction(id),mode),
  recordTrack:(id,mode='push')=>record('tracks',a=>!a.trackEditing&&a.track?.id===id&&legacyApi.canRestoreTrack(id),mode),
  recordTrackList:()=>record('tracks',a=>!a.trackEditing&&!a.track?.id,'push')
 });
 root.SUNOBOOM_VUE_ROUTE=api;
 return ()=>{if(root.SUNOBOOM_VUE_ROUTE===api)delete root.SUNOBOOM_VUE_ROUTE;};
}
