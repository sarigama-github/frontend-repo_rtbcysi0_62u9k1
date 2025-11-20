export default function Programs({ t }) {
  const programs = [
    {
      title: t.programs.nursery.title,
      age: t.programs.nursery.age,
      desc: t.programs.nursery.desc,
      color: 'from-rose-200 to-rose-100',
    },
    {
      title: t.programs.preschool.title,
      age: t.programs.preschool.age,
      desc: t.programs.preschool.desc,
      color: 'from-amber-200 to-amber-100',
    },
    {
      title: t.programs.after.title,
      age: t.programs.after.age,
      desc: t.programs.after.desc,
      color: 'from-teal-200 to-teal-100',
    },
  ]

  return (
    <section id="programs" className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-2">{t.programs.title}</h2>
          <p className="text-slate-600">{t.programs.subtitle}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {programs.map((p, i) => (
            <div key={i} className={`rounded-2xl bg-gradient-to-b ${p.color} p-6 shadow-sm border border-white/60`}>
              <div className="flex items-baseline justify-between mb-2">
                <h3 className="text-xl font-extrabold text-slate-900">{p.title}</h3>
                <span className="text-sm font-semibold text-slate-700 bg-white/60 rounded-full px-3 py-1">{p.age}</span>
              </div>
              <p className="text-slate-700">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
