import React from 'react'
import { skills } from '../data.js'

const dotColors = ['bg-teal', 'bg-sage', 'bg-clay']

export default function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <p className="tag-label text-sm text-teal mb-3">
          <span className="tag-bracket">// </span>skills
        </p>
        <h2 className="font-display font-semibold text-3xl sm:text-4xl mb-14 text-ink-900">
          What I <span className="text-teal">work with</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, list], i) => (
            <div key={category} className="rounded-xl bg-surface shadow-soft p-6">
              <div className="flex items-center gap-2 mb-5">
                <span className={`w-2 h-2 rounded-full ${dotColors[i % dotColors.length]}`} />
                <h3 className="font-display font-medium text-ink-900">{category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {list.map((s) => (
                  <span
                    key={s}
                    className="tag-label text-xs px-3 py-1.5 rounded-full bg-teal-light text-teal-dark"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
