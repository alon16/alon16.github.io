<script setup>
import { useI18n } from 'vue-i18n'
import TechIcon from './TechIcon.vue'
import { skillGroups } from '../data/skills'

const { t } = useI18n()
</script>

<template>
  <section id="skills" class="section">
    <div class="container section-grid reveal">
      <h2 class="section-label">{{ t('skills.title') }}</h2>
      <div class="groups">
        <div v-for="group in skillGroups" :key="group.key" class="group">
          <h3>{{ t(`skills.groups.${group.key}`) }}</h3>
          <ul>
            <li v-for="skill in group.skills" :key="skill.name">
              <TechIcon :name="skill.icon" :size="16" />
              {{ skill.name }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.groups {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 40px 32px;
}

h3 {
  font-family: var(--serif);
  font-size: 1.35rem;
  margin-bottom: 14px;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 8px;
}

li {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--muted);
  font-size: 0.95rem;
}

li :deep(svg) {
  opacity: 0.7;
  flex-shrink: 0;
}
</style>
