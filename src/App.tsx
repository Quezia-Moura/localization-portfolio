
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

function App() {
  const { t, i18n } = useTranslation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleLanguage = () => {
    const nextLanguage =
      i18n.language === 'en' ? 'pt-BR' : 'en'

    i18n.changeLanguage(nextLanguage)
  }

  const toggleMenu = () => {
    setIsMenuOpen((previous) => !previous)
  }

  const vocabularyItems = [
    'serendipity',
    'komorebi',
    'apricity',
  ]

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <div className="flex min-h-screen">

        {/* Desktop Sidebar */}
        <aside className="hidden w-64 shrink-0 flex-col border-r border-slate-200 bg-white p-6 md:flex">

          <div className="mb-12 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-lg font-bold text-white">
              L
            </div>

            <span className="text-lg font-bold tracking-tight">
              Language Space
            </span>
          </div>

          <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
            {t('sidebar.menu')}
          </p>

          <nav className="space-y-2">
            <div className="flex items-center gap-3 rounded-lg bg-blue-50 px-4 py-3 text-sm font-semibold text-blue-700">
              <span aria-hidden="true">▦</span>
              {t('sidebar.overview')}
            </div>

            <div className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm text-slate-500">
              <span aria-hidden="true">▤</span>
              {t('sidebar.vocabulary')}
            </div>

            <div className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm text-slate-500">
              <span aria-hidden="true">↗</span>
              {t('sidebar.progress')}
            </div>

            <div className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm text-slate-500">
              <span aria-hidden="true">⚙</span>
              {t('sidebar.settings')}
            </div>
          </nav>

          {/* Desktop Daily Goal */}
          <div className="mt-auto rounded-xl bg-slate-50 p-4">
            <p className="text-sm font-semibold text-slate-700">
              {t('dashboard.dailyGoal')}
            </p>

            <p className="mt-2 text-xs leading-relaxed text-slate-500">
              {t('dashboard.goalDescription')}
            </p>

            <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-200">
              <div className="h-full w-3/5 rounded-full bg-blue-600" />
            </div>

            <p className="mt-2 text-xs text-slate-500">
              12 / 20 {t('dashboard.goalProgress')}
            </p>
          </div>
        </aside>

        {/* Main Content */}
        <main className="min-w-0 flex-1">

          {/* Header */}
          <header className="relative flex items-center justify-between border-b border-slate-200 bg-white px-4 py-4 sm:px-6 md:px-10">

            <div className="flex min-w-0 items-center gap-3">

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={toggleMenu}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-slate-200 text-slate-700 transition hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 md:hidden"
                aria-label={t(
                  isMenuOpen
                    ? 'sidebar.closeMenu'
                    : 'sidebar.openMenu'
                )}
                aria-expanded={isMenuOpen}
                aria-controls="mobile-navigation"
              >
                <span aria-hidden="true" className="text-xl">
                  {isMenuOpen ? '✕' : '☰'}
                </span>
              </button>

              <span className="truncate text-sm font-medium text-slate-500">
                Language Space
              </span>
            </div>

            <button
              type="button"
              onClick={toggleLanguage}
              className="ml-3 shrink-0 rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 sm:px-4"
            >
              {t('language.switch')}
            </button>
          </header>

          {/* Mobile Navigation */}
          <nav
            id="mobile-navigation"
            aria-label={t('sidebar.menu')}
            hidden={!isMenuOpen}
            className="border-b border-slate-200 bg-white p-4 md:hidden"
          >
            <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
              {t('sidebar.menu')}
            </p>

            <div className="space-y-2">
              <div className="flex items-center gap-3 rounded-lg bg-blue-50 px-4 py-3 text-sm font-semibold text-blue-700">
                <span aria-hidden="true">▦</span>
                {t('sidebar.overview')}
              </div>

              <div className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm text-slate-500">
                <span aria-hidden="true">▤</span>
                {t('sidebar.vocabulary')}
              </div>

              <div className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm text-slate-500">
                <span aria-hidden="true">↗</span>
                {t('sidebar.progress')}
              </div>

              <div className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm text-slate-500">
                <span aria-hidden="true">⚙</span>
                {t('sidebar.settings')}
              </div>
            </div>
          </nav>

          {/* Dashboard */}
          <div className="mx-auto max-w-6xl p-5 sm:p-6 md:p-10">

            <section className="mb-8 md:mb-10">
              <p className="mb-2 text-xs font-semibold tracking-wider text-blue-600">
                {t('dashboard.today')}
              </p>

              <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                {t('dashboard.welcome')}
              </h1>

              <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-500">
                {t('dashboard.subtitle')}
              </p>
            </section>

            {/* Mobile Daily Goal */}
            <section className="mb-8 rounded-xl border border-slate-200 bg-white p-5 md:hidden">

              <p className="text-sm font-semibold text-slate-700">
                {t('dashboard.dailyGoal')}
              </p>

              <p className="mt-2 text-xs leading-relaxed text-slate-500">
                {t('dashboard.goalDescription')}
              </p>

              <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-200">
                <div className="h-full w-3/5 rounded-full bg-blue-600" />
              </div>

              <p className="mt-2 text-xs text-slate-500">
                12 / 20 {t('dashboard.goalProgress')}
              </p>
            </section>

            {/* Statistics */}
            <section className="mb-10 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">

              <div className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
                <p className="text-sm text-slate-500">
                  {t('dashboard.wordsLearned')}
                </p>

                <p className="mt-4 text-3xl font-bold text-slate-900">
                  128
                </p>

                <p className="mt-2 text-xs text-emerald-600">
                  {t('dashboard.weeklyGrowth')}
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
                <p className="text-sm text-slate-500">
                  {t('dashboard.learningStreak')}
                </p>

                <p className="mt-4 text-3xl font-bold text-slate-900">
                  7 {t('dashboard.days')}
                </p>

                <p className="mt-2 text-xs text-slate-500">
                  {t('dashboard.keepGoing')}
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6 sm:col-span-2 lg:col-span-1">
                <p className="text-sm text-slate-500">
                  {t('dashboard.studyTime')}
                </p>

                <p className="mt-4 text-3xl font-bold text-slate-900">
                  45 {t('dashboard.minutes')}
                </p>

                <p className="mt-2 text-xs text-slate-500">
                  {t('dashboard.todayTotal')}
                </p>
              </div>

            </section>

            {/* Vocabulary */}
            <section>
              <div className="mb-5 flex items-center justify-between gap-3">
                <h2 className="text-base font-bold text-slate-900 sm:text-lg">
                  {t('dashboard.recentActivity')}
                </h2>

                <button
                  type="button"
                  className="shrink-0 text-sm font-medium text-blue-600 hover:text-blue-700"
                >
                  {t('dashboard.viewAll')}
                </button>
              </div>

              <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">

                {vocabularyItems.map((item) => (
                  <div
                    key={item}
                    className="border-b border-slate-100 p-4 last:border-0 sm:p-5"
                  >
                    <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">

                      <div className="min-w-0">
                        <h3 className="font-semibold text-slate-800">
                          {t(`vocabulary.${item}.term`)}
                        </h3>

                        <p className="mt-1 text-sm leading-relaxed text-slate-500">
                          {t(`vocabulary.${item}.meaning`)}
                        </p>
                      </div>

                      <span className="w-fit shrink-0 rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
                        {t(`vocabulary.${item}.language`)}
                      </span>

                    </div>
                  </div>
                ))}

              </div>
            </section>

          </div>
        </main>
      </div>
    </div>
  )
}

export default App
