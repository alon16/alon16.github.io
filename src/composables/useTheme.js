import { ref, watch } from 'vue'

// The initial value is set by the inline script in index.html.
const theme = ref(document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light')

watch(theme, (value) => {
  document.documentElement.dataset.theme = value
  try {
    localStorage.setItem('theme', value)
  } catch (e) {}
})

export function useTheme() {
  const toggle = () => {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
  }
  return { theme, toggle }
}
