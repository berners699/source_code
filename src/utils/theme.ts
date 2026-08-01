export type Theme = 'light' | 'dark'

export function applyTheme() {
  document.documentElement.classList.toggle('dark', localStorage.theme === 'dark')
}

export function setTheme(theme: Theme) {
  localStorage.theme = theme
  applyTheme()
}

export function getTheme(): Theme {
  return localStorage.theme === 'dark' ? 'dark' : 'light'
}
