import { useEffect, useRef } from "react"

const experiences = [
  {
    role: "Backend Developer",
    company: "PT Erasoft Teknologi Indonesia",
    divisi: "Divisi Master Online",
    period: "2023 — Present",
    isCurrent: true,
    points: [
      "Mengembangkan dan memelihara aplikasi web Master Online berbasis ASP.NET(C#).",
      "Mengintegrasikan dan mengelola sistem dengan API marketplace dan Accurate untuk sinkronisasi data transaksi, produk, dan stok.",
      "Mengembangkan antarmuka web landing page perusahaan berbasis React.js sesuai dengan kebutuhan sistem.",
      "Mengelola database SQL Server, termasuk pengecekan data, optimasi query, dan perancangan struktur database.",
      "Melakukan pengujian untuk memastikan aplikasi berjalan sesuai kebutuhan sistem sebelum dan sesudah implementasi.",
    ],
    tech: ["ASP .NET", "Node Js", "SQL Server", "REST API", "React Js"],
    accent: "#60A5FA",
    bg: "rgba(96,165,250,0.06)",
    border: "rgba(96,165,250,0.15)",
  },
]

export default function Experience({ dark }) {
  const ref = useRef(null)

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

  const sectionBg = dark ? "bg-[#112040]/40" : "bg-slate-50"
  const cardBg    = dark ? "bg-[#0A1628]"    : "bg-white"
  const head      = dark ? "text-[#E8F0FF]"  : "text-slate-800"
  const sub       = dark ? "text-[#7A9CC8]"  : "text-slate-500"
  const yearCl    = dark ? "text-[#4A6A9A]"  : "text-slate-400"
  const divisiCl  = dark ? "text-[#4A6A9A]"  : "text-slate-400"

  return (
    <section id="experience" ref={ref} className={`py-20 sm:py-28 ${sectionBg}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <div
          data-anim
          className="mb-14"
          style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.5s ease" }}
        >
          <div
            className="text-[#00C9B1] text-xs tracking-widest uppercase mb-3"
            style={{ fontFamily: "JetBrains Mono, monospace" }}
          >
            02. Experience
          </div>
          <h2
            className={`text-3xl sm:text-4xl mb-3 ${head}`}
            style={{ fontFamily: "Syne, sans-serif", fontWeight: 800 }}
          >
            Perjalanan Karir
          </h2>
          <p className={`text-[14px] max-w-md ${sub}`}>
            Pengalaman profesional dalam membangun aplikasi web modern dan scalable.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-5">
          {experiences.map((exp, i) => (
            <div
              key={i}
              data-anim
              className={`group rounded-2xl border overflow-hidden hover:-translate-y-0.5 transition-all duration-300 cursor-pointer ${cardBg}`}
              style={{
                opacity: 0,
                transform: "translateY(20px)",
                transition: "all 0.5s ease",
                borderColor: exp.border,
                borderTopColor: exp.accent,
                borderTopWidth: 2,
              }}
            >
              <div className="p-6 sm:p-7">

                {/* Top row */}
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div>
                    <h3
                      className={`text-[15px] ${head}`}
                      style={{ fontFamily: "Syne, sans-serif", fontWeight: 600 }}
                    >
                      {exp.role}
                    </h3>
                    <p className={`text-[12px] mt-0.5 ${sub}`}>{exp.company}</p>
                    {exp.divisi && (
                      <p
                        className={`text-[11px] mt-0.5 ${divisiCl}`}
                        style={{ fontFamily: "JetBrains Mono, monospace" }}
                      >
                        {exp.divisi}
                      </p>
                    )}
                  </div>
                  <span
                    className={`text-[10px] mt-0.5 flex-shrink-0 ${yearCl}`}
                    style={{ fontFamily: "JetBrains Mono, monospace" }}
                  >
                    {exp.period}
                  </span>
                </div>

                {/* Currently working badge */}
                {exp.isCurrent && (
                  <div
                    className="inline-flex items-center gap-1.5 text-[9px] px-2 py-1 rounded-full mb-4"
                    style={{
                      fontFamily: "JetBrains Mono, monospace",
                      color: exp.accent,
                      background: exp.bg,
                      border: `0.5px solid ${exp.border}`,
                    }}
                  >
                    <span
                      className="w-[5px] h-[5px] rounded-full animate-pulse"
                      style={{ background: exp.accent }}
                    />
                    Currently working here
                  </div>
                )}

                {/* Divider */}
                <div
                  className="w-full h-px mb-4"
                  style={{ background: exp.border }}
                />

                {/* Points */}
                <div className="flex flex-col gap-2 mb-5">
                  {exp.points.map((p) => (
                    <div key={p} className={`flex items-start gap-2.5 text-[12px] leading-relaxed ${sub}`}>
                      <span
                        className="w-1 h-1 rounded-full flex-shrink-0 mt-[6px]"
                        style={{ background: exp.accent }}
                      />
                      {p}
                    </div>
                  ))}
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] px-2 py-1 rounded-md"
                      style={{
                        color: exp.accent,
                        background: exp.bg,
                        border: `0.5px solid ${exp.border}`,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* CTA hover */}
                <div
                  className="flex items-center gap-1 text-[12px] opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  style={{ color: exp.accent }}
                >
                  <span>Lihat detail</span>
                  <svg viewBox="0 0 16 16" className="w-3 h-3" fill="none">
                    <path
                      d="M3 8h10M9 4l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}