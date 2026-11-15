# Этап 3 — единая оболочка и маршрутизация, v0.215

## Реализация

`ApplicationShell.vue` — постоянная оболочка в `#app`: sidebar, header, browser history controls, RouterView, footer и mobile navigation. Один `createApp` и один общий Pinia; панели, диалоги и lazy widgets подключаются через Teleport в то же дерево. Переходы не заменяют оболочку.

`application-shell.js` устанавливает Vue Router с hash history, подходящей для GitHub Pages в `/SUNOBOOM/` без серверного rewrite. Router управляет URL, Back/Forward и восстановлением UI. `core/navigation-core.js` — общий чистый codec для Router и native fallback. Старые `#view-*`, `#genre-*`, `#sb-song=...` поддерживаются при загрузке и изменении hash внутри приложения. Публичная карточка сохраняет прежний формат данных; аудиофайлы в ссылку не включаются.

Маршруты: `/home`, `/catalog`, `/catalog/:genre/:tab`, `/ideas`, `/studio`, `/mixer`, `/player`, `/account`, `/account/settings`, `/account/{projects,saved,myideas,myprompts,events,tracks,artists}`, `/songs`, `/songs/new`, `/songs/:id`, `/songs/:id/edit`, `/producer/:id`, `/shared?card=...`. Проекты, паспорта и ДНК поддерживают ID в пути; редакторы workspace — `?edit=...`. Некорректные/удалённые записи нормализуются к доступному экрану без изменения данных.

`shell-adapter.js` переводит route в существующее transient UI state. Пользовательские записи по-прежнему принадлежат ядрам этапа 2. JSON keys, схемы, ID, связи и IDB не меняются. Старый memory mirror остаётся диагностикой совместимости, не источником реальной browser navigation.

## Граница совместимости

Native render/go и генераторы страниц ещё существуют. Полная цепочка native render выполняется в отдельном временном контейнере; семантические модели и уже готовые Vue-компоненты передаются RouterView. Видимым DOM оболочки владеет Vue. Два живых native editor/lazy boundaries сохраняют прежний handoff. Media cleanup и исходные алгоритмы остаются browser/service adapters.

Ошибка модели или компонента восстанавливает native страницу с живыми полями и выбранными файлами внутри оболочки. При недоступном bundle остаётся прежний интерфейс; общий codec позволяет открывать новые URL и в native режиме. Отказ initial shell mount восстанавливает исходные узлы и renderer.

## Проверки и остаток

Локальная приёмка: **151/151 Node tests**, production build и полный browser smoke — PASS. `tests/core-routing.test.mjs` и `tests/vue-shell-routing.mjs` проверяют URL codec, единственный root и постоянные shell/sidebar, browser Back/Forward и toolbar, reload вложенных ID, редактор песни, отсутствующую запись, legacy genre/shared links, недоступный bundle и draft при отложенном запуске с deep link. Полный `tests/vue-browser-smoke.mjs` также подтвердил stage-2 JSON/IDB compatibility, desktop/mobile, уведомления/read markers, отказы компонентов, сохранение выбранных файлов и живого редактора ударений. Результаты публикации добавляются после успешных CI и проверки Pages.

Следующий этап 4: последовательно удалить оставшееся дублирование native page renderers и memory mirror/наблюдателей после замены их явными lifecycle adapters. Сохранить резервный интерфейс и проверенные границы редакторов/медиа. Этот cleanup не включён в этап 3.
