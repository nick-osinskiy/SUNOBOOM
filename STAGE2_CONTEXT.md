# Этап 2 — прикладное ядро без глобального DOM

Дата: 15 ноября 2026 г. База перед первым блоком: main `77c82d1fadaeaa6be3024a712e991d0d5de051d1`, v0.210. Этап 1 закрыт; [его приёмка](STAGE1_ACCEPTANCE.md) остаётся историческим свидетельством.

**v0.211 завершает первый цельный блок этапа 2. Сам этап 2 ещё не закрыт.** Следующие работы перечислены ниже; это продолжение одного архитектурного этапа, а не новые этапы за отдельные кнопки.

## Что выделено

`core/application-core.js` — общий engine для Vue и native UI. У фабрик нет зависимости от document, UI, маршрутизации или Pinia. Storage/IndexedDB, часы, генератор ID и каталог жанров передаются зависимостями. Classic entry нужен обоим интерфейсам и подключается до основного index script; отсутствие Vue bundle по-прежнему оставляет рабочий native UI.

- Один canonical workspace object для `sunoboom-v1`; `data` в прежнем коде — const alias того же объекта. Импорт изменяет содержимое, не подменяет владельца. Legacy extensions пока могут изменять этот объект напрямую: исключение всех таких записей — остаток этапа, не уже выполненное обещание.
- 26 payload-команд для профиля, проектов, собственных идей, промптов, событий/уведомлений, паспортов/версий/release event, ДНК/очистки связи, избранного, сгенерированных идей и сохранённых структур. Команды возвращают `ok/value` либо `ok/error`; не читают поля HTML и не показывают toast/confirm/render.
- Импорт/экспорт прежнего JSON backup, прежние IDs/неизвестные поля/ограничения/даты. Backup не включает бинарные файлы IDB, как и раньше. Входные backup/сохраняемые generated/structure records отделяются от caller payloads.
- JSON repository для существующих ключей workspace, songs, arranger, settings, player prefs, справочного избранного. Read/normalization остаются совместимыми; corrupt JSON не перезаписывается при чтении.
- Binary repository для прежней DB `sunoboom-song-media-v1`, version 1, store `files`. Методы get/put/delete сохраняют непрозрачные старые ключи и ждут commit транзакции. Схема/аудиобайты/форматы файлов не менялись.
- Ошибка записи возвращает failure и откатывает workspace state. UI не показывает успешное сохранение и не уничтожает введённый draft. Подтверждение удаления, чтение draft и отображение ошибок относятся к UI adapter.

## Проверки первого блока

- `tests/core-domain.test.mjs`: 12 Node tests без document. Старый workspace fixture, один owner/reference, IDs и неизвестные поля, limits/edit/validation, reminders/date math, track/DNA links/version metadata/release events, quota rollback, backup round-trip, corrupt JSON и retry IDB-unavailable.
- `tests/vue-domain-core.mjs`: прямой вызов команды при запрещённом getElementById; та же операция из формы; quota failure сохраняет draft и прежний JSON; чтение байтов по заранее созданному старому IDB ключу. Выполняется с Vue и с заблокированным bundle.
- Прежние 97 Node tests и полный browser smoke продолжают проверять desktop/mobile, реальные forms/actions, audio/versions/A-B, fallback, page composition, manual stress и overlays.
- CI запускает `test:domain`, затем route-model tests/build/browser suite; core и root JS/index включены в paths.

Результаты публикации подтверждать по итоговому SHA и GitHub Actions; локальный успех не подменяет проверку опубликованного сайта.

## Конечный остаток этапа 2

| Блок | Требуемый результат | Статус после v0.211 |
| --- | --- | --- |
| Workspace core и общие repositories | Один объект, payload-команды основных коллекций, совместимые JSON/IDB | Выполнен первый блок; часть старых extensions ещё пишет в workspace напрямую |
| Собственные песни, версии, файлы и Мастер | Canonical state и payload/result для создания/редактирования/удаления/версий/связей; media lifecycle с явным cleanup | Следующий цельный блок. Репозитории уже общие, private state/handlers ещё native |
| Studio/аранжировщик, preferences и вычислительные services | Явные входы и команды; прежние algorithms/словарь/DSP остаются обычными JS services; один владелец состояния | Предстоит; JSON repository сам по себе не переносит бизнес-логику |
| Data/page models и окончательная приёмка | Vue получает данные/семантические descriptors, не native DOM; устранены AccountHome DOM parsing и page layout adapter | Предстоит. DOM draft adapters временно допустимы только снаружи core |

Далее следует завершить эти блоки, проверить round-trip старых JSON/IDB fixtures и отсутствие двойных записей/владельцев/потери файлов. Только после этого принимать **весь** этап 2 и предлагать этап 3.

## Что сознательно не объявляется завершённым

- Private Songs/Master/arranger/settings state и их UI-dependent commands пока не вынесены полностью.
- Старый HTML ещё создаёт layout; PageView и часть snapshots читают native DOM. Это известный остаток этапа 2.
- Root render/go, Router memory mirror, несколько shell/dialog roots и MutationObserver bridges сохраняются. Единая оболочка/реальная маршрутизация — этап 3, удаление дублирования — этап 4.
- Pinia содержит UI projections, не копию записей и не новый источник истины. Новый backend/auth/cloud sync не создавались.
