import { useMemo, useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Programs from './components/Programs'
import About from './components/About'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [lang, setLang] = useState('en')

  const dict = useMemo(() => ({
    en: {
      seo: {
        title: 'Kids Academy Sibiu — Caring daycare & preschool in the heart of the city',
        description: 'Warm, safe, and creative daycare in Sibiu. Nursery, preschool, and after-school programs. Loving educators, small groups, healthy meals. Enroll today.'
      },
      nav: {
        programs: 'Programs',
        about: 'About us',
        gallery: 'Gallery',
        testimonials: 'Parents say',
        faq: 'FAQ',
        contact: 'Contact'
      },
      cta: { explore: 'Explore programs', enroll: 'Enroll now' },
      hero: {
        badge: 'Sibiu • Daycare & Preschool',
        title: 'A warm, happy place for little big learners',
        subtitle: 'We nurture curiosity through play, music, arts, nature, and kind guidance. A safe, stimulating environment where every child feels seen and loved.',
        gdpr: 'We respect your privacy. Your details are used only to contact you about enrollment.'
      },
      programs: {
        title: 'Our programs',
        subtitle: 'Age-appropriate groups led by experienced, caring educators',
        nursery: { title: 'Nursery', age: '1–3 years', desc: 'Gentle routine, sensory play, music and movement, first words and friendships.' },
        preschool: { title: 'Preschool', age: '3–5 years', desc: 'Play-based learning, pre-reading, early math, arts & crafts, outdoor exploration.' },
        after: { title: 'After-school', age: '5–7 years', desc: 'Homework help, creative clubs, healthy snack, safe and joyful afternoons.' },
      },
      about: {
        title: 'About Kids Academy',
        p1: 'We are a local team of qualified educators, moms, and child development enthusiasts. Our mission is to offer Sibiu families a caring second home.',
        p2: 'We keep our groups small, work closely with parents, and celebrate each milestone with joy and patience.',
        points: ['Small groups', 'Healthy meals', 'Daily outdoor time', 'English & Romanian', 'Parent updates', 'Qualified staff']
      },
      gallery: { title: 'Life at Kids Academy', subtitle: 'Smiles, art, play, and discovery every day' },
      testimonials: {
        title: 'What parents say',
        subtitle: 'Real stories from our community',
        items: [
          { name: 'Andreea, mom of Mara', quote: 'Warm, attentive teachers. Our daughter runs to the door every morning!' },
          { name: 'Radu, dad of Matei', quote: 'We love the creative activities and the daily photos. Trustworthy and kind.' },
          { name: 'Ioana, mom of Sofia', quote: 'Beautiful space and healthy meals. Communication with parents is excellent.' },
        ]
      },
      faq: {
        title: 'Frequently asked questions',
        subtitle: 'If you have other questions, write to us — we reply fast',
        items: [
          { q: 'What are your opening hours?', a: 'Monday–Friday, 8:00–18:00. Saturday by event only.' },
          { q: 'Are meals included?', a: 'Yes. We provide healthy lunches and two snacks. Allergies are taken into account.' },
          { q: 'How do you communicate with parents?', a: 'Daily updates and photos, plus monthly progress notes and meetings when needed.' },
        ]
      },
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
        title: 'Kids Academy Sibiu — Grădiniță și creșă cu suflet',
        description: 'Îngrijire caldă și educație prin joacă în Sibiu. Creșă, grădiniță și after-school. Educatori dedicați, grupe mici, mese sănătoase. Înscrieri deschise.'
      },
      nav: {
        programs: 'Programe',
        about: 'Despre noi',
        gallery: 'Galerie',
        testimonials: 'Părinții spun',
        faq: 'Întrebări',
        contact: 'Contact'
      },
      cta: { explore: 'Vezi programele', enroll: 'Înscrie-te' },
      hero: {
        badge: 'Sibiu • Creșă & Grădiniță',
        title: 'Un loc cald pentru micii exploratori',
        subtitle: 'Cultivăm curiozitatea prin joc, muzică, arte, natură și îndrumare blândă. Un mediu sigur în care fiecare copil este văzut și iubit.',
        gdpr: 'Îți respectăm confidențialitatea. Folosim datele doar pentru a te contacta despre înscriere.'
      },
      programs: {
        title: 'Programele noastre',
        subtitle: 'Grupe pe vârste coordonate de educatori dedicați',
        nursery: { title: 'Creșă', age: '1–3 ani', desc: 'Rutine blânde, joc senzorial, muzică și mișcare, primele cuvinte și prietenii.' },
        preschool: { title: 'Grădiniță', age: '3–5 ani', desc: 'Învățare prin joc, pre-alfabetizare, matematică timpurie, arte & craft, natură.' },
        after: { title: 'After-school', age: '5–7 ani', desc: 'Teme asistate, cluburi creative, gustare sănătoasă, după-amiezi vesele.' },
      },
      about: {
        title: 'Despre Kids Academy',
        p1: 'Suntem o echipă locală de educatori, mame și pasionați de dezvoltarea copiilor. Misiunea noastră este să oferim familiilor din Sibiu o a doua casă.',
        p2: 'Păstrăm grupe mici, colaborăm cu părinții și sărbătorim fiecare progres cu bucurie și răbdare.',
        points: ['Grupe mici', 'Mese sănătoase', 'Timp zilnic afară', 'Română & Engleză', 'Update-uri pentru părinți', 'Personal calificat']
      },
      gallery: { title: 'Viața la Kids Academy', subtitle: 'Zâmbete, artă, joacă și descoperire în fiecare zi' },
      testimonials: {
        title: 'Ce spun părinții',
        subtitle: 'Povești reale din comunitate',
        items: [
          { name: 'Andreea, mama Marei', quote: 'Educatori calzi și atenți. Fetița noastră abia așteaptă să ajungă dimineața!' },
          { name: 'Radu, tatăl lui Matei', quote: 'Ne plac activitățile creative și pozele zilnice. De încredere și blânzi.' },
          { name: 'Ioana, mama Sofiei', quote: 'Spațiu frumos și mese sănătoase. Comunicarea cu părinții este excelentă.' },
        ]
      },
      faq: {
        title: 'Întrebări frecvente',
        subtitle: 'Dacă ai alte întrebări, scrie-ne — răspundem rapid',
        items: [
          { q: 'Care este programul?', a: 'Luni–Vineri, 8:00–18:00. Sâmbătă doar pentru evenimente.' },
          { q: 'Sunt incluse mesele?', a: 'Da. Oferim prânz sănătos și două gustări. Ținem cont de alergii.' },
          { q: 'Cum comunicați cu părinții?', a: 'Update-uri și poze zilnic, plus rapoarte lunare și întâlniri la nevoie.' },
        ]
      },
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
        <Programs t={t} />
        <About t={t} />
        <Gallery t={t} />
        <Testimonials t={t} />
        <FAQ t={t} />
        <Contact t={t} />
      </main>
      <Footer t={t} />
    </div>
  )
}
