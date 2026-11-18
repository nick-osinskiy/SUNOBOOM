import assert from 'node:assert/strict';

async function versionPalette(page) {
 const badge = page.locator('.sb-top-panel .sb-app-version:visible');
 return badge.evaluate(button => {
  const style = getComputedStyle(button);
  const pixel = document.createElement('canvas').getContext('2d', {willReadFrequently:true});
  function luminance(color) {
   pixel.fillStyle = color;
   pixel.fillRect(0, 0, 1, 1);
   const [red, green, blue] = [...pixel.getImageData(0, 0, 1, 1).data].map(channel => {
    const value = channel / 255;
    return value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
   });
   return red * 0.2126 + green * 0.7152 + blue * 0.0722;
  }
  const text = luminance(style.color);
  const background = luminance(style.backgroundColor);
  return {
   foreground: style.color, background: style.backgroundColor, border: style.borderColor,
   contrast: (Math.max(text, background) + 0.05) / (Math.min(text, background) + 0.05)
  };
 });
}

export async function checkTopPanel(browser,base){
 const context=await browser.newContext(),page=await context.newPage(),errors=[];
 page.on('pageerror',error=>errors.push(error.message));
 try{
  await page.goto(base+'#/account/settings',{waitUntil:'networkidle'});
  await page.waitForFunction(()=>window.SUNOBOOM_SHELL?.active);
  for (const viewport of [{width:1440,height:900}, {width:375,height:812}]) {
   await page.setViewportSize(viewport);
   const palettes = new Map();
   for (const theme of ['dark','light','ocean','forest','sunset','amethyst','pink','pink-pastel']) {
    await page.locator('#sbs-theme').selectOption(theme);
    await page.waitForFunction(theme=>document.documentElement.dataset.sbTheme===theme,theme);
    assert.equal(await page.locator('.sb-top-panel').evaluate(el=>getComputedStyle(el).backgroundColor),await page.evaluate(()=>{const probe=document.createElement('i');probe.style.color='var(--panel)';document.body.append(probe);const color=getComputedStyle(probe).color;probe.remove();return color;}));
    const palette = await versionPalette(page);
    assert.ok(palette.contrast >= 4.5, 'version badge text contrast for ' + theme + ': ' + JSON.stringify(palette));
    palettes.set(theme, palette);
   }
   assert.equal(new Set([...palettes.values()].map(palette => palette.background)).size, palettes.size,
    'the version badge background follows all themes');
   await page.locator('#sbs-theme').selectOption('system');
   for (const colorScheme of ['light','dark']) {
    await page.emulateMedia({colorScheme});
    await page.waitForFunction(scheme=>document.documentElement.dataset.sbTheme===scheme,colorScheme);
    assert.deepEqual(await versionPalette(page), palettes.get(colorScheme), 'system version badge palette');
   }
  }
  await page.evaluate(()=>{window.__topPanel=document.querySelector('.sb-top-panel');go('studio');});
  await page.waitForURL('**#/studio');
  for(const viewport of [{width:1440,height:900},{width:768,height:1024},{width:375,height:812},{width:320,height:640},{width:812,height:375}]){
   await page.setViewportSize(viewport);
   await page.waitForFunction(()=>Math.abs(parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--sb-top-panel-height'))-document.querySelector('.sb-top-panel').getBoundingClientRect().height)<1.1);
   await page.evaluate(()=>window.scrollTo(0,1500));
   await page.waitForFunction(()=>Math.abs(document.querySelector('.sb-top-panel').getBoundingClientRect().top-8)<1.1);
   assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true,'no horizontal overflow');
   assert.equal(await page.evaluate(()=>window.__topPanel===document.querySelector('.sb-top-panel')),true,'panel persists across routes and resizing');
   const panel=page.locator('.sb-top-panel'),bounds=await panel.boundingBox();
   for(const selector of ['.sb-notice-bell','.sb-settings-shortcut','.account-shortcut','[data-sb-history-back]','[data-sb-history-forward]']){
    const box=await panel.locator(selector).first().boundingBox();
    assert.ok(box&&box.x>=bounds.x&&box.x+box.width<=bounds.x+bounds.width+1,'controls fit panel: '+selector);
   }
   await panel.locator('[data-action="sb-notice-toggle"]').click();
   const notice=page.locator('.sb-notice-panel');await notice.waitFor();
   const box=await notice.boundingBox();
   assert.ok(box.y>=0&&box.y+box.height<=viewport.height+1,'notification dialog fits viewport');
   await notice.locator('[data-action="sb-notice-close"]').click();
  }
  await page.setViewportSize({width:1440,height:900});
  await page.locator('.sb-top-panel [data-sb-history-back]').click();await page.waitForURL('**#/account/settings');
  await page.locator('.sb-top-panel [data-sb-history-forward]').click();await page.waitForURL('**#/studio');
  await page.locator('.sb-top-panel .sb-settings-shortcut').click();await page.locator('#sbs-theme').waitFor();
  assert.deepEqual(errors,[]);
  console.log('Sticky top panel: themes, scrolling, responsive controls, dialogs and history PASS');
 }finally{await context.close();}
 const native=await browser.newContext({viewport:{width:375,height:812}});
 await native.route('**/dist/vue/*.js*',route=>route.abort());
 try{
  const page=await native.newPage();await page.goto(base+'#/studio',{waitUntil:'networkidle'});
  await page.evaluate(()=>window.scrollTo(0,1500));
  await page.waitForFunction(()=>Math.abs(document.querySelector('.sb-top-panel').getBoundingClientRect().top-8)<1.1);
  await page.locator('.sb-top-panel .sb-settings-shortcut').click();await page.locator('#sbs-theme').waitFor();
  await page.locator('#sbs-theme').selectOption('dark');
  await page.waitForFunction(()=>document.documentElement.dataset.sbTheme==='dark');
  const dark = await versionPalette(page);
  await page.locator('#sbs-theme').selectOption('light');
  await page.waitForFunction(()=>document.documentElement.dataset.sbTheme==='light');
  const light = await versionPalette(page);
  assert.notEqual(dark.background, light.background, 'native version badge responds to theme changes');
  assert.ok(light.contrast >= 4.5, 'native light version badge text contrast');
  console.log('Sticky native fallback controls and version palette PASS');
 }finally{await native.close();}
}
