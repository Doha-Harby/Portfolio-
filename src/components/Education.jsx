import React from 'react'
import { GraduationCap, Award } from 'lucide-react'
import { education } from '../data.js'

export default function Education() {
  return (
    <section id="education" className="py-24 sm:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <p className="tag-label text-sm text-teal mb-3">
          <span className="tag-bracket">// </span>education-and-certificates
        </p>
        <h2 className="font-display font-semibold text-3xl sm:text-4xl mb-14 text-ink-900">
          Education & <span className="text-teal">Certificates</span>
        </h2>

        <ol className="relative border-s border-line ms-3 space-y-8">
          {education.map((item, i) => (
            <li key={i} className="ms-8">
              <span className="absolute -start-[13px] flex items-center justify-center w-7 h-7 rounded-full bg-teal text-white ring-4 ring-paper">
                {item.type === 'education' ? <GraduationCap size={14} /> : <Award size={14} />}
              </span>
              <div className="rounded-xl bg-surface shadow-soft p-6">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="font-display font-medium text-lg text-ink-900">{item.title}</h3>
                  <span className="tag-label text-xs text-muted">{item.period}</span>
                </div>
                <p className="text-sm text-teal mb-3">{item.place}</p>
                {item.description && (
                  <p className="text-ink-500 leading-relaxed">{item.description}</p>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
