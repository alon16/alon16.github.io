import { createI18n } from 'vue-i18n'
import en from './en.json'
import es from './es.json'

const SUPPORTED = ['en', 'es']

function initialLocale() {
  try {
    const saved = localStorage.getItem('locale')
    if (SUPPORTED.includes(saved)) return saved
  } catch (e) {}
  return navigator.language?.toLowerCase().startsWith('es') ? 'es' : 'en'
}

export const i18n = createI18n({
  legacy: false,
  locale: initialLocale(),
  fallbackLocale: 'en',
  messages: { en, es },
})

export function applyLocale(locale) {
  i18n.global.locale.value = locale
  try {
    localStorage.setItem('locale', locale)
  } catch (e) {}
  const { t } = i18n.global
  document.documentElement.lang = locale
  document.title = t('meta.title')
  document.querySelector('meta[name="description"]')?.setAttribute('content', t('meta.description'))
}

applyLocale(i18n.global.locale.value)
