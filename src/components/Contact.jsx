import { useEffect, useRef, useState } from 'react'
import emailjs from 'emailjs-com'


const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const WA_NUMBER = '62895606014734'

const contacts = [
  {
    label: 'Email',
    value: 'andriansyah0430@gmail.com',
    href: 'https://mail.google.com/mail/?view=cm&to=andriansyah0430@gmail.com',
    accent: '#00C9B1',
    icon: (
      <svg viewBox="0 0 20 20" className="w-4 h-4" fill="none">
        <rect x="2" y="4" width="16" height="12" rx="2" stroke="#00C9B1" strokeWidth="1.2"/>
        <path d="M2 7l8 5 8-5" stroke="#00C9B1" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/ahmad',
    href: 'https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile',
    accent: '#60A5FA',
    icon: (
      <svg viewBox="0 0 20 20" className="w-4 h-4" fill="none">
        <rect x="2" y="2" width="16" height="16" rx="3" stroke="#60A5FA" strokeWidth="1.2"/>
        <circle cx="6.5" cy="6.5" r="1" fill="#60A5FA"/>
        <path d="M6 9v6M10 9v6M10 12a2 2 0 014 0v3" stroke="#60A5FA" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: 'GitHub',
    value: 'github.com/Andri0430',
    href: 'https://github.com/Andri0430',
    accent: '#a78bfa',
    icon: (
      <svg viewBox="0 0 20 20" className="w-4 h-4" fill="none">
        <path d="M10 2a8 8 0 00-2.53 15.59c.4.07.55-.17.55-.38v-1.37c-2.24.49-2.71-1.08-2.71-1.08-.37-.93-.9-1.18-.9-1.18-.73-.5.06-.49.06-.49.81.06 1.23.83 1.23.83.72 1.23 1.88.87 2.34.67.07-.52.28-.87.51-1.07-1.78-.2-3.65-.89-3.65-3.97 0-.88.31-1.59.83-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.22 2.2.82a7.62 7.62 0 014 0c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.52.56.83 1.27.83 2.15 0 3.09-1.88 3.77-3.67 3.97.29.25.54.73.54 1.48v2.19c0 .21.14.46.55.38A8 8 0 0010 2z" fill="#a78bfa"/>
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    value: '+62 8956 0601 4734',
    href: `https://wa.me/${WA_NUMBER}`,
    accent: '#34d399',
    icon: (
      <svg viewBox="0 0 20 20" className="w-4 h-4" fill="none">
        <path d="M10 2a8 8 0 00-6.93 12.02L2 18l4.1-1.05A8 8 0 1010 2z" stroke="#34d399" strokeWidth="1.2"/>
        <path d="M7 8.5c0 3 2.5 5 5 5.5" stroke="#34d399" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
  },
]

export default function Contact({ dark }) {
  const ref = useRef(null)
  const [status, setStatus] = useState('idle')
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const card  = dark ? 'bg-[#112040] border-white/[0.05]'  : 'bg-white border-slate-200/80'
  const input = dark
    ? 'bg-[#112040] border-white/[0.08] text-[#E8F0FF] placeholder-[#4A6A9A] focus:border-[#00C9B1]/40'
    : 'bg-slate-50 border-slate-200 text-slate-800 placeholder-slate-400 focus:border-[#00C9B1]/60'
  const label = dark ? 'text-[#4A6A9A]' : 'text-slate-400'
  const sub   = dark ? 'text-[#7A9CC8]' : 'text-slate-500'
  const head  = dark ? 'text-[#E8F0FF]' : 'text-slate-800'

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('[data-anim]').forEach((el, i) => {
              setTimeout(() => {
                el.style.opacity = '1'
                el.style.transform = 'translateY(0)'
              }, i * 100)
            })
            observer.disconnect()
          }
        })
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const openWhatsApp = (name, message) => {
    const text = encodeURIComponent(
      `Halo Andriansyah! Saya ${name} tertarik untuk berkolaborasi.\n\n${message}`
    )
    window.open(`https://wa.me/${WA_NUMBER}?text=${text}`, '_blank')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:    form.name,
          from_email:   form.email,
          message:      form.message,
          reply_to:     form.email,
        },
        EMAILJS_PUBLIC_KEY
      )
      setStatus('success')
      openWhatsApp(form.name, form.message)
      setForm({ name: '', email: '', message: '' })
      setTimeout(() => setStatus('idle'), 5000)
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  return (
    <section id="contact" ref={ref} className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <div data-anim className="mb-14" style={{ opacity:0, transform:'translateY(20px)', transition:'all 0.5s ease' }}>
          <div className="text-[#00C9B1] text-xs tracking-widest uppercase mb-3" style={{ fontFamily:'JetBrains Mono, monospace' }}>
            04. Contact
          </div>
          <h2 className={`text-3xl sm:text-4xl font-800 mb-3 ${head}`} style={{ fontFamily:'Syne, sans-serif', fontWeight:800 }}>
            Mari Berkolaborasi
          </h2>
          <p className={`text-[14px] max-w-md ${sub}`}>
            Punya proyek menarik? Saya siap membantu mewujudkannya. Pesan kamu akan dikirim via Email sekaligus WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

          {/* Left — contact cards */}
          <div data-anim className="space-y-3" style={{ opacity:0, transform:'translateY(20px)', transition:'all 0.5s ease' }}>
            {contacts.map((c) => (
              <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer"
                className={`flex items-center gap-4 border rounded-xl p-4 hover:border-[#00C9B1]/30 transition-all duration-200 group ${card}`}>
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 border ${dark ? 'bg-[#0A1628] border-white/[0.06]' : 'bg-slate-100 border-slate-200'}`}>
                  {c.icon}
                </div>
                <div>
                  <div className={`text-[11px] mb-0.5 ${label}`}>{c.label}</div>
                  <div className={`text-[13px] font-medium ${head}`}>{c.value}</div>
                </div>
                <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" fill="none" style={{ color: c.accent }}>
                  <path d="M4 8h8M8 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            ))}

            {/* Availability */}
            <div className="bg-[#00C9B1]/10 border border-[#00C9B1]/20 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-[#00C9B1] animate-pulse"/>
                <span className="text-[12px] text-[#00C9B1] font-medium">Tersedia untuk proyek baru</span>
              </div>
              <p className={`text-[12px] leading-relaxed ${sub}`}>
                Setelah submit form, kamu akan langsung diarahkan ke WhatsApp saya supaya bisa ngobrol lebih cepat!
              </p>
            </div>
          </div>

          {/* Right — form */}
          <div data-anim style={{ opacity:0, transform:'translateY(20px)', transition:'all 0.5s ease' }}>

            {status === 'success' ? (
              <div className="h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-[#00C9B1]/10 border border-[#00C9B1]/25 flex items-center justify-center mx-auto mb-4">
                    <svg viewBox="0 0 24 24" className="w-7 h-7 text-[#00C9B1]" fill="none">
                      <path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className={`font-medium mb-2 ${head}`} style={{ fontFamily:'Syne, sans-serif' }}>Email terkirim!</h3>
                  <p className={`text-[13px] ${sub}`}>WhatsApp sudah terbuka. Saya segera merespons kamu.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className={`block text-[11px] mb-1.5 tracking-wide uppercase ${label}`}>Nama</label>
                  <input type="text" required value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Nama lengkap kamu"
                    className={`w-full border rounded-xl px-4 py-3 text-[14px] outline-none transition-colors duration-200 ${input}`}/>
                </div>
                <div>
                  <label className={`block text-[11px] mb-1.5 tracking-wide uppercase ${label}`}>Email</label>
                  <input type="email" required value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="email@kamu.com"
                    className={`w-full border rounded-xl px-4 py-3 text-[14px] outline-none transition-colors duration-200 ${input}`}/>
                </div>
                <div>
                  <label className={`block text-[11px] mb-1.5 tracking-wide uppercase ${label}`}>Pesan</label>
                  <textarea required rows={5} value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Ceritakan proyek kamu..."
                    className={`w-full border rounded-xl px-4 py-3 text-[14px] outline-none transition-colors duration-200 resize-none ${input}`}/>
                </div>

                {status === 'error' && (
                  <p className="text-red-400 text-[12px]">Gagal mengirim email. Coba hubungi via WhatsApp langsung.</p>
                )}

                <button type="submit" disabled={status === 'loading'}
                  className="w-full bg-[#00C9B1] text-[#0A1628] font-medium py-3.5 rounded-xl text-[14px] hover:bg-[#00E5CC] transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  style={{ fontFamily:'DM Sans, sans-serif' }}>
                  {status === 'loading' ? (
                    <>
                      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeDasharray="32" strokeDashoffset="12"/>
                      </svg>
                      Mengirim...
                    </>
                  ) : (
                    <>
                      Kirim via Email + WhatsApp
                      <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" fill="none">
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </>
                  )}
                </button>

                <p className={`text-[11px] text-center ${label}`}>
                  Setelah mengirim, kamu akan diarahkan ke WhatsApp otomatis.
                </p>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}