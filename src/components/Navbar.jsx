import { useState, useEffect } from 'react'

const links = ['About','Experience', 'Skills', 'Projects', 'Contact']

export default function Navbar({ dark, setDark }) {
  const [open, setOpen]       = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (link) => {
    setOpen(false)
    document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
  }

  const navBg = scrolled
    ? dark
      ? 'bg-[#0A1628]/90 backdrop-blur-md border-b border-white/[0.06]'
      : 'bg-white/90 backdrop-blur-md border-b border-slate-200/80'
    : 'bg-transparent'

  const logoColor  = dark ? 'text-[#E8F0FF]' : 'text-slate-800'
  const linkColor  = dark ? 'text-[#7A9CC8] hover:text-[#E8F0FF]' : 'text-slate-500 hover:text-slate-800'
  const mobileMenu = dark ? 'bg-[#112040] border-white/[0.06]' : 'bg-white border-slate-200/80'
  const mobileLink = dark ? 'text-[#7A9CC8] hover:text-[#00C9B1]' : 'text-slate-500 hover:text-[#00C9B1]'
  const hamColor   = dark ? 'bg-[#7A9CC8]' : 'bg-slate-500'

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
      <nav className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">

        <a href="#" className={`font-display text-[17px] ${logoColor}`}
          style={{ fontFamily:'Syne, sans-serif', fontWeight:700 }}>
          Andriansyah<span className="text-[#00C9B1]">.</span>dev
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l}>
              <button onClick={() => handleNav(l)}
                className={`text-[13px] transition-colors duration-200 ${linkColor}`}>
                {l}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          {/* Dark mode toggle */}
          <button onClick={() => setDark(!dark)}
            className={`w-9 h-9 rounded-lg flex items-center justify-center border transition-all duration-200 ${
              dark ? 'border-white/[0.08] hover:border-[#00C9B1]/30' : 'border-slate-200 hover:border-[#00C9B1]/40'
            }`}>
            {dark ? (
              <svg viewBox="0 0 20 20" className="w-4 h-4 text-[#7A9CC8]" fill="none">
                <circle cx="10" cy="10" r="4" stroke="currentColor" strokeWidth="1.4"/>
                <path d="M10 2v2M10 16v2M2 10h2M16 10h2M4.22 4.22l1.42 1.42M14.36 14.36l1.42 1.42M4.22 15.78l1.42-1.42M14.36 5.64l1.42-1.42"
                  stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
              </svg>
            ) : (
              <svg viewBox="0 0 20 20" className="w-4 h-4 text-slate-500" fill="none">
                <path d="M17 10.5A7 7 0 119.5 3a5 5 0 007.5 7.5z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
              </svg>
            )}
          </button>

          <button onClick={() => handleNav('Contact')}
            className="bg-[#00C9B1] text-[#0A1628] text-[13px] font-medium px-5 py-2 rounded-lg hover:bg-[#00E5CC] transition-colors duration-200"
            style={{ fontFamily:'DM Sans, sans-serif' }}>
            Hire me
          </button>
        </div>

        {/* Mobile right */}
        <div className="md:hidden flex items-center gap-2">
          <button onClick={() => setDark(!dark)}
            className={`w-8 h-8 rounded-lg flex items-center justify-center border ${
              dark ? 'border-white/[0.08]' : 'border-slate-200'
            }`}>
            {dark ? (
              <svg viewBox="0 0 20 20" className="w-3.5 h-3.5 text-[#7A9CC8]" fill="none">
                <circle cx="10" cy="10" r="4" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M10 2v2M10 16v2M2 10h2M16 10h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            ) : (
              <svg viewBox="0 0 20 20" className="w-3.5 h-3.5 text-slate-500" fill="none">
                <path d="M17 10.5A7 7 0 119.5 3a5 5 0 007.5 7.5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            )}
          </button>
          <button className="flex flex-col gap-[5px] p-1" onClick={() => setOpen(!open)}>
            <span className={`block w-5 h-[1.5px] rounded transition-transform duration-300 origin-center ${hamColor} ${open ? 'rotate-45 translate-y-[6.5px]' : ''}`}/>
            <span className={`block w-5 h-[1.5px] rounded transition-opacity duration-300 ${hamColor} ${open ? 'opacity-0' : ''}`}/>
            <span className={`block w-5 h-[1.5px] rounded transition-transform duration-300 origin-center ${hamColor} ${open ? '-rotate-45 -translate-y-[6.5px]' : ''}`}/>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 border-b ${mobileMenu} ${open ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0'}`}>
        <ul className="px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <li key={l}>
              <button onClick={() => handleNav(l)}
                className={`text-[14px] transition-colors w-full text-left ${mobileLink}`}>
                {l}
              </button>
            </li>
          ))}
          <li>
            <button onClick={() => handleNav('Contact')}
              className="mt-2 w-full bg-[#00C9B1] text-[#0A1628] text-[13px] font-medium px-5 py-2.5 rounded-lg hover:bg-[#00E5CC] transition-colors">
              Hire me
            </button>
          </li>
        </ul>
      </div>
    </header>
  )
}