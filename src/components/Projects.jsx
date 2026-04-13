import { useEffect, useRef, useState, useCallback } from 'react'

const projects = [
  {
    title: 'API Sistem Manajemen Inventaris',
    desc: 'RESTful API untuk sistem manajemen inventaris yang mengelola produk, kategori, supplier, dan pergerakan stok masuk & keluar. Dilengkapi dengan autentikasi JWT, otorisasi berbasis peran, dan pagination untuk pengelolaan data yang efisien.',
    tags: ['ASP.NET Core 8', 'Entity Framework Core (SQL Server)', 'Clean Architecture', 'JWT Authentication & Refresh Token', 'Role-Based Authorization', 'Repository Pattern & Unit of Work', 'Swagger'],
    accent: '#00C9B1',
    bg: 'rgba(0,201,177,0.06)',
    border: 'rgba(0,201,177,0.15)',
    year: '2026',
    link: 'https://dashboard.example.com',
    images: [
      '/projects/dashboard-1.png',
      '/projects/dashboard-2.png',
      '/projects/dashboard-3.png',
    ],
  },
  {
    title: 'Platform pencarian Komunitas (Teman Baru)',
    desc: 'Mengembangkan aplikasi pencarian komunitas dan aktivitas sosial dengan fitur Autentikasi user, manajemen aktivitas, pendaftaran, dan integrasi pembayaran via Midtrans.',
    tags: ['ASP.NET Core 8', 'Entity Framework Core (SQL Server)', 'JWT Authentication', 'Role-Based Authorization', 'React'],
    accent: '#60A5FA',
    bg: 'rgba(56,120,255,0.06)',
    border: 'rgba(56,120,255,0.15)',
    year: '2025',
    link: 'https://shop.example.com',
    images: [
      '/projects/ecommerce-1.png',
      '/projects/ecommerce-2.png',
    ],
  },
  {
    title: 'Sistem Reservasi Foto Mandiri (Tiba-Tiba Foto)',
    desc: 'Mengembangkan aplikasi reservasi studio dengan fitur Autentikasi user, manajemen transaksi, penjadwalan, pembayaran & retur via Midtrans, serta distribusi foto ke pengguna.',
    tags: ['ASP.NET Core 8', 'Entity Framework Core (SQL Server)', 'JWT Authentication', 'Role-Based Authorization', 'React'],
    accent: '#a78bfa',
    bg: 'rgba(160,100,255,0.06)',
    border: 'rgba(160,100,255,0.15)',
    year: '2025',
    link: 'https://tasks.example.com',
    images: [
      '/projects/task-1.png',
      '/projects/task-2.png',
      '/projects/task-3.png',
    ],
  },
  {
    title: 'Sistem Reservasi Kost',
    desc: 'Mengembangkan aplikasi pencarian dan reservasi kos dengan fitur autentikasi user, manajemen kos, dan pendaftaran kos. ',
    tags: ['ASP .NET Core 6', 'Entity Framework Core (SQL Server)', 'JWT Authentication', 'Role-Based Authorization', 'React'],
    accent: '#a78bfa',
    bg: 'rgba(160,100,255,0.06)',
    border: 'rgba(160,100,255,0.15)',
    year: '2023',
    link: 'https://tasks.example.com',
    images: [
      '/projects/task-1.png',
      '/projects/task-2.png',
      '/projects/task-3.png',
    ],
  },
]

const CARD_WIDTH = 280
const GAP = 20

// ── Modal ──────────────────────────────────────────────
function ProjectModal({ p, dark, onClose }) {
  const [imgIndex, setImgIndex] = useState(0)
  const imgTouchStart = useRef(0)

  const cardBg = dark ? 'bg-[#0d1e36]' : 'bg-white'
  const head   = dark ? 'text-[#E8F0FF]' : 'text-slate-800'
  const sub    = dark ? 'text-[#7A9CC8]' : 'text-slate-500'
  const yearCl = dark ? 'text-[#4A6A9A]' : 'text-slate-400'
  const overlayBg = dark ? 'bg-[#0A1628]/90' : 'bg-slate-900/70'

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  useEffect(() => {
    const fn = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', fn)
    return () => window.removeEventListener('keydown', fn)
  }, [onClose])

  const prev = () => setImgIndex((i) => (i - 1 + p.images.length) % p.images.length)
  const next = () => setImgIndex((i) => (i + 1) % p.images.length)

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 ${overlayBg}`}
      onClick={onClose}
    >
      <div
        className={`relative w-full max-w-lg rounded-2xl border overflow-hidden flex flex-col ${cardBg}`}
        style={{
          maxHeight: '85vh',
          borderColor: p.border,
          borderTopColor: p.accent,
          borderTopWidth: 2,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal header — fixed */}
        <div
          className="flex items-center justify-between px-5 py-4 flex-shrink-0"
          style={{ borderBottom: `1px solid ${p.border}` }}
        >
          <div>
            <h3 className={`text-[15px] ${head}`}
              style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700 }}>
              {p.title}
            </h3>
            <span className={`text-[10px] ${yearCl}`}
              style={{ fontFamily: 'JetBrains Mono, monospace' }}>
              {p.year}
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ml-4 transition-all duration-200"
            style={{
              background: p.bg,
              border: `0.5px solid ${p.border}`,
            }}
          >
            <svg viewBox="0 0 14 14" className="w-3.5 h-3.5" fill="none">
              <path d="M3 3l8 8M11 3l-8 8" stroke={p.accent} strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* Modal body — scrollable */}
        <div className="overflow-y-auto flex-1">

          {/* Image carousel */}
          <div
            className="relative overflow-hidden flex-shrink-0"
            style={{
              height: 220,
              background: p.bg,
            }}
            onTouchStart={(e) => { imgTouchStart.current = e.touches[0].clientX }}
            onTouchEnd={(e) => {
              const diff = imgTouchStart.current - e.changedTouches[0].clientX
              if (Math.abs(diff) > 30) diff > 0 ? next() : prev()
            }}
          >
            <div
              className="flex h-full"
              style={{
                transform: `translateX(-${imgIndex * 100}%)`,
                transition: 'transform 0.4s cubic-bezier(0.4,0,0.2,1)',
              }}
            >
              {p.images.map((src, idx) => (
                <div key={idx} className="flex-shrink-0 w-full h-full relative">
                  <img
                    src={src}
                    alt={`${p.title} ${idx + 1}`}
                    className="w-full h-full object-cover"
                    onError={(e) => { e.currentTarget.style.display = 'none' }}
                  />
                  {/* placeholder */}
                  <div
                    className="absolute inset-0 flex flex-col items-center justify-center gap-2"
                    style={{ background: p.bg }}
                  >
                    <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none"
                      stroke={p.accent} strokeWidth="1.2" strokeLinecap="round">
                      <rect x="3" y="3" width="18" height="18" rx="3"/>
                      <path d="M3 15l5-5 4 4 3-3 6 6"/>
                      <circle cx="8.5" cy="8.5" r="1.5"/>
                    </svg>
                    <span className="text-[11px]"
                      style={{ color: p.accent, fontFamily: 'JetBrains Mono, monospace' }}>
                      preview
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Prev / Next */}
            {p.images.length > 1 && (
              <>
                <button onClick={prev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full flex items-center justify-center transition-opacity duration-200"
                  style={{ background: 'rgba(0,0,0,0.55)', border: `0.5px solid ${p.border}` }}>
                  <svg viewBox="0 0 12 12" className="w-3 h-3" fill="none">
                    <path d="M7 9L4 6l3-3" stroke={p.accent} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button onClick={next}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full flex items-center justify-center transition-opacity duration-200"
                  style={{ background: 'rgba(0,0,0,0.55)', border: `0.5px solid ${p.border}` }}>
                  <svg viewBox="0 0 12 12" className="w-3 h-3" fill="none">
                    <path d="M5 3l3 3-3 3" stroke={p.accent} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
                  {p.images.map((_, idx) => (
                    <button key={idx}
                      onClick={() => setImgIndex(idx)}
                      className="rounded-full transition-all duration-300"
                      style={{
                        width: idx === imgIndex ? 16 : 5,
                        height: 5,
                        background: idx === imgIndex ? p.accent : 'rgba(255,255,255,0.35)',
                      }}
                    />
                  ))}
                </div>
                <div className="absolute top-3 right-3 text-[9px] px-1.5 py-0.5 rounded-full"
                  style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    color: p.accent,
                    background: 'rgba(0,0,0,0.55)',
                    border: `0.5px solid ${p.border}`,
                  }}>
                  {imgIndex + 1}/{p.images.length}
                </div>
              </>
            )}
          </div>

          {/* Desc & tags */}
          <div className="px-5 py-5">
            <p className={`text-[13px] leading-relaxed mb-5 ${sub}`}>{p.desc}</p>

            <div className="flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="text-[11px] px-2.5 py-1 rounded-md"
                  style={{ color: p.accent, background: p.bg, border: `0.5px solid ${p.border}` }}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal footer — fixed */}
        <div
          className="flex-shrink-0 px-5 py-4"
          style={{ borderTop: `1px solid ${p.border}` }}
        >
          <a
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-[12px] transition-opacity duration-200 hover:opacity-80"
            style={{
              fontFamily: 'JetBrains Mono, monospace',
              color: dark ? '#0A1628' : '#ffffff',
              background: p.accent,
            }}
          >
            <svg viewBox="0 0 14 14" className="w-3.5 h-3.5" fill="none">
              <path
                d="M2 7h10M8 3l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Kunjungi proyek
          </a>
        </div>
      </div>
    </div>
  )
}

// ── Card ───────────────────────────────────────────────
function ProjectCard({ p, dark, onOpen }) {
  const imgPlaceholder = dark ? 'bg-[#0d1e36]' : 'bg-slate-100'
  const cardBg         = dark ? 'bg-[#0A1628]' : 'bg-white'
  const head           = dark ? 'text-[#E8F0FF]' : 'text-slate-800'
  const yearCl         = dark ? 'text-[#4A6A9A]' : 'text-slate-400'
  const sub            = dark ? 'text-[#7A9CC8]' : 'text-slate-500'

  return (
    <div
      onClick={onOpen}
      className={`group flex-shrink-0 rounded-2xl border overflow-hidden transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col ${cardBg}`}
      style={{
        width: CARD_WIDTH,
        borderColor: p.border,
        borderTopColor: p.accent,
        borderTopWidth: 2,
      }}
    >
      {/* Cover image */}
      <div
        className={`relative overflow-hidden flex-shrink-0 ${imgPlaceholder}`}
        style={{ height: 180 }}
      >
        <img
          src={p.images[0]}
          alt={p.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => { e.currentTarget.style.display = 'none' }}
        />
        {/* placeholder */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-2"
          style={{ background: p.bg }}
        >
          <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none"
            stroke={p.accent} strokeWidth="1.2" strokeLinecap="round">
            <rect x="3" y="3" width="18" height="18" rx="3"/>
            <path d="M3 15l5-5 4 4 3-3 6 6"/>
            <circle cx="8.5" cy="8.5" r="1.5"/>
          </svg>
          <span className="text-[10px]"
            style={{ color: p.accent, fontFamily: 'JetBrains Mono, monospace' }}>
            preview
          </span>
        </div>

        {/* Hover overlay */}
        <div
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: 'rgba(0,0,0,0.45)' }}
        >
          <div className="flex items-center gap-2 text-[11px] px-3 py-1.5 rounded-full"
            style={{
              fontFamily: 'JetBrains Mono, monospace',
              color: p.accent,
              background: 'rgba(0,0,0,0.6)',
              border: `0.5px solid ${p.border}`,
            }}
          >
            <svg viewBox="0 0 14 14" className="w-3 h-3" fill="none">
              <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.2"/>
              <circle cx="7" cy="7" r="2" stroke="currentColor" strokeWidth="1.2"/>
            </svg>
            Lihat detail
          </div>
        </div>

        {/* Image count badge */}
        {p.images.length > 1 && (
          <div className="absolute top-2 right-2 text-[9px] px-1.5 py-0.5 rounded-full"
            style={{
              fontFamily: 'JetBrains Mono, monospace',
              color: p.accent,
              background: 'rgba(0,0,0,0.55)',
              border: `0.5px solid ${p.border}`,
            }}>
            1/{p.images.length}
          </div>
        )}
      </div>

      {/* Title */}
      <div className="px-5 py-4 flex items-start justify-between gap-2">
        <h3 className={`text-[14px] leading-snug ${head}`}
          style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700 }}>
          {p.title}
        </h3>
        <span className={`text-[10px] mt-0.5 flex-shrink-0 ${yearCl}`}
          style={{ fontFamily: 'JetBrains Mono, monospace' }}>
          {p.year}
        </span>
      </div>

      {/* Footer */}
      <div
        className={`mt-auto px-5 py-3 flex items-center justify-between text-[11px] ${sub}`}
        style={{ borderTop: `1px solid ${p.border}`, fontFamily: 'JetBrains Mono, monospace' }}
      >
        <span style={{ color: p.accent }}>
          {p.tags.slice(0, 2).join(', ')}{p.tags.length > 2 ? ` +${p.tags.length - 2}` : ''}
        </span>
        <span className="flex items-center gap-1" style={{ color: p.accent }}>
          Detail
          <svg viewBox="0 0 12 12" className="w-3 h-3" fill="none">
            <path d="M5 3l3 3-3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </div>
    </div>
  )
}

// ── Section ────────────────────────────────────────────
export default function Projects({ dark }) {
  const ref         = useRef(null)
  const trackRef    = useRef(null)
  const [current, setCurrent]     = useState(0)
  const [visible, setVisible]     = useState(3)
  const [modal, setModal]         = useState(null)
  const touchStartX = useRef(0)

  const total    = projects.length
  const maxIndex = Math.max(0, total - visible)

  const getVisible = useCallback(() => {
    const w = trackRef.current?.parentElement?.offsetWidth ?? 900
    if (w < 420) return 1
    if (w < 680) return 2
    return 3
  }, [])

  useEffect(() => {
    const update = () => setVisible(getVisible())
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [getVisible])

  const goTo  = (idx) => setCurrent(Math.max(0, Math.min(idx, total - visible)))
  const offset = current * (CARD_WIDTH + GAP)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('[data-anim]').forEach((el, i) => {
              setTimeout(() => {
                el.style.opacity = '1'
                el.style.transform = 'translateY(0)'
              }, i * 80)
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
  const head      = dark ? 'text-[#E8F0FF]'  : 'text-slate-800'
  const sub       = dark ? 'text-[#7A9CC8]'  : 'text-slate-500'
  const yearCl    = dark ? 'text-[#4A6A9A]'  : 'text-slate-400'
  const arrowBg   = dark
    ? 'bg-[#0d1e36] border-[#1a2e4a] hover:border-[#00C9B1]'
    : 'bg-white border-slate-200 hover:border-[#00C9B1]'

  return (
    <section id="projects" ref={ref} className={`py-20 sm:py-28 ${sectionBg}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <div data-anim className="mb-12"
          style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.5s ease' }}>
          <div className="text-[#00C9B1] text-xs tracking-widest uppercase mb-3"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}>
            03. Projects
          </div>
          <h2 className={`text-3xl sm:text-4xl mb-3 ${head}`}
            style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800 }}>
            Proyek Terbaru
          </h2>
          <p className={`text-[14px] max-w-md ${sub}`}>
            Beberapa project yang sudah saya bangun — dari ide hingga project nyata.
          </p>
        </div>

        {/* Controls */}
        <div data-anim className="flex items-center justify-between mb-6"
          style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.5s ease' }}>
          <span className={`text-[11px] ${yearCl}`}
            style={{ fontFamily: 'JetBrains Mono, monospace' }}>
            {current + 1} / {maxIndex + 1}
          </span>
          <div className="flex gap-2">
            {[
              { dir: -1, path: 'M10 12L6 8l4-4' },
              { dir:  1, path: 'M6 4l4 4-4 4'   },
            ].map(({ dir, path }) => (
              <button key={dir} onClick={() => goTo(current + dir)}
                className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-200 ${arrowBg}`}>
                <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" fill="none">
                  <path d={path} stroke="#7A9CC8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            ))}
          </div>
        </div>

        {/* Track */}
        <div data-anim className="overflow-hidden"
          style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.5s ease' }}>
          <div
            ref={trackRef}
            className="flex items-stretch"
            style={{
              gap: GAP,
              transform: `translateX(-${offset}px)`,
              transition: 'transform 0.45s cubic-bezier(0.4,0,0.2,1)',
            }}
            onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX }}
            onTouchEnd={(e) => {
              const diff = touchStartX.current - e.changedTouches[0].clientX
              if (Math.abs(diff) > 40) goTo(current + (diff > 0 ? 1 : -1))
            }}
          >
            {projects.map((p, i) => (
              <ProjectCard key={i} p={p} dark={dark} onOpen={() => setModal(p)} />
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-1.5 mt-7">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button key={i} onClick={() => goTo(i)}
              className="h-1.5 rounded-full transition-all duration-300"
              style={{
                width: i === current ? 20 : 6,
                background: i === current ? '#00C9B1' : 'rgba(255,255,255,0.1)',
              }}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      {modal && (
        <ProjectModal p={modal} dark={dark} onClose={() => setModal(null)} />
      )}
    </section>
  )
}