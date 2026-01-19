'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream via-warmGray-50 to-cream">
        <div className="absolute inset-0 opacity-30">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-secondary/20 rounded-full"
              initial={{
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
              }}
              animate={{
                y: [null, Math.random() * -200 - 100],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-mono text-secondary text-sm md:text-base tracking-wider mb-4 uppercase">
            For Sophie Bruce & the Molo Team
          </p>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-primary leading-tight mb-6 text-balance">
            I don't just understand the mental load—
            <span className="block mt-2 text-accent">I've lived it.</span>
          </h1>

          <p className="text-lg md:text-xl text-warmGray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            Father of two. 30+ years shipping products. Building AI agents today.
            <span className="block mt-2">Ready to help Molo change parenting forever.</span>
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            <span className="badge badge-primary">Father</span>
            <span className="badge badge-secondary">Engineer</span>
            <span className="badge badge-accent">Product Leader</span>
          </div>
        </motion.div>

        <motion.blockquote
          className="relative max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className="quote-block text-lg md:text-xl py-4">
            They're saying that extended sleep deprivation has symptoms akin to early Alzheimer's... I remember my short-term memory was so shot at points because of terrible extended sleep deprivation, so I can literally feel the pain of the situation you're talking about.
          </div>
          <cite className="block mt-4 text-neutral not-italic font-medium">
            — From my conversation with Sophie, January 2026
          </cite>
        </motion.blockquote>

        <motion.a
          href="#alignment"
          className="inline-flex flex-col items-center text-neutral hover:text-primary transition-colors"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <span className="text-sm mb-2">See the evidence</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </motion.a>
      </div>
    </section>
  )
}
