import { useState, useEffect } from 'react'
import Navbar    from './components/Navbar'
import Hero      from './components/Hero'
import Skills    from './components/Skills'
import Projects  from './components/Projects'
import Contact   from './components/Contact'
import Footer    from './components/Footer'
import BottomNav from './components/BottomNav'

const sections = ['about', 'skills', 'projects', 'contact']

export default function App() {
  const [dark, setDark]           = useState(true)
  const [activeSection, setActive] = useState('about')

  // Sync dark class on <html>
  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    document.body.style.backgroundColor = dark ? '#0A1628' : '#f8fafc'
    document.body.style.color           = dark ? '#E8F0FF' : '#1e293b'
  }, [dark])

  // Active section tracker
  useEffect(() => {
    const observers = sections.map((id) => {
      const el = document.getElementById(id)
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id) },
        { threshold: 0.4 }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach((o) => o?.disconnect())
  }, [])

  return (
    <div className={`min-h-screen transition-colors duration-300 ${dark ? 'bg-[#0A1628] text-[#E8F0FF]' : 'bg-slate-50 text-slate-800'}`}>
      <Navbar    dark={dark} setDark={setDark} />
      <main className="pb-20 md:pb-0">
        <Hero     dark={dark} />
        <Skills   dark={dark} />
        <Projects dark={dark} />
        <Contact  dark={dark} />
      </main>
      <Footer    dark={dark} />
      <BottomNav dark={dark} active={activeSection} />
    </div>
  )
}
