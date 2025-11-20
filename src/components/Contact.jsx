import { useState } from 'react'

export default function Contact({ t }) {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.currentTarget).entries())
    console.log('Enrollment form submission', data)
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-16 bg-gradient-to-b from-white to-orange-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-2">{t.contact.title}</h2>
            <p className="text-slate-700 mb-6">{t.contact.subtitle}</p>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-slate-700 mb-1">{t.form.parentName}</label>
                <input name="parentName" required className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-300" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">{t.form.phone}</label>
                <input name="phone" type="tel" required className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-300" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">{t.form.email}</label>
                <input name="email" type="email" required className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-300" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">{t.form.childName}</label>
                <input name="childName" required className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-300" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">{t.form.childAge}</label>
                <input name="childAge" required className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-300" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-slate-700 mb-1">{t.form.program}</label>
                <select name="program" className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-300">
                  <option>{t.programs.nursery.title}</option>
                  <option>{t.programs.preschool.title}</option>
                  <option>{t.programs.after.title}</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-slate-700 mb-1">{t.form.message}</label>
                <textarea name="message" rows="4" className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-300" />
              </div>
              <div className="sm:col-span-2">
                <label className="inline-flex items-start gap-2 text-sm text-slate-600">
                  <input type="checkbox" required className="mt-1" />
                  <span>{t.contact.gdpr}</span>
                </label>
              </div>
              <button type="submit" className="sm:col-span-2 inline-flex items-center justify-center rounded-full bg-orange-500 px-6 py-3 text-white font-semibold hover:bg-orange-600">
                {t.cta.enroll}
              </button>
              {submitted && (
                <p className="sm:col-span-2 text-green-700 font-medium">{t.contact.success}</p>
              )}
            </form>
          </div>
          <div className="space-y-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="font-extrabold text-slate-900 mb-2">{t.contact.locationTitle}</h3>
              <p className="text-slate-700 mb-4">{t.contact.address}</p>
              <div className="aspect-video w-full overflow-hidden rounded-xl">
                <iframe title="Kids Academy Sibiu" src="https://www.google.com/maps?q=Sibiu%2C%20Romania&output=embed" className="h-full w-full border-0"></iframe>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="font-extrabold text-slate-900 mb-2">{t.contact.hoursTitle}</h3>
              <ul className="text-slate-700">
                <li>{t.contact.hoursMonFri}</li>
                <li>{t.contact.hoursSat}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
