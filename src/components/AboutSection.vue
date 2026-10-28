<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <section id="about" class="section">
    <div class="container section-grid reveal">
      <h2 class="section-label">{{ t('about.title') }}</h2>
      <p class="body serif">{{ t('about.body') }}</p>
    </div>
  </section>
</template>

<style scoped>
.body {
  margin: 0;
  font-size: clamp(1.4rem, 2.6vw, 1.8rem);
  line-height: 1.45;
}
</style>
