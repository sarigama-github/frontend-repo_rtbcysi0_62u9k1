export default function Testimonials({ t }) {
  const items = t.testimonials.items
  return (
    <section id="testimonials" className="py-16 bg-gradient-to-b from-orange-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-2">{t.testimonials.title}</h2>
          <p className="text-slate-600">{t.testimonials.subtitle}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <div key={i} className="rounded-2xl border border-orange-100 bg-white p-6 shadow-sm">
              <p className="text-slate-700">“{it.quote}”</p>
              <div className="mt-4 text-sm font-semibold text-slate-900">{it.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
