export default function Footer({ dark }) {
  const bg     = dark ? 'bg-[#0A1628] border-white/[0.06]'   : 'bg-white border-slate-200/80'
  const text   = dark ? 'text-[#4A6A9A]' : 'text-slate-400'
  const link   = dark ? 'text-[#4A6A9A] hover:text-[#00C9B1]' : 'text-slate-400 hover:text-[#00C9B1]'

  const datas = [
    { name: 'GitHub', href: 'https://github.com/Andri0430' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile' },
  ]

  return (
    <footer className={`border-t py-8 ${bg}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className={`text-[12px] ${text}`}>© 2026 Andriansyah. Built with React + Tailwind.</div>
        <div className="flex items-center gap-6">
          {datas.map((item) => (
            <a key={item.name} href={item.href} className={`text-[12px] transition-colors duration-200 ${link}`} target="_blank" rel="noopener noreferrer">
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
