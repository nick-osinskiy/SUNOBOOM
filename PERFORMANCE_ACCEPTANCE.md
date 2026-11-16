# Мобильная загрузка — v0.219–v0.220

Статус: **v0.219 опубликована и принята 16 ноября 2026 г.**

## v0.220 — стартовые перерисовки

Локальная приёмка: import audit (103 modules, missing/unused 0), 134/134 Node tests, build и полный desktop/mobile/native browser smoke — PASS. CI/Pages/live-приёмка фиксируются после публикации. Baseline — main ec54e27 (v0.219). Существующие Linux CI assets сохранены: исходники Vue/стили/Vite config не менялись; локальная Windows сборка успешно проверена, различающиеся generated hashes не публикуются вместо прежних assets.

В режиме cold mobile Chromium профилировщик перехватывает setter innerHTML только для native #app до активации Vue. В production этого перехвата нет. Baseline — 32 полные записи. 21 промежуточное обновление, вызванное синхронной установкой inline-расширений, устранено: явные install refresh лишь помечают очередь, финальный flush вызывает актуальный render после завершения всех inline-расширений, до external modules. Первый исходный render остаётся доступен. Обычные пользовательские render/go не входят в очередь; нет таймеров, новых отложенных задач, второго владельца данных или изменений схем хранения.

| Local Python HTTP, одинаковая эмуляция, median ×3 | v0.219 | v0.220 |
| --- | ---: | ---: |
| Native #app writes до Vue | 32 | 11 |
| Суммарный переданный setter HTML, UTF-16 units | 557747 | 191203 |
| Время внутри setter | 138 мс | 48 мс |
| CDP ScriptDuration | 0,345338 с | 0,237913 с |
| CDP TaskDuration | 3,206259 с | 2,583541 с |
| CDP LayoutDuration | 1,264505 с | 1,078528 с |
| First Contentful Paint | 3592 мс | 3528 мс |
| LCP до ready+200 мс | 4428 мс | 4224 мс |
| Готовность Vue shell | 12164 мс | 12443 мс |

Объём повторной DOM-работы снижен примерно на 66%, ScriptDuration — на 31%, TaskDuration — на 19% в этом профиле. Общая загрузка не ускорилась в локальном замере; нельзя объявлять её ускоренной на основании этих данных. Три запуска, разные состояния ОС/соединений и эмуляция не заменяют реальные телефоны. Повторное измерение Pages выполняется отдельно; raw samples в benchmarks/mobile-load-v220.json. nativeHTMLChars означает длину строки в UTF-16 units, не сетевые байты. В измерениях не было параллельных functional tests.

Проверка эквивалентности до изменения номера версии: итоговый native #app.innerHTML полностью совпал с baseline на home/catalog/events/projects/account/myideas/tracks/artists, desktop и mobile. Компоненты/стили/core/storage и обработчики действий не менялись. Новый checkStartupRenderBatch входит в полный browser smoke и CI: бюджет до 12 native startup writes, финальные dashboard/catalogue, синхронная навигация и отсутствие повторного flush поверх черновика. Остальные тесты проверяют delayed/error startup, native fallback, старые JSON/IDB/audio, настройки стартовой страницы и routes. Этапы миграции остаются закрытыми.

---

## Изменение

В waterfall v0.218 финальный Vue bundle начинал загружаться лишь при выполнении bootstrap после остальных скриптов (на Pages около 3,9–4,0 с во втором/третьем запуске). Добавлен modulepreload после начального native-интерфейса, перед последней группой classic scripts, с низким приоритетом. URL preload и dynamic import совпадает, активацию по-прежнему контролирует bootstrap; ошибка загрузки оставляет прежний native-интерфейс.

В Vite 8.3.8 ES-library default сохраняет форматирование (`codegen: false` в установленном Vite). Для конечного browser executable включён `rolldownOptions.output.minify: true`. LF-размер JS уменьшен с 570217 до 449304 байт (−21,2%), gzip тем же Node: 147113 → 131418 (−10,7%). Vue-компоненты, core, ключи/форматы хранения, IDs/связи/аудиофайлы и CSS исходники не менялись. Scoped CSS hashes могут отличаться между Windows/Linux build; правила и соответствующие селекторы генерируются вместе.

## Методика и результаты

`node scripts/profile-mobile-load.mjs URL 3` (или `npm run profile:mobile -- URL 3`). Chromium/Playwright, 375×812, mobile/touch, cold HTTP cache, 1,6 Мбит/с download, 0,75 Мбит/с upload, latency 150 мс, CPU ×4. Каждый запуск — новый browser context. Метрики — медиана трёх запусков. TLS/CDN/соединения могут отличаться; тесты функций параллельно с замерами не запускались. Это лабораторная эмуляция на данном компьютере, не field metrics и не обещание скорости на любом телефоне.

| Local Python HTTP, без сжатия | v0.218 | v0.219 |
| --- | ---: | ---: |
| Готовность Vue shell | 13023 мс | 12159 мс |
| First Contentful Paint | 3368 мс | 3376 мс |
| Largest Contentful Paint до ready+200 мс | 4252 мс | 4236 мс |
| Сумма long-task excess свыше 50 мс до ready+200 мс | 936 мс | 872 мс |
| Resource body bytes, без document | 1507354 | 1370601 |

Ускорение local ready — 6,6%; FCP практически не изменился (+8 мс). Показатель long-task excess здесь диагностический и не равен Lighthouse TBT. Ранний preload в head отклонён: FCP ухудшался до 4304 мс, LCP до 6092 мс. Принят только более поздний preload. Сравнивать абсолютные local timings с Pages нельзя: Python не сжимает файлы.

Исходные samples, CPU/resource waterfall и отклонённый вариант сохранены в `benchmarks/mobile-load-v219.json`. На Pages baseline v0.218: ready 5051 мс, FCP 1988 мс, LCP 2764 мс, resource bodies 420908 байт. Повторное измерение v0.219 приведено ниже.

## Проверки и пределы этапа

Import audit: 103 src/vue modules, 104 reachable, missing/unused 0. 134 Node tests и production build — PASS. Полный desktop/mobile/native browser smoke — PASS, включая delayed/failed startup, drafts/node/FileList handoff, JSON/IDB/audio, маршруты и fallback. Успешные CI, Pages и проверка живого сайта подтверждены ниже.

Основной HTML и native startup остаются крупными; layout/повторные стартовые рендеры требуют отдельного профиля. Этот выпуск завершает один измеренный блок оптимизации загрузки и не объявляет всю производительность сайта оптимизированной. Миграционные этапы 2–4 остаются закрытыми.


## Опубликованная сборка

Публикация v0.219 подтверждена 16 ноября 2026 г.: source [5b6b2dd](https://github.com/nick-osinskiy/SUNOBOOM/commit/5b6b2dd31476ea59691a475a8ed4540f571f7410), проверенная CI-сборка [567cdb9](https://github.com/nick-osinskiy/SUNOBOOM/commit/567cdb9aae2330da7edec0733d2733a47c45108b). [GitHub Actions success](https://github.com/nick-osinskiy/SUNOBOOM/actions/runs/43798243674): audit, 134 Node tests, build, полный desktop/mobile/native smoke. [Pages success](https://github.com/nick-osinskiy/SUNOBOOM/actions/runs/43798685578). На [сайте v0.219](https://nick-osinskiy.github.io/SUNOBOOM/?v=219) пройдены direct pages/recovery, draft/node/FileList handoff, browser routing/Back/Forward/reload, native canonical URLs, прежние JSON/IDB/audio и Studio/preferences. Финальные JS/CSS совпали с main по SHA-256 после нормализации CRLF. Функции/дизайн/данные/fallback сохранены. Этот блок оптимизации принят; дальнейшие CPU/layout улучшения требуют отдельного измерения.

| GitHub Pages, одинаковая эмуляция | v0.218 | v0.219 |
| --- | ---: | ---: |
| Готовность Vue shell | 5051 мс | 4700 мс |
| First Contentful Paint | 1988 мс | 1992 мс |
| LCP до ready+200 мс | 2764 мс | 2800 мс |
| Resource body bytes, без document | 420908 | 403069 |
| Vue JS transfer body | 150506 | 132607 |

Медиана ready улучшилась на 6,9%; первый показ практически прежний. Это три лабораторных запуска, не статистическое доказательство ускорения на всех устройствах. Во всех трёх final runs ровно один Vue resource fetch; старт загрузки 2527–2870 мс вместо 3926–6979 мс baseline. Final Linux CI bundle: 449513 LF-байт, gzip тем же Node 131537 байт; небольшое отличие от local Windows build связано с генерируемым кодом/scoped hashes. Raw final samples добавлены в benchmarks/mobile-load-v219.json. Начальная сеть оптимизирована; около секунды layout/long-task нагрузки остаётся предметом следующего этапа.
