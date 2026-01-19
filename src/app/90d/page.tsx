'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Calendar,
  Target,
  DollarSign,
  ChevronRight,
  ChevronLeft,
  Rocket,
  TrendingUp,
  Users,
  Zap,
  CheckCircle2,
  ArrowRight,
  BarChart3,
  Layers,
} from 'lucide-react'
import {
  weeks,
  executiveSummary,
  primaryKPIs,
  pricingTiers,
  budgetSummary,
  buildBacklog,
} from '@/lib/commercialisation-data'

const PHASE_COLORS = {
  1: { bg: 'bg-secondary/10', border: 'border-secondary', text: 'text-secondary' },
  2: { bg: 'bg-accent/10', border: 'border-accent', text: 'text-accent' },
  3: { bg: 'bg-primary/10', border: 'border-primary', text: 'text-primary' },
}

function getPhase(week: number): 1 | 2 | 3 {
  if (week <= 4) return 1
  if (week <= 9) return 2
  return 3
}

function getPhaseLabel(week: number): string {
  const phase = getPhase(week)
  if (phase === 1) return 'Retention + Activation'
  if (phase === 2) return 'Monetization + Differentiation'
  return 'Defensibility + Expansion'
}

export default function NinetyDayPlan() {
  const [selectedWeek, setSelectedWeek] = useState(1)
  const [activeTab, setActiveTab] = useState<'timeline' | 'kpis' | 'budget' | 'backlog'>('timeline')

  const currentWeek = weeks.find((w) => w.week === selectedWeek)!
  const phase = getPhase(selectedWeek)
  const colors = PHASE_COLORS[phase]

  return (
    <div className="min-h-screen bg-warmGray-900 text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-warmGray-900/95 backdrop-blur border-b border-warmGray-800">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <a href="/" className="text-warmGray-400 hover:text-white text-sm mb-1 block">
                ← Back to pitch
              </a>
              <h1 className="font-serif text-2xl">MOLO 90-Day UK Commercialisation Plan</h1>
            </div>
            <div className="flex gap-2">
              {(['timeline', 'kpis', 'budget', 'backlog'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeTab === tab
                      ? 'bg-secondary text-white'
                      : 'bg-warmGray-800 text-warmGray-400 hover:text-white'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Executive Summary */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-warmGray-800/50 rounded-xl p-6 border border-warmGray-700">
              <h2 className="font-serif text-xl mb-4 flex items-center gap-2">
                <Rocket className="w-5 h-5 text-secondary" />
                Overview
              </h2>
              <p className="text-warmGray-300 leading-relaxed mb-4">{executiveSummary.overview}</p>
              <p className="text-warmGray-400 text-sm">{executiveSummary.ukRationale}</p>
            </div>

            <div className="bg-warmGray-800/50 rounded-xl p-6 border border-warmGray-700">
              <h2 className="font-serif text-xl mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-accent" />
                90-Day Targets
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {executiveSummary.targets.map((target) => (
                  <div key={target.label} className="text-center">
                    <div className="text-2xl font-bold text-secondary">{target.value}</div>
                    <div className="text-xs text-warmGray-400">{target.unit}</div>
                    <div className="text-sm text-warmGray-300 mt-1">{target.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        <AnimatePresence mode="wait">
          {activeTab === 'timeline' && (
            <motion.div
              key="timeline"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Timeline Navigation */}
              <section className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-serif text-xl">Week-by-Week Execution</h2>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-secondary" />
                      Phase 1: Activation
                    </span>
                    <span className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-accent" />
                      Phase 2: Monetization
                    </span>
                    <span className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-primary" />
                      Phase 3: Expansion
                    </span>
                  </div>
                </div>

                {/* Week Selector */}
                <div className="relative">
                  <div className="flex gap-1 overflow-x-auto pb-2 scrollbar-hide">
                    {weeks.map((week) => {
                      const weekPhase = getPhase(week.week)
                      const isSelected = week.week === selectedWeek
                      return (
                        <button
                          key={week.week}
                          onClick={() => setSelectedWeek(week.week)}
                          className={`relative flex-shrink-0 w-20 h-20 rounded-lg border-2 transition-all ${
                            isSelected
                              ? `${PHASE_COLORS[weekPhase].border} ${PHASE_COLORS[weekPhase].bg}`
                              : 'border-warmGray-700 bg-warmGray-800/50 hover:border-warmGray-600'
                          }`}
                        >
                          <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span
                              className={`text-xs ${isSelected ? PHASE_COLORS[weekPhase].text : 'text-warmGray-500'}`}
                            >
                              Week
                            </span>
                            <span
                              className={`text-2xl font-bold ${isSelected ? 'text-white' : 'text-warmGray-300'}`}
                            >
                              {week.week}
                            </span>
                          </div>
                          {isSelected && (
                            <motion.div
                              layoutId="week-indicator"
                              className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full ${
                                weekPhase === 1
                                  ? 'bg-secondary'
                                  : weekPhase === 2
                                    ? 'bg-accent'
                                    : 'bg-primary'
                              }`}
                            />
                          )}
                        </button>
                      )
                    })}
                  </div>
                </div>
              </section>

              {/* Selected Week Detail */}
              <AnimatePresence mode="wait">
                <motion.section
                  key={selectedWeek}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="grid lg:grid-cols-3 gap-6"
                >
                  {/* Main Content */}
                  <div className="lg:col-span-2 space-y-6">
                    {/* Week Header */}
                    <div className={`${colors.bg} rounded-xl p-6 border ${colors.border}`}>
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <span className={`text-sm font-medium ${colors.text}`}>
                            Week {currentWeek.week} • {getPhaseLabel(currentWeek.week)}
                          </span>
                          <h3 className="font-serif text-2xl mt-1">{currentWeek.title}</h3>
                        </div>
                        <div className="flex gap-2">
                          <button
                            onClick={() => setSelectedWeek(Math.max(1, selectedWeek - 1))}
                            disabled={selectedWeek === 1}
                            className="p-2 rounded-lg bg-warmGray-800 hover:bg-warmGray-700 disabled:opacity-50"
                          >
                            <ChevronLeft className="w-5 h-5" />
                          </button>
                          <button
                            onClick={() => setSelectedWeek(Math.min(13, selectedWeek + 1))}
                            disabled={selectedWeek === 13}
                            className="p-2 rounded-lg bg-warmGray-800 hover:bg-warmGray-700 disabled:opacity-50"
                          >
                            <ChevronRight className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                      <p className="text-warmGray-300">{currentWeek.objective}</p>
                    </div>

                    {/* Tasks */}
                    <div className="bg-warmGray-800/50 rounded-xl p-6 border border-warmGray-700">
                      <h4 className="font-medium mb-4 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-secondary" />
                        What to Do
                      </h4>
                      <ul className="space-y-3">
                        {currentWeek.tasks.map((task, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-start gap-3"
                          >
                            <ArrowRight className="w-4 h-4 text-secondary flex-shrink-0 mt-1" />
                            <span className="text-warmGray-300">{task}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Channel Experiments */}
                    <div className="bg-warmGray-800/50 rounded-xl p-6 border border-warmGray-700">
                      <h4 className="font-medium mb-4 flex items-center gap-2">
                        <Zap className="w-5 h-5 text-accent" />
                        Channel Experiments
                      </h4>
                      <ul className="space-y-2">
                        {currentWeek.channelExperiments.map((exp, i) => (
                          <li key={i} className="flex items-start gap-3 text-warmGray-400">
                            <span className="text-accent">•</span>
                            {exp}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Sidebar */}
                  <div className="space-y-6">
                    {/* KPIs */}
                    <div className="bg-warmGray-800/50 rounded-xl p-6 border border-warmGray-700">
                      <h4 className="font-medium mb-4 flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-primary" />
                        KPIs
                      </h4>
                      <div className="space-y-4">
                        {currentWeek.kpis.map((kpi, i) => (
                          <div key={i}>
                            <div className="text-sm text-warmGray-400">{kpi.metric}</div>
                            <div className="text-lg font-semibold text-secondary">{kpi.target}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Budget */}
                    <div className="bg-warmGray-800/50 rounded-xl p-6 border border-warmGray-700">
                      <h4 className="font-medium mb-4 flex items-center gap-2">
                        <DollarSign className="w-5 h-5 text-accent" />
                        Budget
                      </h4>
                      <div className="text-2xl font-bold text-accent">{currentWeek.budget}</div>
                    </div>

                    {/* Build Next */}
                    <div className="bg-secondary/10 rounded-xl p-6 border border-secondary/30">
                      <h4 className="font-medium mb-2 text-secondary">Build Next</h4>
                      <p className="text-warmGray-300 text-sm">{currentWeek.buildNext}</p>
                    </div>
                  </div>
                </motion.section>
              </AnimatePresence>
            </motion.div>
          )}

          {activeTab === 'kpis' && (
            <motion.div
              key="kpis"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <section className="mb-8">
                <h2 className="font-serif text-xl mb-6">Primary KPIs (Day 90)</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {primaryKPIs.map((kpi, i) => (
                    <motion.div
                      key={kpi.metric}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="bg-warmGray-800/50 rounded-xl p-6 border border-warmGray-700"
                    >
                      <div className="text-sm text-warmGray-400 mb-2">{kpi.metric}</div>
                      <div className="text-3xl font-bold text-secondary mb-2">{kpi.targetRange}</div>
                      <div className="text-xs text-warmGray-500">
                        Critical: {kpi.criticalThreshold}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="font-serif text-xl mb-6">Pricing Tiers</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {pricingTiers.map((tier, i) => (
                    <motion.div
                      key={tier.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className={`rounded-xl p-6 border ${
                        tier.highlight
                          ? 'bg-secondary/10 border-secondary'
                          : 'bg-warmGray-800/50 border-warmGray-700'
                      }`}
                    >
                      <div className="text-lg font-medium mb-1">{tier.name}</div>
                      <div className="text-2xl font-bold text-secondary mb-4">{tier.price}</div>
                      <ul className="space-y-2">
                        {tier.features.map((feature, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-warmGray-400">
                            <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </section>
            </motion.div>
          )}

          {activeTab === 'budget' && (
            <motion.div
              key="budget"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <section className="mb-8">
                <h2 className="font-serif text-xl mb-6">90-Day Budget Summary</h2>

                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Categories */}
                  <div className="bg-warmGray-800/50 rounded-xl p-6 border border-warmGray-700">
                    <h3 className="font-medium mb-4 flex items-center gap-2">
                      <BarChart3 className="w-5 h-5 text-secondary" />
                      Budget Breakdown
                    </h3>
                    <div className="space-y-4">
                      {budgetSummary.categories.map((cat) => (
                        <div key={cat.name}>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-warmGray-300">{cat.name}</span>
                            <span className="text-warmGray-400">
                              £{cat.low.toLocaleString()} – £{cat.high.toLocaleString()}
                            </span>
                          </div>
                          <div className="h-2 bg-warmGray-700 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${(cat.high / budgetSummary.total.high) * 100}%` }}
                              transition={{ delay: 0.3, duration: 0.5 }}
                              className="h-full bg-secondary rounded-full"
                            />
                          </div>
                        </div>
                      ))}
                      <div className="pt-4 border-t border-warmGray-700">
                        <div className="flex justify-between">
                          <span className="font-medium">Total</span>
                          <span className="text-xl font-bold text-secondary">
                            £{budgetSummary.total.low.toLocaleString()} – £
                            {budgetSummary.total.high.toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Allocation */}
                  <div className="bg-warmGray-800/50 rounded-xl p-6 border border-warmGray-700">
                    <h3 className="font-medium mb-4 flex items-center gap-2">
                      <DollarSign className="w-5 h-5 text-accent" />
                      Channel Allocation
                    </h3>
                    <div className="space-y-4">
                      {budgetSummary.allocation.map((item, i) => (
                        <div key={item.category}>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-warmGray-300">{item.category}</span>
                            <span className="text-accent font-medium">{item.percentage}%</span>
                          </div>
                          <div className="h-3 bg-warmGray-700 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${item.percentage}%` }}
                              transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                              className="h-full bg-accent rounded-full"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            </motion.div>
          )}

          {activeTab === 'backlog' && (
            <motion.div
              key="backlog"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <section>
                <h2 className="font-serif text-xl mb-6">Build Backlog Priorities</h2>
                <div className="grid lg:grid-cols-3 gap-6">
                  {Object.entries(buildBacklog).map(([key, tier], i) => (
                    <motion.div
                      key={key}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className={`rounded-xl p-6 border ${
                        i === 0
                          ? 'bg-secondary/10 border-secondary'
                          : i === 1
                            ? 'bg-accent/10 border-accent'
                            : 'bg-primary/10 border-primary'
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-4">
                        <Layers
                          className={`w-5 h-5 ${i === 0 ? 'text-secondary' : i === 1 ? 'text-accent' : 'text-primary'}`}
                        />
                        <h3 className="font-medium">{tier.title}</h3>
                      </div>
                      <ul className="space-y-3">
                        {tier.items.map((item, j) => (
                          <li key={j} className="flex items-start gap-2 text-warmGray-300">
                            <CheckCircle2
                              className={`w-4 h-4 flex-shrink-0 mt-0.5 ${i === 0 ? 'text-secondary' : i === 1 ? 'text-accent' : 'text-primary'}`}
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </section>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="border-t border-warmGray-800 mt-12 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-warmGray-500 text-sm">
          MOLO 90-Day UK-First Commercialisation Plan • January 2026
        </div>
      </footer>
    </div>
  )
}
