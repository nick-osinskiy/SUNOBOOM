# Shared application core

`application-core.js` provides factory functions without a DOM dependency. The browser classic entry installs `SUNOBOOM_CORE`; Node tests inject storage and other dependencies into `SUNOBOOM_CORE_FACTORY.createKernel()`.

```js
const kernel = SUNOBOOM_CORE_FACTORY.createKernel({storage, indexedDB});
const workspace = kernel.createWorkspace({defaults, getGenre});
const result = workspace.execute('project.create', {title: 'EP', genre: 'afropop'});
if (!result.ok) return result.error;
```

The workspace object has stable identity. Native `data` references that same object; import replaces its content. Successful commands commit JSON once; validation does not write, storage failures roll back. UI adapters own confirmation, draft extraction, navigation/render and feedback. Commands can also be called directly with payloads without rendering a form.

`repositories.json.read/write` preserve the existing keys and serialization. `repositories.media.get/put/delete` use `sunoboom-song-media-v1`, version 1, store `files`; callers retain the original song/version/cover key layout. The repository does not create/revoke Blob URLs or own audio playback. JSON backup excludes those binary files.

This is the first block of stage 2, not a complete domain migration. Private Songs/Master/arranger/settings commands/state, media lifecycle and DOM-derived page models remain. Keep one canonical owner, preserve old fixtures/keys/IDs and add headless command tests as each remaining domain moves here. See [STAGE2_CONTEXT.md](../STAGE2_CONTEXT.md).
