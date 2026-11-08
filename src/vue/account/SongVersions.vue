<script setup>
defineProps({
  songId: { type: String, required: true },
  versions: { type: Array, required: true },
  playingLabel: { type: String, default: '' },
  compareOpen: { type: Boolean, default: false },
  compareAId: { type: String, default: '' },
  compareBId: { type: String, default: '' }
});
</script>

<template>
  <section class="sbsong-versions" data-sb-vue-song-versions aria-label="Версии записи">
    <div class="sbsong-version-heading">
      <h3>Версии записи ({{ versions.length }})</h3>
      <small v-if="playingLabel">В основном плеере: {{ playingLabel }}</small>
    </div>

    <article v-for="version in versions" :key="version.id" class="sbsong-version-row">
      <div class="sbsong-version-row-head">
        <div>
          <strong>{{ version.label }}</strong>
          <span v-if="version.isMain" class="sbsong-version-main-badge">★ Основная</span>
          <span v-if="version.isPlaying" class="sbsong-version-play-badge">♫ Выбрана</span>
          <small>{{ version.fileName }} · {{ version.sizeLabel }} · {{ version.addedDate }}</small>
        </div>
      </div>
      <div class="sbsong-version-actions">
        <button type="button" data-sbsong-action="version-play" :data-version-id="version.id">Выбрать для плеера</button>
        <button v-if="!version.isMain" type="button" data-sbsong-action="version-main" :data-version-id="version.id">★ Сделать основной</button>
        <button type="button" data-sbsong-action="share-file" :data-id="songId" :data-version-id="version.id">Сохранить / отправить</button>
        <button type="button" class="sbsong-version-danger" data-sbsong-action="version-remove" :data-version-id="version.id">Удалить дубль</button>
      </div>
      <details class="sbsong-version-notes">
        <summary>Название и заметки</summary>
        <label>Название версии
          <input type="text" maxlength="90" :data-sbsong-version-title="version.id" :value="version.label">
        </label>
        <label>Чем отличается этот дубль
          <textarea maxlength="800" rows="2" :data-sbsong-version-note="version.id" :value="version.notes"
            placeholder="Например: более плотный припев, удачный вокал..."></textarea>
        </label>
        <button type="button" data-sbsong-action="version-save" :data-version-id="version.id">Сохранить заметки</button>
      </details>
    </article>

    <p v-if="!versions.length">Пока нет локальных версий. Загрузи первую запись в MP3, M4A или WAV.</p>

    <template v-if="versions.length > 1">
      <button type="button" class="sbsong-compare-toggle" data-sbsong-action="compare-toggle">
        {{ compareOpen ? 'Скрыть сравнение A/B' : 'Сравнить версии A/B' }}
      </button>
      <div v-if="compareOpen" class="sbsong-compare-grid">
        <label>Версия A
          <select id="sbsong-compare-a" :value="compareAId">
            <option v-for="version in versions" :key="version.id" :value="version.id">{{ version.label }}</option>
          </select>
          <audio id="sbsong-ab-a" controls preload="metadata"></audio>
        </label>
        <label>Версия B
          <select id="sbsong-compare-b" :value="compareBId">
            <option v-for="version in versions" :key="version.id" :value="version.id">{{ version.label }}</option>
          </select>
          <audio id="sbsong-ab-b" controls preload="metadata"></audio>
        </label>
        <p>Два независимых плеера для сравнения дублей. Воспроизведение запускается вручную.</p>
      </div>
    </template>

    <div class="sbsong-version-add">
      <h4>+ Добавить новую версию</h4>
      <label>Аудиофайл (MP3, M4A, WAV и другие)
        <input id="sbsong-version-file" type="file" accept="audio/*,.mp3,.m4a,.wav,.wave,.flac,.ogg,.opus,.aac">
      </label>
      <label>Название дубля
        <input id="sbsong-new-version-title" maxlength="90" type="text" placeholder="Например: Версия с новым припевом">
      </label>
      <label>Заметка
        <textarea id="sbsong-new-version-notes" maxlength="800" rows="2" placeholder="Что изменилось в этой записи?"></textarea>
      </label>
      <button type="button" class="sbsong-main-btn" data-sbsong-action="version-add" id="sbsong-version-submit">Сохранить новую версию</button>
      <p>WAV — до 500 МБ, другие форматы — до 150 МБ. Каждая версия хранится отдельно в браузере этого устройства. Старые записи не перезаписываются.</p>
    </div>
  </section>
</template>
