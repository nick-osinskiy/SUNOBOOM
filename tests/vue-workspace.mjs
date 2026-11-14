import assert from 'node:assert/strict';

const routes=['home','account','ideas','saved','projects','events','myprompts','myideas','catalog','studio','player','producer','tracks','artists','songs','mixer'];
export async function checkWorkspace(page,vue) {
  const ready=async key=>{
    await page.waitForFunction(({key,vue})=>{
      const el=document.querySelector(`[data-sb-workspace="${key}"]`);
      return el&&el.hasAttribute('data-v-app')===vue;
    },{key,vue});
  };
  // Every visible original initial-state control has a declared Vue owner.
  // Native mode intentionally keeps the complete usable fallback.
  for(const route of routes){
    await page.evaluate(route=>go(route),route);
    await page.waitForTimeout(30);
    if(vue){
      const outside=await page.evaluate(()=>[...document.querySelectorAll('.main button,.main input,.main select,.main textarea')]
        .filter(el=>el.getClientRects().length&&!el.closest('[data-v-app]')).map(el=>el.id||el.dataset.action||el.textContent.trim()));
      assert.deepEqual(outside,[],`unowned controls on ${route}`);
    }
  }
  await page.evaluate(()=>go('myideas'));await ready('idea-actions');
  await page.locator('[data-action="jump-poetry"]').click();
  await page.locator('#custom-idea-title').fill('Черновик панели 209');
  await page.locator('#custom-idea-lyrics').fill('Наша музыка звучит\nИ мелодия летит');
  const area=page.locator('#custom-idea-lyrics');
  await area.evaluate(el=>{el.focus();el.setSelectionRange(2,2);});
  await page.locator('[data-action="sb-poetry-accent"]').click();
  assert.match(await area.inputValue(),/\u0301/,'manual accent survives the Vue action bar');
  const lyrics=await area.inputValue();
  await page.locator('[data-action="sb-poetry-analyze"]').click();
  assert.equal(await area.inputValue(),lyrics,'analysis preserves source');
  assert.equal(await page.locator('#custom-idea-title').inputValue(),'Черновик панели 209');
  // No generic UI remount on a harmless descendant mutation.
  await page.evaluate(()=>{const el=document.createElement('i');document.querySelector('#idea-editor').append(el);el.remove();});
  assert.equal(await area.inputValue(),lyrics);

  // Current-day reminders, multiple lead times, disabled and expired events.
  const backup=await page.evaluate(()=>({events:structuredClone(data.events),read:structuredClone(data.notificationRead)}));
  try{
    await page.evaluate(()=>{
      data.notificationRead={};
      data.events=[
        {id:'notice209-a',title:'Сегодня <img src=x>',date:dashboardToday(),time:'12:30',type:'release',notes:'Заметка <script>',remind:true,reminderDays:[0,7]},
        {id:'notice209-b',title:'Завтра',date:sbN35DateAfterToday(1),type:'studio',remind:true,reminderDays:[1]},
        {id:'notice209-off',title:'Отключено',date:dashboardToday(),remind:false,reminderDays:[0]},
        {id:'notice209-old',title:'Прошлое',date:sbN35DateAfterToday(-1),remind:true,reminderDays:[0]}
      ];persist();go('home');
    });
    await ready('notice-banner');
    const banner=page.locator('.sb-notice-banner');
    assert.match(await banner.textContent(),/Сегодня: Сегодня <img src=x> и ещё 2/);
    assert.equal(await banner.locator('img,script').count(),0);
    await banner.locator('[data-action="sb-notice-toggle"]').click();await ready('notice-panel');
    assert.equal(await page.locator('.sb-notice-item').count(),3);
    assert.equal(await page.locator('.sb-notice-panel img,.sb-notice-panel script').count(),0);
    assert.match(await page.locator('.sb-notice-item').first().textContent(),/12:30/);
    if(vue){
      const close=page.locator('.sb-notice-close');
      assert.equal(await close.evaluate(el=>document.activeElement===el),true);
      await close.press('Shift+Tab');
      assert.equal(await page.locator('[data-action="sb-notice-read-all"]').evaluate(el=>document.activeElement===el),true);
      await page.keyboard.press('Escape');await page.locator('.sb-notice-panel').waitFor({state:'hidden'});
      await page.locator('.sb-notice-bell[data-action="sb-notice-toggle"]').click();await ready('notice-panel');
    }
    const item=page.locator('.sb-notice-item').first();
    const token=await item.locator('[data-action="sb-notice-read"]').getAttribute('data-key');
    await item.locator('[data-action="sb-notice-read"]').click();await ready('notice-panel');
    assert.equal(await page.evaluate(token=>data.notificationRead[token],token),true);
    assert.equal(await page.locator('.sb-notice-item.sb-notice-read').count(),1);
    await page.locator('[data-action="sb-notice-read-all"]').click();await ready('notice-panel');
    assert.equal(await page.locator('.sb-notice-item.sb-notice-read').count(),3);
    assert.equal(await page.locator('[data-action="sb-notice-read-all"]').count(),0);
    await page.reload({waitUntil:'domcontentloaded'});
    await page.locator('.sb-notice-bell[data-action="sb-notice-toggle"]').click();await ready('notice-panel');
    assert.equal(await page.locator('.sb-notice-item.sb-notice-read').count(),3,'read markers persist across reload');
    await page.locator('.sb-notice-item [data-action="sb-notice-event"]').first().click();
    await page.waitForFunction(()=>view.nav==='events'&&!view.sbNoticeOpen);
    assert.equal(await page.locator('.sb-notice-banner').count(),0);
    await page.evaluate(()=>{data.events=[];data.notificationRead={};persist();go('home');});
    await page.locator('.sb-notice-bell[data-action="sb-notice-toggle"]').click();await ready('notice-panel');
    assert.match(await page.locator('.sb-notice-none').textContent(),/Пока нет новых напоминаний/);
    await page.locator('[data-action="sb-notice-create"]').click();await page.waitForFunction(()=>view.nav==='events');
  }finally{
    await page.evaluate(backup=>{data.events=backup.events;data.notificationRead=backup.read;view.sbNoticeOpen=false;persist();go('home');},backup);
  }
  console.log(`Workspace control inventory, poetry commands and notifications ${vue?'Vue':'native'} PASS`);
}

export async function checkWorkspaceStartup(browser,base){
  for(const route of ['producer','songs','studio']){
    const context=await browser.newContext();let release;const gate=new Promise(r=>release=r);
    await context.route('**/dist/vue/*.js*',async route=>{await gate;await route.continue();});
    const page=await context.newPage();
    try{
      await page.goto(base,{waitUntil:'domcontentloaded'});await page.evaluate(route=>go(route),route);
      let selector,expected;
      if(route==='producer'){selector='#sbpc-new-title';expected='Несохранённая песня 209';await page.locator(selector).fill(expected);await page.locator('#sbpc-search').fill('Не терять поиск');}
      if(route==='songs'){selector='#sbsong-search';expected='Несохранённый поиск 209';await page.locator(selector).fill(expected);}
      if(route==='studio'){selector='#sba-new-block-title';expected='Свой фрагмент 209';await page.locator('#sba-add-type').selectOption('custom');await page.locator(selector).fill(expected);}
      release();await page.waitForFunction(()=>[...document.querySelectorAll('[data-sb-workspace]')].every(el=>el.hasAttribute('data-v-app')));
      if(route==='studio')await page.locator('#sba-add-editor[data-v-app]').waitFor();
      assert.equal(await page.locator(selector).inputValue(),expected,`delayed ${route} draft`);
      if(route==='producer')assert.equal(await page.locator('#sbpc-search').inputValue(),'Не терять поиск');
      if(route==='studio'){
        assert.equal(await page.locator('#sba-add-type').inputValue(),'custom');
        await page.locator('[data-sba-action="add"]').click();
        await page.waitForFunction(expected=>window.SUNOBOOM_LEGACY_ARRANGER.snapshot().blocks.at(-1).customName===expected,expected);
        assert.equal(await page.locator('#sba-new-block-title').inputValue(),'','native clear is preserved');
      }
    }finally{release();await context.close();}
  }
  // Failed render: the native form and its live draft must stay operational.
  const context=await browser.newContext();let release;const gate=new Promise(r=>release=r);
  await context.route('**/dist/vue/*.js*',async route=>{await gate;await route.continue();});
  const page=await context.newPage();
  try{
    await page.goto(base,{waitUntil:'domcontentloaded'});await page.evaluate(()=>go('producer'));
    await page.locator('#sbpc-new-title').fill('Черновик после ошибки Vue 209');
    await page.evaluate(()=>{
      const api=window.SUNOBOOM_WORKSPACE_UI;
      window.SUNOBOOM_WORKSPACE_UI=Object.freeze({...api,snapshot(key){
        const model=api.snapshot(key);
        if(key==='producer-create')Object.defineProperty(model,'groups',{get(){throw Error('test: render unavailable');}});
        return model;
      }});
    });
    release();await page.waitForFunction(()=>document.querySelector('[data-sb-workspace="producer-search"][data-v-app]'));
    assert.equal(await page.locator('[data-sb-workspace="producer-create"]').getAttribute('data-v-app'),null);
    assert.equal(await page.locator('#sbpc-new-title').inputValue(),'Черновик после ошибки Vue 209');
    await page.locator('[data-pc-action="create"]').click();
    await page.waitForFunction(()=>data.productions.some(p=>p.title==='Черновик после ошибки Vue 209'));
  }finally{release();await context.close();}
  const mobile=await browser.newContext({viewport:{width:375,height:812},isMobile:true,hasTouch:true});
  await mobile.route('**/dist/vue/*.js*',route=>route.abort());
  try{const page=await mobile.newPage();await page.goto(base,{waitUntil:'domcontentloaded'});await checkWorkspace(page,false);}finally{await mobile.close();}
  console.log('Workspace producer/song/arranger delayed drafts PASS');
}
