<script setup>
defineProps({ model: { type: Object, required: true } });
</script>

<template>
  <div v-if="!model.detail">
    <div v-if="model.profiles.length" class="sb-dna-grid">
      <button v-for="artist in model.profiles" :key="artist.id" type="button"
        class="sb-dna-card" data-action="dna-open" :data-id="artist.id">
        <div class="sb-dna-cardimg">
          <img v-if="artist.portrait" :src="artist.portrait" alt="" loading="lazy">
          <template v-else>♫</template>
        </div>
        <div>
          <strong>{{ artist.name }}</strong>
          <span>{{ artist.genre }}</span>
          <small>{{ artist.timbre }}</small>
        </div>
        <span class="sb-dna-arrow">→</span>
      </button>
    </div>
    <div v-else class="sb-dna-empty">
      Здесь будут музыкальные персонажи со своим вокалом, инструментами,
      стилем и визуальным образом. Создай первый профиль.
    </div>
  </div>

  <div v-else class="sb-dna-detail">
    <div class="sb-dna-actions">
      <button type="button" class="btn ghost small" data-action="dna-list">← Все артисты</button>
      <button type="button" class="btn primary small" data-action="dna-apply"
        :data-id="model.detail.id">В Suno Studio</button>
      <button type="button" class="btn ghost small" data-action="dna-edit"
        :data-id="model.detail.id">Изменить</button>
      <button type="button" class="btn danger small" data-action="dna-delete"
        :data-id="model.detail.id">Удалить</button>
    </div>
    <div class="sb-dna-hero">
      <div class="sb-dna-portrait">
        <img v-if="model.detail.portrait" :src="model.detail.portrait"
          alt="Портрет артиста" loading="lazy">
        <template v-else>♫</template>
      </div>
      <div>
        <span>МУЗЫКАЛЬНАЯ ИДЕНТИЧНОСТЬ</span>
        <h2>{{ model.detail.name }}</h2>
        <p>{{ model.detail.subtitle }}</p>
      </div>
    </div>
    <div class="sb-dna-facts">
      <div v-for="fact in model.detail.facts" :key="fact.label" class="sb-dna-fact">
        <span>{{ fact.label }}</span><strong>{{ fact.value }}</strong>
      </div>
    </div>
    <section v-for="part in model.detail.textFields" :key="part.label" class="sb-dna-descr">
      <h3>{{ part.label }}</h3><p>{{ part.value }}</p>
    </section>
    <div v-if="model.detail.forbids.length" class="sb-dna-restrictions">
      <strong>Запреты:</strong>
      <span v-for="rule in model.detail.forbids" :key="rule">{{ rule }}</span>
    </div>
    <section class="sb-dna-descr">
      <h3>Промпт для Suno Style</h3>
      <div class="sb-dna-style">{{ model.detail.style }}</div>
      <div class="sb-dna-actions">
        <button type="button" class="btn ghost small" data-action="dna-copy"
          :data-id="model.detail.id">Копировать Style</button>
        <button type="button" class="btn primary small" data-action="dna-apply"
          :data-id="model.detail.id">Применить в Suno Studio</button>
      </div>
    </section>
    <div class="sb-dna-related">
      <h3>Связанные паспорта треков ({{ model.detail.related.length }})</h3>
      <template v-if="model.detail.related.length">
        <button v-for="track in model.detail.related" :key="track.id"
          type="button" class="sb-dna-tracklink" data-action="dna-track"
          :data-id="track.id">
          <strong>{{ track.title }}</strong><span>{{ track.status }} →</span>
        </button>
      </template>
      <p v-else>Пока нет привязанных треков. В «Паспорте трека» можно выбрать этого артиста.</p>
    </div>
  </div>
</template>
