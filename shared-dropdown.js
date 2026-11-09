/* SUNOBOOM v0.141 — one searchable, sortable dropdown for Vue and legacy selects.
   Original <select> remains the source of truth and emits normal change events. */
(function(){
 "use strict";
 let active=null;
 const eligible=el=>el instanceof HTMLSelectElement&&!el.multiple&&!el.disabled&&el.closest(".app,.main,.sbs-page");
 const textOf=option=>option.textContent.trim();
 function close(restoreFocus=false){
  if(!active)return;
  const {panel,select}=active;active=null;panel.remove();
  if(restoreFocus&&select.isConnected)select.focus({preventScroll:true});
 }
 function open(select){
  close();
  const panel=document.createElement("div");
  panel.className="sb-dropdown";panel.setAttribute("role","dialog");
  panel.setAttribute("aria-label",select.getAttribute("aria-label")||select.labels?.[0]?.textContent?.trim()||"Выбор значения");
  panel.innerHTML='<div class="sb-dropdown-toolbar"><input class="sb-dropdown-search" type="search" autocomplete="off" placeholder="Поиск по списку…" aria-label="Фильтр вариантов"><button class="sb-dropdown-sort" type="button" aria-label="Сортировать по алфавиту" title="Сортировка">А–Я ↕</button><button class="sb-dropdown-close" type="button" aria-label="Закрыть">×</button></div><div class="sb-dropdown-list" role="listbox"></div>';
  const search=panel.querySelector(".sb-dropdown-search"),list=panel.querySelector(".sb-dropdown-list"),sort=panel.querySelector(".sb-dropdown-sort");
  let order="original",cursor=0;
  const source=()=>Array.from(select.options).map((option,index)=>({option,index,label:textOf(option),group:option.parentElement instanceof HTMLOptGroupElement?option.parentElement.label:""}));
  function draw(){
   const query=search.value.trim().toLocaleLowerCase();
   let items=source().filter(item=>!item.option.hidden&&(!query||item.label.toLocaleLowerCase().includes(query)||item.group.toLocaleLowerCase().includes(query)));
   if(order!=="original")items.sort((a,b)=>(order==="asc"?1:-1)*a.label.localeCompare(b.label,"ru",{numeric:true,sensitivity:"base"})||a.index-b.index);
   list.replaceChildren();
   if(!items.length){const empty=document.createElement("div");empty.className="sb-dropdown-empty";empty.textContent="Ничего не найдено";list.append(empty);return}
   for(const item of items){
    const button=document.createElement("button");button.type="button";button.className="sb-dropdown-option";
    button.setAttribute("role","option");button.setAttribute("aria-selected",String(item.option.selected));
    button.disabled=item.option.disabled||item.option.parentElement?.disabled===true;
    button.textContent=item.label;
    if(item.group){const group=document.createElement("small");group.textContent=item.group;button.prepend(group)}
    if(item.option.selected)button.classList.add("is-selected");
    button.addEventListener("click",()=>{
     if(!select.isConnected){close();return}
     const old=select.value;
     select.selectedIndex=item.index;
     if(select.value!==old){select.dispatchEvent(new Event("input",{bubbles:true}));select.dispatchEvent(new Event("change",{bubbles:true}))}
     close(true);
    });
    list.append(button);
   }
   cursor=0;
  }
  function position(){
   if(!select.isConnected){close();return}
   const rect=select.getBoundingClientRect();
   const width=Math.min(Math.max(rect.width,260),window.innerWidth-20);
   const below=window.innerHeight-rect.bottom,above=rect.top;
   const down=below>=Math.min(330,above)||below>=250;
   const room=Math.max(130,(down?below:above)-12);
   panel.style.width=width+"px";
   panel.style.left=Math.max(10,Math.min(rect.left,window.innerWidth-width-10))+"px";
   panel.style.maxHeight=Math.min(420,room)+"px";
   panel.style.top=down?Math.max(8,rect.bottom+5)+"px":"auto";
   panel.style.bottom=down?"auto":Math.max(8,window.innerHeight-rect.top+5)+"px";
  }
  sort.addEventListener("click",()=>{order=order==="original"?"asc":order==="asc"?"desc":"original";sort.textContent=order==="asc"?"А–Я ↑":order==="desc"?"Я–А ↓":"А–Я ↕";draw();search.focus()});
  search.addEventListener("input",draw);
  panel.querySelector(".sb-dropdown-close").addEventListener("click",()=>close(true));
  panel.addEventListener("keydown",event=>{
   if(event.key==="Escape"){event.preventDefault();close(true);return}
   if(event.key==="ArrowDown"||event.key==="ArrowUp"){
    event.preventDefault();const options=[...list.querySelectorAll("button:not(:disabled)")];if(!options.length)return;
    cursor=(cursor+(event.key==="ArrowDown"?1:-1)+options.length)%options.length;options[cursor].focus();
   }
   if(event.key==="Enter"&&event.target===search){event.preventDefault();list.querySelector("button:not(:disabled)")?.click()}
  });
  document.body.append(panel);active={panel,select};draw();position();search.focus({preventScroll:true});
 }
 document.addEventListener("pointerdown",event=>{
  const select=event.target.closest?.("select");
  if(eligible(select)){
   event.preventDefault();event.stopPropagation();
   if(active?.select===select)close(true);else open(select);
   return;
  }
  if(active&&!active.panel.contains(event.target))close();
 },true);
 document.addEventListener("keydown",event=>{
  const select=event.target;
  if(eligible(select)&&(event.key==="Enter"||event.key===" "||event.key==="ArrowDown")){
   event.preventDefault();open(select);
  }else if(active&&event.key==="Escape"){event.preventDefault();close(true)}
 },true);
 window.addEventListener("resize",()=>{if(active)position()});
 window.addEventListener("scroll",()=>{if(active)position()},true);
})();
