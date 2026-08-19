import React, { useEffect, useState } from 'react'
import { Menu, X, Download } from 'lucide-react'
import { profile } from '../data.js'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-paper/90 backdrop-blur-md shadow-soft' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#home" className="font-display font-semibold text-lg tracking-tight text-ink-900">
          <span className="tag-bracket">&lt;</span>
          {profile.name.split(' ').map((n) => n[0]).join('')}
          <span className="tag-bracket">/&gt;</span>
        </a>

        <ul className="hidden md:flex items-center gap-8 tag-label text-sm text-ink-500">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-teal transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a
            href={profile.cvPath}
            download
            className="inline-flex items-center gap-2 rounded-full bg-teal text-white px-4 py-2 text-sm font-medium hover:bg-teal-dark transition-colors"
          >
            <Download size={16} />
            Download CV
          </a>
        </div>

        <button
          className="md:hidden text-ink-900"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-paper shadow-soft px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="tag-label text-ink-500 hover:text-teal transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href={profile.cvPath}
            download
            className="inline-flex items-center justify-center gap-2 rounded-full bg-teal text-white px-4 py-2 text-sm font-medium"
          >
            <Download size={16} />
            Download CV
          </a>
        </div>
      )}
    </header>
  )
}
