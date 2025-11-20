export default function About({ t }) {
  return (
    <section id="about" className="py-16 bg-gradient-to-b from-white to-orange-50/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-extrabold text-slate-900 mb-3">{t.about.title}</h2>
          <p className="text-slate-700 mb-4">{t.about.p1}</p>
          <p className="text-slate-700 mb-4">{t.about.p2}</p>
          <ul className="grid grid-cols-2 gap-3 mt-4">
            {t.about.points.map((pt, i) => (
              <li key={i} className="flex items-center gap-2 text-slate-800 font-medium">
                <span className="inline-flex h-2.5 w-2.5 rounded-full bg-orange-400" />
                {pt}
              </li>
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img src="https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=800&auto=format&fit=crop" alt="Kids play" className="rounded-2xl shadow object-cover h-56 w-full" />
          <img src="https://images.unsplash.com/photo-1628046560730-35a41dccf8ae?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBcnQlMjB0aW1lfGVufDB8MHx8fDE3NjM2NTE5NTd8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Art time" className="rounded-2xl shadow object-cover h-56 w-full" />
          <img src="https://images.unsplash.com/photo-1544776193-352d25ca82cd?q=80&w=800&auto=format&fit=crop" alt="Reading" className="rounded-2xl shadow object-cover h-56 w-full" />
          <img src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=800&auto=format&fit=crop" alt="Outdoors" className="rounded-2xl shadow object-cover h-56 w-full" />
        </div>
      </div>
    </section>
  )
}
