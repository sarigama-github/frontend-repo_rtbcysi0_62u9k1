export default function Gallery({ t }) {
  const images = [
    'https://images.unsplash.com/photo-1584697964192-0f81f84a31c4?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=1000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1596464716121-c0f3b55b6d0d?q=80&w=1000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1564424554899-6aac969236c1?q=80&w=1000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1508896694512-5be1b0eb41dd?q=80&w=1000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1617957743091-4a9dcbb8fdd2?q=80&w=1000&auto=format&fit=crop',
  ]
  return (
    <section id="gallery" className="py-16 bg-gradient-to-b from-emerald-50 via-lime-50 to-amber-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <span className="inline-block rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-emerald-700 shadow-sm mb-3">
            {t.gallery.subtitle}
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 mb-2">
            {t.gallery.title}
          </h2>
        </div>

        {/* Featured banner */}
        <div className="relative overflow-hidden rounded-2xl shadow mb-6">
          <img src={images[0]} alt="Copii jucându-se fericiți" className="w-full h-64 md:h-96 object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/0 to-black/0" />
          <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-2">
            <span className="inline-flex items-center rounded-full bg-white/85 text-emerald-700 text-xs font-bold px-3 py-1">
              Joacă • Natură • Zâmbete
            </span>
          </div>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.slice(1).map((src, i) => (
            <div key={i} className="relative overflow-hidden rounded-2xl shadow-sm border border-white/60 bg-white/60">
              <img src={src} alt="Galerie" className="aspect-square w-full object-cover" />
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-slate-900/0 to-white/0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
