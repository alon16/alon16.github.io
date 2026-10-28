<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <section id="education" class="section">
    <div class="container section-grid reveal">
      <h2 class="section-label">{{ t('education.title') }}</h2>
      <div class="edu">
        <div>
          <h3 class="serif">{{ t('education.degree') }}</h3>
          <p class="meta">{{ t('education.school') }}</p>
        </div>
        <span class="meta">2019</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.edu {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 8px 16px;
  flex-wrap: wrap;
}

h3 {
  font-size: 1.7rem;
}

p {
  margin: 6px 0 0;
}
</style>
