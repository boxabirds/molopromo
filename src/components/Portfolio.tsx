'use client'

import { motion } from 'framer-motion'
import { portfolioTimeline, stats } from '@/lib/data'

const typeColors: Record<string, string> = {
  B2B: 'bg-primary/10 text-primary',
  B2C: 'bg-accent/10 text-accent',
  'B2C/B2B': 'bg-secondary/10 text-secondary',
  Internal: 'bg-warmGray-500/10 text-warmGray-600',
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-cream py-20 md:py-28">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">The Portfolio Timeline</h2>
          <p className="section-subtitle mx-auto">
            Visual credibility through breadth and depth of experience.
          </p>
        </motion.div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Horizontal line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-warmGray-200 -translate-y-1/2" />

          <div className="grid md:grid-cols-6 gap-4 md:gap-6">
            {portfolioTimeline.map((item, index) => (
              <motion.div
                key={item.product}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-secondary border-2 border-cream z-10" />

                <div className="card text-center md:mt-6">
                  <span className="font-mono text-xs text-neutral">{item.period}</span>
                  <h3 className="font-serif text-lg text-primary mt-1 mb-2">{item.product}</h3>
                  <p className="text-sm text-warmGray-600 mb-2">{item.role}</p>
                  <p className="text-xs text-warmGray-500 mb-3">{item.impact}</p>
                  <span className={`badge text-xs ${typeColors[item.type]}`}>
                    {item.type}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Full Portfolio Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-neutral mt-12"
        >
          Full portfolio includes <strong>20+ products</strong> across B2C, B2B, internal tools, and APIs.
        </motion.p>
      </div>
    </section>
  )
}
