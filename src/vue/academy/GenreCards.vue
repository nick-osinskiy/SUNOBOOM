<script setup>
defineProps({
  genres: {
    type: Array,
    required: true
  }
});
// Genre card clicks deliberately use SUNOBOOM's existing data-action="genre"
// event delegation, preserving recent-history updates and genre detail routing.
</script>

<template>
  <button
    v-for="genre in genres"
    :key="genre.id"
    type="button"
    class="genre-card"
    :style="{ '--accent': genre.color }"
    data-action="genre"
    :data-id="genre.id"
  >
    <div class="art" aria-hidden="true"></div>
    <div class="genre-content">
      <div>
        <div class="kicker">{{ genre.family }} · {{ genre.bpm[0] }}–{{ genre.bpm[1] }} BPM</div>
        <h3>{{ genre.name }}</h3>
        <p>{{ genre.tagline }}</p>
      </div>
      <div class="foot">
        <span>{{ genre.era }}</span>
        <span style="color:#ffacd9">Открыть →</span>
      </div>
    </div>
  </button>
</template>
