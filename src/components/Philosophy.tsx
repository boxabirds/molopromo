'use client'

import { motion } from 'framer-motion'
import { philosophyCards } from '@/lib/data'

const categoryColors: Record<string, string> = {
  UX: 'bg-accent/10 text-accent',
  Scoping: 'bg-primary/10 text-primary',
  Psychology: 'bg-secondary/10 text-secondary',
  Strategy: 'bg-warmGray-500/10 text-warmGray-600',
  Pricing: 'bg-primary/10 text-primary',
  'Go-to-Market': 'bg-accent/10 text-accent',
}

export default function Philosophy() {
  return (
    <section id="philosophy" className="bg-white py-20 md:py-28">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Philosophy & Frameworks</h2>
          <p className="section-subtitle mx-auto">
            Intellectual depth and shared values with Sophie's psychological approach to product.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {philosophyCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card group hover:border-primary/30"
            >
              <span className={`badge ${categoryColors[card.category]} mb-4`}>
                {card.category}
              </span>
              <h3 className="font-serif text-lg text-primary mb-3 group-hover:text-primary-dark transition-colors">
                {card.title}
              </h3>
              <p className="text-warmGray-600 text-sm leading-relaxed">
                {card.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
