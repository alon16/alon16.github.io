<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const channels = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/krineruiz' },
  { label: 'GitHub', href: 'https://github.com/alon16' },
]
</script>

<template>
  <section id="contact" class="section">
    <div class="container section-grid reveal">
      <h2 class="section-label">{{ t('nav.contact') }}</h2>
      <div>
        <p class="title serif">{{ t('contact.title') }}</p>
        <p class="lead">{{ t('contact.body') }}</p>
        <a class="email serif" href="mailto:alondraruiz167@gmail.com">alondraruiz167@gmail.com</a>
        <ul class="channels">
          <li v-for="c in channels" :key="c.href">
            <a class="text-link" :href="c.href" target="_blank" rel="noopener">{{ c.label }}</a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.title {
  margin: 0;
  font-size: clamp(2.2rem, 5vw, 3.4rem);
  line-height: 1.1;
}

.lead {
  max-width: 520px;
  margin: 16px 0 32px;
  color: var(--muted);
}

.email {
  font-size: clamp(1.4rem, 4vw, 2rem);
  text-decoration: none;
  color: var(--accent);
  border-bottom: 1px solid currentColor;
  word-break: break-all;
  transition: opacity 0.2s ease;
}

.email:hover {
  opacity: 0.75;
}

.channels {
  display: flex;
  gap: 28px;
  list-style: none;
  padding: 0;
  margin: 32px 0 0;
  font-size: 0.92rem;
}
</style>
