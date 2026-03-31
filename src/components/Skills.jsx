import { useEffect, useRef } from 'react'

export default function Skills({ dark }) {

  const skills = [
    { name: 'HTML', icon: '🌐', level: 90, cat: 'Frontend' },
    { name: 'CSS', icon: '🎨', level: 88, cat: 'Frontend' },
    { name: 'JavaScript', icon: '⚡', level: 85, cat: 'Frontend' },
    { name: 'React.js', icon: '⚛️', level: 84, cat: 'Frontend' },
    // BACKEND
    { name: 'C#', icon: '💠', level: 88, cat: 'Backend' },
    { name: 'ASP.NET Core', icon: '🧩', level: 86, cat: 'Backend' },
    { name: 'ASP.NET MVC', icon: '🔧', level: 85, cat: 'Backend' },
    { name: 'ASP.NET Web API', icon: '🔗', level: 84, cat: 'Backend' },
    { name: 'Node.js', icon: '🌳', level: 75, cat: 'Backend' },
    // DATABASE
    { name: 'SQL Server', icon: '🗄️', level: 90, cat: 'Database' },
    { name: 'MySQL', icon: '🐬', level: 80, cat: 'Database' },
    // TOOLS
    { name: 'Git', icon: '🔀', level: 85, cat: 'Tools' },
    { name: 'Postman', icon: '📮', level: 88, cat: 'Tools' },
    { name: 'Visual Studio', icon: '🟣', level: 90, cat: 'Tools' },
    { name: 'VS Code', icon: '💻', level: 88, cat: 'Tools' },
    { name: 'SSMS', icon: '📊', level: 87, cat: 'Tools' },
  ]

  const extraSkills = [
    'REST API',
    'LINQ',
    'CRUD',
    'MVC Pattern',
    'Responsive UI',
    'JSON',
    'API Integration',
    'Entity Framework'
  ]

  const catColors = {

    Frontend:
      'text-[#00C9B1] bg-[#00C9B1]/10 border-[#00C9B1]/25',
    Backend:
      'text-[#60A5FA] bg-[#60A5FA]/10 border-[#60A5FA]/25',
    Database:
      'text-[#f59e0b] bg-[#f59e0b]/10 border-[#f59e0b]/25',
    Tools:
      'text-[#a78bfa] bg-[#a78bfa]/10 border-[#a78bfa]/25',
  }

  const barColors = {
    Frontend: 'bg-[#00C9B1]',
    Backend: 'bg-[#378ADD]',
    Database: 'bg-[#f59e0b]',
    Tools: 'bg-[#7F77DD]',
  }

  const ref = useRef(null)
  const barsRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            barsRef.current.forEach((bar, i) => {
              if (bar)
                setTimeout(() => {
                  bar.style.width =
                    bar.dataset.width + '%'
                }, 150 + i * 40)
            })
          }
        })
      },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
  }, [])

  const card =
    dark
      ? 'bg-[#112040] border-white/[0.05]'
      : 'bg-white border-slate-200'

  const text =
    dark
      ? 'text-[#E8F0FF]'
      : 'text-slate-700'

  const sub =
    dark
      ? 'text-[#7A9CC8]'
      : 'text-slate-500'

  const pill =
    dark
      ? 'text-[#4A6A9A] border-white/[0.06]'
      : 'text-slate-500 border-slate-200'

  return (
    <section
      id="skills"
      ref={ref}
      className="py-20 sm:py-28"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* HEADER */}
        <div className="mb-12">
          <div className="text-[#00C9B1] text-xs tracking-widest uppercase mb-2">
            02. Skills
          </div>
          <h2
            className={`text-3xl sm:text-4xl ${text}`}
            style={{
              fontFamily: 'Syne, sans-serif',
              fontWeight: 800
            }}
          >
            Tech Stack
          </h2>
          <p className={`text-sm mt-2 max-w-md ${sub}`}>
            Teknologi yang saya gunakan untuk membangun aplikasi web modern,
            scalable, dan mudah dikembangkan.
          </p>
        </div>


        {/* SKILL GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill, i) => (
            <div
              key={skill.name}
              className={`rounded-xl p-4 border ${card}`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-lg">
                    {skill.icon}
                  </span>
                  <span
                    className={`text-[14px] ${text}`}
                    style={{
                      fontFamily: 'DM Sans'
                    }}
                  >
                    {skill.name}
                  </span>
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-full border ${catColors[skill.cat]}`}
                  >
                    {skill.cat}
                  </span>
                </div>
                <span className="text-[12px] opacity-60">
                  {skill.level}%
                </span>
              </div>
              <div className="h-1 rounded-full bg-slate-200 overflow-hidden">
                <div
                  ref={(el) => barsRef.current[i] = el}
                  data-width={skill.level}
                  className={`h-full rounded-full transition-all duration-700 ${barColors[skill.cat]}`}
                  style={{ width: 0 }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* EXTRA SKILLS */}
        <div className="mt-10 flex flex-wrap gap-2">
          {extraSkills.map((s) => (
            <span
              key={s}
              className={`text-xs border px-3 py-1.5 rounded-full ${pill}`}
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}