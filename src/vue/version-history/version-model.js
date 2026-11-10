// Pure view model: the legacy version-history.js RELEASES array remains the source of truth.
export function formatReleaseDate(value) {
  return /^\d{4}-\d{2}-\d{2}$/.test(String(value || ''))
    ? value.slice(8, 10) + '.' + value.slice(5, 7) + '.' + value.slice(0, 4)
    : '';
}

const normalize = value => String(value ?? '').trim().normalize('NFKC').toLocaleLowerCase('ru');
const matches = (value, term) => normalize(value).includes(term);

export function groupMajorVersions(releases) {
  const grouped = new Map();
  for (const release of releases) {
    const major = /^(\d+)\.(\d+)$/.exec(String(release?.[0] || ''))?.[1];
    if (major === undefined) continue;
    if (!grouped.has(major)) grouped.set(major, []);
    grouped.get(major).push(release);
  }
  return [...grouped].map(([major, items]) => ({ major, items }));
}

export function historyResults(releases, { tab = 'major', size = 'all', search = '' } = {}) {
  const items = Array.isArray(releases) ? releases : [];
  const majors = groupMajorVersions(items);
  const query = normalize(search);

  if (query) {
    const matchingMajors = majors.filter(group => query === 'v' + group.major ||
      query === group.major || matches('мажорная версия ' + group.major, query));
    const matchingReleases = items.filter(release =>
      matches('v' + release[0] + ' ' + release[0] + ' ' + release[1] + ' ' + formatReleaseDate(release[2]), query));
    return {
      mode: 'search', majors: matchingMajors,
      large: matchingReleases.filter(release => release[3] === 'large'),
      small: matchingReleases.filter(release => release[3] === 'small'),
      count: 'Найдено: ' + (matchingMajors.length + matchingReleases.length),
      legend: 'Глобальный поиск: результаты из всех вкладок. Очисти поиск, чтобы вернуться к выбранному разделу.'
    };
  }

  if (tab === 'major') {
    return {
      mode: 'major', majors,
      count: majors.length + ' из ' + majors.length + ' мажорных версий',
      legend: 'Мажорная версия — первое число до точки. Сейчас SUNOBOOM развивается в ветке v0.'
    };
  }

  const shown = size === 'all' ? items : items.filter(release => release[3] === size);
  return {
    mode: 'minor', entries: shown,
    count: shown.length + ' из ' + shown.length + ' обновлений',
    legend: size === 'all'
      ? 'Все минорные обновления в одном списке — от новейших к самым ранним.'
      : size === 'large'
        ? 'Крупные обновления — новые разделы, инструменты и значимые возможности внутри версии 0.x.'
        : 'Мелкие обновления — улучшения интерфейса, уточнения, небольшие функции и исправления.'
  };
}
