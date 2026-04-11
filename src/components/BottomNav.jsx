const navItems = [
  {
    label: 'Home', id: 'about',
    icon: (active) => (
      <svg viewBox="0 0 20 20" className="w-5 h-5" fill="none">
        <path d="M3 9l7-6 7 6v9H13v-5H7v5H3V9z"
          stroke={active ? '#00C9B1' : '#4A6A9A'} strokeWidth="1.3"
          fill={active ? 'rgba(0,201,177,0.15)' : 'none'}
          strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: 'Skills', id: 'skills',
    icon: (active) => (
      <svg viewBox="0 0 20 20" className="w-5 h-5" fill="none">
        <rect x="2" y="5"  width="16" height="2.5" rx="1.2" fill={active ? '#00C9B1' : '#4A6A9A'}/>
        <rect x="2" y="9"  width="11" height="2.5" rx="1.2" fill={active ? 'rgba(0,201,177,0.6)' : '#2A4A7A'}/>
        <rect x="2" y="13" width="14" height="2.5" rx="1.2" fill={active ? 'rgba(0,201,177,0.4)' : '#1A3A6A'}/>
      </svg>
    ),
  },
  {
    label: 'Experience', id: 'experience',
    icon: (active) => (
      <svg viewBox="0 0 20 20" className="w-5 h-5" fill="none">
        <rect x="2" y="6" width="16" height="11" rx="2"
          stroke={active ? '#00C9B1' : '#4A6A9A'} strokeWidth="1.3"
          fill={active ? 'rgba(0,201,177,0.1)' : 'none'}/>
        <path d="M7 6V5a2 2 0 014 0v1"
          stroke={active ? '#00C9B1' : '#4A6A9A'} strokeWidth="1.3"
          strokeLinecap="round"/>
        <rect x="6" y="10" width="8" height="1.8" rx="0.9"
          fill={active ? '#00C9B1' : '#4A6A9A'}/>
        <rect x="6" y="13" width="5" height="1.8" rx="0.9"
          fill={active ? 'rgba(0,201,177,0.5)' : '#2A4A7A'}/>
      </svg>
    ),
  },
  {
    label: 'Projects', id: 'projects',
    icon: (active) => (
      <svg viewBox="0 0 20 20" className="w-5 h-5" fill="none">
        <rect x="2" y="2" width="7" height="7" rx="1.5" stroke={active ? '#00C9B1' : '#4A6A9A'} strokeWidth="1.3" fill={active ? 'rgba(0,201,177,0.1)' : 'none'}/>
        <rect x="11" y="2" width="7" height="7" rx="1.5" stroke={active ? '#00C9B1' : '#4A6A9A'} strokeWidth="1.3" fill={active ? 'rgba(0,201,177,0.1)' : 'none'}/>
        <rect x="2" y="11" width="7" height="7" rx="1.5" stroke={active ? '#00C9B1' : '#4A6A9A'} strokeWidth="1.3" fill={active ? 'rgba(0,201,177,0.1)' : 'none'}/>
        <rect x="11" y="11" width="7" height="7" rx="1.5" stroke={active ? '#00C9B1' : '#4A6A9A'} strokeWidth="1.3" fill={active ? 'rgba(0,201,177,0.1)' : 'none'}/>
      </svg>
    ),
  },
  {
    label: 'Certificates', id: 'certificates',
    icon: (active) => (
      <svg viewBox="0 0 20 20" className="w-5 h-5" fill="none">
        <rect x="2" y="3" width="16" height="12" rx="2"
          stroke={active ? '#00C9B1' : '#4A6A9A'} strokeWidth="1.3"
          fill={active ? 'rgba(0,201,177,0.1)' : 'none'}/>
        <path d="M6 8h8M6 11h5"
          stroke={active ? '#00C9B1' : '#4A6A9A'} strokeWidth="1.3"
          strokeLinecap="round"/>
        <circle cx="15" cy="15" r="3"
          fill={active ? '#00C9B1' : '#0A1628'}
          stroke={active ? '#00C9B1' : '#4A6A9A'} strokeWidth="1.3"/>
        <path d="M13.8 15l.8.8 1.4-1.4"
          stroke={active ? '#0A1628' : '#4A6A9A'} strokeWidth="1.1"
          strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: 'Contact', id: 'contact',
    icon: (active) => (
      <svg viewBox="0 0 20 20" className="w-5 h-5" fill="none">
        <rect x="2" y="4" width="16" height="12" rx="2.5"
          stroke={active ? '#00C9B1' : '#4A6A9A'} strokeWidth="1.3"
          fill={active ? 'rgba(0,201,177,0.1)' : 'none'}/>
        <path d="M2 7l8 5 8-5"
          stroke={active ? '#00C9B1' : '#4A6A9A'} strokeWidth="1.3"
          strokeLinecap="round"/>
      </svg>
    ),
  },
]

export default function BottomNav({ active, dark }) {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  const bg = dark ? 'bg-[#112040]/95 border-white/[0.06]' : 'bg-white/95 border-slate-200/80'

  return (
    <div className={`md:hidden fixed bottom-0 left-0 right-0 z-50 backdrop-blur-md border-t ${bg}`}>
      <div className="flex items-center justify-around py-2 px-2">
        {navItems.map((item) => {
          const isActive = active === item.id
          return (
            <button key={item.id} onClick={() => scrollTo(item.id)}
              className="flex flex-col items-center gap-1 px-4 py-1.5 rounded-xl transition-all duration-200"
              style={{ minWidth:60 }}>
              {item.icon(isActive)}
              <span className="text-[10px] transition-colors duration-200"
                style={{ color: isActive ? '#00C9B1' : '#4A6A9A', fontFamily:'DM Sans, sans-serif' }}>
                {item.label}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
