'use client'

import { motion } from 'framer-motion'
import { Rocket, Brain, Sparkles, Zap, RefreshCw, Clock, ArrowRight } from 'lucide-react'
import { alignmentMatrix } from '@/lib/data'

const iconMap = {
  Rocket,
  Brain,
  Sparkles,
  Zap,
  RefreshCw,
  Clock,
} as const

export default function AlignmentMatrix() {
  return (
    <section id="alignment" className="bg-white py-20 md:py-28">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">The Alignment Matrix</h2>
          <p className="section-subtitle mx-auto">
            Systematic, evidence-based fit between what Molo needs and what I bring.
          </p>
        </motion.div>

        <div className="grid gap-6 md:gap-8">
          {alignmentMatrix.map((item, index) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap]
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card group hover:border-secondary"
              >
                <div className="grid md:grid-cols-[1fr,auto,1fr,auto,1.5fr] gap-4 md:gap-6 items-start md:items-center">
                  {/* Molo Needs */}
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-neutral mb-1">Molo Needs</p>
                      <p className="font-medium text-primary">{item.moloNeeds}</p>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="hidden md:flex items-center justify-center">
                    <ArrowRight className="w-5 h-5 text-warmGray-300" />
                  </div>

                  {/* Julian Brings */}
                  <div>
                    <p className="text-xs uppercase tracking-wider text-neutral mb-1">Julian Brings</p>
                    <p className="text-warmGray-700">{item.julianBrings}</p>
                  </div>

                  {/* Arrow */}
                  <div className="hidden md:flex items-center justify-center">
                    <ArrowRight className="w-5 h-5 text-warmGray-300" />
                  </div>

                  {/* Evidence */}
                  <div>
                    <p className="text-xs uppercase tracking-wider text-neutral mb-1">Evidence</p>
                    <p className="text-sm text-warmGray-600 font-mono">{item.evidence}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
