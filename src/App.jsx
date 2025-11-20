import { useMemo, useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Programs from './components/Programs'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [lang, setLang] = useState('en')

  const dict = useMemo(() => ({
    en: {
      seo: {
        title: 'Kids Academy Sibiu — Colorful, caring daycare & preschool',
        description: 'A joyful, trustworthy daycare in Sibiu focused on play, smiles, and safety. See happy photos, view programs, and enroll easily today.'
      },
      nav: {
        programs: 'Programs',
        gallery: 'Gallery',
        contact: 'Contact'
      },
      cta: { explore: 'See programs', enroll: 'Enroll now' },
      hero: {
        badge: 'Sibiu • Daycare & Preschool',
        title: 'Colorful days. Happy kids. Peace of mind for parents.',
        subtitle: 'Warm educators, small groups, and lots of smiling play. Browse real photos and get in touch — we’ll guide you through enrollment.',
        gdpr: 'We respect your privacy. Your details are used only to contact you about enrollment.'
      },
      programs: {
        title: 'Our programs',
        subtitle: 'Simple choices that fit your family',
        nursery: { title: 'Nursery', age: '1–3 years', desc: 'Gentle routine • Sensory play • First words' },
        preschool: { title: 'Preschool', age: '3–5 years', desc: 'Play-based learning • Early math & reading' },
        after: { title: 'After-school', age: '5–7 years', desc: 'Homework help • Creative clubs • Friends' },
      },
      gallery: { title: 'Life at Kids Academy', subtitle: 'Real moments of play and friendship' },
      contact: {
        title: 'Get in touch & enroll',
        subtitle: 'Tell us about your child and preferred program. We’ll call you back the same day.',
        gdpr: 'I agree to the processing of my data for the purpose of being contacted about enrollment.',
        success: 'Thank you! We will contact you shortly.',
        locationTitle: 'Find us in Sibiu',
        address: 'Sibiu, Romania — central area',
        hoursTitle: 'Schedule',
        hoursMonFri: 'Mon–Fri: 08:00–18:00',
        hoursSat: 'Sat: by appointment',
      },
      form: {
        parentName: 'Parent name', phone: 'Phone', email: 'Email', childName: 'Child name', childAge: 'Child age', program: 'Desired program', message: 'Message'
      },
      footer: { rights: 'All rights reserved.' }
    },
    ro: {
      seo: {
        title: 'Kids Academy Sibiu — Colorat, cu suflet și de încredere',
        description: 'Grădiniță și creșă pline de culoare în Sibiu, cu joacă și siguranță. Vezi poze reale, descoperă programele și înscrie-te ușor.'
      },
      nav: {
        programs: 'Programe',
        gallery: 'Galerie',
        contact: 'Contact'
      },
      cta: { explore: 'Vezi programele', enroll: 'Înscrie-te' },
      hero: {
        badge: 'Sibiu • Creșă & Grădiniță',
        title: 'Zile colorate. Copii fericiți. Liniște pentru părinți.',
        subtitle: 'Educatori calzi, grupe mici și multă joacă cu zâmbet. Vezi poze reale și contactează-ne — te ghidăm la înscriere.',
        gdpr: 'Îți respectăm confidențialitatea. Folosim datele doar pentru a te contacta despre înscriere.'
      },
      programs: {
        title: 'Programele noastre',
        subtitle: 'Alege simplu, în ritmul familiei',
        nursery: { title: 'Creșă', age: '1–3 ani', desc: 'Rutine blânde • Joc senzorial • Primele cuvinte' },
        preschool: { title: 'Grădiniță', age: '3–5 ani', desc: 'Învățare prin joc • Matematică & litere timpurii' },
        after: { title: 'After-school', age: '5–7 ani', desc: 'Teme asistate • Cluburi creative • Prieteni' },
      },
      gallery: { title: 'Viața la Kids Academy', subtitle: 'Momente reale de joacă și prietenie' },
      contact: {
        title: 'Contact & înscrieri',
        subtitle: 'Spune-ne câteva detalii despre copil și programul dorit. Te sunăm în aceeași zi.',
        gdpr: 'Sunt de acord cu prelucrarea datelor pentru a fi contactat în legătură cu înscrierea.',
        success: 'Mulțumim! Te contactăm în curând.',
        locationTitle: 'Ne găsești în Sibiu',
        address: 'Sibiu, România — zonă centrală',
        hoursTitle: 'Program',
        hoursMonFri: 'Luni–Vineri: 08:00–18:00',
        hoursSat: 'Sâmbătă: cu programare',
      },
      form: {
        parentName: 'Nume părinte', phone: 'Telefon', email: 'Email', childName: 'Nume copil', childAge: 'Vârsta copilului', program: 'Program dorit', message: 'Mesaj'
      },
      footer: { rights: 'Toate drepturile rezervate.' }
    }
  }), [])

  const t = dict[lang]

  useEffect(() => {
    document.title = t.seo.title
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', t.seo.description)
    else {
      const m = document.createElement('meta')
      m.name = 'description'
      m.content = t.seo.description
      document.head.appendChild(m)
    }
  }, [t])

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar t={t} lang={lang} setLang={setLang} />
      <main>
        <Hero t={t} />
        <Gallery t={t} />
        <Programs t={t} />
        <Contact t={t} />
      </main>
      <Footer t={t} />
    </div>
  )
}
