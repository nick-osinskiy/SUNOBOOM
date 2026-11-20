import assert from 'node:assert/strict';

export async function checkShellRouting(browser,base){
 for(const mobile of [false,true]){
  const context=await browser.newContext({viewport:mobile?{width:375,height:812}:{width:1440,height:900},isMobile:mobile,hasTouch:mobile}),page=await context.newPage(),errors=[];
  await context.addInitScript(()=>{
   // Exclude only Playwright's own injected listener-removal detector.
   window.__observers216=0;const NativeObserver=window.MutationObserver;
   window.MutationObserver=class extends NativeObserver{constructor(...args){super(...args);if(!new Error().stack.includes("InjectedScript"))window.__observers216++;}};
  });
  page.on('pageerror',e=>errors.push(e.message));page.on('console',m=>{if(m.type()==='warning'&&/Shell error|Page preparation failed/.test(m.text()))errors.push(m.text());});
  try{
   await page.goto(base,{waitUntil:'networkidle'});await page.waitForFunction(()=>window.SUNOBOOM_SHELL?.active);
   await page.evaluate(()=>{
    window.__pages216=0;const nativeChrome=chrome;
    chrome=function(body){const html=nativeChrome(body);if(SUNOBOOM_SHELL.active){window.__pages216++;if(/class="app"|data-sb-vue-top|data-sb-vue-sidebar/.test(html))throw Error('Native page regenerated shell');}return html;};
   });
   await page.evaluate(()=>{window.__shell215=document.querySelector('[data-sb-vue-shell]');window.__app215=document.getElementById('app').__vue_app__;window.__side215=document.querySelector('.side');});
   await page.evaluate(()=>Promise.all(['studio','songs','home'].map(id=>SUNOBOOM_SHELL.navigate(id))));
   await page.waitForFunction(()=>view.nav==='home'&&SUNOBOOM_SHELL.snapshot().route==='/home');
   const menu=mobile?'.mobile-nav':'.side';
   for(const nav of ['studio','catalog','ideas','account']){
    await page.locator(`${menu} button[data-nav="${nav}"]`).click();
    await page.waitForFunction(nav=>view.nav===nav&&window.SUNOBOOM_SHELL.snapshot().route==='/'+nav,nav);
    assert.match(page.url(),new RegExp('#/'+nav+'$'));
    assert.equal(await page.evaluate(()=>window.__shell215===document.querySelector('[data-sb-vue-shell]')&&window.__app215===document.getElementById('app').__vue_app__&&window.__side215===document.querySelector('.side')&&[...document.querySelectorAll('*')].filter(n=>n.__vue_app__).length===1),true);
   }
   assert.equal(await page.evaluate(()=>window.__pages216),0,'normal rendering does not generate native HTML');
   assert.equal(await page.evaluate(()=>SUNOBOOM_SHELL.snapshot().nativeFallbacks),0);
   await page.goBack();await page.waitForFunction(()=>view.nav==='ideas');await page.goForward();await page.waitForFunction(()=>view.nav==='account');
   await page.locator(`${menu} button[data-nav="catalog"]`).click();await page.waitForURL('**#/catalog');
   await page.evaluate(()=>openGenre('reggae-ska'));await page.waitForURL('**/overview');
   const skaHero=page.locator('.gb-hero--poster.gb-hero--reggae-ska');
   await skaHero.waitFor();
   assert.ok((await skaHero.evaluate(el=>getComputedStyle(el,'::before').backgroundImage)).includes('reggae-ska-kingston-session.webp'));
   assert.equal(await skaHero.locator('.gb-vinyl').isVisible(),false);
   await page.locator('.genre-side-item[data-tab="artists"]').click();await page.waitForURL('**/artists');
   await page.locator('[data-sb-history-back]').click();await page.waitForURL('**#/catalog');await page.waitForFunction(()=>view.nav==='catalog');
   await page.locator('[data-sb-history-forward]').click();await page.waitForURL('**/artists');await page.waitForFunction(()=>view.tab==='artists');

   await page.evaluate(()=>openGenre('ska-jamaican'));
   await page.waitForURL('**#/catalog/ska-jamaican/overview');
   const jamaicanHero=page.locator('.gb-hero--poster.gb-hero--ska-jamaican');
   await jamaicanHero.waitFor();
   assert.equal(await jamaicanHero.getByRole('heading',{name:'Ямайское ска (первая волна)',exact:true}).count(),1);
   assert.ok((await jamaicanHero.evaluate(el=>getComputedStyle(el,'::before').backgroundImage)).includes('reggae-ska-kingston-session.webp'));
   assert.equal(await jamaicanHero.locator('.gb-vinyl').isVisible(),false);
   assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true);
   for(const tab of ['artists','ideas','prompts','overview']){
    await page.locator('.genre-side-item[data-tab="'+tab+'"]').click();
    await page.waitForURL('**/catalog/ska-jamaican/'+tab);
    assert.equal(await jamaicanHero.isVisible(),true);
   }

   await page.evaluate(()=>openGenre('hiphop-gangsta'));
   await page.waitForURL('**#/catalog/hiphop-gangsta/overview');
   const gangstaHero=page.locator('.gb-hero--poster.gb-hero--hiphop-gangsta');
   await gangstaHero.waitFor();
   assert.equal(await gangstaHero.getByRole('heading',{name:'Гангста-рэп',exact:true}).count(),1);
   assert.ok((await gangstaHero.evaluate(el=>getComputedStyle(el,'::before').backgroundImage)).includes('hiphop-gangsta-night-session.jpg'));
   assert.equal(await gangstaHero.locator('.gb-vinyl').isVisible(),false);
   assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true);
   for(const tab of ['artists','ideas','prompts','overview']){
    await page.locator('.genre-side-item[data-tab="'+tab+'"]').click();
    await page.waitForURL('**/catalog/hiphop-gangsta/'+tab);
    assert.equal(await gangstaHero.isVisible(),true);
   }

   await page.evaluate(()=>openGenre('experimental-concrete'));
   await page.waitForURL('**#/catalog/experimental-concrete/overview');
   await page.locator('.genre-bright--experimental-concrete').waitFor();
   assert.ok((await page.locator('.gb-hero--experimental-concrete').evaluate(el=>getComputedStyle(el,'::before').backgroundImage)).includes('experimental-concrete-vector-studio.jpg'));
   const topPanel=page.locator('.sb-top-panel');
   const themedTop=()=>topPanel.evaluate(el=>getComputedStyle(el).backgroundImage);
   assert.ok(!(await themedTop()).includes('sunoboom-concrete-top-header.jpg'));
   assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true);
   for(const tab of ['artists','ideas','prompts','overview']){
    await page.locator('.genre-side-item[data-tab="'+tab+'"]').click();
    await page.waitForURL('**/catalog/experimental-concrete/'+tab);
    assert.ok(!(await themedTop()).includes('sunoboom-concrete-top-header.jpg'));
   }
   await page.evaluate(()=>openGenre('hiphop-gangsta'));
   await page.waitForURL('**#/catalog/hiphop-gangsta/overview');
   await page.locator('.genre-bright--hiphop-gangsta').waitFor();
   assert.ok(!(await themedTop()).includes('sunoboom-concrete-top-header.jpg'));
   await page.locator(`${menu} button[data-nav="catalog"]`).click();
   await page.waitForURL('**#/catalog');
   await page.waitForFunction(()=>!document.querySelector('.genre-bright--experimental-concrete')&&!getComputedStyle(document.querySelector('.sb-top-panel')).backgroundImage.includes('sunoboom-concrete-top-header.jpg'));

   const project=await page.evaluate(()=>{const r=application.execute('project.create',{title:'Route 215',genre:'alternative-rock'});view.selectedProject=r.value.id;go('projects');return r.value.id;});
   await page.waitForURL('**#/account/projects/'+project);await page.reload({waitUntil:'networkidle'});
   await page.waitForFunction(id=>view.nav==='projects'&&view.selectedProject===id,project);
   assert.equal(await page.locator('#project-notes').count(),1);
   const song=await page.evaluate(async()=>{
    const saved=await SUNOBOOM_CORE.songs.execute('save',{title:'Route song 215'});
    if(!saved.ok)throw Error(saved.error);
    SUNOBOOM_MY_SONGS.openCard(saved.value.id);return saved.value.id;
   });
   await page.waitForURL('**#/songs/'+song);await page.reload({waitUntil:'networkidle'});
   await page.locator('#sb-vue-song-detail').waitFor();
   assert.match(await page.locator('#sb-vue-song-detail').textContent(),/Route song 215/);
   await page.goto(base+'#/songs/'+song+'/edit',{waitUntil:'networkidle'});
   assert.equal(await page.locator('#sbsong-save-form [name="title"]').inputValue(),'Route song 215');
   await page.goto(base+'#/songs/missing-record',{waitUntil:'networkidle'});
   await page.waitForURL('**#/songs');
   assert.equal(await page.evaluate(()=>SUNOBOOM_CORE.songs.records.length),1);
   await page.goto(base+'#genre-reggae-ska',{waitUntil:'networkidle'});await page.waitForFunction(()=>window.SUNOBOOM_SHELL?.active&&view.nav==='detail'&&view.selected==='reggae-ska');assert.match(page.url(),/#\/catalog\/reggae-ska\/overview$/);
   for (const [id,name] of [['alternative-rock','Альтернативный рок'],['indie-rock','Инди-рок']]) {
    await page.evaluate(id=>openGenre(id),id);
    await page.waitForURL('**#/catalog/'+id+'/overview');
    const rockHero=page.locator('.gb-hero--poster.gb-hero--'+id);
    await rockHero.waitFor();
    assert.equal(await rockHero.getByRole('heading',{name,exact:true}).count(),1);
    assert.ok((await rockHero.evaluate(el=>getComputedStyle(el,'::before').backgroundImage)).includes(id+'-live.webp'));
    assert.equal(await rockHero.locator('.gb-vinyl').isVisible(),false);
    assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true);
    assert.equal(await rockHero.getByRole('button',{name:'Создать в Suno'}).isVisible(),true);
   }
   await page.evaluate(()=>openGenre('reggae-rocksteady'));
   await page.waitForURL('**#/catalog/reggae-rocksteady/overview');
   await page.locator('.gb-hero .gb-vinyl').waitFor({state:'attached'});
   assert.equal(await page.locator('.gb-hero--poster').count(),0);
   await page.goto(base+'#/account/settings',{waitUntil:'networkidle'});await page.locator('#sbs-theme').waitFor();await page.reload({waitUntil:'networkidle'});await page.locator('#sbs-theme').waitFor();
   await page.goto(base+'#/songs/new',{waitUntil:'networkidle'});await page.locator('#sbsong-save-form').waitFor();
   const card=Buffer.from(JSON.stringify({v:1,title:'Legacy shared route 215'}),'utf8').toString('base64url');
   await page.evaluate(card=>{location.hash='#sb-song='+card;},card);
   await page.waitForFunction(()=>document.querySelector('#sbsong-shared h1')?.textContent==='Legacy shared route 215');
   assert.match(page.url(),/#\/shared\?card=/);
   await page.goto(base+'#sb-song=broken',{waitUntil:'networkidle'});await page.locator('#sbsong-shared').waitFor();assert.match(await page.locator('#app').textContent(),/Ссылка повреждена/);
   assert.equal(await page.evaluate(()=>window.__observers216),0,'no DOM observers installed');
   assert.deepEqual(errors,[]);console.log(`One persistent Vue app, browser routes/Back/Forward/reload, nested IDs and legacy links ${mobile?'mobile':'desktop'} PASS`);
  }finally{await context.close();}
 }
 const native=await browser.newContext({viewport:{width:375,height:812}});
 await native.route('**/dist/vue/*.js*',route=>route.abort());
 const page=await native.newPage();
 try{
  await page.goto(base+'#/songs/new',{waitUntil:'networkidle'});
  await page.locator('#sbsong-save-form').waitFor();
  assert.equal(await page.evaluate(()=>!!window.SUNOBOOM_SHELL?.active),false);
  await page.goto(base+'#/account/settings',{waitUntil:'networkidle'});
  await page.locator('#sbs-theme').waitFor();
  await page.goto(base+'#/catalog/reggae-ska/artists',{waitUntil:'networkidle'});
  await page.waitForFunction(()=>view.nav==='detail'&&view.selected==='reggae-ska'&&view.tab==='artists');
  const skaHero=page.locator('.gb-hero--poster.gb-hero--reggae-ska');
  await skaHero.waitFor();
  assert.ok((await skaHero.evaluate(el=>getComputedStyle(el,'::before').backgroundImage)).includes('reggae-ska-kingston-session.webp'));
  await page.goto(base+'#/catalog/ska-jamaican/artists',{waitUntil:'networkidle'});
  await page.waitForFunction(()=>view.nav==='detail'&&view.selected==='ska-jamaican'&&view.tab==='artists');
  const jamaicanHero=page.locator('.gb-hero--poster.gb-hero--ska-jamaican');
  await jamaicanHero.waitFor();
  assert.ok((await jamaicanHero.evaluate(el=>getComputedStyle(el,'::before').backgroundImage)).includes('reggae-ska-kingston-session.webp'));
  await page.goto(base+'#/catalog/hiphop-gangsta/artists',{waitUntil:'networkidle'});
  await page.waitForFunction(()=>view.nav==='detail'&&view.selected==='hiphop-gangsta'&&view.tab==='artists');
  const gangstaHero=page.locator('.gb-hero--poster.gb-hero--hiphop-gangsta');
  await gangstaHero.waitFor();
  assert.ok((await gangstaHero.evaluate(el=>getComputedStyle(el,'::before').backgroundImage)).includes('hiphop-gangsta-night-session.jpg'));
  await page.goto(base+'#/catalog/experimental-concrete/overview',{waitUntil:'networkidle'});
  await page.locator('.genre-bright--experimental-concrete').waitFor();
  assert.ok(!(await page.locator('.sb-top-panel').evaluate(el=>getComputedStyle(el).backgroundImage)).includes('sunoboom-concrete-top-header.jpg'));
  await page.evaluate(()=>openGenre('alternative-rock'));
  await page.locator('.gb-hero--alternative-rock').waitFor();
  assert.ok(!(await page.locator('.sb-top-panel').evaluate(el=>getComputedStyle(el).backgroundImage)).includes('sunoboom-concrete-top-header.jpg'));
  await page.evaluate(()=>openGenre('indie-rock'));
  await page.locator('.gb-hero--poster.gb-hero--indie-rock').waitFor();
  console.log('Canonical routes remain usable with Vue bundle unavailable PASS');
 }finally{await native.close();}
 const delayed=await browser.newContext();let release;
 const gate=new Promise(resolve=>release=resolve);
 await delayed.route('**/dist/vue/*.js*',async route=>{await gate;await route.continue();});
 const draft=await delayed.newPage();
 try{
  await draft.goto(base+'#/account/settings',{waitUntil:'domcontentloaded'});
  await draft.locator('#sbs-theme').waitFor();
  await draft.evaluate(()=>go('projects'));
  await draft.locator('#p-title').fill('Draft during URL startup');
  release();await draft.waitForFunction(()=>window.SUNOBOOM_SHELL?.active);
  await draft.waitForURL('**#/account/projects');
  assert.equal(await draft.locator('#p-title').inputValue(),'Draft during URL startup');
  console.log('Delayed shell activation preserves navigation and draft after deep-link startup PASS');
 }finally{release();await delayed.close();}
}
