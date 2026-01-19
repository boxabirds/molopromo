'use client'

import { motion } from 'framer-motion'
import { Code2, Cpu, Terminal, CheckCircle2 } from 'lucide-react'
import { technicalHighlights } from '@/lib/data'

export default function TechnicalEdge() {
  return (
    <section id="technical" className="bg-primary py-20 md:py-28">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-white">The Technical Edge</h2>
          <p className="section-subtitle text-warmGray-300 mx-auto">
            Differentiation from pure-play product managers who lack technical depth.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left: Highlights */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-4">
              {technicalHighlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-warmGray-200">{highlight}</span>
                </motion.div>
              ))}
            </div>

            {/* Tech Stack Pills */}
            <div className="mt-8 flex flex-wrap gap-2">
              {['Python', 'TypeScript', 'Rust', 'React', 'LLMs', 'AI Agents'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-white/10 text-white rounded-full text-sm font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right: Quote & Context */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-secondary/20 rounded-lg">
                  <Cpu className="w-5 h-5 text-secondary" />
                </div>
                <h3 className="font-serif text-lg text-white">Side Hustle: Ceetrix</h3>
              </div>
              <blockquote className="text-warmGray-300 italic leading-relaxed border-l-2 border-secondary pl-4">
                "My side hustle is working on this other project where I'm building it all myself.
                And it's trying to solve the problem of how do you keep these agents disciplined?
                How do you, when you get code generated, how do you know that it's doing what you asked it to do?"
              </blockquote>
              <p className="text-warmGray-400 text-sm mt-4">
                — From conversation with Sophie, January 2026
              </p>
            </div>

            <div className="bg-accent/10 rounded-xl p-6 border border-accent/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-accent/20 rounded-lg">
                  <Terminal className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-serif text-lg text-white">Why This Matters for Molo</h3>
              </div>
              <p className="text-warmGray-300 leading-relaxed">
                Molo is building with <strong className="text-white">"Agentic AI to actually execute on your behalf."</strong>
                {' '}I'm not just comfortable with this technology—I'm building it myself daily.
                I can have meaningful technical conversations with developers, evaluate AI vendor claims critically,
                and spot opportunities to leverage emerging capabilities.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
