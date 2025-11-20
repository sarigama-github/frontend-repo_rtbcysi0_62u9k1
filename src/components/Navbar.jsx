import { useEffect, useState } from 'react'

export default function Navbar({ t, lang, setLang }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navItems = [
    { id: 'programs', label: t.nav.programs },
    { id: 'about', label: t.nav.about },
    { id: 'gallery', label: t.nav.gallery },
    { id: 'testimonials', label: t.nav.testimonials },
    { id: 'faq', label: t.nav.faq },
    { id: 'contact', label: t.nav.contact },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'backdrop-blur bg-white/70 shadow-sm' : 'bg-transparent'}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          <a href="#home" className="flex items-center gap-2 min-w-0">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-amber-300 to-orange-400 shadow-inner shadow-orange-200" />
            <div className="font-extrabold text-lg text-slate-800 whitespace-nowrap">Kids Academy</div>
          </a>
          <nav className="hidden md:flex items-center gap-4 lg:gap-5 flex-nowrap">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-slate-700 hover:text-orange-500 transition font-medium text-sm whitespace-nowrap"
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => setLang(lang === 'en' ? 'ro' : 'en')}
              className="ml-1 rounded-full border border-slate-200 px-2.5 py-1 text-xs font-semibold text-slate-700 hover:bg-slate-50 whitespace-nowrap"
            >
              {lang === 'en' ? 'RO' : 'EN'}
            </button>
            <a
              href="#contact"
              className="ml-1 inline-flex items-center rounded-full bg-orange-500 px-3 py-1.5 text-white text-sm font-semibold shadow hover:bg-orange-600 whitespace-nowrap"
            >
              {t.cta.enroll}
            </a>
          </nav>
          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/></svg>
          </button>
        </div>
        {open && (
          <div className="md:hidden border-t border-slate-200 py-3">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className="text-slate-700 font-medium"
                >
                  {item.label}
                </a>
              ))}
              <div className="flex items-center gap-3 pt-1">
                <button
                  onClick={() => setLang(lang === 'en' ? 'ro' : 'en')}
                  className="rounded-full border border-slate-200 px-3 py-1 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                >
                  {lang === 'en' ? 'RO' : 'EN'}
                </button>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center rounded-full bg-orange-500 px-4 py-2 text-white font-semibold shadow hover:bg-orange-600"
                >
                  {t.cta.enroll}
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
