
import { useTranslation } from 'react-i18next'

function App() {
  const { t, i18n } = useTranslation()

  const toggleLanguage = () => {
    const nextLanguage =
      i18n.language === 'en' ? 'pt-BR' : 'en'

    i18n.changeLanguage(nextLanguage)
  }

  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <section className="w-full max-w-xl rounded-2xl bg-white border border-slate-200 p-10 shadow-sm">
        <div className="mb-8">
          <span className="text-sm font-semibold tracking-wide text-blue-600">
            LOCALIZATION PORTFOLIO
          </span>

          <h1 className="mt-4 text-3xl font-bold text-slate-900">
            {t('welcome')}
          </h1>

          <p className="mt-3 text-slate-500">
            {t('description')}
          </p>
        </div>

        <button
          onClick={toggleLanguage}
          className="rounded-lg bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-700"
        >
          {t('changeLanguage')}
        </button>
      </section>
    </main>
  )
}

export default App
