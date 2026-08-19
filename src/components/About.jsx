import React from 'react'
import { about } from '../data.js'

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <p className="tag-label text-sm text-teal mb-3">
          <span className="tag-bracket">// </span>about-me
        </p>
        <h2 className="font-display font-semibold text-3xl sm:text-4xl mb-12 text-ink-900">
          A developer who cares about <span className="text-teal">both ends</span> of the stack
        </h2>

        <div className="grid md:grid-cols-[1.4fr,1fr] gap-12">
          <div className="space-y-5 text-ink-500 text-lg leading-relaxed">
            {about.bio.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <dl className="grid grid-cols-2 gap-5 content-start">
            {about.facts.map((f) => (
              <div key={f.label} className="rounded-xl bg-surface shadow-soft p-5">
                <dt className="tag-label text-xs text-muted mb-2 uppercase tracking-wide">{f.label}</dt>
                <dd className="font-display font-medium text-ink-900">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
