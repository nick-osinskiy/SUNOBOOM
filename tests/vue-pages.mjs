import assert from 'node:assert/strict';

export async function checkPageComposition(page){
  const routes=['home','account','ideas','saved','projects','events','myprompts','myideas','catalog','studio','player','producer','tracks','artists','songs','mixer'];
  for(const route of routes){
    await page.evaluate(route=>go(route),route);
    await page.waitForFunction(()=>document.querySelector('[data-sb-vue-page]')?.__vue_app__);
    const state=await page.evaluate(()=>{
      const root=document.querySelector('[data-sb-vue-page]');
      return {apps:[root,...root.querySelectorAll('*')].filter(n=>n.__vue_app__&&!n.closest('[data-sb-native-boundary]')).length,
        features:root.querySelectorAll('[data-sb-composed-feature]').length,
        nested:root.querySelectorAll('[data-sb-composed-feature]').length>0&&[...root.querySelectorAll('[data-sb-composed-feature]')].some(n=>!!n.__vue_app__),
        fallback:root.hasAttribute('data-sb-page-fallback')};
    });
    assert.equal(state.apps,1,`one actual page app on ${route}`);
    assert.ok(state.features>0,`real child components on ${route}`);
    assert.equal(state.nested,false,`no apps inside composed slots on ${route}`);
    assert.equal(state.fallback,false,`normal composition on ${route}`);
  }
  await page.evaluate(()=>go('projects'));
  await page.waitForFunction(()=>document.querySelector('[data-sb-vue-page]')?.__vue_app__);
  await page.locator('#p-title').fill('Несохранённый ввод 210');
  const same=await page.evaluate(()=>{
    const root=document.querySelector('[data-sb-vue-page]'),app=root.__vue_app__,field=document.getElementById('p-title');
    const marker=document.createElement('i');root.append(marker);marker.remove();
    return new Promise(resolve=>requestAnimationFrame(()=>resolve(app===root.__vue_app__&&field===document.getElementById('p-title')&&field.value==='Несохранённый ввод 210')));
  });
  assert.equal(same,true,'descendant changes keep the page, field and draft');
  await page.evaluate(()=>go('home'));
  console.log('Page composition: 16 routes, one app, reused child components and stable draft PASS');
}

export async function checkPageRecovery(browser,base){
  for(const failure of ['snapshot','component']){
    const context=await browser.newContext();const page=await context.newPage();
    let release;const gate=new Promise(resolve=>release=resolve);
    await context.route('**/dist/vue/*.js*',async route=>{await gate;await route.continue();});
    const errors=[];page.on('pageerror',error=>errors.push(error.message));
    try{
      await page.goto(base,{waitUntil:'domcontentloaded'});await page.evaluate(()=>go('projects'));
      await page.locator('#p-title').fill('Восстановленный проект 210');
      const genre=await page.locator('#p-genre option').nth(2).getAttribute('value');
      await page.locator('#p-genre').selectOption(genre);
      await page.evaluate(()=>{
        window.__title210=document.getElementById('p-title');
        window.__create210=document.querySelector('[data-action="create-project"]');
        const file=document.createElement('input');file.type='file';file.id='recovery-file210';file.hidden=true;
        document.querySelector('[data-sb-vue-page]').append(file);window.__file210=file;
      });
      await page.locator('#recovery-file210').setInputFiles({name:'draft210.txt',mimeType:'text/plain',buffer:Buffer.from('private draft')});
      await page.evaluate(failure=>{
        const api=window.SUNOBOOM_LEGACY_PROJECT_CREATOR;
        window.__pageRecoveryOriginal=api;
        window.SUNOBOOM_LEGACY_PROJECT_CREATOR=Object.freeze({snapshot(){
          if(failure==='snapshot')throw Error('test: model unavailable');
          const model=api.snapshot();
          Object.defineProperty(model,'values',{get(){throw Error('test: component unavailable');}});
          return model;
        }});
      },failure);
      release();
      await page.waitForFunction(()=>document.querySelector('[data-sb-vue-page][data-sb-page-fallback]'));
      const state=await page.evaluate(()=>{
        const root=document.querySelector('[data-sb-vue-page]');
        return {apps:[root,...root.querySelectorAll('*')].filter(n=>n.__vue_app__).length,title:document.getElementById('p-title').value,genre:document.getElementById('p-genre').value};
      });
      assert.deepEqual(state,{apps:0,title:'Восстановленный проект 210',genre},'whole native page keeps raw draft without competing retries');
      assert.equal(await page.evaluate(()=>document.querySelector('[data-action="create-project"]')===window.__create210&&document.getElementById('p-title')===window.__title210&&document.getElementById('recovery-file210')===window.__file210&&window.__file210.files[0]?.name==='draft210.txt'),true,'original controls/listeners and selected file survive recovery');
      await page.locator('[data-action="create-project"]').click();
      await page.waitForFunction(()=>data.projects.some(p=>p.title==='Восстановленный проект 210'));
      await page.evaluate(()=>{window.SUNOBOOM_LEGACY_PROJECT_CREATOR=window.__pageRecoveryOriginal;go('home');go('projects');});
      await page.waitForFunction(()=>document.querySelector('[data-sb-vue-page]')?.__vue_app__);
      assert.deepEqual(errors,[]);
    }finally{release();await context.close();}
  }
  console.log('Page snapshot/component failure: raw fields, native create and next-route recovery PASS');
}

export async function checkPageEditorHandoff(browser,base){
  const context=await browser.newContext({viewport:{width:375,height:812},isMobile:true,hasTouch:true});
  const page=await context.newPage();let release;const gate=new Promise(resolve=>release=resolve);
  await context.route('**/dist/vue/*.js*',async route=>{await gate;await route.continue();});
  const errors=[];page.on('pageerror',error=>errors.push(error.message));
  try{
    await page.goto(base,{waitUntil:'domcontentloaded'});await page.evaluate(()=>go('myideas'));
    await page.locator('#custom-idea-title').fill('Ручные ударения 210');
    await page.locator('#custom-idea-lyrics').fill('На дороге стоит замок\nНад рекою кружится ветер');
    await page.locator('[data-action="sb-poetry-auto-stress"]').click();
    await page.locator('#sb-poetry-stress-preview').waitFor();
    const text='За́мок 210 — ручная правка\nВе́тер и река́';
    await page.locator('#sb-poetry-stress-preview').fill(text);
    await page.evaluate(()=>{
      window.__preview210=document.getElementById('sb-poetry-stress-preview');
      window.__preview210.setSelectionRange(3,8);
    });
    release();await page.waitForFunction(()=>document.querySelector('[data-sb-vue-page]')?.__vue_app__);
    const editor=await page.evaluate(()=>{
      const node=document.getElementById('sb-poetry-stress-preview');
      return {same:node===window.__preview210,value:node.value,start:node.selectionStart,end:node.selectionEnd};
    });
    assert.deepEqual(editor,{same:true,value:text,start:3,end:8});
    assert.equal(await page.locator('#custom-idea-title').inputValue(),'Ручные ударения 210');
    await page.locator('[data-action="sb-poetry-stress-apply"]').click();
    assert.equal(await page.locator('#custom-idea-lyrics').inputValue(),text);
    assert.equal(await page.locator('#sb-poetry-stress-preview').count(),0);
    assert.deepEqual(errors,[]);
  }finally{release();await context.close();}
  console.log('Composed poetry page: same preview node, manual stress, selection and apply PASS');
}
