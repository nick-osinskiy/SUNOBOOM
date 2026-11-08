<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, reactive, ref } from 'vue';

const props = defineProps({
  api: { type: Object, required: true },
  model: { type: Object, required: true }
});
const fields = reactive({
  title: props.model.title, artist: props.model.artist, genre: props.model.genre,
  album: props.model.album, description: props.model.description,
  audioUrl: props.model.audioUrl, listenUrl: props.model.listenUrl,
  coverUrl: props.model.coverUrl
});
const artistOpen = ref(false);
const artistShowAll = ref(false);
const artistChoices = ref(props.api.artistChoices());
const genreOpen = ref(false);
const genreShowAll = ref(false);
const genreFamily = ref('Все');
const genreChoices = ref(props.api.genreChoices());
const genreFamilies = ref(props.api.genreFamilies());

const normalize = s => String(s || '').normalize('NFKC').toLocaleLowerCase('ru');
const matchingArtists = computed(() => {
  const query = normalize(fields.artist);
  const filtered = artistShowAll.value ? artistChoices.value :
    artistChoices.value.filter(a => normalize(a.name).includes(query));
  return filtered.slice(0, 40);
});
const artistOverflow = computed(() => {
  if (!artistShowAll.value) return artistChoices.value.filter(a => normalize(a.name).includes(normalize(fields.artist))).length > 40;
  return artistChoices.value.length > 40;
});
const filteredGenres = computed(() => {
  const query = genreShowAll.value ? '' : normalize(fields.genre.trim());
  return genreChoices.value.filter(g => (genreFamily.value === 'Все' || g.family === genreFamily.value) &&
    (!query || normalize(g.name + ' ' + g.family).includes(query)));
});
const groupedGenres = computed(() => genreFamilies.value.map(name => ({
  name, genres: filteredGenres.value.filter(g => g.family === name)
})).filter(group => group.genres.length));

function saveArtist() {
  if (props.api.saveArtist(fields.artist)) {
    artistChoices.value = props.api.artistChoices();
    artistOpen.value = false;
  }
}
function pickArtist(name) { fields.artist = name; artistOpen.value = false; artistShowAll.value = false; }
function pickGenre(name) {
  fields.genre = name; genreOpen.value = false; genreShowAll.value = false; genreFamily.value = 'Все';
}
function toggleArtists() { artistShowAll.value = true; artistOpen.value = !artistOpen.value; }
function toggleGenres() {
  const opening = !genreOpen.value;
  genreOpen.value = opening;
  genreShowAll.value = opening;
  if (opening) genreFamily.value = 'Все';
}
function closeOnPointer(event) {
  if (!event.target?.closest?.('#sb-vue-song-editor .sbsong-artist-field')) artistOpen.value = false;
  if (!event.target?.closest?.('#sb-vue-song-editor .sbsong-genre-field')) genreOpen.value = false;
}
onMounted(() => {
  document.addEventListener('pointerdown', closeOnPointer);
  // The old cover reader runs against the real preview DOM after Vue mount.
  void nextTick(() => props.api.hydrateCover());
});
onBeforeUnmount(() => document.removeEventListener('pointerdown', closeOnPointer));
</script>

<template>
  <section id="sbsong-form" class="sbsong-form-panel">
    <div class="sbsong-subhead">
      <h2>{{ model.editId ? 'Изменить песню' : 'Новая песня' }}</h2>
      <button type="button" data-sbsong-action="cancel">Закрыть ×</button>
    </div>
    <!-- The original document-level submit listener handles FormData and IndexedDB. -->
    <form id="sbsong-save-form" class="sbsong-form">
      <div class="sbsong-form-columns">
        <label class="sbsong-field">
          <span>Название *</span>
          <input v-model="fields.title" type="text" name="title" maxlength="120" placeholder="Название песни">
        </label>
        <div class="sbsong-artist-field">
          <label class="sbsong-field" for="sbsong-artist-input">
            <span>Исполнитель / проект</span>
            <input id="sbsong-artist-input" v-model="fields.artist" name="artist" type="text" maxlength="120"
              placeholder="Поиск или новое имя артиста" autocomplete="off" aria-autocomplete="list"
              :aria-expanded="String(artistOpen)" aria-controls="sbsong-artist-options"
              @focus="artistOpen = true; artistShowAll = false" @input="artistOpen = true; artistShowAll = false"
              @keydown.esc.prevent="artistOpen = false">
          </label>
          <div class="sbsong-artist-shortcuts">
            <button type="button" @click="toggleArtists">▾ Выбрать из списка</button>
            <button type="button" @click="saveArtist">+ Сохранить артиста</button>
          </div>
          <div v-show="artistOpen" id="sbsong-artist-options" class="sbsong-artist-options"
            role="listbox" aria-label="Список артистов">
            <button v-for="artist in matchingArtists" :key="artist.name" type="button" role="option"
              class="sbsong-artist-option" @click="pickArtist(artist.name)">
              <strong>{{ artist.name }}</strong><small>{{ artist.origin }}</small>
            </button>
            <p v-if="artistOverflow" class="sbsong-artist-hint">Уточни поиск, чтобы увидеть остальные варианты.</p>
            <p v-if="!matchingArtists.length" class="sbsong-artist-hint">
              {{ artistChoices.length ? 'Совпадений нет. Нового артиста можно сохранить кнопкой выше.' : 'Список пуст. Введи имя и сохрани первого артиста.' }}
            </p>
          </div>
        </div>
        <div class="sbsong-genre-field">
          <label class="sbsong-field" for="sbsong-genre-input">
            <span>Жанр</span>
            <input id="sbsong-genre-input" v-model="fields.genre" name="genre" type="text" maxlength="80"
              placeholder="Найти жанр или ввести свой" autocomplete="off" aria-autocomplete="list"
              :aria-expanded="String(genreOpen)" aria-controls="sbsong-genre-results"
              @focus="genreOpen = true; genreShowAll = false"
              @input="genreOpen = true; genreShowAll = false; genreFamily = 'Все'"
              @keydown.esc.prevent="genreOpen = false">
          </label>
          <button type="button" class="sbsong-genre-toggle" aria-controls="sbsong-genre-options"
            :aria-expanded="String(genreOpen)" @click="toggleGenres">▾ Выбрать из Академии</button>
          <div v-show="genreOpen" id="sbsong-genre-options" class="sbsong-genre-options"
            role="region" aria-label="Выбор жанра из Академии">
            <div class="sbsong-genre-picker-head">
              <label for="sbsong-genre-family">Направление</label>
              <select id="sbsong-genre-family" v-model="genreFamily" aria-label="Фильтр по направлению"
                @change="genreShowAll = true">
                <option value="Все">Все направления</option>
                <option v-for="family in genreFamilies" :key="family" :value="family">{{ family }}</option>
              </select>
              <small>{{ filteredGenres.length }} из {{ genreChoices.length }}</small>
            </div>
            <div id="sbsong-genre-results" class="sbsong-genre-results" role="listbox"
              aria-label="Жанры и поджанры">
              <div v-for="group in groupedGenres" :key="group.name" class="sbsong-genre-group"
                role="group" :aria-label="group.name">
                <div class="sbsong-genre-group-title">{{ group.name }} <span>{{ group.genres.length }}</span></div>
                <button v-for="genre in group.genres" :key="genre.id" type="button" class="sbsong-genre-option"
                  role="option" @click="pickGenre(genre.name)">
                  <span>{{ genre.name }}</span>
                </button>
              </div>
              <p v-if="!filteredGenres.length" class="sbsong-genre-hint">
                {{ genreChoices.length ? 'Не найдено. Можно ввести свой жанр вручную.' : 'Каталог Академии пока недоступен. Введи жанр вручную.' }}
              </p>
            </div>
          </div>
        </div>
        <label class="sbsong-field">
          <span>Альбом / релиз</span>
          <input v-model="fields.album" type="text" name="album" maxlength="120" placeholder="Название альбома">
        </label>
      </div>
      <label class="sbsong-field">
        <span>Описание</span>
        <textarea v-model="fields.description" name="description" maxlength="700" rows="3"
          placeholder="История, настроение или заметки"></textarea>
      </label>
      <div class="sbsong-form-columns">
        <label class="sbsong-field">
          <span>{{ model.hasAudio ? 'Добавить новую аудиоверсию' : 'Загрузить аудиофайл (MP3, M4A, WAV и другие)' }}</span>
          <input name="audio" type="file" accept="audio/*,.mp3,.wav,.wave,.m4a,.aac,.flac,.ogg,.opus">
        </label>
        <label class="sbsong-field">
          <span>Обложка вручную (необязательно)</span>
          <input name="cover" type="file" accept="image/png,image/jpeg,image/webp,image/gif">
        </label>
      </div>
      <div class="sbsong-cover-auto" aria-live="polite">
        <div class="sbsong-cover-preview-figure">
          <img id="sbsong-cover-preview-img" alt="Предпросмотр обложки" hidden>
          <span id="sbsong-cover-preview-placeholder" aria-hidden="true">♫</span>
        </div>
        <div>
          <strong>Обложка из аудиофайла</strong>
          <p id="sbsong-cover-status">
            {{ model.hasCover ? 'Загружаю сохранённую обложку…' : 'Выбери MP3, M4A или FLAC — попробую найти обложку автоматически' }}
          </p>
          <small>Ручная обложка имеет приоритет, если ты её выберешь.</small>
        </div>
      </div>
      <div class="sbsong-form-columns">
        <label class="sbsong-field">
          <span>Прямая ссылка на MP3 (если есть)</span>
          <input v-model="fields.audioUrl" type="text" name="audioUrl" maxlength="700" placeholder="https://.../song.mp3">
        </label>
        <label class="sbsong-field">
          <span>Публичная страница песни</span>
          <input v-model="fields.listenUrl" type="text" name="listenUrl" maxlength="700" placeholder="https://suno.com/...">
        </label>
        <label class="sbsong-field">
          <span>Публичная обложка (по желанию)</span>
          <input v-model="fields.coverUrl" type="text" name="coverUrl" maxlength="700" placeholder="https://.../cover.jpg">
        </label>
      </div>
      <p class="sbsong-form-help">
        MP3, M4A, WAV, FLAC и другие аудиофайлы сохраняются локально (IndexedDB):
        WAV — до 500 МБ, остальные — до 150 МБ при наличии свободной памяти браузера.
        Новая загрузка добавляет версию, не заменяя старую. Обложка ищется в MP3, M4A и FLAC;
        для WAV её обычно добавляют вручную. Локальное аудио по общей ссылке не передаётся.
      </p>
      <div class="sbsong-form-actions">
        <button type="submit" class="sbsong-main-btn" id="sbsong-submit">Сохранить песню</button>
        <button type="button" data-sbsong-action="cancel">Отмена</button>
      </div>
    </form>
  </section>
</template>
