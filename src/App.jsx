import { useState, useEffect, useRef } from 'react'
import Navbar       from './components/Navbar'
import Hero         from './components/Hero'
import Skills       from './components/Skills'
import Projects     from './components/Projects'
import Contact      from './components/Contact'
import Footer       from './components/Footer'
import BottomNav    from './components/BottomNav'
import Experience   from './components/Experience'
import Certificates from './components/Certificates'

const sections = ['about', 'experience', 'skills', 'certificates', 'projects', 'contact']

export default function App() {
  const [dark, setDark]            = useState(true)
  const [activeSection, setActive] = useState('about')
  const isScrollingRef             = useRef(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    document.body.style.backgroundColor = dark ? '#0A1628' : '#f8fafc'
    document.body.style.color           = dark ? '#E8F0FF' : '#1e293b'
  }, [dark])

  useEffect(() => {
    const observers = sections.map((id) => {
      const el = document.getElementById(id)
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (isScrollingRef.current) return
          if (entry.isIntersecting) setActive(id)
        },
        { threshold: 0.2 }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach((o) => o?.disconnect())
  }, [])

  const scrollTo = (id) => {
    isScrollingRef.current = true
    setActive(id)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setTimeout(() => { isScrollingRef.current = false }, 800)
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${dark ? 'bg-[#0A1628] text-[#E8F0FF]' : 'bg-slate-50 text-slate-800'}`}>
      <Navbar dark={dark} setDark={setDark} />
      <main className="pb-20 md:pb-0">
        <Hero         dark={dark} />
        <Experience   dark={dark} />
        <Skills       dark={dark} />
        <Certificates dark={dark} />
        <Projects     dark={dark} />
        <Contact      dark={dark} />
      </main>
      <Footer    dark={dark} />
      <BottomNav dark={dark} active={activeSection} scrollTo={scrollTo} />
    </div>
  )
}