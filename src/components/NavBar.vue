<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useI18n } from 'vue-i18n'
import LanguageSwitcher from './LanguageSwitcher.vue'
import ThemeToggle from './ThemeToggle.vue'

const { t } = useI18n()
const links = ['about', 'skills', 'experience', 'projects', 'contact']
const open = ref(false)
const scrolled = ref(false)

const onScroll = () => {
  scrolled.value = window.scrollY > 12
}
onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header class="nav" :class="{ scrolled, open }">
    <div class="container nav-inner">
      <a href="#top" class="logo serif" @click="open = false">Katherine Ruiz</a>

      <nav id="nav-links" class="links" :class="{ open }">
        <a v-for="link in links" :key="link" :href="`#${link}`" @click="open = false">
          {{ t(`nav.${link}`) }}
        </a>
      </nav>

      <div class="actions">
        <LanguageSwitcher />
        <ThemeToggle />
        <button
          type="button"
          class="burger"
          :aria-label="t('nav.menu')"
          :aria-expanded="open"
          aria-controls="nav-links"
          @click="open = !open"
        >
          <span /><span />
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.nav {
  position: fixed;
  inset: 0 0 auto;
  z-index: 50;
  border-bottom: 1px solid transparent;
  transition: background 0.3s ease, border-color 0.3s ease;
}

.nav.scrolled,
.nav.open {
  background: var(--nav-bg);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-color: var(--border);
}

.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 68px;
  gap: 16px;
}

.logo {
  font-size: 1.45rem;
  text-decoration: none;
  white-space: nowrap;
}

.links {
  display: flex;
  gap: 32px;
}

.links a {
  text-decoration: none;
  font-size: 0.92rem;
  color: var(--muted);
  transition: color 0.2s ease;
}

.links a:hover {
  color: var(--text);
}

.actions {
  display: flex;
  align-items: center;
  gap: 16px;
}

.burger {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
  width: 32px;
  height: 32px;
  padding: 0 4px;
  border: none;
  background: none;
  cursor: pointer;
}

.burger span {
  display: block;
  height: 1.5px;
  background: var(--text);
  transition: transform 0.25s ease;
}

.nav.open .burger span:nth-child(1) {
  transform: translateY(3.75px) rotate(45deg);
}
.nav.open .burger span:nth-child(2) {
  transform: translateY(-3.75px) rotate(-45deg);
}

@media (max-width: 860px) {
  .burger {
    display: flex;
  }

  .links {
    position: absolute;
    top: 68px;
    left: 0;
    right: 0;
    flex-direction: column;
    gap: 0;
    padding: 8px 20px 20px;
    background: var(--bg);
    border-bottom: 1px solid var(--border);
    display: none;
  }

  .links.open {
    display: flex;
  }

  .links a {
    padding: 12px 0;
    font-size: 1rem;
  }
}
</style>
