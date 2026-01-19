'use client'

import { motion } from 'framer-motion'
import { AlertTriangle, Target, Wrench, Trophy, CheckCircle2, Quote } from 'lucide-react'
import { credoTimeline } from '@/lib/data'

const phaseIcons = {
  'The Situation': AlertTriangle,
  'The Intervention': Target,
  'The Actions': Wrench,
  'The Results': Trophy,
} as const

export default function CaseStudy() {
  return (
    <section id="credo" className="bg-cream py-20 md:py-28">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="badge badge-secondary mb-4">Recent Proof Point</span>
          <h2 className="section-title">Case Study: CReDO</h2>
          <p className="section-subtitle mx-auto">
            December 2025 — Irrefutable, recent evidence of product leadership excellence.
          </p>
        </motion.div>

        {/* Context Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card bg-primary/5 border-primary/20 mb-12 p-8"
        >
          <p className="text-warmGray-700 leading-relaxed">
            <strong className="text-primary">CReDO</strong> is funded as part of a £10m Ofgem innovation fund.
            The goal is to help UK infrastructure (power, water, and other utilities) better plan for
            increasingly extreme climate events by running cross-sector simulations.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line for desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-warmGray-200 -translate-x-1/2" />

          {credoTimeline.map((phase, index) => {
            const Icon = phaseIcons[phase.phase as keyof typeof phaseIcons]
            const isLeft = index % 2 === 0

            return (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`relative mb-8 md:mb-12 ${
                  isLeft ? 'md:pr-[52%]' : 'md:pl-[52%]'
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 top-6 -translate-x-1/2 w-10 h-10 rounded-full bg-white border-2 border-secondary items-center justify-center z-10">
                  <Icon className="w-5 h-5 text-secondary" />
                </div>

                <div className="card">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="md:hidden p-2 bg-secondary/10 rounded-lg">
                      <Icon className="w-5 h-5 text-secondary" />
                    </div>
                    <h3 className="font-serif text-xl text-primary">{phase.phase}</h3>
                  </div>

                  {'content' in phase && (
                    <p className="text-warmGray-700 leading-relaxed">{phase.content}</p>
                  )}

                  {'items' in phase && (
                    <ul className="space-y-3">
                      {phase.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                          <span className="text-warmGray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {'quote' in phase && (
                    <div className="mt-4">
                      <blockquote className="quote-block text-lg py-2 mb-4">
                        {phase.quote}
                      </blockquote>
                      <p className="text-neutral font-medium flex items-center gap-2">
                        <Quote className="w-4 h-4" />
                        {phase.quoteAuthor}
                      </p>
                      {'items' in phase && (
                        <ul className="space-y-3 mt-6">
                          {phase.items.map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                              <span className="text-warmGray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Why This Matters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card bg-secondary/5 border-secondary/20 mt-12 p-8"
        >
          <h3 className="font-serif text-xl text-primary mb-4">Why This Matters for Molo</h3>
          <p className="text-warmGray-700 leading-relaxed">
            Sophie needs someone who can take a nascent product organisation and give it structure,
            clarity, and momentum—<strong>without making it bureaucratic</strong>. CReDO proves I do exactly that.
            Five organisations, four cities, one aligned team delivering on time.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
