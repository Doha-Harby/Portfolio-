import React from 'react'
import { GraduationCap } from 'lucide-react'
import { training } from '../data.js'

export default function Training() {
  return (
    <section id="training" className="py-24 sm:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <p className="tag-label text-sm text-teal mb-3">
          <span className="tag-bracket">// </span>training-and-internship
        </p>
        <h2 className="font-display font-semibold text-3xl sm:text-4xl mb-14 text-ink-900">
          Where I've <span className="text-teal">trained</span>
        </h2>

        <div className="space-y-6">
          {training.map((item, i) => (
            <div key={i} className="rounded-xl bg-surface shadow-soft p-6 flex flex-col sm:flex-row gap-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-teal-light text-teal-dark shrink-0">
                <GraduationCap size={20} />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                  <h3 className="font-display font-medium text-lg text-ink-900">{item.title}</h3>
                  <span className="tag-label text-xs text-muted">{item.period}</span>
                </div>
                <p className="text-sm text-teal mb-4">{item.place}</p>
                <ul className="space-y-2">
                  {item.points.map((pt, j) => (
                    <li key={j} className="text-ink-500 leading-relaxed flex gap-2">
                      <span className="text-teal mt-1">▸</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
