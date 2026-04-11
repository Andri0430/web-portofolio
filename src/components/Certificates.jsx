import { useEffect, useRef, useState, useCallback } from "react"

const certificates = [
  {
    name: "React",
    issuer: "Pemberdayaan Umat Berkelanjutan (PUB)",
    date: "Sept 2023",
    category: "Frontend",
    image: "/Certificates/React.jpeg",
    accent: "#00C9B1",
    bg: "rgba(0,201,177,0.08)",
    border: "rgba(0,201,177,0.15)",
  },
    {
    name: "Git & GitHub",
    issuer: "Pemberdayaan Umat Berkelanjutan (PUB)",
    date: "Sept 2023",
    category: "Git",
    image: "/Certificates/Git.jpeg",
    accent: "#00C9B1",
    bg: "rgba(0,201,177,0.08)",
    border: "rgba(0,201,177,0.15)",
  },
  {
    name: "Advance Backend C#",
    issuer: "Pemberdayaan Umat Berkelanjutan (PUB)",
    date: "May 2023",
    category: "Backend",
    image: "/Certificates/Advance_CSharp.jpeg",
    accent: "#00C9B1",
    bg: "rgba(0,201,177,0.08)",
    border: "rgba(0,201,177,0.15)",
  },
  {
    name: "Fundamental Backend C#",
    issuer: "Pemberdayaan Umat Berkelanjutan (PUB)",
    date: "Des 2022",
    category: "Backend",
    image: "/Certificates/CSharp.jpeg",
    accent: "#00C9B1",
    bg: "rgba(0,201,177,0.08)",
    border: "rgba(0,201,177,0.15)",
  },
  {
    name: "HTML, CSS, & JavaScript",
    issuer: "Pemberdayaan Umat Berkelanjutan (PUB)",
    date: "jul 2022",
    category: "WEB",
    image: "/Certificates/WEB.jpeg",
    accent: "#00C9B1",
    bg: "rgba(0,201,177,0.08)",
    border: "rgba(0,201,177,0.15)",
  },
  {
    name: "Database (MYSQL)",
    issuer: "Pemberdayaan Umat Berkelanjutan (PUB)",
    date: "Jun 2022",
    category: "Database",
    image: "/Certificates/Database.jpeg",
    accent: "#00C9B1",
    bg: "rgba(0,201,177,0.08)",
    border: "rgba(0,201,177,0.15)",
  },
  {
    name: "Data Structure",
    issuer: "Pemberdayaan Umat Berkelanjutan (PUB)",
    date: "Jun 2022",
    category: "Programming",
    image: "/Certificates/Data_Structure.jpeg",
    accent: "#00C9B1",
    bg: "rgba(0,201,177,0.08)",
    border: "rgba(0,201,177,0.15)",
  },
    {
    name: "Logic & Algorithm",
    issuer: "Pemberdayaan Umat Berkelanjutan (PUB)",
    date: "Jan 2022",
    category: "ALGorithm",
    image: "/Certificates/C.jpeg",
    accent: "#00C9B1",
    bg: "rgba(0,201,177,0.08)",
    border: "rgba(0,201,177,0.15)",
  },
]

const CARD_WIDTH = 300
const GAP = 20

export default function Certificates({ dark }) {
  const ref = useRef(null)
  const trackRef = useRef(null)
  const [current, setCurrent] = useState(0)
  const [visible, setVisible] = useState(3)
  const [preview, setPreview] = useState(null)
  const touchStartX = useRef(0)

  const total = certificates.length
  const maxIndex = total - visible

  const getVisible = useCallback(() => {
    const w = trackRef.current?.parentElement?.offsetWidth ?? 900
    if (w < 420) return 1
    if (w < 680) return 2
    return 3
  }, [])

  useEffect(() => {
    const update = () => setVisible(getVisible())
    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [getVisible])

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setPreview(null)
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [])

  const goTo = (idx) => {
    setCurrent(Math.max(0, Math.min(idx, total - visible)))
  }

  const offset = current * (CARD_WIDTH + GAP)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll("[data-anim]").forEach((el, i) => {
              setTimeout(() => {
                el.style.opacity = "1"
                el.style.transform = "translateY(0)"
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

  const sectionBg = dark ? "bg-[#0A1628]"   : "bg-white"
  const head      = dark ? "text-[#E8F0FF]" : "text-slate-800"
  const sub       = dark ? "text-[#7A9CC8]" : "text-slate-500"
  const yearCl    = dark ? "text-[#4A6A9A]" : "text-slate-400"
  const arrowBg   = dark
    ? "bg-[#0d1e36] border-[#1a2e4a] hover:border-[#00C9B1]"
    : "bg-white border-slate-200 hover:border-[#00C9B1]"
  const cardBg    = dark ? "bg-[#0d1e36]"   : "bg-slate-50"
  const imgPlaceholder = dark ? "bg-[#0a1628]" : "bg-slate-100"

  return (
    <section id="certificates" ref={ref} className={`py-20 sm:py-28 ${sectionBg}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <div
          data-anim
          className="mb-12"
          style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.5s ease" }}
        >
          <div
            className="text-[#00C9B1] text-xs tracking-widest uppercase mb-3"
            style={{ fontFamily: "JetBrains Mono, monospace" }}
          >
            03. Certificates
          </div>
          <h2
            className={`text-3xl sm:text-4xl mb-3 ${head}`}
            style={{ fontFamily: "Syne, sans-serif", fontWeight: 800 }}
          >
            Sertifikasi
          </h2>
          <p className={`text-[14px] max-w-md ${sub}`}>
            Beberapa sertifikat yang saya peroleh selama proses belajar dan pengembangan.
          </p>
        </div>

        {/* Controls */}
        <div
          data-anim
          className="flex items-center justify-between mb-6"
          style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.5s ease" }}
        >
          <span
            className={`text-[11px] ${yearCl}`}
            style={{ fontFamily: "JetBrains Mono, monospace" }}
          >
            {current + 1} / {maxIndex + 1}
          </span>
          <div className="flex gap-2">
            {[
              { dir: -1, path: "M10 12L6 8l4-4" },
              { dir:  1, path: "M6 4l4 4-4 4"  },
            ].map(({ dir, path }) => (
              <button
                key={dir}
                onClick={() => goTo(current + dir)}
                className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-200 ${arrowBg}`}
              >
                <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" fill="none">
                  <path d={path} stroke="#7A9CC8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            ))}
          </div>
        </div>

        {/* Track */}
        <div
          data-anim
          className="overflow-hidden"
          style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.5s ease" }}
        >
          <div
            ref={trackRef}
            className="flex"
            style={{
              gap: GAP,
              transform: `translateX(-${offset}px)`,
              transition: "transform 0.45s cubic-bezier(0.4,0,0.2,1)",
            }}
            onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX }}
            onTouchEnd={(e) => {
              const diff = touchStartX.current - e.changedTouches[0].clientX
              if (Math.abs(diff) > 40) goTo(current + (diff > 0 ? 1 : -1))
            }}
          >
            {certificates.map((cert, i) => (
              <div
                key={i}
                onClick={() => setPreview(cert)}
                className={`group flex-shrink-0 rounded-2xl border overflow-hidden transition-all duration-300 hover:-translate-y-1 cursor-pointer ${cardBg}`}
                style={{
                  width: CARD_WIDTH,
                  borderColor: cert.border,
                  borderTopColor: cert.accent,
                  borderTopWidth: 2,
                }}
              >
                {/* Image area */}
                <div
                  className={`relative w-full overflow-hidden ${imgPlaceholder}`}
                  style={{ height: 160 }}
                >
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => { e.currentTarget.style.display = "none" }}
                  />
                  {/* overlay hint on hover */}
                  <div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: "rgba(0,0,0,0.45)" }}
                  >
                    <div
                      className="flex items-center gap-2 text-[11px] px-3 py-1.5 rounded-full"
                      style={{
                        fontFamily: "JetBrains Mono, monospace",
                        color: cert.accent,
                        background: "rgba(0,0,0,0.6)",
                        border: `0.5px solid ${cert.border}`,
                      }}
                    >
                      <svg viewBox="0 0 16 16" className="w-3 h-3" fill="none">
                        <path d="M1 8s3-5 7-5 7 5 7 5-3 5-7 5-7-5-7-5z" stroke="currentColor" strokeWidth="1.2"/>
                        <circle cx="8" cy="8" r="2" stroke="currentColor" strokeWidth="1.2"/>
                      </svg>
                      Lihat sertifikat
                    </div>
                  </div>

                  {/* placeholder jika gambar belum ada */}
                  <div
                    className="absolute inset-0 flex flex-col items-center justify-center gap-2 pointer-events-none"
                    style={{ background: cert.bg }}
                  >
                    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke={cert.accent} strokeWidth="1.2" strokeLinecap="round">
                      <rect x="3" y="3" width="18" height="18" rx="3"/>
                      <path d="M3 15l5-5 4 4 3-3 6 6"/>
                      <circle cx="8.5" cy="8.5" r="1.5"/>
                    </svg>
                    <span
                      className="text-[10px]"
                      style={{ color: cert.accent, fontFamily: "JetBrains Mono, monospace" }}
                    >
                      preview
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5">
                  <h3
                    className={`text-[13px] leading-snug mb-1 ${head}`}
                    style={{ fontFamily: "Syne, sans-serif", fontWeight: 700 }}
                  >
                    {cert.name}
                  </h3>
                  <p className={`text-[11px] ${sub}`}>{cert.issuer}</p>
                </div>

                {/* Bottom */}
                <div
                  className="px-5 py-3 flex items-center justify-between"
                  style={{ borderTop: `1px solid ${cert.border}` }}
                >
                  <span
                    className={`text-[10px] ${yearCl}`}
                    style={{ fontFamily: "JetBrains Mono, monospace" }}
                  >
                    {cert.date}
                  </span>
                  <span
                    className="text-[9px] px-2 py-1 rounded-full"
                    style={{
                      fontFamily: "JetBrains Mono, monospace",
                      color: cert.accent,
                      background: cert.bg,
                      border: `0.5px solid ${cert.border}`,
                    }}
                  >
                    {cert.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-1.5 mt-7">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="h-1.5 rounded-full transition-all duration-300"
              style={{
                width: i === current ? 20 : 6,
                background: i === current ? "#00C9B1" : "rgba(255,255,255,0.1)",
              }}
            />
          ))}
        </div>
      </div>

      {/* Lightbox preview */}
      {preview && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
          style={{ background: "rgba(0,0,0,0.85)" }}
          onClick={() => setPreview(null)}
        >
          <div
            className={`relative w-full max-w-3xl rounded-2xl overflow-hidden border ${cardBg}`}
            style={{ borderColor: preview.border }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Lightbox header */}
            <div
              className="flex items-center justify-between px-5 py-4"
              style={{ borderBottom: `1px solid ${preview.border}` }}
            >
              <div>
                <h3
                  className={`text-[14px] ${head}`}
                  style={{ fontFamily: "Syne, sans-serif", fontWeight: 700 }}
                >
                  {preview.name}
                </h3>
                <p className={`text-[11px] mt-0.5 ${sub}`}>{preview.issuer}</p>
              </div>
              <button
                onClick={() => setPreview(null)}
                className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-200 flex-shrink-0 ml-4 ${arrowBg}`}
              >
                <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" fill="none">
                  <path d="M4 4l8 8M12 4l-8 8" stroke="#7A9CC8" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
            </div>

            {/* Lightbox image */}
            <div
              className={`w-full flex items-center justify-center ${imgPlaceholder}`}
              style={{ minHeight: 320 }}
            >
              <img
                src={preview.image}
                alt={preview.name}
                className="w-full h-auto object-contain max-h-[60vh]"
                onError={(e) => { e.currentTarget.style.display = "none" }}
              />
            </div>

            {/* Lightbox footer */}
            <div
              className="flex items-center justify-between px-5 py-3"
              style={{ borderTop: `1px solid ${preview.border}` }}
            >
              <span
                className={`text-[10px] ${yearCl}`}
                style={{ fontFamily: "JetBrains Mono, monospace" }}
              >
                {preview.date}
              </span>
              <span
                className="text-[9px] px-2 py-1 rounded-full"
                style={{
                  fontFamily: "JetBrains Mono, monospace",
                  color: preview.accent,
                  background: preview.bg,
                  border: `0.5px solid ${preview.border}`,
                }}
              >
                {preview.category}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}