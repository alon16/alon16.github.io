<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const socials = [
  { label: 'GitHub', href: 'https://github.com/alon16' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/krineruiz' },
  { label: 'Email', href: 'mailto:alondraruiz167@gmail.com' },
]
</script>

<template>
  <section id="top" class="hero">
    <div class="container">
      <p class="role">{{ t('hero.role') }}</p>
      <h1 class="name serif">Katherine Alondra Ruiz</h1>
      <p class="summary">{{ t('hero.summary') }}</p>

      <div class="ctas">
        <a class="btn btn-solid" :href="t('hero.cvFile')" download>
          {{ t('hero.downloadCv') }}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M12 4v12M7 11l5 5 5-5M5 20h14" />
          </svg>
        </a>
        <a class="text-link" href="#contact">{{ t('hero.contactMe') }} →</a>
      </div>

      <ul class="socials">
        <li v-for="s in socials" :key="s.label">
          <a class="text-link" :href="s.href" target="_blank" rel="noopener">{{ s.label }}</a>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding: 200px 0 120px;
}

.role {
  margin: 0 0 20px;
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--accent);
}

.name {
  font-size: clamp(3rem, 9vw, 6.5rem);
  letter-spacing: -0.02em;
  line-height: 1;
}

.summary {
  max-width: 620px;
  margin: 32px 0 40px;
  font-size: 1.1rem;
  color: var(--muted);
}

.ctas {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 28px;
}

.socials {
  display: flex;
  gap: 28px;
  list-style: none;
  padding: 0;
  margin: 56px 0 0;
  font-size: 0.92rem;
}

@media (max-width: 760px) {
  .hero {
    padding: 140px 0 80px;
  }
}
</style>
