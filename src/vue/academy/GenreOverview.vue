<script setup>
defineProps({
  genre: { type: Object, required: true }
});
defineEmits(['select-tab']);
</script>

<template>
  <div class="gb-grid" data-sb-vue-overview>
    <div class="gb-column">
      <section class="gb-panel pink">
        <div class="gb-sup">01 / ЗНАКОМСТВО С ЖАНРОМ</div>
        <h2>Характер и звучание</h2>
        <p><strong>{{ genre.tagline }}</strong></p>
        <p>{{ genre.description }}</p>
        <div class="gb-unit"><b>🎸</b><div><strong>Инструменты</strong><span>{{ genre.instruments }}.</span></div></div>
        <div class="gb-unit"><b>🎛️</b><div><strong>Саунд</strong><span>{{ genre.style }}.</span></div></div>
        <div class="gb-unit"><b>✍️</b><div><strong>Тематика песен</strong><span>{{ genre.themes }}.</span></div></div>
      </section>
      <section class="gb-panel">
        <div class="gb-sup">03 / ИДЕИ ДЛЯ СТАРТА</div>
        <h2>Что можно спеть</h2>
        <div v-for="(idea, i) in genre.ideas" :key="i" class="gb-idea">
          <strong>{{ idea.title }}</strong><p>{{ idea.pitch }}</p>
        </div>
        <button type="button" class="btn ghost small" @click="$emit('select-tab', 'ideas')">
          Все идеи <span aria-hidden="true" v-html="genre.icons.arrow"></span>
        </button>
      </section>
    </div>
    <div class="gb-column">
      <section class="gb-panel blue">
        <div class="gb-sup">02 / ПАСПОРТ НАПРАВЛЕНИЯ</div>
        <h2>История и сцена</h2>
        <div class="info-label">Эпоха</div><p>{{ genre.era }}</p>
        <div class="info-label">Диапазон темпа</div>
        <p class="gb-bpm-value" style="font-size:26px;font-weight:900">{{ genre.bpm[0] }}–{{ genre.bpm[1] }} BPM</p>
        <div class="info-label">Исполнители для знакомства</div>
        <div class="gb-artists"><span v-for="name in genre.artists" :key="name">{{ name }}</span></div>
      </section>
      <section class="gb-panel pink">
        <div class="gb-sup">04 / ТВОЯ МУЗЫКА</div>
        <h2>Преврати знания в трек</h2>
        <p>Выбери вокал, настроение и темп, затем создай промпт и структуру песни в Suno Studio.</p>
        <div class="gb-unit"><b>🎤</b><div><strong>Вокал</strong><span>Мужской, женский или дуэт; можно использовать русский язык.</span></div></div>
        <div class="gb-unit"><b>⚡</b><div><strong>Динамика</strong><span>Настрой энергию и характер припева под историю.</span></div></div>
        <button type="button" class="btn primary small" data-action="use-genre" :data-id="genre.id">
          <span v-html="genre.icons.studio" aria-hidden="true"></span> Открыть студию
        </button>
      </section>
    </div>
  </div>
</template>
