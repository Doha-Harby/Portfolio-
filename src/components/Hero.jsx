import React from 'react'
import { ArrowDown, Download } from 'lucide-react'
import { profile } from '../data.js'

const floatingTags = ['React', 'C#', '.NET', 'SQL Server']

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16">
      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-[1.2fr,0.8fr] gap-12 items-center">
        <div>
          <p className="tag-label text-sm text-teal mb-4">
            <span className="tag-bracket">// </span>hello, I'm
          </p>
          <h1 className="font-display font-semibold text-4xl sm:text-5xl lg:text-6xl leading-[1.15] mb-6 text-ink-900">
            {profile.name}
            <br />
            <span className="text-teal">{profile.role}</span>
          </h1>
          <p className="text-ink-500 text-lg max-w-xl mb-8 leading-relaxed">{profile.tagline}</p>

          <div className="flex flex-wrap items-center gap-4 mb-10">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-teal text-white px-6 py-3 font-medium hover:bg-teal-dark transition-colors"
            >
              Contact me
            </a>
            <a
              href={profile.cvPath}
              download
              className="inline-flex items-center gap-2 rounded-full border border-ink-900/15 px-6 py-3 font-medium text-ink-900 hover:bg-white transition-colors"
            >
              <Download size={18} />
              Download CV
            </a>
          </div>

          <div className="flex flex-wrap gap-2">
            {floatingTags.map((t) => (
              <span
                key={t}
                className="tag-label text-xs px-3 py-1 rounded-full bg-teal-light text-teal-dark"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Signature panel: a light "code card" representing the developer identity */}
        <div className="relative">
          <div className="rounded-2xl bg-surface shadow-soft-lg overflow-hidden">
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-line">
              <span className="w-2.5 h-2.5 rounded-full bg-clay/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-sage/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-teal/70" />
              <span className="tag-label text-xs text-muted ml-3">profile.js</span>
            </div>
            <pre className="tag-label text-xs sm:text-sm leading-7 p-5 overflow-x-auto text-ink-700">
              <code>
                <span className="text-clay">const</span> <span className="text-teal">developer</span> = {'{'}
                {'\n'}  name: <span className="text-teal-dark">'{profile.name}'</span>,
                {'\n'}  role: <span className="text-teal-dark">'{profile.role}'</span>,
                {'\n'}  stack: [<span className="text-teal-dark">'React'</span>, <span className="text-teal-dark">'.NET'</span>, <span className="text-teal-dark">'SQL Server'</span>],
                {'\n'}  location: <span className="text-teal-dark">'{profile.location}'</span>,
                {'\n'}  available: <span className="text-sage">true</span>,
                {'\n'}{'}'}
                {'\n'}
                {'\n'}<span className="text-muted">// let's build something →</span>
              </code>
            </pre>
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About section"
        className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 items-center justify-center w-10 h-10 rounded-full border border-ink-900/10 text-ink-500 animate-bounce"
      >
        <ArrowDown size={16} />
      </a>
    </section>
  )
}
