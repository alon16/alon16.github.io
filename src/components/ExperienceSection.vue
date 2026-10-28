<script setup>
import { useI18n } from 'vue-i18n'
import { jobs } from '../data/experience'
import { useLocalized } from '../composables/useLocalized'

const { t } = useI18n()
const l = useLocalized()
</script>

<template>
  <section id="experience" class="section">
    <div class="container section-grid">
      <h2 class="section-label reveal">{{ t('experience.title') }}</h2>
      <div class="jobs">
        <article v-for="job in jobs" :key="job.company" class="job reveal">
          <header>
            <h3 class="serif">{{ l(job.role) }}</h3>
            <span class="meta period">{{ job.start }} — {{ job.end ?? t('experience.present') }}</span>
          </header>
          <p class="company">{{ job.company }}</p>
          <ul class="bullets">
            <li v-for="(bullet, i) in job.bullets" :key="i">{{ l(bullet) }}</li>
          </ul>
          <p class="meta">{{ job.skills.join(' · ') }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.jobs {
  display: grid;
  gap: 56px;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 8px 16px;
  flex-wrap: wrap;
}

h3 {
  font-size: 1.7rem;
}

.period {
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
}

.company {
  margin: 4px 0 0;
  color: var(--accent);
  font-weight: 500;
}

.bullets {
  margin: 20px 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 10px;
}

.bullets li {
  position: relative;
  padding-left: 22px;
  color: var(--muted);
}

.bullets li::before {
  content: '—';
  position: absolute;
  left: 0;
  color: var(--border);
}

.job > .meta:last-child {
  margin: 0;
}
</style>
