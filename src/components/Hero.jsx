export default function Hero({ t }) {
  return (
    <section id="home" className="relative pt-28 pb-20 overflow-hidden bg-gradient-to-b from-emerald-50 via-lime-50 to-amber-50">
      <div className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
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

            {/* Visuals: înlocuire animație cu o compoziție de fotografii cu copii în natură */}
            <div className="relative h-[420px] lg:h-[520px]">
              {/* decor blur circle */}
              <div className="absolute -top-10 -left-10 h-48 w-48 rounded-full bg-emerald-300/30 blur-2xl" aria-hidden="true" />
              <div className="absolute -bottom-10 -right-10 h-56 w-56 rounded-full bg-amber-300/30 blur-2xl" aria-hidden="true" />

              <div className="relative h-full w-full">
                <div className="grid grid-cols-3 gap-4 h-full">
                  <div className="col-span-2 grid grid-rows-2 gap-4">
                    <img
                      src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=1600&auto=format&fit=crop"
                      alt="Copii râzând și jucându-se în iarbă"
                      loading="lazy"
                      className="h-full w-full object-cover rounded-2xl ring-1 ring-black/5 shadow-lg"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1463693396721-8ca0cfa2b3df?q=80&w=1600&auto=format&fit=crop"
                      alt="Explorare în pădure: copii adună frunze și bețe"
                      loading="lazy"
                      className="h-full w-full object-cover rounded-2xl ring-1 ring-black/5 shadow-lg"
                    />
                  </div>
                  <div className="col-span-1 flex flex-col gap-4">
                    <img
                      src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=1000&auto=format&fit=crop"
                      alt="Mâini micuțe ținând o floare galbenă"
                      loading="lazy"
                      className="h-1/2 w-full object-cover rounded-2xl ring-1 ring-black/5 shadow-lg"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1000&auto=format&fit=crop"
                      alt="Copil alergând pe o potecă în lumină caldă de apus"
                      loading="lazy"
                      className="h-1/2 w-full object-cover rounded-2xl ring-1 ring-black/5 shadow-lg"
                    />
                  </div>
                </div>

                {/* badge decorativ */}
                <div className="absolute -top-4 right-6 sm:right-10">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-emerald-700 text-xs font-semibold shadow">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    Joacă în natură
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
