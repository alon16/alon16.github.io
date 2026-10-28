<script setup>
import { useI18n } from 'vue-i18n'
import { applyLocale } from '../i18n'

const { locale, t } = useI18n()
const options = ['en', 'es']
</script>

<template>
  <div class="switcher" role="group" :aria-label="t('nav.language')">
    <template v-for="(option, i) in options" :key="option">
      <span v-if="i > 0" class="sep" aria-hidden="true">/</span>
      <button
        type="button"
        :class="{ active: locale === option }"
        :aria-pressed="locale === option"
        @click="applyLocale(option)"
      >
        {{ option.toUpperCase() }}
      </button>
    </template>
  </div>
</template>

<style scoped>
.switcher {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 0.82rem;
}

.sep {
  color: var(--border);
}

button {
  border: none;
  background: none;
  font: inherit;
  font-weight: 500;
  letter-spacing: 0.06em;
  color: var(--muted);
  padding: 4px 2px;
  cursor: pointer;
  transition: color 0.2s ease;
}

button:hover,
button.active {
  color: var(--text);
}

button.active {
  text-decoration: underline;
  text-underline-offset: 5px;
}
</style>
