import React, { useState, useMemo } from 'react'
import { ExternalLink, Github } from 'lucide-react'
import { projects, projectCategories } from '../data.js'

export default function Projects() {
  const [active, setActive] = useState('All')

  const filtered = useMemo(
    () => (active === 'All' ? projects : projects.filter((p) => p.category === active)),
    [active]
  )

  return (
    <section id="projects" className="py-24 sm:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <p className="tag-label text-sm text-teal mb-3">
          <span className="tag-bracket">// </span>selected-projects
        </p>
        <h2 className="font-display font-semibold text-3xl sm:text-4xl mb-10 text-ink-900">
          Things I've <span className="text-teal">built</span>
        </h2>

        {/* Signature filter: JSX-tag styled chips */}
        <div className="flex flex-wrap gap-3 mb-10" role="tablist" aria-label="Filter projects by category">
          {projectCategories.map((cat) => {
            const isActive = active === cat
            return (
              <button
                key={cat}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(cat)}
                className={`tag-label text-sm px-4 py-2 rounded-full transition-colors ${
                  isActive ? 'bg-teal text-white' : 'bg-teal-light text-teal-dark hover:bg-teal hover:text-white'
                }`}
              >
                <span className={isActive ? 'text-white/80' : 'text-teal-dark/70'}>&lt;</span>
                {cat}
                <span className={isActive ? 'text-white/80' : 'text-teal-dark/70'}>/&gt;</span>
              </button>
            )
          })}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((p) => (
            <article
              key={p.title}
              className="group rounded-xl bg-surface shadow-soft overflow-hidden hover:shadow-soft-lg transition-shadow"
            >
              <div className="h-32 overflow-hidden">
                <img
                  src={p.image}
                  alt={`${p.title} preview`}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-display font-medium text-base text-ink-900">{p.title}</h3>
                  <span className="tag-label text-[10px] px-2 py-0.5 rounded-full bg-teal-light text-teal-dark">
                    {p.category}
                  </span>
                </div>
                <p className="text-sm text-ink-500 leading-relaxed mb-4">{p.description}</p>

                <div className="flex flex-wrap gap-x-2 gap-y-1 mb-4">
                  {p.tech.map((t) => (
                    <span key={t} className="tag-label text-[10px] text-teal">
                      #{t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 text-sm text-ink-700">
                  <a href={p.live} className="inline-flex items-center gap-1.5 hover:text-teal transition-colors">
                    <ExternalLink size={14} /> Live
                  </a>
                  <a href={p.github} className="inline-flex items-center gap-1.5 hover:text-teal transition-colors">
                    <Github size={14} /> Code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-ink-500 text-center py-12">No projects in this category yet.</p>
        )}
      </div>
    </section>
  )
}
