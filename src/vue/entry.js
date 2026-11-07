import { createApp } from 'vue';
import { createPinia } from 'pinia';
import VueFeatureHost from './VueFeatureHost.vue';

// Vue components are mounted only into explicitly handed-off feature containers.
// Importing this module never replaces the existing SUNOBOOM application shell.
const pinia = createPinia();
const mounted = new WeakMap();

function resolveTarget(target) {
  if (typeof document === 'undefined') return null;
  return typeof target === 'string' ? document.querySelector(target) : target;
}

export function mountVueFeature(target, component, componentProps = {}) {
  const element = resolveTarget(target);
  if (!element || element.nodeType !== 1 || !component) return null;

  const previous = mounted.get(element);
  if (previous) previous.unmount();

  const app = createApp(VueFeatureHost, { component, componentProps });
  app.use(pinia);
  app.mount(element);
  mounted.set(element, app);

  // Call before the legacy render() replaces the container.
  return () => {
    if (mounted.get(element) !== app) return;
    app.unmount();
    mounted.delete(element);
  };
}

export function unmountVueFeature(target) {
  const element = resolveTarget(target);
  if (!element) return;
  const app = mounted.get(element);
  if (!app) return;
  app.unmount();
  mounted.delete(element);
}
