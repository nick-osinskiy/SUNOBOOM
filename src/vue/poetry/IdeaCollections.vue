<script setup>
defineProps({ model: { type: Object, required: true } });
</script>

<template>
  <template v-for="group in model.groups" :key="group.kind">
    <div class="section-title">
      <h2>{{ group.title }} ({{ group.items.length }})</h2>
      <button v-if="group.kind === 'generated'" class="btn ghost small" data-action="nav" data-nav="ideas">Создать идеи →</button>
    </div>
    <div v-if="group.items.length" class="idea-grid" :data-idea-collection="group.kind">
      <component :is="group.kind === 'academy' ? 'div' : 'article'" v-for="item in group.items" :key="item.key" class="idea" :class="{ 'generated-card': group.kind === 'generated' }">
        <div class="idea-badge">{{ item.badge }}</div>
        <h3>{{ item.title }}</h3>
        <p>{{ item.pitch }}</p>
        <p v-if="group.kind === 'generated'" class="generator-story">{{ item.storyLine }}</p>
        <p v-if="group.kind === 'manual' && item.lyrics" class="song-has-lyrics">🎼 Текст песни сохранён · {{ item.sunoLyrics ? 'теги для Suno готовы' : 'без разметки' }}</p>
        <component :is="group.kind === 'generated' ? 'div' : 'p'" v-if="item.hook || group.kind === 'generated'" class="generator-hook">
          <span v-if="group.kind === 'generated'">ХУК ПРИПЕВА</span><strong>{{ item.hook }}</strong>
        </component>
        <p v-if="group.kind === 'generated' && item.detail" class="generator-detail">Твоя деталь: {{ item.detail }}</p>
        <div class="actions">
          <button v-for="action in item.actions" :key="action.name" type="button" :class="action.className" :data-action="action.name" :data-id="item.id" :data-i="item.index" :aria-label="action.label || undefined">
            <span v-if="action.icon" aria-hidden="true" v-html="model.icons[action.icon]"></span>{{ action.text }}
          </button>
        </div>
      </component>
    </div>
    <div v-else class="empty"><span aria-hidden="true" v-html="model.icons.music"></span><strong>{{ group.emptyTitle }}</strong>{{ group.emptyText }}</div>
  </template>
</template>
