# Итоговая очистка — v0.218

Статус: код очищен; окончательная приёмка CI/Pages/live ещё проверяется.

## Аудит

`node scripts/audit-vue-imports.mjs` / `npm run audit:vue-imports` обходит локальные статические ESM imports и literal dynamic imports, включая script-блоки Vue SFC. Реальные roots — bootstrap.js и Vite entry.js: вычисляемый URL production bundle представлен явным entry root. Проверяются JS/Vue/JSON исходники src/vue; внешние npm dependencies проверяет существующая сборка.

Результат после удаления: **103 source modules в src/vue, 104 reachable files с общим core/navigation-core.js, 0 missing imports, 0 unused modules, 0 unused bridges**. Новый guard запускается в GitHub Actions; изменения audit script также запускают workflow.

## Удалено

- 38 недостижимых архивных legacy*Bridge.js: они уже заменены прямыми factories и не участвовали в production startup v0.217.
- Неиспользуемый account-home-model.js, который лишь делегировал вызов общей semantic account model.
- Старый featureCollection.js и недостижимые collector branches в двух lifecycle helpers. Прежний availableIsland ownership guard перенесён без изменения логики в feature-ownership.js.

Сохранены шесть reachable adapters: appearance, artist profile dialog, genre tree, poetry stress, version history dialog и workspace boundaries. Компоненты, page factories, canonical core owners, схемы/ключи хранения, IDs/связи/аудиофайлы, native fallback и UI-дизайн не менялись.

## Проверки

Восемь тестов структуры удалённого bridge/collector кода сняты с эксплуатации. Вместо них добавлены три проверки import graph, сохранности шести живых adapters и соответствия roots реальным Vite/bootstrap. Остальные проверки поведения компонентов, IDs/actions, snapshots, escaping, ownership, JSON/IDB/audio и полный desktop/mobile/native browser smoke сохранены.

Локально: **134/134 Node tests**, import audit и production build — PASS. Полный desktop/mobile/native browser smoke — PASS. CI/Pages и live-проверка ещё ожидаются.

Этап 4 остаётся закрытым. Эта очистка не вводит новый этап миграции и не меняет функции приложения.
