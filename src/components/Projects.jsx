import { useEffect, useRef } from 'react'

const projects = [
  {
    title: 'Dashboard Analytics',
    desc: 'Real-time analytics dashboard dengan visualisasi data interaktif. Menampilkan metrik bisnis secara live dengan update setiap detik.',
    tags: ['React','Chart.js','Node.js','WebSocket'],
    accent: '#00C9B1', bg: 'rgba(0,201,177,0.06)', border: 'rgba(0,201,177,0.15)', year: '2024',
    icon: <svg viewBox="0 0 48 48" className="w-10 h-10"><rect x="4" y="8" width="40" height="32" rx="4" fill="rgba(0,201,177,0.15)" stroke="rgba(0,201,177,0.4)" strokeWidth="1"/><rect x="9" y="14" width="30" height="4" rx="1.5" fill="rgba(0,201,177,0.5)"/><rect x="9" y="21" width="20" height="3" rx="1.5" fill="rgba(0,201,177,0.3)"/><rect x="9" y="27" width="25" height="3" rx="1.5" fill="rgba(0,201,177,0.3)"/><rect x="9" y="33" width="14" height="3" rx="1.5" fill="rgba(0,201,177,0.2)"/></svg>,
  },
  {
    title: 'E-commerce Platform',
    desc: 'Platform belanja online full-stack dengan fitur auth, payment gateway Midtrans, dan manajemen produk yang lengkap.',
    tags: ['Next.js','Node.js','PostgreSQL','Midtrans'],
    accent: '#60A5FA', bg: 'rgba(56,120,255,0.06)', border: 'rgba(56,120,255,0.15)', year: '2024',
    icon: <svg viewBox="0 0 48 48" className="w-10 h-10"><rect x="6" y="4" width="36" height="40" rx="4" fill="rgba(56,120,255,0.15)" stroke="rgba(56,120,255,0.4)" strokeWidth="1"/><rect x="12" y="12" width="24" height="3" rx="1.5" fill="rgba(56,120,255,0.5)"/><rect x="12" y="18" width="16" height="3" rx="1.5" fill="rgba(56,120,255,0.3)"/><rect x="12" y="24" width="20" height="3" rx="1.5" fill="rgba(56,120,255,0.3)"/><rect x="12" y="30" width="12" height="3" rx="1.5" fill="rgba(56,120,255,0.2)"/></svg>,
  },
  {
    title: 'Task Management App',
    desc: 'Aplikasi manajemen tugas tim dengan kolaborasi real-time menggunakan Socket.io, drag & drop board, dan notifikasi push.',
    tags: ['React','Socket.io','MongoDB','Redux'],
    accent: '#a78bfa', bg: 'rgba(160,100,255,0.06)', border: 'rgba(160,100,255,0.15)', year: '2023',
    icon: <svg viewBox="0 0 48 48" className="w-10 h-10"><circle cx="24" cy="24" r="18" fill="rgba(160,100,255,0.15)" stroke="rgba(160,100,255,0.4)" strokeWidth="1"/><path d="M14 24 L24 14 L34 24 L24 34 Z" fill="rgba(160,100,255,0.3)"/><circle cx="24" cy="24" r="6" fill="rgba(0,201,177,0.5)"/></svg>,
  },
  {
    title: 'RESTful API Service',
    desc: 'Backend service bertipe microservices dengan autentikasi JWT, rate limiting, dokumentasi Swagger, dan deployment Docker.',
    tags: ['Node.js','Express','Docker','Redis'],
    accent: '#34d399', bg: 'rgba(52,211,153,0.06)', border: 'rgba(52,211,153,0.15)', year: '2023',
    icon: <svg viewBox="0 0 48 48" className="w-10 h-10"><rect x="6" y="14" width="36" height="20" rx="4" fill="rgba(52,211,153,0.15)" stroke="rgba(52,211,153,0.4)" strokeWidth="1"/><circle cx="14" cy="24" r="3" fill="rgba(52,211,153,0.5)"/><rect x="22" y="22" width="16" height="3" rx="1.5" fill="rgba(52,211,153,0.3)"/></svg>,
  },
  {
    title: 'Portfolio Website',
    desc: 'Website portofolio personal dengan desain Ocean Blue, animasi smooth, dark mode, dan fully responsive untuk semua device.',
    tags: ['React','Tailwind','Vite','EmailJS'],
    accent: '#00C9B1', bg: 'rgba(0,201,177,0.06)', border: 'rgba(0,201,177,0.15)', year: '2024',
    icon: <svg viewBox="0 0 48 48" className="w-10 h-10"><rect x="4" y="10" width="40" height="28" rx="4" fill="rgba(0,201,177,0.1)" stroke="rgba(0,201,177,0.35)" strokeWidth="1"/><rect x="4" y="10" width="40" height="7" rx="4" fill="rgba(0,201,177,0.2)"/><circle cx="11" cy="13.5" r="1.5" fill="rgba(0,201,177,0.7)"/><circle cx="17" cy="13.5" r="1.5" fill="rgba(0,201,177,0.4)"/><rect x="10" y="23" width="28" height="2.5" rx="1" fill="rgba(0,201,177,0.3)"/><rect x="10" y="29" width="18" height="2.5" rx="1" fill="rgba(0,201,177,0.2)"/></svg>,
  },
  {
    title: 'Chat Application',
    desc: 'Aplikasi chat real-time dengan fitur room, direct message, berbagi file, emoji reaction, dan enkripsi end-to-end.',
    tags: ['React','Socket.io','Node.js','AWS S3'],
    accent: '#fb923c', bg: 'rgba(251,146,60,0.06)', border: 'rgba(251,146,60,0.15)', year: '2023',
    icon: <svg viewBox="0 0 48 48" className="w-10 h-10"><rect x="4" y="8" width="32" height="24" rx="5" fill="rgba(251,146,60,0.15)" stroke="rgba(251,146,60,0.4)" strokeWidth="1"/><path d="M10 32 L10 40 L20 32 Z" fill="rgba(251,146,60,0.2)"/><rect x="10" y="15" width="20" height="2.5" rx="1" fill="rgba(251,146,60,0.4)"/><rect x="10" y="21" width="14" height="2.5" rx="1" fill="rgba(251,146,60,0.3)"/></svg>,
  },
]

export default function Projects({ dark }) {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('[data-anim]').forEach((el, i) => {
              setTimeout(() => { el.style.opacity = '1'; el.style.transform = 'translateY(0)' }, i * 80)
            })
            observer.disconnect()
          }
        })
      },
      { threshold: 0.05 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const sectionBg = dark ? 'bg-[#112040]/40' : 'bg-slate-50'
  const cardBg    = dark ? 'bg-[#0A1628]'     : 'bg-white'
  const head      = dark ? 'text-[#E8F0FF]'   : 'text-slate-800'
  const sub       = dark ? 'text-[#7A9CC8]'   : 'text-slate-500'
  const year      = dark ? 'text-[#4A6A9A]'   : 'text-slate-400'
  const pdesc     = dark ? 'text-[#7A9CC8]'   : 'text-slate-500'

  return (
    <section id="projects" ref={ref} className={`py-20 sm:py-28 ${sectionBg}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div data-anim className="mb-14" style={{ opacity:0, transform:'translateY(20px)', transition:'all 0.5s ease' }}>
          <div className="text-[#00C9B1] text-xs tracking-widest uppercase mb-3" style={{ fontFamily:'JetBrains Mono, monospace' }}>03. Projects</div>
          <h2 className={`text-3xl sm:text-4xl mb-3 ${head}`} style={{ fontFamily:'Syne, sans-serif', fontWeight:800 }}>Proyek Terbaru</h2>
          <p className={`text-[14px] max-w-md ${sub}`}>Beberapa project yang sudah saya bangun — dari ide hingga project nyata.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p) => (
            <div key={p.title} data-anim
              className={`group relative rounded-2xl border overflow-hidden hover:scale-[1.02] transition-all duration-300 cursor-pointer ${cardBg}`}
              style={{ borderColor: p.border, opacity:0, transform:'translateY(20px)', transition:'all 0.5s ease' }}>
              <div className="h-[2px] w-full" style={{ background: p.accent, opacity:0.5 }}/>
              <div className="h-36 flex items-center justify-center" style={{ background: p.bg }}>{p.icon}</div>
              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className={`text-[15px] font-medium ${head}`} style={{ fontFamily:'Syne, sans-serif', fontWeight:600 }}>{p.title}</h3>
                  <span className={`text-[10px] mt-0.5 ${year}`} style={{ fontFamily:'JetBrains Mono, monospace' }}>{p.year}</span>
                </div>
                <p className={`text-[12px] leading-relaxed mb-4 ${pdesc}`}>{p.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span key={t} className="text-[10px] px-2 py-1 rounded-md"
                      style={{ color: p.accent, background: p.bg, border:`0.5px solid ${p.border}` }}>{t}</span>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-1 text-[12px] opacity-0 group-hover:opacity-100 transition-opacity duration-200" style={{ color: p.accent }}>
                  <span>Lihat proyek</span>
                  <svg viewBox="0 0 16 16" className="w-3 h-3" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}