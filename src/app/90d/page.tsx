'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Target,
  DollarSign,
  ChevronRight,
  ChevronLeft,
  Rocket,
  TrendingUp,
  Zap,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  BookOpen,
} from 'lucide-react'
import {
  weeks,
  executiveSummary,
  benchmarkSources,
} from '@/lib/commercialisation-data'

// Background images for each week
const WEEK_IMAGES: Record<number, string> = {
  1: 'https://images.unsplash.com/photo-1484981138541-3d074aa97716?auto=format&fit=crop&w=1920&q=80',
  2: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1920&q=80',
  3: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1920&q=80',
  4: 'https://images.unsplash.com/photo-1536640712-4d4c36ff0e4e?auto=format&fit=crop&w=1920&q=80',
  5: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1920&q=80',
  6: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=1920&q=80',
  7: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1920&q=80',
  8: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=1920&q=80',
  9: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1920&q=80',
  10: 'https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&w=1920&q=80',
  11: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1920&q=80',
  12: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1920&q=80',
  13: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1920&q=80',
}

type Phase = 1 | 2 | 3

function getPhase(week: number): Phase {
  if (week <= 4) return 1
  if (week <= 9) return 2
  return 3
}

const PHASE_INFO: Record<Phase, { name: string; color: string; bgColor: string; borderColor: string }> = {
  1: { name: 'Activation', color: 'text-teal-400', bgColor: 'bg-teal-500', borderColor: 'border-teal-500' },
  2: { name: 'Monetization', color: 'text-orange-400', bgColor: 'bg-orange-500', borderColor: 'border-orange-500' },
  3: { name: 'Expansion', color: 'text-blue-400', bgColor: 'bg-blue-600', borderColor: 'border-blue-600' },
}

export default function NinetyDayPlan() {
  const [selectedWeek, setSelectedWeek] = useState(1)
  const currentWeek = weeks.find((w) => w.week === selectedWeek)!
  const phase = getPhase(selectedWeek)
  const phaseInfo = PHASE_INFO[phase]

  const goNext = () => setSelectedWeek((w) => Math.min(13, w + 1))
  const goPrev = () => setSelectedWeek((w) => Math.max(1, w - 1))

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') goNext()
      if (e.key === 'ArrowLeft') goPrev()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <header className="bg-gray-900 border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <a href="/" className="text-gray-400 hover:text-white text-sm">← Back to pitch</a>
            <h1 className="text-2xl font-bold mt-1">MOLO 90-Day Commercialisation Plan</h1>
          </div>
          <a href="#sources" className="text-sm text-gray-400 hover:text-white flex items-center gap-2">
            <BookOpen className="w-4 h-4" />
            Sources
          </a>
        </div>
      </header>

      {/* Hero with Week Navigator */}
      <section
        className="relative min-h-[500px] flex flex-col"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(3,7,18,0.7), rgba(3,7,18,0.95)), url(${WEEK_IMAGES[selectedWeek]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Week Selector */}
        <div className="bg-gray-900/80 backdrop-blur border-b border-gray-800">
          <div className="max-w-6xl mx-auto px-6 py-6">
            <div className="grid grid-cols-3 gap-8">
              {/* Phase 1 */}
              <div>
                <h3 className="text-teal-400 text-sm font-semibold mb-3 uppercase tracking-wide">
                  Phase 1: Activation
                </h3>
                <div className="flex gap-2">
                  {[1, 2, 3, 4].map((w) => (
                    <button
                      key={w}
                      onClick={() => setSelectedWeek(w)}
                      className={`w-14 h-14 rounded-lg text-xl font-bold transition-all ${
                        w === selectedWeek
                          ? 'bg-teal-500 text-white ring-2 ring-white ring-offset-2 ring-offset-gray-900'
                          : w < selectedWeek
                            ? 'bg-teal-500/30 text-teal-300 hover:bg-teal-500/50'
                            : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
                      }`}
                    >
                      {w}
                    </button>
                  ))}
                </div>
              </div>

              {/* Phase 2 */}
              <div>
                <h3 className="text-orange-400 text-sm font-semibold mb-3 uppercase tracking-wide">
                  Phase 2: Monetization
                </h3>
                <div className="flex gap-2">
                  {[5, 6, 7, 8, 9].map((w) => (
                    <button
                      key={w}
                      onClick={() => setSelectedWeek(w)}
                      className={`w-14 h-14 rounded-lg text-xl font-bold transition-all ${
                        w === selectedWeek
                          ? 'bg-orange-500 text-white ring-2 ring-white ring-offset-2 ring-offset-gray-900'
                          : w < selectedWeek
                            ? 'bg-orange-500/30 text-orange-300 hover:bg-orange-500/50'
                            : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
                      }`}
                    >
                      {w}
                    </button>
                  ))}
                </div>
              </div>

              {/* Phase 3 */}
              <div>
                <h3 className="text-blue-400 text-sm font-semibold mb-3 uppercase tracking-wide">
                  Phase 3: Expansion
                </h3>
                <div className="flex gap-2">
                  {[10, 11, 12, 13].map((w) => (
                    <button
                      key={w}
                      onClick={() => setSelectedWeek(w)}
                      className={`w-14 h-14 rounded-lg text-xl font-bold transition-all ${
                        w === selectedWeek
                          ? 'bg-blue-600 text-white ring-2 ring-white ring-offset-2 ring-offset-gray-900'
                          : w < selectedWeek
                            ? 'bg-blue-600/30 text-blue-300 hover:bg-blue-600/50'
                            : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
                      }`}
                    >
                      {w}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Week Content Hero */}
        <div className="flex-1 flex items-center">
          <div className="max-w-6xl mx-auto px-6 py-12 w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedWeek}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid lg:grid-cols-2 gap-12 items-center"
              >
                {/* Left: Week Info */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`${phaseInfo.bgColor} text-white text-sm font-semibold px-3 py-1 rounded-full`}>
                      Phase {phase}
                    </span>
                    <span className={`${phaseInfo.color}`}>{phaseInfo.name}</span>
                  </div>

                  <div className="flex items-center gap-4 mb-6">
                    <button
                      onClick={goPrev}
                      disabled={selectedWeek === 1}
                      className="p-2 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <div>
                      <p className="text-gray-400 text-sm uppercase tracking-wider">Week {selectedWeek} of 13</p>
                      <h2 className="text-4xl font-bold">{currentWeek.title}</h2>
                    </div>
                    <button
                      onClick={goNext}
                      disabled={selectedWeek === 13}
                      className="p-2 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </div>

                  <p className="text-xl text-gray-300 mb-8">{currentWeek.objective}</p>

                  <div className="flex gap-8">
                    <div>
                      <p className="text-gray-500 text-sm uppercase">Budget</p>
                      <p className={`text-2xl font-bold ${phaseInfo.color}`}>{currentWeek.budget}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm uppercase">Primary KPI</p>
                      <p className={`text-2xl font-bold ${phaseInfo.color}`}>{currentWeek.kpis[0]?.target}</p>
                    </div>
                  </div>
                </div>

                {/* Right: Quick Tasks */}
                <div className="bg-gray-900/70 backdrop-blur rounded-2xl p-6 border border-gray-700">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <CheckCircle2 className={`w-5 h-5 ${phaseInfo.color}`} />
                    Key Deliverables
                  </h3>
                  <ul className="space-y-3">
                    {currentWeek.tasks.map((task, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <ArrowRight className={`w-4 h-4 ${phaseInfo.color} flex-shrink-0 mt-1`} />
                        <span className="text-gray-300">{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Executive Summary */}
        <section className="mb-16 grid lg:grid-cols-2 gap-8">
          <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Rocket className="w-5 h-5 text-teal-400" />
              Overview
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">{executiveSummary.overview}</p>
            <p className="text-gray-500 text-sm">{executiveSummary.ukRationale}</p>
          </div>

          <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Target className="w-5 h-5 text-orange-400" />
              90-Day Targets
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {executiveSummary.targets.map((target) => (
                <div key={target.label} className="text-center p-4 bg-gray-800 rounded-xl">
                  <div className="text-2xl font-bold text-teal-400">{target.value}</div>
                  <div className="text-xs text-gray-500">{target.unit}</div>
                  <div className="text-sm text-gray-400 mt-1">{target.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Week Details */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Week {selectedWeek} Details</h2>
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Channel Experiments */}
            <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-orange-400" />
                Channel Experiments
              </h3>
              <ul className="space-y-3">
                {currentWeek.channelExperiments.map((exp, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-400">
                    <span className="text-orange-400">→</span>
                    {exp}
                  </li>
                ))}
              </ul>
            </div>

            {/* KPIs */}
            <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-blue-400" />
                Success Metrics
              </h3>
              <div className="space-y-4">
                {currentWeek.kpis.map((kpi, i) => (
                  <div key={i}>
                    <div className="text-xs text-gray-500 uppercase">{kpi.metric}</div>
                    <div className={`text-xl font-bold ${phaseInfo.color}`}>{kpi.target}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Build Next */}
            <div className="space-y-4">
              <div className={`rounded-2xl p-6 border ${phaseInfo.borderColor} bg-gray-900`}>
                <div className="flex items-center gap-2 mb-2">
                  <DollarSign className={`w-5 h-5 ${phaseInfo.color}`} />
                  <span className="font-semibold">Weekly Budget</span>
                </div>
                <div className={`text-3xl font-bold ${phaseInfo.color}`}>{currentWeek.budget}</div>
              </div>

              <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
                <h4 className="text-xs text-gray-500 uppercase mb-2">Build Next</h4>
                <p className="text-gray-300">{currentWeek.buildNext}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Sources */}
        <section id="sources" className="border-t border-gray-800 pt-12">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-teal-400" />
            Benchmark Sources
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            All targets calibrated against industry benchmarks.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {benchmarkSources.map((category) => (
              <div key={category.category} className="bg-gray-900 rounded-xl p-4 border border-gray-800">
                <h3 className="font-semibold text-teal-400 text-sm mb-3">{category.category}</h3>
                <ul className="space-y-2">
                  {category.sources.map((source) => (
                    <li key={source.title} className="text-xs">
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white flex items-start gap-2"
                      >
                        <ExternalLink className="w-3 h-3 mt-0.5 flex-shrink-0" />
                        {source.title}
                      </a>
                      <p className="text-gray-600 text-[10px] mt-0.5 ml-5">{source.note}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-6">
        <div className="max-w-6xl mx-auto px-6 text-center text-gray-600 text-sm">
          MOLO 90-Day UK Commercialisation Plan • Use ← → arrow keys to navigate
        </div>
      </footer>
    </div>
  )
}
