export default function Footer({ t }) {
  return (
    <footer className="py-10 bg-white border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-amber-300 to-orange-400" />
          <div className="font-extrabold text-slate-800">Kids Academy</div>
        </div>
        <p className="text-sm text-slate-600">
          © {new Date().getFullYear()} Kids Academy — {t.footer.rights}
        </p>
      </div>
    </footer>
  )
}
