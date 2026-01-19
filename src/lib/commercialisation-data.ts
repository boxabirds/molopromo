export interface WeekData {
  week: number
  title: string
  objective: string
  tasks: string[]
  channelExperiments: string[]
  kpis: { metric: string; target: string }[]
  budget: string
  buildNext: string
}

export interface KPITarget {
  metric: string
  targetRange: string
  criticalThreshold: string
}

export interface PricingTier {
  name: string
  price: string
  features: string[]
  highlight?: boolean
}

export const executiveSummary = {
  overview: `MOLO positions itself as the "Chief Household Officer" for busy parents—an AI-powered household management system designed to reduce the mental load through automated task generation, delegation, and eventually autonomous execution.`,
  ukRationale: `The UK market offers distinct advantages: established NHS-adjacent ecosystems for distribution, strong employer benefits culture, and cultural awareness of the "mental load" concept.`,
  targets: [
    { label: 'Revenue Target', value: '100–250', unit: 'paying UK households' },
    { label: 'Activation Rate', value: '25–40%', unit: 'waitlist → activated' },
    { label: 'Paid Conversion', value: '8–15%', unit: 'activated → paying' },
    { label: 'D30 Retention', value: '70%+', unit: 'for paid users' },
    { label: 'CAC Payback', value: '<2', unit: 'months' },
  ],
}

export const primaryKPIs: KPITarget[] = [
  { metric: 'Waitlist → Activated', targetRange: '25–40%', criticalThreshold: '>20%' },
  { metric: 'Activated → Paid', targetRange: '8–15%', criticalThreshold: '>5%' },
  { metric: 'D7 Retention (Activated)', targetRange: '35–45%', criticalThreshold: '>30%' },
  { metric: 'D30 Retention (Paid)', targetRange: '70%+', criticalThreshold: '>60%' },
  { metric: 'CAC Payback', targetRange: '< 2 months', criticalThreshold: '< 3 months' },
  { metric: 'UK Revenue', targetRange: '100–250 households', criticalThreshold: '>50 households' },
]

export const pricingTiers: PricingTier[] = [
  {
    name: 'Free',
    price: '£0',
    features: [
      'Single user household',
      'Basic task list generation',
      '1 template pack access',
      'No sharing/delegation',
    ],
  },
  {
    name: 'Family Plan',
    price: '£14.99/mo',
    features: [
      'Shared household management',
      'Task delegation & assignment',
      'Recurring schedule automation',
      'Calendar integration',
      'All template packs',
      'Partner/family invites',
    ],
    highlight: true,
  },
  {
    name: 'Family+',
    price: '£34.99/mo',
    features: [
      'MOLO Assist Lite features',
      'Email-to-task extraction',
      'Premium templates',
      'Priority support',
    ],
  },
  {
    name: 'Setup Concierge',
    price: '£129 one-time',
    features: [
      '45-minute guided setup call',
      'Customized household config',
      '30-day Family plan included',
      'Limited availability',
    ],
  },
]

export const weeks: WeekData[] = [
  {
    week: 1,
    title: 'UK Baseline + Instrumentation Setup',
    objective: 'Establish measurement framework and UK-specific messaging foundation.',
    tasks: [
      'Lock product wedge: "MOLO Lists = Mental Load OS" (no grocery ordering yet)',
      'Implement full funnel analytics from landing to paid conversion',
      'Create 3 UK-specific landing page variants',
      'Set up tracking for partner invitation rates',
    ],
    channelExperiments: [
      'Landing page A/B tests with UK cultural references',
      'Initial organic LinkedIn content (3 posts about decision fatigue)',
    ],
    kpis: [
      { metric: 'Landing → waitlist', target: '8–15%' },
      { metric: 'Waitlist completion rate', target: '>60%' },
      { metric: 'Analytics implementation', target: '100% funnel coverage' },
    ],
    budget: '£300–£600',
    buildNext: '"Mental Load Audit" quiz as lead magnet with UK-specific scoring',
  },
  {
    week: 2,
    title: 'UK Messaging Tests + Mental Load Audit Launch',
    objective: 'Find highest-converting message-market fit for UK parents.',
    tasks: [
      'Launch Mental Load Audit quiz with email capture',
      'Create segmented follow-up sequences based on audit results',
      'Test 3 core value propositions across channels',
    ],
    channelExperiments: [
      'Meta (UK): 2 audiences × 3 creatives × 2 hooks',
      'TikTok (UK): 3 UGC-style founder videos',
      'LinkedIn: Daily content about mental load and decision fatigue',
    ],
    kpis: [
      { metric: 'Meta CTR', target: '>1%' },
      { metric: 'Landing page conversion', target: '>8%' },
      { metric: 'Cost per waitlist signup', target: '£2–£8' },
      { metric: 'Audit completion rate', target: '>60%' },
    ],
    budget: '£800–£1,500',
    buildNext: '3-email nurture sequence triggered by audit results',
  },
  {
    week: 3,
    title: 'Concierge Beta Launch (UK)',
    objective: 'Generate immediate revenue and gather retention insights.',
    tasks: [
      'Offer 30 UK households: £129 onboarding + 30 days Family plan',
      'Collect baseline metrics: hours/week admin, stress scores',
      'Conduct live setup calls to understand UK household patterns',
      'Document onboarding script for future automation',
    ],
    channelExperiments: [
      'Direct outreach to qualified waitlist members',
      'Partner with 2-3 UK parenting coaches for referrals',
    ],
    kpis: [
      { metric: 'Concierge conversion', target: '3–8%' },
      { metric: 'Setup call completion', target: '>85%' },
      { metric: 'Post-setup NPS', target: '>40' },
      { metric: 'Baseline data collection', target: '100%' },
    ],
    budget: '£0–£200',
    buildNext: 'Standardized onboarding script + UK household template library',
  },
  {
    week: 4,
    title: 'Retention Loop: Sunday Reset Implementation',
    objective: 'Build habit-forming weekly engagement pattern.',
    tasks: [
      'Develop "Sunday Reset" automated workflow',
      'Auto-generate upcoming week\'s household plan',
      'One-click task reassignment interface',
      'Integrate with common UK calendar systems',
    ],
    channelExperiments: [
      'Test SMS vs. email reminder preferences for UK users',
      'A/B test reminder timing (Saturday evening vs. Sunday morning)',
    ],
    kpis: [
      { metric: 'Sunday Reset completion', target: '>40%' },
      { metric: 'D7 retention (activated)', target: '>35%' },
      { metric: 'Weekly plan completion', target: '>25%' },
    ],
    budget: '£0–£300',
    buildNext: 'Partner invitation UX that feels collaborative, not confrontational',
  },
  {
    week: 5,
    title: 'Family Plan Paywall + UK Creator Seeding',
    objective: 'Prove willingness-to-pay beyond concierge model.',
    tasks: [
      'Launch £14.99/month Family plan with paywall',
      'Implement annual plan option (£129/year)',
      'Launch affiliate program: 15-20% recurring for 12 months',
    ],
    channelExperiments: [
      'Recruit 10 UK micro-creators',
      '"Working mum systems" accounts',
      '"ADHD household management" creators',
      'Provide 90-day free access + tracked referral links',
    ],
    kpis: [
      { metric: 'Activated → Paid conversion', target: '>8%' },
      { metric: 'Creator traffic → waitlist CVR', target: '>10%' },
      { metric: 'Creator traffic → paid CVR', target: '1–3%' },
    ],
    budget: '£500–£1,500',
    buildNext: 'UK-specific template pack focused on school admin',
  },
  {
    week: 6,
    title: 'UK Partnership Sprint: NHS-Adjacent Ecosystem',
    objective: 'Establish high-trust distribution channels.',
    tasks: [
      'Target health visitor networks, midwife educators',
      'Create "Mental Load Audit" as free resource',
      'Develop partnership pitch focused on parent wellbeing',
      'Offer pilot programs with usage tracking',
    ],
    channelExperiments: [
      'Direct outreach: 20 messages/day to relevant organizations',
      'Webinar for NCT group leaders',
      'Resource sharing with postpartum support groups',
    ],
    kpis: [
      { metric: 'Partnership calls booked', target: '>10' },
      { metric: 'Pilot programs agreed', target: '>3' },
      { metric: 'Beta codes distributed', target: '>100' },
    ],
    budget: '£0–£300',
    buildNext: 'Group admin dashboard for community leaders',
  },
  {
    week: 7,
    title: 'MOLO Assist Lite: Email Forward Feature',
    objective: 'Introduce AI assistance without full inbox access (trust building).',
    tasks: [
      'Create unique household email addresses for forwarding',
      'Build email parsing for UK formats (school newsletters, nursery comms)',
      'Auto-generate tasks and calendar entries',
    ],
    channelExperiments: [
      'Tutorial content showing email feature',
      'Integration with popular UK parent email formats',
      'Test user education on privacy/security',
    ],
    kpis: [
      { metric: 'Email feature weekly usage', target: '15–25%' },
      { metric: 'Email parsing accuracy', target: '>85%' },
      { metric: 'Feature retention lift', target: '+5 points D30' },
    ],
    budget: '£0–£500',
    buildNext: 'Calendar integration and task categorization',
  },
  {
    week: 8,
    title: 'Scale Winning Channels, Eliminate Losers',
    objective: 'Focus spend on proven acquisition methods.',
    tasks: [
      'Identify top 1-2 messaging angles from weeks 2-7',
      'Double advertising spend only on profitable channels',
      'Publish 3 anonymized case studies from concierge beta',
      'Implement in-app referral system',
    ],
    channelExperiments: [
      'Scale successful Meta campaigns',
      'Expand creator partnerships that drove conversions',
      'Test referral incentives: "Invite another family, both get 1 month free"',
    ],
    kpis: [
      { metric: 'CAC payback timeline', target: '<2 months' },
      { metric: 'Referral participation rate', target: '>5%' },
      { metric: 'Paid conversion stability', target: 'no >20% decline' },
    ],
    budget: '£1,500–£4,000',
    buildNext: 'Advanced household templates by family size and child age',
  },
  {
    week: 9,
    title: 'Employer Benefits Pilot Program',
    objective: 'Test B2B2C channel for scalable "someone else pays" model.',
    tasks: [
      'Package "Return-to-Work Mental Load Support" offering',
      '3-month group licenses with cohort onboarding',
      'Create ROI case for HR departments',
      'Anonymized impact reporting',
    ],
    channelExperiments: [
      'Direct outreach to HR/People teams in London',
      'Partnership with return-to-work specialist consultants',
      'Pilot with 1-2 progressive employers',
    ],
    kpis: [
      { metric: 'HR leader conversations', target: '>15 weekly' },
      { metric: 'Qualified pilot interest', target: '>5 orgs' },
      { metric: 'Signed pilot agreements', target: '>1' },
      { metric: 'Employee participation', target: '>60%' },
    ],
    budget: '£0–£800',
    buildNext: 'Impact measurement dashboard for B2B reporting',
  },
  {
    week: 10,
    title: 'Invisible Load Reporting Feature',
    objective: 'Make mental load visible and measurable for couples.',
    tasks: [
      'Build weekly "Household Load Report"',
      'Tasks completed by family member visualization',
      'Suggested rebalancing recommendations',
      'Design sharing mechanism that feels supportive',
    ],
    channelExperiments: [
      'Report sharing to social media (anonymized)',
      'Email version for partners who don\'t use app',
      'Integration with relationship counseling resources',
    ],
    kpis: [
      { metric: 'Report open rate', target: '>50%' },
      { metric: 'Partner adoption increase', target: '+10%' },
      { metric: 'Report sharing rate', target: '>20%' },
    ],
    budget: '£0–£300',
    buildNext: 'Advanced delegation suggestions and workload balancing',
  },
  {
    week: 11,
    title: 'Onboarding Automation',
    objective: 'Reduce founder dependency and scale setup process.',
    tasks: [
      'Convert concierge learnings into guided setup wizard',
      'Household type selection flow',
      'Child age/stage configuration',
      'Eliminate need for live calls in most cases',
    ],
    channelExperiments: [
      'A/B test self-serve vs. guided onboarding',
      'Video tutorials vs. interactive walkthrough',
      'Community onboarding (group sessions)',
    ],
    kpis: [
      { metric: 'Time to activation', target: '<10 minutes' },
      { metric: 'Self-serve activation rate', target: '>30%' },
      { metric: 'Setup completion without support', target: '>80%' },
    ],
    budget: '£0',
    buildNext: 'ML for task prediction based on household characteristics',
  },
  {
    week: 12,
    title: 'UK Public Beta Launch Campaign',
    objective: 'Create market moment and drive significant signup spike.',
    tasks: [
      'Coordinate "public beta" launch with founder story',
      'Quantified outcomes from concierge beta',
      'Press outreach to UK parenting and work/life outlets',
      'Create limited-time launch incentives',
    ],
    channelExperiments: [
      'PR outreach to relevant UK media',
      'LinkedIn campaign with founder content',
      'Creator coordinated launch content',
      'Product Hunt submission (optional)',
    ],
    kpis: [
      { metric: 'Launch week signups', target: '500–1,500' },
      { metric: 'Media mentions', target: '>5 outlets' },
      { metric: 'Social engagement', target: '3x baseline' },
      { metric: 'Conversion rate', target: '<20% decline' },
    ],
    budget: '£1,000–£6,000',
    buildNext: 'Advanced AI features based on user data and feedback',
  },
  {
    week: 13,
    title: 'Strategic Review and Path Selection',
    objective: 'Make data-driven decision on scaling approach for next 90 days.',
    tasks: [
      'Comprehensive performance analysis across all channels',
      'User interviews with high-retention and churned users',
      'Financial model validation and unit economics review',
      'Team alignment on next quarter priorities',
    ],
    channelExperiments: [
      'If consumer CAC + retention strong → Scale paid social + creators',
      'If employer pilots show traction → Pivot to B2B2C sales',
      'If partner adoption bottleneck → Focus on couple UX',
    ],
    kpis: [
      { metric: 'Net revenue retention', target: '>100%' },
      { metric: 'Churn reasons identified', target: 'Complete' },
      { metric: 'Channel ROI ranking', target: 'Complete' },
      { metric: 'Next quarter strategy', target: 'Locked' },
    ],
    budget: '£0',
    buildNext: 'Features aligned with chosen scaling path',
  },
]

export const budgetSummary = {
  categories: [
    { name: 'Paid Acquisition & Testing', low: 4000, high: 10000 },
    { name: 'Creator/Affiliate Program', low: 1000, high: 4000 },
    { name: 'Tools & Infrastructure', low: 300, high: 1200 },
  ],
  total: { low: 5300, high: 15200 },
  allocation: [
    { category: 'Meta/TikTok Advertising', percentage: 60 },
    { category: 'Creator Partnerships', percentage: 25 },
    { category: 'PR/Launch Activities', percentage: 10 },
    { category: 'Tools/Infrastructure', percentage: 5 },
  ],
}

export const buildBacklog = {
  tier1: {
    title: 'Tier 1 (Weeks 1–4): Retention + Activation',
    items: [
      'Mental Load Audit lead magnet',
      'Sunday Reset Loop',
      'Partner Invitation UX',
      'Guided Onboarding wizard',
      'Basic UK Template Library',
    ],
  },
  tier2: {
    title: 'Tier 2 (Weeks 5–9): Monetization + Differentiation',
    items: [
      'Paywall Implementation',
      'Email Forward Feature',
      'Template Packs by Life Stage',
      'Referral System',
      'Creator Affiliate Dashboard',
    ],
  },
  tier3: {
    title: 'Tier 3 (Weeks 10–13): Defensibility + Expansion',
    items: [
      'Invisible Load Reporting',
      'Employer Dashboard',
      'Advanced Task Prediction (ML)',
      'Integration Ecosystem',
      'Community Features',
    ],
  },
}
