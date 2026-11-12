<script setup>
defineProps({
  model: { type: Object, required: true }
});
// Buttons use the original delegated data-action / data-sbs-action handlers.
// No additional click handlers and no duplicate settings or notice state.
</script>

<template>
  <div class="breadcrumbs">Рабочее пространство / <b>{{ model.breadcrumb }}</b></div>
  <div class="brand-mobile" style="display:none">
    <div class="sb-logo-lockup">
      <img class="sb-mobile-logo" :src="model.logoSrc" alt="SUNOBOOM — фирменный логотип">
      <span class="sb-brand-tagline">Больше, чем музыка</span>
    </div>
    <button type="button" class="sb-app-version sb-version-trigger"
      :aria-label="'Версия SUNOBOOM ' + model.version + ' — открыть историю обновлений'"
      aria-haspopup="dialog" title="История версий SUNOBOOM">v{{ model.version }}</button>
  </div>
  <div class="top-right">
    <span class="pill sb-prototype-pill">🧪 Прототип</span>
    <button type="button" class="sb-app-version sb-version-trigger"
      :aria-label="'Версия SUNOBOOM ' + model.version + ' — открыть историю обновлений'"
      aria-haspopup="dialog" title="История версий SUNOBOOM">v{{ model.version }}</button>
    <button type="button" class="sb-notice-bell"
      :class="{ 'sb-notice-bell-unread': model.unreadCount > 0 }"
      data-action="sb-notice-toggle"
      :aria-label="model.unreadCount ? 'Уведомления, непрочитанных: ' + model.unreadCount :
        'Уведомления, демонстрация счётчика уведомлений'"
      :aria-expanded="String(model.noticeOpen)"
      :title="model.unreadCount ? 'Напоминания о событиях' :
        'Пример счётчика: 3 (настоящих уведомлений пока нет)'">
      <span class="sb-notice-bell-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"/>
          <path d="M10 21h4"/>
        </svg>
      </span>
      <span class="sb-notice-count" :class="{ 'sb-notice-count-preview': model.noticePreview }"
        :aria-hidden="model.noticePreview ? 'true' : undefined">
        {{ model.noticeBadge === 99 && model.unreadCount > 99 ? '99+' : model.noticeBadge }}
      </span>
    </button>
    <button type="button" class="sb-notice-bell sb-settings-shortcut"
      data-sbs-action="open-top" aria-label="Открыть настройки приложения"
      title="Настройки" aria-haspopup="false">
      <span class="sb-notice-bell-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M10.5 2h3l.5 2.2 1.6.7 2-1.1 2.1 2.1-1 2 .7 1.7 2.1.4v3l-2.1.5-.7 1.6 1 2-2.1 2.1-2-1-.1.1-1.5.6-.5 2.1h-3l-.5-2.1-1.6-.7-2 1-2.1-2.1 1.1-2-.7-1.6-2.2-.5v-3l2.2-.4.7-1.7-1.1-2 2.1-2.1 2 1.1 1.6-.7z"/>
          <circle cx="12" cy="11.5" r="3"/>
        </svg>
      </span>
    </button>
    <button class="avatar account-shortcut" type="button" title="Личный кабинет"
      aria-label="Открыть личный кабинет" data-action="nav" data-nav="account">
      {{ model.avatarInitial }}
    </button>
  </div>
</template>
