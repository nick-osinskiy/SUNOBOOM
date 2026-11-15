# Этап 2 — прикладное ядро без глобального DOM

Дата: 15 ноября 2026 г. База перед первым блоком: main `77c82d1fadaeaa6be3024a712e991d0d5de051d1`, v0.210. Этап 1 закрыт; [его приёмка](STAGE1_ACCEPTANCE.md) остаётся историческим свидетельством.

**v0.214: этап 2 принят и закрыт.** Общие владельцы данных/команды, семантические модели экранов и общая приёмка подтверждены. Протокол — STAGE2_ACCEPTANCE.md. Этап 3 в этом выпуске не начинался. Следующие работы перечислены ниже; это продолжение одного архитектурного этапа, а не новые этапы за отдельные кнопки.

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

| Блок | Требуемый результат | Статус v0.214 |
| --- | --- | --- |
| Workspace core и общие repositories | Один объект, payload-команды основных коллекций, совместимые JSON/IDB | Выполнено: canonical workspace и 30 payload-команд; оставшиеся UI direct writes устранены |
| Собственные песни, версии, файлы и Мастер | Canonical state и payload/result для создания/редактирования/удаления/версий/связей; media lifecycle с явным cleanup | Выполнен в v0.212; canonical song library и workflow, payload/result, согласованные file/metadata writes и URL scopes |
| Studio/аранжировщик, preferences и вычислительные services | Явные входы и команды; прежние algorithms/словарь/DSP остаются обычными JS services; один владелец состояния | Выполнен третий блок v0.213: canonical Studio/arranger/mixer/preferences + prompt audit services; browser media lifecycle остаётся UI adapter |
| Data/page models и окончательная приёмка | Vue получает данные/семантические descriptors, не native DOM; устранены AccountHome DOM parsing и page layout adapter | PASS v0.214: явные структуры/данные, shared account definitions, UI handoff вне моделей; общая приёмка завершена |

Все блоки реализованы и приняты на v0.214. Результаты — STAGE2_ACCEPTANCE.md. Далее можно отдельно начинать этап 3; в v0.214 он не выполнялся.

## Что сознательно не объявляется завершённым

- Songs/Master отделены в v0.212, Studio/arranger/mixer/preferences и правила аудита — в v0.213. Формы, transient drafts и медиаплееры остаются UI adapters.
- Старый HTML остаётся fallback/container renderer. PageView получает явные definitions/data; native layout parsing и чтение плиток устранены в v0.214. DOM drafts и живые UI resources находятся в отдельных adapters.
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


## Третий блок — v0.213

Пять новых classic factories: studio-core, arrangement-core, mixer-core, preferences-core, prompt-auditor-core. Kernel создаёт по одному экземпляру каждого, до первого запроса из соответствующего UI. Нативный интерфейс и Vue используют одинаковые adapters и payload/result команды. Никакого второго Pinia-store записей и новых ключей сохранения.

Studio builder остаётся ephemeral с прежними defaults; index builder — const alias. Отделены field/patch/genre/manual/generated/catalog/random/DNA commands, исходный compiler и mixer compiler. Arrangement state — blocks/activePreset плюс transient transfer/applied. Старые presets, Academy source, SMART sound/transition rules и Lyrics/Style/duration computations перенесены без изменения. Arrangement commands записывают прежнюю схему после проверки, при ошибке возвращают failure и восстанавливают состояние. Формы хранят несохранённые поля отдельно, поэтому Vue refresh не уничтожает draft после quota.

Mixer working draft/weights/tempo/formulas/saved prompts теперь в одном core owner; workspace root прежний. Сохранённые коллекции и рабочее состояние откатываются вместе при ошибках; отсутствие свойства в старом workspace также сохраняется. Preferences appearance/player разделяют один service с прежними keys, defaults и нормализацией. Объекты settings стабильны; UI применяет эффекты после успешного execute. Reset сохраняет пользовательские материалы. Auditor inspect/propose/report теперь принимает явные text/genre/builder inputs.

UI отвечает за document, поля/фокус, pointer/drag, clipboard, темы ОС и Audio/Web Audio effects; прежние аудиоалгоритмы и playback не переписывались. Headless fixture tests сравнивают byte hashes исходных v0.212 музыкальных правил; browser suite проверяет реальные JSON/quota/draft/reload в трёх режимах. Подробная карта — PROJECT_CONTEXT.md §63.

Остаток этапа 2: data/page models (включая AccountHome DOM parsing и page layout adapter), аудит оставшихся direct workspace writes и итоговая приёмка old JSON/IDB round-trip. Только после неё предлагать этап 3.

Локальная проверка v0.213: **137/137 Node tests**, сборка и полный desktop/mobile/native browser smoke — PASS; новая suite Studio/core/quota/reload прошла во всех трёх режимах. Публикация подтверждена ниже.

Публикация v0.213 подтверждена: source [f240950](https://github.com/nick-osinskiy/SUNOBOOM/commit/f2409500bf8d4c905c90b20ee49c112f23fd1195), проверенный bundle [57dde32](https://github.com/nick-osinskiy/SUNOBOOM/commit/57dde3289ca16209d877b5327953394f938372c7). **137/137 Node tests**, сборка и полный browser smoke: [CI success](https://github.com/nick-osinskiy/SUNOBOOM/actions/runs/43687856997). [Pages success](https://github.com/nick-osinskiy/SUNOBOOM/actions/runs/43688151840). На опубликованной сборке повторно пройдены Studio/arranger/mixer/preferences core commands, реальные quota/draft rollback и reload на desktop/mobile Vue и mobile native без pageerror. HTTP 200 и версия 0.213 подтверждены. Третий блок завершён; весь этап 2 остаётся открытым до data/page models и общей приёмки.


## Заключительный блок — v0.214

Native HTML перестал быть источником данных плиток/структуры страниц. Shared semantic account definitions используются двумя renderers; PageView получает явные layouts/slots и bindings из plain page state. Исправлены также скрытые HTML reads header breadcrumb, Academy icon и Idea collection extension labels. Dynamic tree/notifications/player/editor modes объявлены явно.

Живые editor nodes находятся в отдельном WeakMap UI handoff, не в page data. DOM reads допускаются только в UI adapters для lifecycle, фокуса/selection, несохранённых полей и browser media effects. Это не второй owner пользовательских записей и не DOM parsing для data/layout models. Старый renderer остаётся fallback и источником native контейнеров до этапов 3–4.

Direct writes recent/performance prefs/artist favorites заменены командами с rollback; старые keys и IDs сохранены. Startup normalization перенесена в owner. Новые headless/browser tests и полная регрессия составляют общую приёмку, подробности STAGE2_ACCEPTANCE.md. Статус CI/Pages и live-проверки фиксируется после публикации.

Локальная приёмка v0.214: **145/145 Node tests**, сборка, полный desktop/mobile/native smoke и отдельная stage-2 JSON/IDB/model acceptance — PASS. Публикация подтверждена ниже.

Публикация v0.214 подтверждена: source [6d579fc](https://github.com/nick-osinskiy/SUNOBOOM/commit/6d579fc4626c0297254495e5e9334cdd5a863c9f), проверенный bundle [8f3de34](https://github.com/nick-osinskiy/SUNOBOOM/commit/8f3de34b43bc39d8a4759b9c70feba709cd6b937). **145/145 Node tests**, сборка и полный browser smoke: [CI success](https://github.com/nick-osinskiy/SUNOBOOM/actions/runs/43711298211). [Pages success](https://github.com/nick-osinskiy/SUNOBOOM/actions/runs/43711611272). Live HTTP 200/v0.214: повторно пройдены все 16 разделов, DOM-free models, old JSON/IDB bytes, IDs/links/backup и Studio quota/reload на desktop/mobile Vue и native mobile, без pageerror. **Этап 2 принят и закрыт. Этап 3 не начинался.**
