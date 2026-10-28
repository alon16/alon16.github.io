<script setup>
import { useI18n } from 'vue-i18n'
import { projects } from '../data/projects'
import { useLocalized } from '../composables/useLocalized'

const { t } = useI18n()
const l = useLocalized()
</script>

<template>
  <section id="projects" class="section">
    <div class="container section-grid">
      <h2 class="section-label reveal">{{ t('projects.title') }}</h2>
      <div>
        <ul class="list">
          <li v-for="project in projects" :key="project.name" class="project reveal">
            <div class="head">
              <h3 class="serif">
                <a :href="project.repo" target="_blank" rel="noopener">{{ project.name }} <span class="arrow" aria-hidden="true">↗</span></a>
              </h3>
              <a
                v-if="project.demo"
                class="text-link meta"
                :href="project.demo"
                target="_blank"
                rel="noopener"
              >Demo</a>
            </div>
            <dl class="details">
              <template v-for="field in ['problem', 'challenge', 'solution']" :key="field">
                <dt>{{ t(`projects.${field}`) }}</dt>
                <dd>{{ l(project[field]) }}</dd>
              </template>
            </dl>
            <p class="meta">{{ project.tags.join(' · ') }}</p>
          </li>
        </ul>
        <a class="text-link more" href="https://github.com/alon16" target="_blank" rel="noopener">
          {{ t('projects.more') }} →
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.project {
  padding: 28px 0;
  border-bottom: 1px solid var(--border);
}

.project:first-child {
  padding-top: 0;
}

.head {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 16px;
}

h3 {
  font-size: 1.7rem;
}

h3 a {
  text-decoration: none;
  transition: color 0.2s ease;
}

.arrow {
  display: inline-block;
  font-family: var(--sans);
  font-size: 1rem;
  color: var(--muted);
  transition: transform 0.2s ease, color 0.2s ease;
}

h3 a:hover {
  color: var(--accent);
}

h3 a:hover .arrow {
  color: var(--accent);
  transform: translate(2px, -2px);
}

.details {
  display: grid;
  grid-template-columns: 130px 1fr;
  gap: 10px 20px;
  margin: 16px 0 0;
  max-width: 700px;
}

dt {
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--accent);
  padding-top: 4px;
}

dd {
  margin: 0;
  color: var(--muted);
}

.project .meta {
  margin: 16px 0 0;
}

@media (max-width: 560px) {
  .details {
    grid-template-columns: 1fr;
    gap: 2px;
  }
  dd {
    margin-bottom: 12px;
  }
}

.more {
  display: inline-block;
  margin-top: 32px;
  font-size: 0.95rem;
}
</style>
