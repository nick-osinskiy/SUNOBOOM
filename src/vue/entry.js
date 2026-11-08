import { activateLegacyIdeaCollections } from './poetry/legacyIdeaCollectionsBridge.js';
import { activateLegacyPromptCollection } from './account/legacyPromptCollectionBridge.js';
import { activateLegacyPromptEditor } from './account/legacyPromptEditorBridge.js';
import { activateLegacyLibrary } from './account/legacyLibraryBridge.js';
import { activateLegacySongCards } from './account/legacySongCardsBridge.js';
import { activateLegacySongDetail } from './account/legacySongDetailBridge.js';
import { activateLegacyIdeaEditor } from './poetry/legacyIdeaEditorBridge.js';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import VueFeatureHost from './VueFeatureHost.vue';
import { activateLegacyNavigation } from './navigation/legacyBridge.js';
import { activateLegacyAcademy } from './academy/legacyAcademyBridge.js';
import { activateLegacyGenreDetail } from './academy/legacyGenreDetailBridge.js';
import { activateLegacyStudio } from './studio/legacyStudioBridge.js';
import { activateLegacyMixer } from './studio/legacyMixerBridge.js';
import { activateLegacyAuditor } from './studio/legacyAuditorBridge.js';
import { activateLegacyArranger } from './studio/legacyArrangerBridge.js';
import { activateLegacyPoetry } from './poetry/legacyPoetryBridge.js';
import { activateLegacyTags } from './poetry/legacyTagsBridge.js';

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

/** Vue 3 genre detail layout; existing ideas, artists and Suno templates stay functional. */
export function startLegacyGenreDetail() {
  return activateLegacyGenreDetail({ mountVueFeature });
}

/** Vue 3 central Suno Studio prompt builder; existing modules remain in place. */
export function startLegacyStudio() {
  return activateLegacyStudio({ mountVueFeature });
}

/** Vue 3 genre mixer; legacy calculations and browser storage remain unchanged. */
export function startLegacyMixer() {
  return activateLegacyMixer({ mountVueFeature });
}

/** Vue 3 prompt auditor interface, with original rule engine and clipboard actions. */
export function startLegacyAuditor() {
  return activateLegacyAuditor({ mountVueFeature });
}

/** Vue 3 arrangement cards, snake, transition hub and energy curve. */
export function startLegacyArranger() {
  return activateLegacyArranger({ mountVueFeature });
}

/** Vue 3 song poetry analytics and homograph choice list. */
export function startLegacyPoetry() {
  return activateLegacyPoetry({ mountVueFeature });
}

/** Vue 3 vocal performance tag controls and editable confirmation preview. */
export function startLegacyTags() {
  return activateLegacyTags({ mountVueFeature });
}


/** Vue form fields and Lyrics/Style; original storage and text processing retained. */
export function startLegacyIdeaEditor() {
  return activateLegacyIdeaEditor({ mountVueFeature });
}

export function startLegacyIdeaCollections() {
  return activateLegacyIdeaCollections({ mountVueFeature });
}

/** Vue prompt form fields; original save, cancel and auditor handlers retained. */
export function startLegacyPromptEditor() {
  return activateLegacyPromptEditor({ mountVueFeature });
}

/** Vue saved prompt list with original source data and handlers retained. */
export function startLegacyPromptCollection() {
  return activateLegacyPromptCollection({ mountVueFeature });
}

/** Vue library collections with the same legacy data and delegated actions. */
export function startLegacyLibrary() {
  return activateLegacyLibrary({ mountVueFeature });
}

/** Vue cards and search results for My Songs; all media and actions stay in legacy. */
export function startLegacySongCards() {
  return activateLegacySongCards({ mountVueFeature });
}

/** Vue song detail shell; versions, A/B controls and file storage stay legacy. */
export function startLegacySongDetail() {
  return activateLegacySongDetail({ mountVueFeature });
}
