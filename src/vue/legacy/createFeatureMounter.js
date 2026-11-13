// Own only the handed-off element; keep its native fallback across replacements.
export function createFeatureMounter({ createApp, host, pinia, router, resolveTarget,
  warn = (...args) => console.warn(...args) }) {
  const mounted = new WeakMap();

  function restore(element, fallback) {
    element.innerHTML = fallback.html;
    for (const [name, value] of fallback.attributes) {
      if (value === null) element.removeAttribute(name);
      else element.setAttribute(name, value);
    }
  }

  function release(element, record) {
    if (mounted.get(element) !== record) return;
    mounted.delete(element); // Old disposers must never remove a newer app.
    try { record.app.unmount(); }
    catch (error) { warn('[SUNOBOOM] Vue cleanup failed.', error); }
    finally { restore(element, record.fallback); }
  }

  function mountVueFeature(target, component, componentProps = {}, { vueRouter = false } = {}) {
    const element = resolveTarget(target);
    if (!element || element.nodeType !== 1 || !component) return null;
    const previous = mounted.get(element);
    if (previous) release(element, previous);
    const fallback = {
      html: element.innerHTML,
      attributes: ['data-v-app', 'v-cloak'].map(name => [name, element.getAttribute(name)])
    };
    let app;
    let initialError;
    let previousHandler;
    try {
      app = createApp(host, { component, componentProps });
      app.use(pinia);
      if (vueRouter) app.use(router);
      previousHandler = app.config.errorHandler;
      // Vue can handle setup/render/mounted errors internally, even in production.
      app.config.errorHandler = error => { initialError ??= error; };
      app.mount(element);
      if (initialError) throw initialError;
    } catch (error) {
      try { app?.unmount(); }
      catch (cleanupError) { warn('[SUNOBOOM] Vue cleanup failed.', cleanupError); }
      finally { restore(element, fallback); }
      warn('[SUNOBOOM] Vue mount failed; legacy interface retained.', error);
      return null;
    } finally {
      if (app) app.config.errorHandler = previousHandler;
    }
    const record = { app, fallback };
    mounted.set(element, record);
    return () => release(element, record);
  }

  function unmountVueFeature(target) {
    const element = resolveTarget(target);
    if (!element) return;
    const record = mounted.get(element);
    if (record) release(element, record);
  }

  return { mountVueFeature, unmountVueFeature };
}
