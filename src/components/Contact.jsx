import React, { useState } from 'react'
import { Mail, MapPin, Phone, Github, Linkedin, MessageCircle, Send } from 'lucide-react'
import { profile } from '../data.js'

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  whatsapp: MessageCircle,
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    // No backend wired up yet — opens the user's mail client with the message pre-filled.
    const subject = encodeURIComponent(`Portfolio contact from ${form.name || 'a visitor'}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section id="contact" className="py-24 sm:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <p className="tag-label text-sm text-teal mb-3">
          <span className="tag-bracket">// </span>get-in-touch
        </p>
        <h2 className="font-display font-semibold text-3xl sm:text-4xl mb-6 text-ink-900">
          Let's build something <span className="text-teal">together</span>
        </h2>
        <p className="text-ink-500 text-lg max-w-xl mb-14 leading-relaxed">
          Have a project in mind or an open role? My inbox is open — I usually reply within a day.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <ul className="space-y-4 mb-10">
              <li className="flex items-center gap-3 text-ink-500">
                <Mail size={18} className="text-teal" /> {profile.email}
              </li>
              <li className="flex items-center gap-3 text-ink-500">
                <Phone size={18} className="text-teal" /> {profile.phone}
              </li>
              <li className="flex items-center gap-3 text-ink-500">
                <MapPin size={18} className="text-teal" /> {profile.location}
              </li>
            </ul>

            <div className="flex flex-wrap gap-3">
              {profile.socials.map((s) => {
                const Icon = iconMap[s.icon] || Mail
                return (
                  <a
                    key={s.label}
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="w-11 h-11 rounded-full bg-teal-light text-teal-dark flex items-center justify-center hover:bg-teal hover:text-white transition-colors"
                  >
                    <Icon size={18} />
                  </a>
                )
              })}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="tag-label text-xs text-muted block mb-2">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full rounded-lg bg-surface shadow-soft px-4 py-3 text-sm text-ink-900 placeholder:text-muted focus:shadow-soft-lg outline-none transition-shadow"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="tag-label text-xs text-muted block mb-2">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-lg bg-surface shadow-soft px-4 py-3 text-sm text-ink-900 placeholder:text-muted focus:shadow-soft-lg outline-none transition-shadow"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="tag-label text-xs text-muted block mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={form.message}
                onChange={handleChange}
                className="w-full rounded-lg bg-surface shadow-soft px-4 py-3 text-sm text-ink-900 placeholder:text-muted focus:shadow-soft-lg outline-none transition-shadow resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-teal text-white px-6 py-3 font-medium hover:bg-teal-dark transition-colors"
            >
              <Send size={16} />
              Send message
            </button>
            {sent && <p className="text-sm text-teal">Opening your email client…</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
