# Этап 1 — функциональный паритет и цельные экраны

Кандидат: **v0.210**, 14 ноября 2026 г. База main: `812413a67e25a795d4b09789bce2416dba97220a` (v0.209). План — [MIGRATION_AUDIT.md](MIGRATION_AUDIT.md). Закрытие этапа подтверждается зелёным итоговым CI/Pages выпуска, а не числом перенесённых кнопок.

## Результат

Существующие Vue-компоненты собраны в `WorkspacePageView`: один фактический Vue app на основной экран. Формы, списки, детали и панели — реальные дочерние компоненты, переиспользующие прежние props/API. Синхронный сборщик читает определения существующих bridges без создания их apps/observers/subscriptions; повторно реализованных форм нет. Старые наблюдатели не монтируют приложения в обычные дочерние hosts.

`data-v-app` внутри страницы сохранён как **совместимый признак владения DOM**, нужный native guards. Отдельный app определяется по `__vue_app__`, а не по этому атрибуту. В регрессии проверяются фактические приложения, а не только маркеры.

Статическая композиция пока строится из окончательного native layout и преобразуется в VNodes; содержимое известных hosts заменяется готовыми Vue-компонентами. Страница целиком не вставляется через `v-html`. Этот **DOM-derived layout adapter** явно остаётся работой этапа 2. Native templates всё ещё нужны для fallback, а `chrome/render/go` и memory-router ещё управляют оболочкой/переходами — это этап 3.

## Матрица приёмки

| Область | Что принимается | Свидетельство |
| --- | --- | --- |
| Главная, кабинет, Идеи, библиотека | Переиспользование ранее готовых views; профиль/счётчики/плитки/backup/генерация/коллекции | Существующий полный browser smoke + `checkPageComposition` |
| Проекты, события, промпты, идеи | Формы и списки внутри одного page app; пустые/edit/detail, save/cancel/delete/переходы, валидация | Полный browser smoke + `vue-workspace.mjs` + page recovery |
| Уведомления | Те же сроки/сортировка/read-state; read-all/reload/event/create, desktop/mobile/keyboard | `vue-workspace.mjs`, включая отсутствие pageerror после persisted-event reload |
| Академия и справочные профили | F1 из аудита не воспроизводится; поиск/фильтры/избранное/пагинация/диалог/жанр; tree open/close/reopen | `vue-artist-profiles.mjs` + дерево в полном smoke |
| Studio и аранжировщик | Параметры/промпт, аудитор, blueprint, добавление/перестановка/свой блок/переходы/энергия/перенос с подтверждением | Полный browser smoke + delayed custom composer в `vue-workspace.mjs` |
| Тексты и ударения | Исходник не заменяется анализом; ручной accent, preview/manual edits, selection, apply; async ambiguity lifecycle | Полный browser smoke + `checkPageEditorHandoff` |
| Плеер и A/B | Режимы, локальное аудио, очередь/позиция/громкость, сравнение/заметки/cleanup | Полный browser smoke; движки не переписывались |
| Мастер, песни и версии | Создание/источник/поиск, связанные материалы/этапы/заметки, редактор/карточки/обложки/версии/аудио | Полный browser smoke + workspace/delayed draft |
| Паспорта и ДНК | Списки/детали/редакторы, даты/валидация/связи/переходы | Полный browser smoke |
| Карточка песни по ссылке | Прямая/повреждённая ссылка, Unicode/HTTPS, без аудио, выход и media cleanup | `checkSharedSong207`/startup и полный smoke |
| Настройки/история/профиль исполнителя | Отдельные dialogs/settings views, клавиатура/закрытие | Полный browser smoke и профили |
| Структура приложения на экране | Один actual page app на 16 обычных маршрутах × desktop/mobile; нет actual apps в обычных composed slots | `vue-pages.mjs`, [снимок](docs/audits/vue-pages-v0210.json) |
| Ошибка модели/компонента | Целиком рабочий native body, исходные DOM-поля/listeners/checked/select/selection/FileList, создание записи, retry следующего render | `checkPageRecovery`, два принудительных типа ошибки |
| Отсутствующий/поздний Vue bundle | Полный native fallback; сохранность введённых полей; повторные переходы | Полный smoke + startup suites v0.197–210; mobile native тоже проверяется |

Эти проверки не сертифицируют все браузеры, сторонние сервисы, произвольный повреждённый backup или реальное воспроизведение каждого аудиоформата. Сохраняется прежняя поддержка браузерных форматов. Ни новый backend, ни cloud sync, ни полная бинарная резервная копия этим этапом не добавлены.

## Явные границы владения

1. **Обычные composed hosts** — один page app и Vue child components. Native handlers выполняют команды, но native renderers не переписывают содержимое этих hosts. Совместимые guards используют существующие маркеры.
2. **`#sb-gt-inner`** — named lazy boundary древа. Его старый lifecycle создаёт/освобождает отдельный Vue island при open/close. Это разрешённое исключение внутри page app; collapse обязан dispose, повторное открытие — создать ровно одно дерево.
3. **`#sb-poetry-auto-stress`** — named editor boundary асинхронного preview. Переносятся реальные DOM children с textarea/mirror/listeners; родительский Vue renderer не патчит их содержимое. Действия и ambiguity choices внутри подключаются по explicit ready/closed events и очищаются после apply.
4. **Lyrics textarea/caret/mirror, auto-stress busy-state, custom-name clear, media refs** — существующие управляемые локальные границы. `v-once`/refs допускают native engine операции, не создавая второй reactive copy текста/файлов. Переделка алгоритмов ради синтаксиса Vue не требуется.
5. **Шапка, меню, история переходов, dialogs** — пока отдельные внешние roots. Единый глобальный `AppShell/RouterView` относится к этапу 3, а не к приёмке page composition.
6. **Page failure** — `data-sb-page-fallback` блокирует дочерние retries. Восстанавливаются исходные controls и editor nodes. Новый native render создаёт новый host и может снова подключить Vue. Если bundle вообще не загрузился, исходный HTML работает самостоятельно.

## Остаток миграции после этапа 1

- **Этап 2:** repositories JSON/IndexedDB, команды с payload/result без global document, один владелец доменного состояния; устранить DOM-derived models, включая новый layout adapter. Сохранить прежние ключи/IDs/связи и бинарное аудио. Pinia UI projections пока не стали источником данных.
- **Этап 3:** один штатный AppShell/RouterView, совместимые старые URL, Back/Forward/refresh, прекращение корневого `#app.innerHTML` и runtime monkey-patches.
- **Этап 4:** удалить активное дублирование/неиспользуемые bridges/templates, провести финальную приёмку, отдельно согласовать recovery/fallback policy.

Это оставшиеся архитектурные этапы из аудита. Новые функции продукта и новые микрозадачи за отдельные кнопки к завершению миграции не добавляются.

## Выпуск и проверки

Локальная приёмка завершена: **97/97 Node tests**, сборка и полный browser smoke прошли; отдельно пройден финальный failure recovery с сохранением исходных buttons/fields/FileList. CI/Pages и опубликованный bundle подтвердить по итоговому SHA выпуска. Требуемый набор: `test:vue-nav` (97 tests), `build:vue`, полный `test:vue-browser`, проверка опубликованного bundle. Исторические результаты v0.208/209 не подменяют эту приёмку.
