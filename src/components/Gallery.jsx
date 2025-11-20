export default function Gallery({ t }) {
  const images = [
    'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1596464716121-c0f3b55b6d0d?q=80&w=1000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1508896694512-5be1b0eb41dd?q=80&w=1000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1564424554899-6aac969236c1?q=80&w=1000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1617957743091-4a9dcbb8fdd2?q=80&w=1000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1589395937658-0557e7d98929?q=80&w=1000&auto=format&fit=crop',
  ]
  return (
    <section id="gallery" className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-2">{t.gallery.title}</h2>
          <p className="text-slate-600">{t.gallery.subtitle}</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, i) => (
            <img key={i} src={src} alt="Gallery" className="aspect-square w-full object-cover rounded-xl shadow" />
          ))}
        </div>
      </div>
    </section>
  )
}
