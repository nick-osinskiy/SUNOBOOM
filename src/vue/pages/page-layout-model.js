import templates from './page-templates.json' with {type:'json'};

// Authored page structure and explicit data bindings; never inspect rendered HTML.
export function pageLayout({key,values={}}){
 const template=templates[key];
 if(!template)throw Error('Unknown page model: '+key);
 function resolve(node){
  if(node.value)return {text:String(values[node.value]??'')};
  if('text' in node)return {...node};
  const props={...node.props};
  let children=node.children?.map(resolve);
  if(node.bind==='songNotice'){
   props.hidden=!values.songNotice;children=[{text:String(values.songNotice||'')}];
  }else if(node.bind==='treeOpen')props.open=!!values.treeOpen;
  else if(node.bind==='energyChart')props['aria-label']=values.energyChart;
  else if(node.bind==='mixerBanner')props.class='gm-studio-banner'+(values.mixerActive?' gm-studio-active':'');
  else if(node.bind==='playerAB'||node.bind==='playerLab')props.hidden=!!values[node.bind];
  return {tag:node.tag,props,...(children?{children}:{}),...(node.slot?{slot:node.slot}:{}),...(node.native?{native:true}:{})};
 }
 const layout=template.map(resolve);
 if(key==='home'&&values.noticeBanner)layout.unshift({tag:'div',props:{'data-sb-workspace':'notice-banner',style:'display:contents'},slot:'notice-banner'});
 return layout;
}

export const pageTemplateNames=Object.freeze(Object.keys(templates));
