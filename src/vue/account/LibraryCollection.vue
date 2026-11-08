<script setup>
defineProps({ model: { type: Object, required: true } });
</script>

<template>
  <div class="account-back">
    <button type="button" class="btn ghost small" data-action="workspace-back">{{ model.backLabel }}</button>
  </div>
  <header class="heading">
    <h1>Моя библиотека</h1>
    <p>Любимые жанры, идеи и промпты. Сохраняются локально в этом браузере.</p>
  </header>

  <div class="section-title"><h2>Избранные жанры ({{ model.genres.length }})</h2></div>
  <div v-if="model.genres.length" class="genre-grid">
    <button v-for="g in model.genres" :key="g.id" type="button" class="genre-card"
      :style="{ '--accent': g.color }" data-action="genre" :data-id="g.id">
      <div class="art"></div>
      <div class="genre-content">
        <div>
          <div class="kicker">{{ g.family }} · {{ g.bpm[0] }}–{{ g.bpm[1] }} BPM</div>
          <h3>{{ g.name }}</h3><p>{{ g.tagline }}</p>
        </div>
        <div class="foot"><span>{{ g.era }}</span><span style="color:#ffacd9">Открыть →</span></div>
      </div>
    </button>
  </div>
  <div v-else class="empty"><strong>Пока нет избранных жанров</strong>Добавляй их в карточках Академии.</div>

  <div class="section-title"><h2>Сохранённые идеи ({{ model.ideas.length }})</h2></div>
  <div v-if="model.ideas.length" class="idea-grid">
    <article v-for="x in model.ideas" :key="x.key" class="idea">
      <div class="idea-badge">{{ x.genre }} · {{ x.mood }}</div>
      <h3>{{ x.title }}</h3><p>{{ x.pitch }}</p>
      <div class="actions">
        <button type="button" class="btn primary small" data-action="idea-use" :data-id="x.genreId" :data-i="x.index">В студию</button>
        <button type="button" class="btn ghost small" data-action="idea-save" :data-id="x.genreId" :data-i="x.index">Сохранено</button>
      </div>
    </article>
  </div>
  <div v-else class="empty"><strong>Нет сохранённых идей</strong>Найди интересный сюжет и нажми «Сохранить».</div>

  <div class="section-title">
    <h2>Мои собственные идеи ({{ model.own.length }})</h2>
    <button type="button" class="btn ghost small" data-action="nav" data-nav="myideas">Добавить или изменить →</button>
  </div>
  <div v-if="model.own.length" class="idea-grid">
    <article v-for="x in model.own" :key="x.id" class="idea">
      <div class="idea-badge">{{ x.genre }}</div>
      <h3>{{ x.title }}</h3><p>{{ x.pitch }}</p>
      <button type="button" class="btn ghost small" data-action="edit-manual-idea" :data-id="x.id">Открыть запись →</button>
    </article>
  </div>
  <div v-else class="empty"><strong>Пока нет своих идей</strong>Добавь их в личном кабинете.</div>

  <div class="section-title">
    <h2>Идеи из генератора ({{ model.generated.length }})</h2>
    <button type="button" class="btn ghost small" data-action="nav" data-nav="ideas">＋ Создать ещё</button>
  </div>
  <div v-if="model.generated.length" class="idea-grid">
    <article v-for="x in model.generated" :key="x.id" class="idea generated-card">
      <div class="idea-badge">{{ x.genre }} · {{ x.topic }}</div>
      <h3>{{ x.title }}</h3><p>{{ x.pitch }}</p>
      <p class="generator-story">{{ x.storyLine }}</p>
      <div class="generator-hook"><span>ХУК ПРИПЕВА</span><strong>{{ x.hook }}</strong></div>
      <p v-if="x.detail" class="generator-detail">Твоя деталь: {{ x.detail }}</p>
      <div class="actions">
        <button type="button" class="btn primary small" data-action="generated-use" :data-id="x.id">В Suno Studio</button>
        <button type="button" class="btn ghost small" data-action="generated-copy" :data-id="x.id">Копировать</button>
        <button type="button" class="btn danger small" data-action="generated-delete" :data-id="x.id" :aria-label="'Удалить идею «' + x.title + '»'">Удалить</button>
      </div>
    </article>
  </div>
  <div v-else class="empty"><strong>Сохранённых новых идей нет</strong>Создай идеи в генераторе и нажми «Сохранить».</div>

  <div class="section-title">
    <h2>Мои промпты ({{ model.prompts.length }})</h2>
    <button type="button" class="btn ghost small" data-action="nav" data-nav="myprompts">Добавить или изменить →</button>
  </div>
  <div v-if="model.prompts.length" class="saved-list">
    <article v-for="x in model.prompts" :key="x.id" class="saved-item">
      <div class="row">
        <h3>{{ x.title }}</h3>
        <div class="actions">
          <button type="button" class="btn ghost small" data-action="copy-saved" :data-id="x.id">Копировать</button>
          <button type="button" class="btn danger small" data-action="delete-saved" :data-id="x.id" :aria-label="'Удалить промпт «' + x.title + '»'">Удалить</button>
        </div>
      </div>
      <p>{{ x.text }}</p><span class="sub">{{ x.date }}</span>
    </article>
  </div>
  <div v-else class="empty"><strong>Промптов пока нет</strong>Создай первый в Suno Studio и сохрани в библиотеке.</div>
</template>
