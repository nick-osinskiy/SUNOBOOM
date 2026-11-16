# Мобильная загрузка — v0.219

Дата: 16 ноября 2026 г. Публикация и live-приёмка будут подтверждены после CI.

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

Исходные samples, CPU/resource waterfall и отклонённый вариант сохранены в `benchmarks/mobile-load-v219.json`. На Pages baseline v0.218: ready 5051 мс, FCP 1988 мс, LCP 2764 мс, resource bodies 420908 байт. Повторное измерение v0.219 выполняется после публикации.

## Проверки и пределы этапа

Import audit: 103 src/vue modules, 104 reachable, missing/unused 0. 134 Node tests и production build — PASS. Полный desktop/mobile/native browser smoke — PASS, включая delayed/failed startup, drafts/node/FileList handoff, JSON/IDB/audio, маршруты и fallback. CI, Pages и проверка живого сайта фиксируются ниже по фактическому результату.

Основной HTML и native startup остаются крупными; layout/повторные стартовые рендеры требуют отдельного профиля. Этот выпуск завершает один измеренный блок оптимизации загрузки и не объявляет всю производительность сайта оптимизированной. Миграционные этапы 2–4 остаются закрытыми.
