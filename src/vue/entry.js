import { createApp } from 'vue';
import { createPinia } from 'pinia';
import VueFeatureHost from './VueFeatureHost.vue';
import { activateLegacyNavigation } from './navigation/legacyBridge.js';
import { activateLegacyAcademy } from './academy/legacyAcademyBridge.js';

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

  const oldMarkup = element.innerHTML;
  const app = createApp(VueFeatureHost, { component, componentProps });
  app.use(pinia);
  try {
    app.mount(element);
  } catch (error) {
    // Preserve the previous functional legacy menu if Vue cannot initialize.
    element.innerHTML = oldMarkup;
    console.warn('[SUNOBOOM] Vue mount failed; legacy navigation retained.', error);
    return null;
  }
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

/** Mount the Vue navigation into the existing desktop and mobile menu containers. */
export function startLegacyNavigation() {
  return activateLegacyNavigation({ mountVueFeature, unmountVueFeature });
}

/** Render Academy genre cards inside its existing grouped HTML structure. */
export function startLegacyAcademy() {
  return activateLegacyAcademy({ mountVueFeature });
}
