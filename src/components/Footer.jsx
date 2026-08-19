import React from 'react'
import { profile } from '../data.js'

export default function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="tag-label text-xs text-muted">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <div className="flex gap-6 tag-label text-xs text-muted">
          <a href="#home" className="hover:text-teal transition-colors">
            Home
          </a>
          <a href="#projects" className="hover:text-teal transition-colors">
            Projects
          </a>
          <a href="#contact" className="hover:text-teal transition-colors">
            Contact
          </a>
        </div>
      </div>
    </footer>
  )
}
