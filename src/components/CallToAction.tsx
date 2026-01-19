'use client'

import { motion } from 'framer-motion'
import { Calendar, Mail, MessageSquare, MessageCircle } from 'lucide-react'

export default function CallToAction() {
  return (
    <section id="contact" className="bg-white py-20 md:py-28">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="section-title mb-6">Let's Continue the Conversation</h2>

          <p className="text-lg text-warmGray-700 mb-4 leading-relaxed">
            I'm genuinely excited about what Molo is building. The intersection of AI,
            parenting support, and consumer product design is exactly where my skills
            and passions align.
          </p>

          <p className="text-warmGray-600 mb-10">
            I know you're speaking with others this week. I'd be happy to share more thoughts on
            product roadmap priorities, go-to-market approaches, or anything else useful.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="https://cal.com/julianharris"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary w-full sm:w-auto"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Schedule a Follow-up
            </a>
            <a
              href="mailto:julian@inappagents.com"
              className="btn btn-outline w-full sm:w-auto"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Me
            </a>
            <a
              href="https://wa.me/447827240447"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline w-full sm:w-auto"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp
            </a>
          </div>

          {/* Final Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="card bg-secondary/5 border-secondary/20 p-8"
          >
            <MessageSquare className="w-8 h-8 text-secondary mx-auto mb-4" />
            <blockquote className="text-lg text-warmGray-700 italic leading-relaxed">
              "I just need another me. I need my brain."
            </blockquote>
            <p className="text-neutral mt-4 text-sm">
              — What Molo customers are looking for
            </p>
            <p className="text-primary mt-4 font-medium">
              Let me be that for Molo's product.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
