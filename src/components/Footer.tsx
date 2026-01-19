'use client'

import { Linkedin, Github, Globe, BookOpen } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-warmGray-900 text-warmGray-400 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-serif text-white text-lg">Julian Harris</p>
            <p className="text-sm">Product Leader • AI Builder • Father</p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com/in/julianharris"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/julianharris"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://makingaiagents.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:text-white transition-colors"
              aria-label="Newsletter"
            >
              <Globe className="w-5 h-5" />
            </a>
            <a
              href="https://medium.com/knowcast"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:text-white transition-colors"
              aria-label="Knowcast Postmortem"
            >
              <BookOpen className="w-5 h-5" />
            </a>
          </div>

          <p className="text-sm text-warmGray-500">
            January 2026
          </p>
        </div>
      </div>
    </footer>
  )
}
