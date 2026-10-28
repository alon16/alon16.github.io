import { useI18n } from 'vue-i18n'

// Picks the current-locale string from an { en, es } object.
export function useLocalized() {
  const { locale } = useI18n()
  return (field) => field[locale.value] ?? field.en
}
