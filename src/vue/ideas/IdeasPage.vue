<script setup>
import { reactive } from 'vue';
const props = defineProps({ initial: { type: Object, required: true } });
// Native delegated input/change events continue to update ideaGen.
const draft = reactive({ ...props.initial.values });
</script>

<template>
  <header class="heading"><h1>Идеи песен <span style="color:#fb7bbd">✦</span></h1><p>Создавай новые истории в генераторе или выбирай готовые идеи из каталога.</p></header>
  <section class="generator-panel">
    <div class="generator-panel-top"><div><div class="eyebrow">SUNOBOOM · IDEA LAB</div><h2>Создай новую идею <span>✦</span></h2><p>Подбери жанр, тему, настроение и сюжетную подачу. Получи несколько свежих концепций с названием, историей и хуком припева.</p></div><span class="generator-orb">💡</span></div>
    <div class="generator-form">
      <div v-for="field in initial.fields" :key="field.key" class="field">
        <label :for="field.id">{{ field.label }}</label>
        <select :id="field.id" v-model="draft[field.key]" :data-idea-generator="field.key"><option v-for="option in field.options" :key="option.value" :value="option.value">{{ option.label }}</option></select>
      </div>
      <div class="field generator-detail-field"><label for="gen-detail">Своя деталь (необязательно)</label><input id="gen-detail" v-model="draft.detail" data-idea-generator="detail" maxlength="220" placeholder="Например: ночной Алматы, поезд, летний дождь"></div>
    </div>
    <div class="generator-bar"><button type="button" class="btn primary" data-action="generate-ideas"><span style="display:contents" aria-hidden="true" v-html="initial.icons.ideas"></span> Сгенерировать идеи</button><button type="button" class="btn ghost" data-action="surprise-ideas">🎲 Удиви меня</button><span class="generator-note">Работает офлайн · без внешнего ИИ</span></div>
  </section>
  <template v-if="initial.generated.length">
    <div id="generated-results" class="section-title"><h2>Твои новые идеи · {{ initial.generated.length }}</h2><button type="button" class="btn ghost small" data-action="generate-ideas"><span style="display:contents" aria-hidden="true" v-html="initial.icons.arrow"></span> Ещё варианты</button></div>
    <div class="idea-grid">
      <article v-for="idea in initial.generated" :key="idea.id" class="idea generated-card">
        <div class="idea-badge">{{ idea.badge }}</div><h3>{{ idea.title }}</h3><p>{{ idea.pitch }}</p><p class="generator-story">{{ idea.storyLine }}</p>
        <div class="generator-hook"><span>ХУК ПРИПЕВА</span><strong>{{ idea.hook }}</strong></div>
        <p v-if="idea.detail" class="generator-detail">Твоя деталь: {{ idea.detail }}</p>
        <div class="actions">
          <button type="button" class="btn primary small" data-action="generated-use" :data-id="idea.id"><span style="display:contents" aria-hidden="true" v-html="initial.icons.studio"></span> В Suno Studio</button>
          <button type="button" class="btn ghost small" data-action="generated-copy" :data-id="idea.id"><span style="display:contents" aria-hidden="true" v-html="initial.icons.copy"></span> Копировать</button>
          <button type="button" class="btn ghost small" data-action="generated-save" :data-id="idea.id"><span style="display:contents" aria-hidden="true" v-html="initial.icons.heart"></span> {{ idea.saved ? 'Сохранено' : 'Сохранить' }}</button>
        </div>
      </article>
    </div>
  </template>
  <div class="section-title"><h2>Библиотека готовых сюжетов · {{ initial.catalog.length }}</h2></div>
  <div class="filters"><button v-for="family in initial.families" :key="family" type="button" class="filter" :class="{ on: initial.family === family }" data-action="idea-filter" :data-filter="family">{{ family }}</button></div>
  <div class="section-title"><h2>Идеи · {{ initial.catalog.length }}</h2><button type="button" class="btn ghost small" data-action="random-idea">🎲 Случайная идея</button></div>
  <div class="idea-grid">
    <div v-for="idea in initial.catalog" :key="idea.key" class="idea">
      <div class="idea-badge">{{ idea.badge }}</div><h3>{{ idea.title }}</h3><p>{{ idea.pitch }}</p>
      <div class="actions">
        <button type="button" class="btn primary small" data-action="idea-use" :data-id="idea.genre" :data-i="idea.index"><span style="display:contents" aria-hidden="true" v-html="initial.icons.studio"></span> В студию</button>
        <button type="button" class="btn ghost small" data-action="idea-save" :data-id="idea.genre" :data-i="idea.index"><span style="display:contents" aria-hidden="true" v-html="initial.icons.heart"></span> {{ idea.saved ? 'Сохранено' : 'Сохранить' }}</button>
      </div>
    </div>
  </div>
</template>
