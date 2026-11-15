# Приёмка этапа 4 — v0.217

Статус: реализация завершена; окончательное закрытие после CI/Pages/live. История первого блока — STAGE4_CONTEXT.md.

| Требование | Реализация и проверка |
| --- | --- |
| Один Router/одна оболочка | v0.216: browser hash history, direct shell children, идемпотентный startup; нет отдельного memory Router/ledger и multi-app fallback |
| Vue не готовит native HTML для здоровых страниц | v0.217: `page-model.js` + `page-features.js`; удалён `page-composition.js`; 27 layout variants и 16 рабочих экранов. Browser acceptance запрещает chrome и чтение native form fields во время model assembly |
| Состояние и черновики передаются явно | scoped plain input records; canonical core state не дублируется. Empty/false сохраняются; scoped context восстанавливается после nesting/ошибки. Начальная передача полей не вызывает input/change/autosave |
| Живые UI resources сохранены | native stress preview/caret/selection; выбранный file input, тот же FileList и listeners через отдельную boundary. Проверены delayed song editor, ДНК, Мастер, настройки и предыдущие delayed form scenarios |
| Команды/связи/аудио не изменены | прежние payload commands, JSON keys/schema, IDs, links и IDB/audio bytes. Приёмка этапа 2 повторяется на новой архитектуре. Vue-паспорт сохраняет artistDnaId при edit/save; восстановлены поле и native переходы |
| Native fallback остаётся рабочим | native chain хранится как lazy recovery callback и вызывается после snapshot/component error. Native UI без bundle, raw draft/node/file recovery, retry на следующем экране — browser tests |
| Media lifecycle не зависит от HTML render | before-page hooks: song URL release, Player LAB/A-B pause/state, выбор Мастера, transient arranger reset. Остальные algorithms/DSP/dictionary/IDB остаются services |
| Дизайн и управление сохранены | прежние Vue components, authored layouts/CSS, IDs/data-actions, keyboard/touch и desktop/mobile smoke |

Автоматизация: **139 Node tests**, `tests/vue-direct-pages.mjs`, полный `tests/vue-browser-smoke.mjs` и CI. Итог публикации фиксируется ниже после фактического успеха.

Этап 4 закрывает **зависимость штатного Vue render от native page preparation**, а не удаление всех native JS. До загрузки bundle показывается независимый native интерфейс; он также нужен для восстановления после ошибки. Ограниченные media/editor/lazy boundaries, доверенные иконки/фрагменты существующих widgets, словарь, исходные алгоритмы и совместимые API names намеренно остаются. Архивные feature bridges не входят в штатную сборку страниц. Backend/auth/cloud sync не относятся к этому переносу.


Локальная приёмка v0.217: **139/139 Node tests**, production build и полный desktop/mobile/native browser smoke, включая direct-render/draft/file/link acceptance — PASS. CI/Pages/live ещё ожидаются.
