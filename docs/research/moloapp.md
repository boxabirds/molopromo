# MOLO App Research & Replication Spec

**Research Date:** January 2026
**Sources:** [moloapp.io](https://www.moloapp.io), [Shamanlist Investment Memo](https://shamanlist.substack.com/p/molo-ai-for-family-admin-seiseis), web research
**Fact-checked:** January 2026

---

## 1. Product Overview

### What MOLO Does
MOLO is an AI-powered "Chief Household Officer" designed to reduce the mental load of parenting. It handles the invisible labor of family administration: planning, coordinating, and executing household tasks.

### Core Value Proposition
- **Action over advice**: Delivers completed outputs, not productivity tips
- **Mental load reduction**: Targets family planning cognitive load (MOLO claims ~20 hrs/week; academic research shows this is difficult to measure precisely — see notes below)
- **Gender equity angle**: 81% of UK mums have experienced burnout (verified: Peanut app + Tommee Tippee survey, 2,000 UK mothers, Jan 2025)

### Target Market
- **UK:** 8.7M families with dependent children
- **Global:** 200M+ families across OECD countries
- **Primary persona:** Working parents, particularly mothers, with young children

---

## 2. Current Features & Capabilities

### Delivered Use Cases (from August 2025 pilot)
1. **Meal Planning** - Weekly dinner plans with recipes
2. **Shopping Lists** - Generated from meal plans or requests
3. **Routines** - Bedtime routines, morning schedules, potty training guides
4. **Calendar Management** - Adding events, reminders, scheduling
5. **Term-Time Checklists** - School preparation, supplies lists
6. **Document Generation** - PDFs for routines, guides, etc.

### Interaction Model
- **Primary Channel:** WhatsApp (pilot phase)
- **Input:** Natural language requests ("help me plan dinners this week")
- **Output:** Done-for-you deliverables (lists, calendars, PDFs, reminders)

### Example User Flows
```
User: "Help me plan dinners this week"
→ MOLO: Returns 7-day meal plan + shopping list + calendar events

User: "Add swimming lessons to my calendar - Tuesdays 4pm"
→ MOLO: Creates recurring calendar event + sends confirmation

User: "I need a potty training guide for my 2-year-old"
→ MOLO: Generates personalized PDF guide with daily routine
```

---

## 3. Planned Features (Roadmap)

Based on funding documents and interviews:

1. **Native Mobile App** - Moving beyond WhatsApp-only
2. **Calendar Integrations** - Google Calendar, Outlook sync
3. **School Communication Scanning** - Parse emails from schools for dates/events
4. **Grocery Ordering** - Direct integration with supermarkets
5. **Affiliate Purchasing** - Birthday cards, gifts, supplies
6. **Support System Sharing** - Invite partners, grandparents, caregivers
7. **Task Assignment** - Auto-assign tasks to family members
8. **B2B2C Channel** - Corporate benefits platform partnerships

---

## 4. Business Model

### Revenue Streams
| Stream | Price Point | Status |
|--------|-------------|--------|
| B2C Subscription | £25-50/month | Pilot |
| B2B2C (Corporate Benefits) | TBD | Conversations underway |
| Affiliate Revenue | Commission-based | 8 deals signed |

### Engagement Metrics (Aug 2025 pilot)
- 100% weekly active users
- 2-3 queries per user per week
- Paying families from day one

### Funding
- **Target Raise:** £750,000 (SEIS/EIS eligible)
- **Pre-money Valuation:** £3M
- **Committed:** £100K from founder networks

---

## 5. Competitive Landscape

### Direct Competitor: Milo (joinmilo.com)
| Aspect | MOLO | Milo |
|--------|------|------|
| **HQ** | UK | US (YC-backed) |
| **Channel** | WhatsApp | SMS |
| **Price** | £25-50/mo | $24/mo (beta) or $40/mo (standard) |
| **Focus** | Task execution | Information organization |
| **Tech** | Agentic AI | GPT-4 + human-in-loop |

### Adjacent Competitors
- **Ohai.ai** - School email scanning, calendar, grocery (Instacart)
- **Goldee AI** - Shared family calendar, to-do lists
- **Ollie AI** - Meal planning with grocery automation
- **Google/Apple** - Native calendar + reminders (basic)

### MOLO's Differentiation
1. UK-focused (local supermarkets, school systems, terminology)
2. WhatsApp-native (ubiquitous in UK)
3. Agentic execution (not just organization)
4. Founder with prior exit experience (2021, claimed PE-backed per Shamanlist)

---

## 6. Technical Architecture Spec

### System Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                        USER INTERFACES                          │
├─────────────────┬─────────────────┬─────────────────────────────┤
│   WhatsApp      │   Mobile App    │   Web Dashboard             │
│   (Twilio/Meta) │   (React Native)│   (Next.js)                 │
└────────┬────────┴────────┬────────┴──────────────┬──────────────┘
         │                 │                       │
         ▼                 ▼                       ▼
┌─────────────────────────────────────────────────────────────────┐
│                      API GATEWAY                                │
│                   (FastAPI / Node.js)                           │
└────────────────────────────┬────────────────────────────────────┘
                             │
         ┌───────────────────┼───────────────────┐
         ▼                   ▼                   ▼
┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐
│  ORCHESTRATOR   │ │   USER STATE    │ │  FAMILY GRAPH   │
│  (LangGraph)    │ │  (PostgreSQL)   │ │  (PostgreSQL)   │
└────────┬────────┘ └─────────────────┘ └─────────────────┘
         │
         ▼
┌─────────────────────────────────────────────────────────────────┐
│                      AGENT SYSTEM                               │
├─────────────────┬─────────────────┬─────────────────────────────┤
│  Meal Planner   │  Calendar Agent │  Shopping Agent             │
│  Agent          │                 │                             │
├─────────────────┼─────────────────┼─────────────────────────────┤
│  Routine        │  Document       │  Communication              │
│  Builder Agent  │  Generator      │  Parser Agent               │
└────────┬────────┴────────┬────────┴──────────────┬──────────────┘
         │                 │                       │
         ▼                 ▼                       ▼
┌─────────────────────────────────────────────────────────────────┐
│                    EXTERNAL INTEGRATIONS                        │
├─────────────────┬─────────────────┬─────────────────────────────┤
│  Google/Outlook │  Tesco/Ocado    │  Affiliate Networks         │
│  Calendar APIs  │  Grocery APIs   │  (Moonpig, Amazon, etc.)    │
├─────────────────┼─────────────────┼─────────────────────────────┤
│  School Comms   │  WhatsApp       │  Payment                    │
│  (Email parsing)│  Business API   │  (Stripe)                   │
└─────────────────┴─────────────────┴─────────────────────────────┘
```

### Core Components

#### 6.1 WhatsApp Integration
**Options:**
- **Twilio WhatsApp API** - Easiest, proven, handles webhooks
- **Meta WhatsApp Business API** - Direct, more control, more complex
- **360dialog** - European hosting, GDPR-friendly

**Implementation:**
```python
# Webhook handler (FastAPI)
@app.post("/webhook/whatsapp")
async def handle_whatsapp(request: Request):
    message = await parse_whatsapp_message(request)
    user = await get_or_create_user(message.from_number)

    # Route to orchestrator
    response = await orchestrator.process(
        user_id=user.id,
        message=message.text,
        attachments=message.media
    )

    # Send response via WhatsApp
    await send_whatsapp_message(message.from_number, response)
```

#### 6.2 Agent Orchestrator (LangGraph)
**Why LangGraph:**
- State machine for complex multi-step workflows
- Built-in persistence for conversation memory
- Tool calling with retry logic
- Human-in-the-loop checkpoints

**Agent Types:**

| Agent | Responsibility | Tools |
|-------|----------------|-------|
| **Router** | Classify intent, route to specialist | LLM classification |
| **Meal Planner** | Generate meal plans, recipes | Recipe DB, dietary prefs |
| **Calendar** | CRUD calendar events | Google/Outlook API |
| **Shopping** | Generate lists, place orders | Grocery APIs |
| **Routine Builder** | Create schedules, guides | Template engine |
| **Document Gen** | Create PDFs | WeasyPrint, Puppeteer |
| **Comms Parser** | Extract dates from emails | LLM extraction |

#### 6.3 Data Models

```typescript
// Core entities
interface Family {
  id: string;
  name: string;
  members: FamilyMember[];
  preferences: FamilyPreferences;
  integrations: Integration[];
}

interface FamilyMember {
  id: string;
  name: string;
  role: 'parent' | 'child' | 'caregiver';
  age?: number;
  dietary: DietaryPreference[];
  phone?: string;  // For WhatsApp
}

interface FamilyPreferences {
  mealPreferences: {
    cuisines: string[];
    avoidIngredients: string[];
    weeknightMaxTime: number;  // minutes
    batchCookingDay?: string;
  };
  routines: {
    wakeTime: string;
    bedtime: string;
    schoolDropoff?: string;
  };
  groceryStore: 'tesco' | 'sainsburys' | 'ocado' | 'asda';
}

interface Task {
  id: string;
  familyId: string;
  type: TaskType;
  status: 'pending' | 'in_progress' | 'completed';
  assignee?: string;
  dueDate?: Date;
  recurrence?: RecurrenceRule;
  metadata: Record<string, any>;
}
```

#### 6.4 UK Grocery Integration

**Challenge:** No Instacart equivalent in UK. **⚠️ FACT-CHECK: UK grocery APIs are essentially non-existent for third-party ordering.**

| Retailer | API Availability | Reality |
|----------|------------------|---------|
| **Tesco** | ❌ **DISCONTINUED** | Tesco Labs developer portal has stopped issuing API subscriptions. Legacy libraries exist but no new access. |
| **Ocado** | ❌ No public API | Ocado Smart Platform is B2B for retail partners only. No third-party ordering API. EDI for suppliers only. |
| **Sainsbury's** | ❌ No public API | No developer access |
| **Amazon Fresh** | ❌ No public API | Affiliate links only |

**Third-Party Alternatives:**
- Scraping APIs exist (Unwrangle, Apify, Real Data API) but violate ToS and are unreliable
- productDNA provides product data sharing but not ordering

**Pragmatic Approach (MVP):**
1. Generate shopping list with exact product names
2. Deep link to retailer search (not basket - no API for that)
3. Copy-to-clipboard formatted lists
4. Long-term: pursue formal retail partnerships (hard, requires scale)

#### 6.5 Calendar Integration

```python
# Google Calendar integration
from google.oauth2.credentials import Credentials
from googleapiclient.discovery import build

async def create_calendar_event(
    user: User,
    title: str,
    start: datetime,
    end: datetime,
    recurrence: Optional[str] = None
):
    creds = await get_user_google_creds(user.id)
    service = build('calendar', 'v3', credentials=creds)

    event = {
        'summary': title,
        'start': {'dateTime': start.isoformat()},
        'end': {'dateTime': end.isoformat()},
    }
    if recurrence:
        event['recurrence'] = [recurrence]  # RRULE format

    return service.events().insert(
        calendarId='primary',
        body=event
    ).execute()
```

---

## 7. MVP Build Spec

### Phase 1: WhatsApp Bot (Week 1-2)
- [ ] Twilio WhatsApp sandbox setup
- [ ] FastAPI webhook handler
- [ ] Basic LangGraph orchestrator
- [ ] Meal planning agent (hardcoded recipes)
- [ ] Shopping list generator
- [ ] PostgreSQL user/family storage

### Phase 2: Calendar & Routines (Week 3-4)
- [ ] Google Calendar OAuth flow
- [ ] Calendar CRUD agent
- [ ] Routine template system
- [ ] PDF generation (routines, guides)
- [ ] Recurring task support

### Phase 3: Intelligence Layer (Week 5-6)
- [ ] Family preference learning
- [ ] Context-aware suggestions
- [ ] School email parsing (Gmail integration)
- [ ] Multi-member family support

### Phase 4: Polish & Scale (Week 7-8)
- [ ] Mobile app (React Native)
- [ ] Onboarding flow
- [ ] Subscription billing (Stripe)
- [ ] Analytics dashboard

---

## 8. Technology Stack Recommendation

| Layer | Technology | Rationale |
|-------|------------|-----------|
| **WhatsApp** | Twilio | Proven, good DX, reasonable pricing |
| **Backend** | FastAPI (Python) | Async, type hints, LangChain ecosystem |
| **Orchestration** | LangGraph | State machines, persistence, tool calling |
| **LLM** | Claude 3.5 Sonnet | Best reasoning, good at structured output |
| **Database** | PostgreSQL + pgvector | Relational + embeddings for memory |
| **Cache** | Redis | Session state, rate limiting |
| **Calendar** | Google Calendar API | Most common, well-documented |
| **Docs** | WeasyPrint | Python-native PDF generation |
| **Mobile** | React Native | Cross-platform, JS ecosystem |
| **Hosting** | Railway / Render | Simple, affordable, EU regions |
| **Payments** | Stripe | Standard, supports UK |

---

## 9. Key Risks & Mitigations

| Risk | Impact | Mitigation |
|------|--------|------------|
| **WhatsApp policy changes** | High | Build mobile app in parallel |
| **Grocery API access** | Medium | Start with list generation, pursue partnerships |
| **LLM costs at scale** | Medium | Caching, smaller models for simple tasks |
| **GDPR compliance** | High | EU hosting, data minimization, clear consent |
| **Competitor funding** | Medium | Focus on UK-specific features, speed |

---

## 10. Fact-Check Notes

### ✅ Verified Claims
| Claim | Source | Status |
|-------|--------|--------|
| 81% UK mums experienced burnout | Peanut + Tommee Tippee survey (2,000 UK mothers, Jan 2025) | ✅ Verified |
| Parenting declared public health crisis | US Surgeon General Advisory, 2024 | ✅ Verified (US, not UK specifically) |
| MOLO raising £750K at £3M pre-money | Shamanlist investment memo | ✅ Verified (single source) |
| MOLO pilot Aug 2025, 100% WAU | Shamanlist investment memo | ✅ Verified (single source) |
| Milo pricing $24-40/mo | Multiple sources | ✅ Verified ($24 beta, $40 standard) |

### ⚠️ Caveats / Corrections
| Claim | Issue |
|-------|-------|
| "~20 hours/week on family planning" | MOLO marketing claim. Academic research shows cognitive household labor is "time unbounding" and hard to measure. The 20hr figure may conflate all child-focused activities, not just planning. |
| "Tesco API exists" | ❌ **WRONG.** Tesco Labs developer portal has stopped issuing subscriptions. No new API access available. |
| "Ocado Partner API" | ❌ **MISLEADING.** Ocado Smart Platform is for retail partners (like Kroger), not third-party app developers. No ordering API. |
| "Sophie Bruce PE-backed exit 2021" | Only source is Shamanlist. LinkedIn confirms "successful exit 2021" but doesn't specify PE. |

### ❓ Unverified
| Claim | Notes |
|-------|-------|
| "8.7M UK families" market size | Plausible but not independently verified |
| "45+ years combined team experience" | From Shamanlist only |
| "8 affiliate deals signed" | From Shamanlist only |

---

## 11. Sources

### Primary
- [Shamanlist: MOLO Investment Memo](https://shamanlist.substack.com/p/molo-ai-for-family-admin-seiseis) - Main source for MOLO details
- [MOLO Official Site](https://www.moloapp.io) - Limited info (Wix site)

### Competitors
- [Milo (joinmilo.com)](https://www.joinmilo.com/)
- [Y Combinator: Milo](https://www.ycombinator.com/companies/milo)
- [Ohai.ai](https://www.ohai.ai/)
- [Goldee AI](https://www.goldee.ai/)

### Fact-Check Sources
- [HuffPost UK: 81% mums burnout](https://www.huffingtonpost.co.uk/entry/signs-of-parental-burnout-uk_uk_679bb9dce4b0db2051ad1fe2)
- [US Surgeon General Advisory on Parental Stress](https://psychiatryonline.org/doi/10.1176/appi.pn.2025.02.2.12)
- [Tesco Labs Developer Portal](https://devportal.tescolabs.com/) - Confirms subscriptions discontinued
- [PMC: Invisible Household Labor](https://pmc.ncbi.nlm.nih.gov/articles/PMC8223758/)

### Technical
- [Instacart Developer Platform](https://docs.instacart.com/connect/) - US only
- [WhatsApp + LangGraph Tutorial](https://medium.com/data-science/creating-a-whatsapp-ai-agent-with-gpt-4o-f0bc197d2ac0)
- [Twilio WhatsApp API](https://www.twilio.com/docs/whatsapp)
