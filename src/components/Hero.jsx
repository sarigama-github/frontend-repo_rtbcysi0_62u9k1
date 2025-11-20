import Spline from '@splinetool/react-spline'

export default function Hero({ t }) {
  return (
    <section id="home" className="relative pt-28 pb-20 overflow-hidden bg-gradient-to-b from-emerald-50 via-lime-50 to-amber-50">
      <div className="absolute inset-0 [mask-image:radial-gradient(70%_50%_at_50%_20%,black,transparent)]">
        <Spline scene="https://prod.spline.design/95Gu7tsx2K-0F3oi/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative pointer-events-none">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="pointer-events-auto">
              <span className="inline-block rounded-full bg-white/85 text-emerald-700 px-3 py-1 text-sm font-bold mb-4 shadow-sm">
                {t.hero.badge}
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
                {t.hero.title}
              </h1>
              <p className="text-lg text-slate-700 mb-6 max-w-xl">
                {t.hero.subtitle}
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="#programs" className="inline-flex items-center rounded-full bg-emerald-600 px-6 py-3 text-white font-bold shadow-lg shadow-emerald-200 hover:bg-emerald-700">
                  {t.cta.explore}
                </a>
                <a href="#contact" className="inline-flex items-center rounded-full border border-emerald-200 bg-white px-6 py-3 text-emerald-700 font-bold hover:bg-emerald-50">
                  {t.cta.enroll}
                </a>
              </div>
              <p className="mt-6 text-sm text-slate-600">{t.hero.gdpr}</p>
            </div>
            <div className="h-[420px] lg:h-[520px]" />
          </div>
        </div>
      </div>
    </section>
  )
}
