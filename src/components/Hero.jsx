import { useEffect, useRef } from 'react'

const stats = [
  { num: '2+', label: 'Tahun pengalaman' },
  { num: '10', label: 'Proyek selesai' }
]

export default function Hero({ dark }) {
  const ref = useRef(null)

  useEffect(() => {
    const items = ref.current?.querySelectorAll('[data-anim]')
    items?.forEach((el, i) => {
      setTimeout(() => { el.style.opacity = '1'; el.style.transform = 'translateY(0)' }, 100 + i * 120)
    })
  }, [])

  const handleDownloadCV = () => {
    const link = document.createElement('a')
    link.href = '/CV_ANDRIANSYAH.pdf'
    link.download = 'Andriansyah_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  const desc  = dark ? 'text-[#7A9CC8]' : 'text-slate-500'
  const title = dark ? 'text-[#E8F0FF]' : 'text-slate-800'
  const stat  = dark ? 'text-[#4A6A9A]' : 'text-slate-400'
  const div   = dark ? 'border-white/[0.06]' : 'border-slate-200'
  const outline = dark
    ? 'border border-[#00C9B1]/25 text-[#7A9CC8] hover:border-[#00C9B1]/50 hover:text-[#E8F0FF]'
    : 'border border-slate-300 text-slate-500 hover:border-[#00C9B1]/60 hover:text-slate-700'

  return (
    <section id="about" ref={ref} className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-12">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-[#00C9B1]/5 blur-3xl"/>
        <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] rounded-full bg-[#0060ff]/5 blur-3xl"/>
        <div className="absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage:'linear-gradient(rgba(0,201,177,1) 1px,transparent 1px),linear-gradient(90deg,rgba(0,201,177,1) 1px,transparent 1px)', backgroundSize:'60px 60px' }}/>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <div data-anim className="inline-flex items-center gap-2 bg-[#00C9B1]/10 border border-[#00C9B1]/25 text-[#00C9B1] text-xs px-4 py-1.5 rounded-full mb-6"
              style={{ opacity:0, transform:'translateY(20px)', transition:'all 0.5s ease' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#00C9B1] animate-pulse"/>
              Available for work
            </div>

            <h1 data-anim className={`text-4xl sm:text-5xl lg:text-[58px] leading-[1.1] mb-5 tracking-tight ${title}`}
              style={{ fontFamily:'Syne, sans-serif', fontWeight:800, opacity:0, transform:'translateY(20px)', transition:'all 0.5s ease' }}>
              <span className="text-[#00C9B1]">Web</span> Developer
            </h1>

            <p data-anim className={`text-[15px] leading-relaxed max-w-2xl text-justify mx-auto lg:mx-0 mb-8 ${desc}`}
              style={{ opacity:0, transform:'translateY(20px)', transition:'all 0.5s ease' }}>
              Web Developer dengan pengalaman 2+ tahun menggunakan ASP.NET (C#), SQL Server, dan React.js. Terbiasa membangun aplikasi web yang stabil, responsif, dan terstruktur dengan baik, serta mampu bekerja sama dalam tim untuk mencapai target pengembangan.
            </p>

            <div data-anim className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-10"
              style={{ opacity:0, transform:'translateY(20px)', transition:'all 0.5s ease' }}>
              <button onClick={() => scrollTo('projects')}
                className="bg-[#00C9B1] text-[#0A1628] text-[14px] font-medium px-6 py-3 rounded-xl hover:bg-[#00E5CC] transition-colors duration-200"
                style={{ fontFamily:'DM Sans, sans-serif' }}>
                Lihat proyek saya
              </button>
              <button onClick={handleDownloadCV}
                className={`text-[14px] px-6 py-3 rounded-xl transition-all duration-200 ${outline}`}>
                Download CV
              </button>
            </div>

            <div data-anim className={`flex items-center justify-center lg:justify-start gap-8 pt-8 border-t ${div}`}
              style={{ opacity:0, transform:'translateY(20px)', transition:'all 0.5s ease' }}>
              {stats.map((s) => (
                <div key={s.label}>
                  <div className={`text-2xl font-700 ${title}`} style={{ fontFamily:'Syne, sans-serif', fontWeight:700 }}>
                    {s.num}<span className="text-[#00C9B1]">.</span>
                  </div>
                  <div className={`text-[11px] mt-0.5 ${stat}`}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div data-anim className="relative flex-shrink-0"
            style={{ opacity:0, transform:'translateY(20px)', transition:'all 0.5s ease' }}>
            <div className="absolute inset-[-20px] rounded-full border border-[#00C9B1]/10 animate-[spin_20s_linear_infinite]"/>
            <div className="absolute inset-[-40px] rounded-full border border-[#00C9B1]/5 animate-[spin_30s_linear_infinite_reverse]"/>
            <div className={`relative w-52 h-52 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full border border-[#00C9B1]/20 flex items-center justify-center overflow-hidden ${dark ? 'bg-[#112040]' : 'bg-slate-100'}`}>
              <svg viewBox="0 0 120 120" className="w-32 h-32 sm:w-40 sm:h-40 opacity-40">
                <circle cx="60" cy="42" r="26" fill="#00C9B1"/>
                <ellipse cx="60" cy="110" rx="40" ry="28" fill="#00C9B1"/>
              </svg>
              <div className="absolute inset-0 rounded-full bg-[#00C9B1]/5"/>
            </div>
            <div className={`absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 border border-[#00C9B1]/20 rounded-2xl px-3 py-2 text-[11px] ${dark ? 'bg-[#112040]' : 'bg-white shadow-sm'}`}
              style={{ animation:'float 4s ease-in-out infinite' }}>
              <div className="text-[#00C9B1] font-medium" style={{ fontFamily:'JetBrains Mono, monospace' }}>&lt;/&gt; React</div>
              <div className={`text-[10px] ${stat}`}>+ Node.js</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 animate-bounce">
        <div className={`text-[10px] tracking-widest uppercase ${stat}`}>Scroll</div>
        <div className={`w-px h-8 bg-gradient-to-b from-current to-transparent ${stat}`}/>
      </div>
    </section>
  )
}