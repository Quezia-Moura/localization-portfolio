import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      welcome: 'Welcome to your language learning space!',
      description: 'Your learning journey starts here.',
      changeLanguage: 'Português',
    },
  },
  'pt-BR': {
    translation: {
      welcome: 'Bem-vindo ao seu espaço de aprendizagem de idiomas!',
      description: 'Sua jornada de aprendizagem começa aqui.',
      changeLanguage: 'English',
    },
  },
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
