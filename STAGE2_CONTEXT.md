# Этап 2 — прикладное ядро без глобального DOM

Дата: 15 ноября 2026 г. База перед первым блоком: main `77c82d1fadaeaa6be3024a712e991d0d5de051d1`, v0.210. Этап 1 закрыт; [его приёмка](STAGE1_ACCEPTANCE.md) остаётся историческим свидетельством.

**v0.212 завершает второй цельный блок этапа 2: песни, версии, файлы и Мастер. Сам этап 2 ещё не закрыт.** Следующие работы перечислены ниже; это продолжение одного архитектурного этапа, а не новые этапы за отдельные кнопки.

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

Первый блок v0.211 подтверждён: **109/109 Node tests**, сборка и полный browser smoke прошли; [CI success](https://github.com/nick-osinskiy/SUNOBOOM/actions/runs/43683861118), [Pages success](https://github.com/nick-osinskiy/SUNOBOOM/actions/runs/43684144308). Source [0a0823d](https://github.com/nick-osinskiy/SUNOBOOM/commit/0a0823d6198a8dbb93dbf26dd22dbd337242103d), проверенный bundle [65b213d](https://github.com/nick-osinskiy/SUNOBOOM/commit/65b213dd57c83e63bdfeb5ec0b46ed35a1430945). На опубликованном сайте дополнительно пройдены core commands/quota/draft/старые IDB keys desktop/mobile и mobile native без pageerror. **Это не приёмка всего этапа 2.**

## Конечный остаток этапа 2

| Блок | Требуемый результат | Статус после v0.212 |
| --- | --- | --- |
| Workspace core и общие repositories | Один объект, payload-команды основных коллекций, совместимые JSON/IDB | Выполнен первый блок; часть старых extensions ещё пишет в workspace напрямую |
| Собственные песни, версии, файлы и Мастер | Canonical state и payload/result для создания/редактирования/удаления/версий/связей; media lifecycle с явным cleanup | Выполнен в v0.212; canonical song library и workflow, payload/result, согласованные file/metadata writes и URL scopes |
| Studio/аранжировщик, preferences и вычислительные services | Явные входы и команды; прежние algorithms/словарь/DSP остаются обычными JS services; один владелец состояния | Предстоит; JSON repository сам по себе не переносит бизнес-логику |
| Data/page models и окончательная приёмка | Vue получает данные/семантические descriptors, не native DOM; устранены AccountHome DOM parsing и page layout adapter | Предстоит. DOM draft adapters временно допустимы только снаружи core |

Далее следует завершить эти блоки, проверить round-trip старых JSON/IDB fixtures и отсутствие двойных записей/владельцев/потери файлов. Только после этого принимать **весь** этап 2 и предлагать этап 3.

## Что сознательно не объявляется завершённым

- Arranger/settings state и их UI-dependent commands пока не вынесены полностью. Songs/Master отделены в v0.212; формы и медиаплееры остаются UI adapters.
- Старый HTML ещё создаёт layout; PageView и часть snapshots читают native DOM. Это известный остаток этапа 2.
- Root render/go, Router memory mirror, несколько shell/dialog roots и MutationObserver bridges сохраняются. Единая оболочка/реальная маршрутизация — этап 3, удаление дублирования — этап 4.
- Pinia содержит UI projections, не копию записей и не новый источник истины. Новый backend/auth/cloud sync не создавались.


## Второй блок — v0.212

Новые classic factories `core/song-library.js` и `core/production-workflow.js` подключаются перед основным index script и создаются один раз kernel-методами createSongs/createProductions. Songs — canonical private records прежнего JSON key, Master — production records в том же workspace object. UI не пишет эти коллекции/файлы напрямую. Поля HTML превращаются в payload на границе интерфейса; навигация, confirm, аудиоэлементы, открытые панели и позиция прослушивания остаются UI. Никакого второго Pinia-store записей.

Song commands: save, passport.import, remove, version.add/save/main/remove. Workflow commands: create/details/links/stage/note/arrangement.capture/restored/remove. Реестр артистов: songArtist.save/remove (28 workspace-команд вместо 26). ID collisions при фиксированных now/random не заменяют соседние записи. Прежние IDs и opaque keys сохраняются; повторный импорт паспорта оставляет аудиоверсии, активную версию и локальную обложку. Снимки аранжировки отделяются от входного payload; восстановление получает копию снимка.

Media commitBatch выполняет binary changes одной IDB transaction и записывает JSON в success-handler последнего запроса. JSON failure abort-ит файлы; поздний transaction abort компенсирует JSON. Публикация canonical song records происходит после tx complete. Это обработка обычных ошибок, не общая crash-atomic гарантия localStorage+IndexedDB. При сбое компенсации возвращается recoveryError; межвкладочные гонки не решены этим блоком.

URL scopes принимают create/revoke зависимостями: audio cleanup при render/navigation, preview при cancel/save, cover при изменении/pagehide, download через 60 секунд/pagehide. IDB и JSON schema не обновлялись. Cover scan и metadata parse продолжают использовать существующий audio-cover-reader.

Проверки: tests/core-songs.test.mjs — 13 headless scenarios совместимости, ошибок, очереди, лимитов, связей, истории, снимков и URL ownership. tests/vue-song-core.mjs — реальные браузерные IDB abort/rollback и сохранённый draft с Vue/native; включён в общий smoke.

Локальная проверка v0.212: **122/122 Node tests**, сборка, полный desktop/mobile/native browser smoke — PASS. Дополнительная проверка песен/Мастера с реальным IDB, сохранённым draft и URL cleanup — PASS на desktop/mobile Vue и mobile native. Публикация подтверждена ниже.

Дополнительно v0.212: pending audio read после render/pagehide отбрасывается по generation counter; регрессионная проверка не допускает создания URL после cleanup.

Публикация v0.212 подтверждена: source [22c48dd](https://github.com/nick-osinskiy/SUNOBOOM/commit/22c48dd42e14d44c958c5de6b7e41bf2c44371bc), bundle [431c396](https://github.com/nick-osinskiy/SUNOBOOM/commit/431c39635ba6e1568ba2cbd6dc88118d2f52eb95), final code [0514c13](https://github.com/nick-osinskiy/SUNOBOOM/commit/0514c139a0796bb49316f3156f22752a0a474cd2). **122/122 Node tests**, сборка и полный smoke: [CI success](https://github.com/nick-osinskiy/SUNOBOOM/actions/runs/43686030305). [Pages success](https://github.com/nick-osinskiy/SUNOBOOM/actions/runs/43686030280). Live desktop/mobile Vue и mobile native: song/Master commands, реальные file/metadata rollback, draft retention и URL cleanup — PASS без pageerror. Это второй блок, не завершение всего этапа 2.
