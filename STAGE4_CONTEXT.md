# Этап 4 — сокращение legacy, v0.216

## Выполненный блок: навигация, оболочки и запуск

- Удалены `legacy-router-mirror.js`, `legacy-history-restore.js`, `legacyBridge.js`: больше нет второго Router, memory history, параллельного ledger, очереди переходов и ожидания memory traversal перед browser Back/Forward. `navigation-service.js` оставляет совместимый диагностический API как проекцию единственного browser Router. `route-state.js` хранит только read-only UI projection; данные по-прежнему принадлежат core owners.
- Sidebar/mobile menu, TopHeader, history controls и Notifications непосредственно входят в `ApplicationShell.vue`. Их контейнеры сохраняются, содержимое обновляется через Vue props. Для них больше нет отдельных bridge/mount циклов. Удалён `legacyTopHeaderBridge.js`.
- Один `startApplication()` вместо десятков `startLegacy*`. Удалены независимый `createFeatureMounter`, `VueFeatureHost` и альтернативный `legacyPageBridge`. При неудаче запуска Vue остаётся native интерфейс, без попытки запустить другой набор Vue-приложений.
- Page composition собирает descriptors из существующих feature contracts, не устанавливая subscriptions. Только пять групп внешних/native boundaries подключают lifecycle: artist dialog, version dialog, genre tree, poetry stress и workspace stress controls. Они получают явные события/подписки; production startup не создаёт MutationObserver. История версий получила события открытия/закрытия; темы, read markers и header передаются напрямую в оболочку.
- В активном приложении `chrome(body)` возвращает только page boundary. Sidebar, top/header, mobile nav, footer, notification overlay не генерируются повторно в staging container. Полный native chrome используется при недоступном/неработающем Vue.

## Проверки

`tests/vue-runtime.test.mjs` заменяет снятые с эксплуатации проверки отдельной memory history и multi-app bootstrap: одна проекция browser Router, guards на контекст, отсутствие двойной навигации, explicit boundary lifecycle и архитектурные ограничения. Браузерная проверка теперь использует реальные URL и browser history вместо счётчиков удалённого ledger. В ней также проверяются отсутствие DOM observers и повторной native оболочки, один Vue app, прямые ссылки/reload, missing records, delayed startup/drafts, native fallback. Центральный lifecycle проверяется на настоящих Teleport-компонентах: stale disposers, exactly-once cleanup, setup/render/mounted failures, восстановление исходного native элемента с его listener и повторный запуск.

Локальная приёмка: **134/134 Node tests**, production build и полный desktop/mobile/native browser smoke — PASS. Подтверждены оба макета, центральный portal lifecycle, idempotent startup/draft, диалоги, stress preview, живые file/textarea boundaries, все 16 страниц, команды/quota и точная совместимость прежних JSON/IDB/audio. Результаты CI/Pages/live будут добавлены после завершения.

## Конечный остаток этапа 4

**Этап 4 целиком ещё не закрыт.** Согласованный блок навигации/оболочек выполнен; полная миграция не объявляется завершённой.

Native генераторы **содержимого** страниц пока участвуют в page preparation: временный контейнер даёт исходные поля/узлы для feature snapshots и восстановления при ошибке. Это не вторая видимая оболочка, но зависимость от генерации HTML остаётся. Существующие native команды, DSP, media/IDB и словарь — необходимые сервисы; удалять их как «legacy UI» нельзя.

Следующий цельный блок этапа 4: заменить native page preparation прямой сборкой props/layout из canonical state и transient drafts; отделить генерацию fallback от штатного Vue render. Сохранить начальные значения и неотправленные поля, живые textarea/file inputs, stress preview и lazy tree. Закрывать этап 4 только после удаления этой зависимости и общей приёмки.
