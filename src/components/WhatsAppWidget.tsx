'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send } from 'lucide-react'

const WHATSAPP_NUMBER = '447827240447'

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')

  const sendToWhatsApp = () => {
    if (!message.trim()) return
    const encoded = encodeURIComponent(message)
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, '_blank')
    setMessage('')
    setIsOpen(false)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendToWhatsApp()
    }
  }

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="mb-3 w-80 bg-white rounded-xl shadow-xl overflow-hidden border border-warmGray-200"
          >
            {/* Header */}
            <div className="bg-[#075E54] text-white px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-lg font-serif">
                  JH
                </div>
                <div>
                  <p className="font-medium">Chat with Julian</p>
                  <p className="text-xs text-white/70">Usually replies quickly</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/10 rounded transition-colors"
                aria-label="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat area */}
            <div className="p-4 bg-[#ECE5DD]">
              {/* Fake incoming message */}
              <div className="bg-white rounded-lg rounded-tl-none p-3 shadow-sm max-w-[85%] mb-3">
                <p className="text-sm text-warmGray-700">
                  Hi! Got questions about working together? Send me a message and I'll get back to you.
                </p>
                <p className="text-[10px] text-warmGray-400 text-right mt-1">Just now</p>
              </div>
            </div>

            {/* Input area */}
            <div className="p-3 bg-white border-t border-warmGray-100">
              <div className="flex gap-2">
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type a message..."
                  className="flex-1 resize-none border border-warmGray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary"
                  rows={2}
                />
                <button
                  onClick={sendToWhatsApp}
                  disabled={!message.trim()}
                  className="self-end p-3 bg-[#25D366] text-white rounded-full hover:bg-[#1da851] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  aria-label="Send message"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#1da851] hover:scale-105 transition-all flex items-center justify-center"
        whileTap={{ scale: 0.95 }}
        aria-label="Open WhatsApp chat"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </motion.button>
    </div>
  )
}
