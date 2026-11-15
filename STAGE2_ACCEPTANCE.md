# Приёмка этапа 2 — v0.214

Дата: 15 ноября 2026 г. База заключительного блока: main `5302e35d1bc1bafe5301776815004fd8fdcec8cc`, v0.213.

**Этап 2 принят и закрыт на v0.214.** Локальная приёмка, CI, Pages и опубликованная сборка проверены. Данные/команды/модели отделены от native HTML в границах этапа; работа над этапом 3 не начиналась.

## Проверенные требования

| Требование этапа 2 | Реализация и доказательство | Результат |
| --- | --- | --- |
| Один владелец workspace | `application.state === data`; import меняет содержимое того же root. Backup сохраняет неизвестные поля и старые IDs | PASS |
| Данные/команды без HTML | Workspace, Songs, Master, Studio, arrangement, mixer, preferences, prompt audit используют явные входы и результаты | PASS |
| Нет второй копии записей в Pinia | Pinia содержит только UI projections; records остаются в прежних core owners | PASS |
| Нет оставшихся UI direct writes | Recent genres, performance settings и artist favorites переведены в команды. Production UI не присваивает user-data collections и не вызывает storage writes | PASS |
| Data/page models без HTML parsing | 27 явно описанных screen states, прямой page state, один каталог account tiles. Нет native DOM traversal для layout; Header/Academy icon/Idea actions также из данных | PASS |
| Несохранённые поля не теряются | UI handoff сохраняет file inputs, textarea, selection, stress preview. Живые узлы двух именованных boundaries хранятся отдельно от page data | PASS |
| Прежние JSON keys/schema | Workspace, songs, arrangement v1, UI/player prefs и artist favorites читаются по прежним ключам; нет startup rewrite повреждённого JSON | PASS |
| Прежние IDB и аудиобайты | DB `sunoboom-song-media-v1`, version 1, store `files`, исходный `songId:audio` и keys версий/обложек не менялись | PASS |
| Ошибки сохранения | JSON quota/IDB failures возвращают failure, не показывают успех и откатывают records/files; несохранённый draft остаётся в UI | PASS |
| Функции/дизайн/навигация | Полный desktop/mobile/native smoke, 16 рабочих разделов, формы/редакторы/плееры/уведомления/древо и delayed/mount-error recovery | PASS |

## Автоматические проверки

- **145 Node tests**: 48 domain/ownership/model checks и 97 route/UI-model checks. `npm run test:domain`, `npm run test:vue-nav`.
- `tests/core-page-models.test.mjs`: 27 семантических layouts без document, dynamic bindings, tree/player/notice flags, изоляция и escaping; UI handoff с reactive wrapper; новые команды/rollback, old JSON/backup и guard от возврата direct writes/DOM layout parsing.
- `tests/vue-stage2-acceptance.mjs`: новые page/account/header/Idea models выполняются при запрещённых `getElementById`, `querySelector`, `querySelectorAll`. Старые project/track/DNA/version/song IDs и ссылки сохраняются после backup round-trip. Аудиофайл создаётся напрямую в прежнем IDB store/key, затем читается через core; точное сравнение байтов `[82,73,70,70,214,0]` после импорта. Vue desktop и native mobile.
- Прежние suites проверяют чтение других старых audio/version/cover keys, WAV/MP3, A/B, сохранение/удаление версий, quota/IDB rollback и освобождение URL. Workspace backup по-прежнему не включает бинарные файлы: импорт не удаляет их и не меняет songs/media ownership.
- Golden fixtures v0.212 продолжают подтверждать исходные Lyrics/Style/duration/музыкальные подсказки. Новых алгоритмов генерации или DSP в v0.214 нет.
- `npm run build:vue` и полный `npm run test:vue-browser`: desktop/mobile, native fallback, все экраны, редакторы, delayed bootstrap, missing snapshot/component recovery, stress preview identity/selection — PASS.

## Что осталось за границей этого этапа

Оставлен исходный `render/go`, native HTML fallback, lifecycle selectors/observers, memory Router mirror и отдельные shell/dialog roots. Это инфраструктура следующих этапов, не скрытый остаток data/layout parsing. Отдельные browser adapters управляют Audio/Web Audio, clipboard, focus, drag/pointer и живыми полями; пользовательские records им не принадлежат.

**Этап 3** — единая оболочка и реальная маршрутизация, сохраняя функции и данные. **Этап 4** — удаление ставшего ненужным дублирования и legacy renderer. Эти работы в v0.214 не начинались.

Не добавлялись backend, авторизация, облачная синхронизация или общая crash-atomic транзакция между localStorage и IndexedDB; обычные write/abort failures проверены в границах существующей архитектуры.

## Публикация и финальная приёмка

Публикация v0.214 подтверждена: source [6d579fc](https://github.com/nick-osinskiy/SUNOBOOM/commit/6d579fc4626c0297254495e5e9334cdd5a863c9f), проверенный bundle [8f3de34](https://github.com/nick-osinskiy/SUNOBOOM/commit/8f3de34b43bc39d8a4759b9c70feba709cd6b937). **145/145 Node tests**, сборка и полный browser smoke: [CI success](https://github.com/nick-osinskiy/SUNOBOOM/actions/runs/43711298211). [Pages success](https://github.com/nick-osinskiy/SUNOBOOM/actions/runs/43711611272). Live HTTP 200/v0.214: повторно пройдены все 16 разделов, DOM-free models, old JSON/IDB bytes, IDs/links/backup и Studio quota/reload на desktop/mobile Vue и native mobile, без pageerror. **Этап 2 принят и закрыт. Этап 3 не начинался.**
