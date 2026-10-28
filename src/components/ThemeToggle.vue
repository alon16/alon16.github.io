<script setup>
import { useI18n } from 'vue-i18n'
import { useTheme } from '../composables/useTheme'

const { t } = useI18n()
const { theme, toggle } = useTheme()
</script>

<template>
  <button
    type="button"
    class="toggle"
    :aria-label="theme === 'dark' ? t('nav.themeToLight') : t('nav.themeToDark')"
    :title="theme === 'dark' ? t('nav.themeToLight') : t('nav.themeToDark')"
    @click="toggle"
  >
    <!-- Sun -->
    <svg v-if="theme === 'dark'" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
    <!-- Moon -->
    <svg v-else width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  </button>
</template>

<style scoped>
.toggle {
  display: grid;
  place-items: center;
  width: 32px;
  height: 32px;
  border: none;
  background: none;
  color: var(--muted);
  cursor: pointer;
  transition: color 0.2s ease;
}

.toggle:hover {
  color: var(--text);
}
</style>
