export default function FAQ({ t }) {
  return (
    <section id="faq" className="py-16 bg-white">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-2">{t.faq.title}</h2>
          <p className="text-slate-600">{t.faq.subtitle}</p>
        </div>
        <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
          {t.faq.items.map((q, i) => (
            <details key={i} className="group p-6">
              <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-slate-800">
                {q.q}
                <span className="ml-4 text-slate-500 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-2 text-slate-700">{q.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
