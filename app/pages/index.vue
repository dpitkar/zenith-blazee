<template>
  <!-- ==============================
       1. HERO
       ============================== -->
  <section class="hero" aria-label="Hero">
    <HeroFinanceBg />
    <div class="hero-bg" aria-hidden="true"></div>

    <div class="container hero-content">
      <span class="section-label hero-anim hero-anim--1">Mutual Fund Distribution · ARN-334080</span>
      <h1 class="hero-heading">
        <span class="hero-line hero-anim hero-anim--2">Your Goals.</span>
        <span class="hero-line hero-anim hero-anim--3">Your Plan.</span>
        <span class="hero-line gold-text hero-anim hero-anim--4">Your Future.</span>
      </h1>
      <p class="hero-sub hero-anim hero-anim--5">
        We help individual investors build wealth the right way — with a personalised plan built around your life, not a template.
      </p>
    </div>
  </section>

  <!-- ==============================
       2. STATS STRIP
       ============================== -->
  <section class="stats-strip" aria-label="Credentials and trust indicators" ref="statsRef">
    <div class="container stats-grid">
      <div
        v-for="(stat, i) in stats"
        :key="stat.label"
        class="stat-item"
        :data-aos="'fade-up'"
        :data-aos-delay="i * 80"
      >
        <span class="stat-value">{{ stat.value }}</span>
        <span class="stat-label">{{ stat.label }}</span>
      </div>
    </div>
  </section>

  <!-- ==============================
       3. WHAT WE HELP YOU ACHIEVE
       ============================== -->
  <section class="section section--cream goals-section" aria-labelledby="goals-heading">
    <div class="container">
      <div class="section-intro" data-aos="fade-up">
        <span class="section-label">What We Help You Achieve</span>
        <h2 class="section-heading" id="goals-heading">
          Your goals are unique.<br />Your plan should be too.
        </h2>
        <p class="section-sub" style="color: var(--color-grey-dark)">
          Whether you're planning for retirement, your child's education, or simply building a financial cushion — we map every goal to the right strategy.
        </p>
      </div>

      <div class="goals-grid">
        <div
          v-for="(goal, i) in goals"
          :key="goal.title"
          class="goal-card"
          data-aos="fade-up"
          :data-aos-delay="i * 70"
        >
          <div class="goal-card-top">
            <div class="goal-icon" aria-hidden="true" v-html="goal.icon"></div>
            <span class="goal-number" aria-hidden="true">0{{ i + 1 }}</span>
          </div>
          <h3 class="goal-title">{{ goal.title }}</h3>
          <p class="goal-desc">{{ goal.desc }}</p>
          <RouterLink to="/contact" class="goal-link" :aria-label="`Plan for ${goal.title}`">
            Talk to us
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
            </svg>
          </RouterLink>
          <div class="goal-bar" aria-hidden="true"></div>
        </div>
      </div>
    </div>
  </section>

  <!-- ==============================
       4. HOW IT WORKS
       ============================== -->
  <section class="section section--white steps-section" aria-labelledby="steps-heading">
    <div class="container">
      <div class="section-intro steps-intro" data-aos="fade-up">
        <span class="section-label">How It Works</span>
        <h2 class="section-heading" id="steps-heading">From conversation to confident investing</h2>
        <p class="section-sub" style="color: var(--color-grey-dark)">
          A simple, four-step process designed around you — not paperwork.
        </p>
      </div>

      <div class="steps-grid">
        <div
          v-for="(step, i) in steps"
          :key="step.title"
          class="step-card"
          data-aos="fade-up"
          :data-aos-delay="i * 90"
        >
          <div class="step-top">
            <span class="step-number" aria-hidden="true">0{{ i + 1 }}</span>
            <div class="step-icon" aria-hidden="true" v-html="step.icon"></div>
          </div>
          <h3 class="step-title">{{ step.title }}</h3>
          <p class="step-desc">{{ step.desc }}</p>
          <div class="step-connector" aria-hidden="true" v-if="i < steps.length - 1"></div>
        </div>
      </div>
    </div>
  </section>

  <!-- ==============================
       5. WHY ZENITH BLAZEE
       ============================== -->
  <section class="section section--dark why-section" aria-labelledby="why-heading">
    <div class="why-bg" aria-hidden="true"></div>
    <div class="container">
      <div class="section-intro why-intro" data-aos="fade-up">
        <span class="section-label">Why Choose Us</span>
        <h2 class="section-heading" id="why-heading" style="color: var(--color-cream)">
          What makes Zenith Blazee different
        </h2>
      </div>
      <div class="why-grid">
        <div
          v-for="(item, i) in whyItems"
          :key="item.title"
          class="why-card"
          data-aos="fade-up"
          :data-aos-delay="i * 80"
        >
          <div class="why-icon" aria-hidden="true" v-html="item.icon"></div>
          <h3 class="why-title">{{ item.title }}</h3>
          <p class="why-desc">{{ item.desc }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ==============================
       6. INSURANCE ADVISORY
       ============================== -->
  <section class="section section--cream insurance-section" aria-labelledby="insurance-heading">
    <div class="container insurance-inner">
      <div class="insurance-content" data-aos="fade-right">
        <span class="section-label">Insurance Advisory</span>
        <h2 class="section-heading" id="insurance-heading">
          Protection First.<br /><span class="gold-text">Always.</span>
        </h2>
        <p class="insurance-sub">
          Alongside mutual fund planning, we help you evaluate the right life and health insurance coverage — because a strong financial plan begins with the right protection in place.
        </p>
      </div>

      <div class="insurance-pillars" data-aos="fade-left" data-aos-delay="100">
        <div v-for="item in insurancePillars" :key="item.title" class="ins-pillar">
          <div class="ins-pillar-icon" aria-hidden="true" v-html="item.icon"></div>
          <div>
            <p class="ins-pillar-title">{{ item.title }}</p>
            <p class="ins-pillar-desc">{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ==============================
       7. FAQ
       ============================== -->
  <section class="section section--white faq-section" aria-labelledby="faq-heading">
    <div class="container faq-inner">
      <div class="faq-left" data-aos="fade-right">
        <span class="section-label">FAQ</span>
        <h2 class="section-heading" id="faq-heading">
          Questions we hear<br />all the time
        </h2>
        <p class="section-sub" style="color: var(--color-grey-dark)">
          If you don't find what you're looking for, just reach out — we're happy to talk.
        </p>
        <RouterLink to="/contact" class="btn btn--primary" style="margin-top: var(--space-lg)">
          Ask Us Anything
        </RouterLink>
      </div>

      <div class="faq-list" data-aos="fade-left" data-aos-delay="80">
        <div
          v-for="(item, i) in faqs"
          :key="i"
          class="faq-item"
          :class="{ 'faq-item--open': openFaq === i }"
        >
          <button
            class="faq-question"
            @click="toggleFaq(i)"
            :aria-expanded="String(openFaq === i)"
            :aria-controls="`faq-answer-${i}`"
          >
            <span>{{ item.q }}</span>
            <span class="faq-chevron" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            </span>
          </button>
          <div
            :id="`faq-answer-${i}`"
            class="faq-answer"
            role="region"
          >
            <p>{{ item.a }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ==============================
       8. MEET THE PARTNERS
       ============================== -->
  <section class="section section--cream partners-section" aria-labelledby="partners-heading">
    <div class="container">
      <div class="section-intro" data-aos="fade-up">
        <span class="section-label">Meet the Partners</span>
        <h2 class="section-heading" id="partners-heading">The people behind your plan</h2>
        <p class="section-sub" style="color: var(--color-grey-dark)">
          Two professionals with very different backgrounds, united by one commitment: helping you get where you want to go.
        </p>
      </div>

      <div class="partners-grid">
        <div
          v-for="(partner, i) in partners"
          :key="partner.name"
          class="partner-card"
          data-aos="fade-up"
          :data-aos-delay="i * 120"
        >
          <div class="partner-avatar" :style="{ backgroundColor: partner.avatarBg }">
            {{ partner.initials }}
          </div>
          <div class="partner-info">
            <h3 class="partner-card-name">{{ partner.name }}</h3>
            <p class="partner-card-role gold-text">{{ partner.role }}</p>
            <p class="partner-card-bio">{{ partner.bio }}</p>
          </div>
        </div>
      </div>

      <div class="partners-cta" data-aos="fade-up">
        <RouterLink to="/about" class="btn btn--primary">Our Full Story</RouterLink>
      </div>
    </div>
  </section>

  <!-- ==============================
       9. CTA STRIP
       ============================== -->
  <section class="cta-strip section--navy" aria-labelledby="cta-heading">
    <div class="cta-strip-bg" aria-hidden="true"></div>
    <div class="cta-strip-top-line" aria-hidden="true"></div>
    <div class="container cta-strip-inner" data-aos="fade-up">
      <span class="section-label" style="display: block; text-align: center; margin-bottom: var(--space-sm)">Take the First Step</span>
      <h2 class="cta-heading" id="cta-heading" style="color: var(--color-cream)">
        Ready to start building<br />your financial future?
      </h2>
      <p class="cta-sub">We respond within 1–2 working days. No pressure, just a conversation.</p>
      <RouterLink to="/contact" class="btn btn--primary">Get in Touch Today</RouterLink>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

useHead({
  title: 'Zenith Blazee | Mutual Fund Distributor',
  meta: [
    {
      name: 'description',
      content:
        'Zenith Blazee (ARN-334080) helps individuals invest in mutual funds with personalised, goal-based financial planning. Talk to an advisor today.'
    }
  ]
})

/* ── Stats ── */
const stats = [
  { value: '15+', label: 'Years Combined Expertise' },
  { value: 'Big 4', label: 'CA-Backed Financial Planning' },
  { value: '5', label: 'Goal Categories Covered' },
  { value: 'ARN-334080', label: 'AMFI Registered Distributor' }
]

/* ── Goals ── */
const goals = [
  {
    title: 'Financial Freedom',
    desc: 'Build sustainable, long-term wealth that gives you choices — not just savings.',
    icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>`
  },
  {
    title: 'Retirement Planning',
    desc: 'Start early or catch up — we help you build a retirement corpus that lasts.',
    icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`
  },
  {
    title: "Children's Future",
    desc: "Education, marriage, or a head start in life — plan today for what matters most tomorrow.",
    icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`
  },
  {
    title: 'Emergency Fund',
    desc: 'Life is unpredictable. We help you build a liquid buffer so setbacks stay manageable.',
    icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`
  },
  {
    title: 'Goal-Based Planning',
    desc: "Every goal gets its own strategy — the right fund, timeline, and SIP amount to match.",
    icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`
  }
]

/* ── Steps ── */
const steps = [
  {
    title: 'Tell Us Your Goals',
    desc: 'We start with a genuine conversation — understanding your financial situation, priorities, timeline, and concerns.',
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`
  },
  {
    title: 'We Map Your Plan',
    desc: 'Together, we build a personalised strategy — the right funds, the right allocation, the right SIP for your goals.',
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`
  },
  {
    title: 'You Start Investing',
    desc: "Once you're comfortable with the plan, we guide you through a smooth, paperless onboarding process.",
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>`
  },
  {
    title: 'We Stay With You',
    desc: 'Your plan is reviewed regularly and updated as your life and the markets evolve. We are in it for the long run.',
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`
  }
]

/* ── Why Us ── */
const whyItems = [
  {
    title: 'No Conflict of Interest',
    desc: "We're your distributor, not the fund house. Your long-term returns matter more to us than product margins.",
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>`
  },
  {
    title: 'CA-Backed Planning',
    desc: "Every plan has Dhaval's financial rigour built in. Decisions are grounded in numbers, not guesswork.",
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`
  },
  {
    title: 'People-First Approach',
    desc: "Annkkur's hospitality background means you'll always feel heard, respected, and genuinely understood.",
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`
  },
  {
    title: 'Long-Term Commitment',
    desc: "We don't just start plans — we stay invested in seeing them through. No one-time transactions here.",
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>`
  }
]

/* ── Insurance ── */
const insurancePillars = [
  {
    title: 'Life Insurance',
    desc: 'Ensure your family is protected no matter what happens.',
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`
  },
  {
    title: 'Health Insurance',
    desc: 'Protect your savings from unexpected medical expenses.',
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>`
  }
]

/* ── FAQ ── */
const openFaq = ref(0)

function toggleFaq(i) {
  openFaq.value = openFaq.value === i ? -1 : i
}

const faqs = [
  {
    q: 'What is a mutual fund distributor?',
    a: 'A mutual fund distributor is an AMFI-registered professional who helps investors select, purchase, and manage mutual fund investments. Unlike banks or apps, a distributor provides personalised guidance — not a one-size-fits-all portfolio. Zenith Blazee is registered under ARN-334080.'
  },
  {
    q: 'How are you different from investing through a bank or app?',
    a: 'Banks and apps offer standardised products with little personalisation. At Zenith Blazee, we take time to understand your specific goals and build a plan around them. We are accessible, accountable, and stay with you through the journey — not just at the point of sale.'
  },
  {
    q: 'Do I need a large amount to start investing?',
    a: 'No. Mutual funds can be started with as little as ₹500 per month through a SIP (Systematic Investment Plan). We will help you find the right starting point based on your income, goals, and timeline.'
  },
  {
    q: 'What is goal-based planning and how does it work?',
    a: "Goal-based planning means every investment is linked to a specific objective — your child's education, your retirement, or your financial freedom. Instead of investing generically, we map each goal to the right fund category, timeline, and SIP amount."
  },
  {
    q: 'Are mutual fund investments safe?',
    a: 'All mutual fund investments carry market risk, and past performance does not guarantee future returns. However, with the right diversification, time horizon, and planning, risk can be managed significantly. We always ensure you understand what you are investing in before you commit.'
  },
  {
    q: 'What does insurance advisory mean — do you sell insurance?',
    a: 'We offer advisory on life and health insurance — helping you understand what coverage you need and how it fits into your overall financial plan. We do not sell specific insurance products or earn commissions on insurance. Our focus is purely on helping you make informed decisions.'
  }
]

/* ── Partners ── */
const partners = [
  {
    name: 'Annkkur Bandhu',
    initials: 'AB',
    role: 'Partner',
    avatarBg: 'rgba(201,168,76,0.12)',
    bio: '15+ years in luxury hospitality (Taj, Oberoi, Fairmont, Vantara). Annkkur brings a deeply people-first approach — he is the first point of connection for most clients.'
  },
  {
    name: 'Dhaval Pitkar',
    initials: 'DP',
    role: 'Partner, CA',
    avatarBg: 'rgba(27,42,74,0.08)',
    bio: 'Chartered Accountant with Big 4 and startup experience. Dhaval brings financial depth to every plan — ensuring every recommendation is grounded in solid fundamentals.'
  }
]
</script>

<style scoped>
/* ==============================
   HERO
   ============================== */
.hero {
  align-items: center;
  background: linear-gradient(135deg, #0d1b2a 0%, #1b2a4a 50%, #0d1b2a 100%);
  display: flex;
  min-height: 100dvh;
  overflow: hidden;
  position: relative;
}

.hero-bg {
  background:
    radial-gradient(ellipse at 20% 50%, rgba(201, 168, 76, 0.08) 0%, transparent 60%),
    radial-gradient(ellipse at 80% 20%, rgba(201, 168, 76, 0.06) 0%, transparent 50%);
  inset: 0;
  pointer-events: none;
  position: absolute;
}

.hero-content {
  padding-bottom: var(--space-xl);
  padding-top: calc(var(--header-height) + var(--space-xl));
  position: relative;
  text-align: center;
  z-index: 2;
}

.hero-anim { opacity: 0; }
.hero-anim--1 { animation: fadeIn 0.7s ease 0.1s forwards; }
.hero-anim--2 { animation: fadeSlideUp 0.8s ease 0.35s forwards; }
.hero-anim--3 { animation: fadeSlideUp 0.8s ease 0.55s forwards; }
.hero-anim--4 { animation: fadeSlideUp 0.8s ease 0.75s forwards; }
.hero-anim--5 { animation: fadeSlideUp 0.9s ease 1.0s forwards; }
.hero-anim--6 { animation: fadeIn 0.9s ease 1.3s forwards; }

.hero-heading {
  color: var(--color-cream);
  font-size: var(--fs-h1);
  letter-spacing: -0.025em;
  line-height: 1.1;
  margin-bottom: var(--space-sm);
}

.hero-line { display: block; }

.hero-sub {
  color: rgba(250, 248, 245, 0.8);
  font-size: clamp(1rem, 2vw, 1.2rem);
  font-weight: 300;
  line-height: 1.75;
  margin: var(--space-md) auto 0;
  max-width: 600px;
}

.hero-cta {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-sm);
  justify-content: center;
  margin-top: var(--space-lg);
}

.hero-scroll {
  animation: scrollBounce 2s ease-in-out infinite;
  bottom: 2rem;
  left: 50%;
  position: absolute;
  transform: translateX(-50%);
  z-index: 3;
}

/* ==============================
   STATS STRIP
   ============================== */
.stats-strip {
  background-color: var(--color-navy-deep);
  border-top: 1px solid rgba(201, 168, 76, 0.2);
  padding-block: var(--space-lg);
}

.stats-grid {
  display: grid;
  gap: var(--space-md);
  grid-template-columns: repeat(2, 1fr);
}

.stat-item {
  border-right: 1px solid rgba(250, 248, 245, 0.08);
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  padding-inline: var(--space-md);
  text-align: center;
}

.stat-item:last-child {
  border-right: none;
}

.stat-value {
  color: var(--color-gold);
  font-family: var(--font-heading);
  font-size: clamp(1.5rem, 3vw, 2.25rem);
  font-weight: 700;
  letter-spacing: -0.01em;
  line-height: 1;
}

.stat-label {
  color: rgba(250, 248, 245, 0.65);
  font-size: var(--fs-small);
  letter-spacing: 0.03em;
  line-height: 1.4;
}

/* ==============================
   GOALS
   ============================== */
.section-intro { margin-bottom: var(--space-lg); }

.goals-grid {
  display: grid;
  gap: var(--space-md);
  grid-template-columns: 1fr;
}

.goal-card {
  background-color: var(--color-white);
  border: 1px solid var(--color-grey-light);
  border-radius: var(--radius-md);
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  overflow: hidden;
  padding: var(--space-md);
  position: relative;
  transition: box-shadow var(--transition-base), transform var(--transition-base);
}

.goal-card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-4px);
}

.goal-card-top {
  align-items: flex-start;
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.25rem;
}

.goal-icon {
  align-items: center;
  background-color: rgba(201, 168, 76, 0.1);
  border-radius: var(--radius-md);
  color: var(--color-gold);
  display: flex;
  height: 52px;
  justify-content: center;
  width: 52px;
}

.goal-number {
  color: rgba(201, 168, 76, 0.25);
  font-family: var(--font-heading);
  font-size: 2rem;
  font-weight: 700;
  line-height: 1;
}

.goal-title {
  color: var(--color-navy-deep);
  font-family: var(--font-heading);
  font-size: var(--fs-h4);
}

.goal-desc {
  color: var(--color-grey-dark);
  font-size: var(--fs-body);
  flex: 1;
  line-height: 1.65;
}

.goal-link {
  align-items: center;
  color: var(--color-gold);
  display: inline-flex;
  font-size: var(--fs-small);
  font-weight: 600;
  gap: 0.375rem;
  letter-spacing: 0.04em;
  margin-top: auto;
  text-transform: uppercase;
  transition: gap var(--transition-fast), color var(--transition-fast);
}

.goal-link:hover {
  color: var(--color-navy-deep);
  gap: 0.625rem;
}

.goal-bar {
  background: linear-gradient(to right, var(--color-gold), var(--color-gold-light));
  bottom: 0;
  height: 3px;
  left: 0;
  position: absolute;
  right: 0;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.38s ease;
}

.goal-card:hover .goal-bar {
  transform: scaleX(1);
}

/* ==============================
   HOW IT WORKS
   ============================== */
.steps-intro { text-align: center; align-items: center; display: flex; flex-direction: column; }

.steps-grid {
  display: grid;
  gap: var(--space-md);
  grid-template-columns: 1fr;
  margin-top: var(--space-lg);
  position: relative;
}

.step-card {
  background-color: var(--color-white);
  border: 1px solid var(--color-grey-light);
  border-radius: var(--radius-md);
  padding: var(--space-lg) var(--space-md);
  position: relative;
  transition: box-shadow var(--transition-base), transform var(--transition-base), border-color var(--transition-base);
}

.step-card:hover {
  border-color: rgba(201, 168, 76, 0.35);
  box-shadow: var(--shadow-md);
  transform: translateY(-3px);
}

.step-top {
  align-items: flex-start;
  display: flex;
  justify-content: space-between;
  margin-bottom: var(--space-sm);
}

.step-number {
  color: rgba(201, 168, 76, 0.2);
  font-family: var(--font-heading);
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1;
}

.step-icon {
  align-items: center;
  background-color: rgba(201, 168, 76, 0.1);
  border-radius: var(--radius-md);
  color: var(--color-gold);
  display: flex;
  height: 52px;
  justify-content: center;
  width: 52px;
}

.step-title {
  color: var(--color-navy-deep);
  font-family: var(--font-heading);
  font-size: var(--fs-h4);
  margin-bottom: 0.5rem;
}

.step-desc {
  color: var(--color-grey-dark);
  font-size: var(--fs-body);
  line-height: 1.7;
}

.step-connector {
  display: none;
}

/* ==============================
   WHY ZENITH BLAZEE
   ============================== */
.why-section { position: relative; overflow: hidden; }

.why-bg {
  background: radial-gradient(circle, rgba(201, 168, 76, 0.06) 0%, transparent 65%);
  height: 600px;
  pointer-events: none;
  position: absolute;
  right: -5%;
  top: -10%;
  width: 600px;
}

.why-intro { margin-bottom: var(--space-lg); }

.why-grid {
  display: grid;
  gap: var(--space-md);
  grid-template-columns: 1fr;
}

.why-card {
  background-color: rgba(250, 248, 245, 0.04);
  border: 1px solid rgba(201, 168, 76, 0.12);
  border-radius: var(--radius-md);
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: var(--space-md);
  position: relative;
  transition: background-color var(--transition-base), border-color var(--transition-base), transform var(--transition-base);
}

.why-card:hover {
  background-color: rgba(201, 168, 76, 0.06);
  border-color: rgba(201, 168, 76, 0.3);
  transform: translateY(-3px);
}

.why-card::before {
  background: linear-gradient(to right, var(--color-gold), var(--color-gold-light));
  bottom: 0;
  content: '';
  height: 2px;
  left: 0;
  position: absolute;
  right: 0;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.38s ease;
}

.why-card:hover::before { transform: scaleX(1); }

.why-icon {
  align-items: center;
  background-color: rgba(201, 168, 76, 0.12);
  border-radius: var(--radius-md);
  color: var(--color-gold);
  display: flex;
  height: 52px;
  justify-content: center;
  width: 52px;
}

.why-title {
  color: var(--color-cream);
  font-family: var(--font-heading);
  font-size: var(--fs-h4);
}

.why-desc {
  color: rgba(250, 248, 245, 0.65);
  font-size: var(--fs-body);
  line-height: 1.7;
}

/* ==============================
   INSURANCE
   ============================== */
.insurance-section {}

.insurance-inner {
  align-items: start;
  display: grid;
  gap: var(--space-xl);
  grid-template-columns: 1fr;
}

.insurance-sub {
  color: var(--color-grey-dark);
  font-size: var(--fs-body-lg);
  line-height: 1.8;
  margin-top: var(--space-sm);
  max-width: 44ch;
}

.insurance-note {
  align-items: flex-start;
  background-color: rgba(201, 168, 76, 0.08);
  border-left: 3px solid var(--color-gold);
  border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
  color: var(--color-grey-dark);
  display: flex;
  font-size: var(--fs-small);
  gap: 0.625rem;
  line-height: 1.6;
  margin-top: var(--space-md);
  padding: 0.75rem 1rem;
}

.insurance-pillars {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.ins-pillar {
  align-items: flex-start;
  background-color: var(--color-white);
  border: 1px solid var(--color-grey-light);
  border-radius: var(--radius-md);
  display: flex;
  gap: var(--space-sm);
  padding: var(--space-md);
  transition: box-shadow var(--transition-base), transform var(--transition-base);
}

.ins-pillar:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}

.ins-pillar-icon {
  align-items: center;
  background-color: rgba(201, 168, 76, 0.1);
  border-radius: var(--radius-md);
  color: var(--color-gold);
  display: flex;
  flex-shrink: 0;
  height: 46px;
  justify-content: center;
  width: 46px;
}

.ins-pillar-title {
  color: var(--color-navy-deep);
  font-size: var(--fs-body);
  font-weight: 600;
  margin-bottom: 0.3rem;
}

.ins-pillar-desc {
  color: var(--color-grey-dark);
  font-size: var(--fs-small);
  line-height: 1.6;
}

/* ==============================
   FAQ
   ============================== */
.faq-inner {
  align-items: start;
  display: grid;
  gap: var(--space-xl);
  grid-template-columns: 1fr;
}

.faq-list {
  display: flex;
  flex-direction: column;
  gap: 0;
  border: 1px solid var(--color-grey-light);
  border-radius: var(--radius-md);
  overflow: hidden;
}

.faq-item {
  border-bottom: 1px solid var(--color-grey-light);
  transition: background-color var(--transition-fast);
}

.faq-item:last-child { border-bottom: none; }

.faq-item--open { background-color: rgba(201, 168, 76, 0.03); }

.faq-question {
  align-items: center;
  cursor: pointer;
  display: flex;
  font-family: var(--font-body);
  font-size: var(--fs-body);
  font-weight: 600;
  gap: var(--space-sm);
  justify-content: space-between;
  min-height: 64px;
  padding: var(--space-md);
  text-align: left;
  width: 100%;
  color: var(--color-charcoal);
  transition: color var(--transition-fast);
}

.faq-question:hover { color: var(--color-navy-deep); }

.faq-item--open .faq-question { color: var(--color-navy-deep); }

.faq-chevron {
  color: var(--color-gold);
  flex-shrink: 0;
  transition: transform var(--transition-base);
}

.faq-item--open .faq-chevron { transform: rotate(180deg); }

.faq-answer {
  color: var(--color-grey-dark);
  font-size: var(--fs-body);
  line-height: 1.75;
  max-height: 0;
  overflow: hidden;
  padding-inline: var(--space-md);
  transition: max-height 0.38s ease, padding 0.28s ease;
}

.faq-item--open .faq-answer {
  max-height: 300px;
  padding-bottom: var(--space-md);
}

.faq-answer p { padding-top: 0; }

/* ==============================
   PARTNERS
   ============================== */
.partners-grid {
  display: grid;
  gap: var(--space-md);
  grid-template-columns: 1fr;
  margin-top: var(--space-lg);
}

.partner-card {
  align-items: flex-start;
  background-color: var(--color-white);
  border: 1px solid var(--color-grey-light);
  border-radius: var(--radius-md);
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  padding: var(--space-lg) var(--space-md);
  transition: box-shadow var(--transition-base), transform var(--transition-base);
}

.partner-card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-3px);
}

.partner-avatar {
  align-items: center;
  border: 2px solid rgba(201, 168, 76, 0.25);
  border-radius: var(--radius-full);
  color: var(--color-navy-deep);
  display: flex;
  flex-shrink: 0;
  font-family: var(--font-heading);
  font-size: 1.3rem;
  font-weight: 700;
  height: 72px;
  justify-content: center;
  letter-spacing: 0.05em;
  width: 72px;
}

.partner-card-name {
  color: var(--color-navy-deep);
  font-family: var(--font-heading);
  font-size: var(--fs-h4);
  margin-bottom: 0.2rem;
}

.partner-card-role {
  font-size: var(--fs-small);
  font-weight: 600;
  letter-spacing: 0.06em;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
}

.partner-card-bio {
  color: var(--color-grey-dark);
  font-size: var(--fs-body);
  line-height: 1.7;
}

.partners-cta {
  display: flex;
  justify-content: center;
  margin-top: var(--space-lg);
}

/* ==============================
   CTA STRIP
   ============================== */
.cta-strip {
  overflow: hidden;
  padding-block: var(--space-2xl);
  position: relative;
  text-align: center;
}

.cta-strip-bg {
  background:
    radial-gradient(ellipse at 0% 100%, rgba(201, 168, 76, 0.12) 0%, transparent 55%),
    radial-gradient(ellipse at 100% 0%, rgba(201, 168, 76, 0.08) 0%, transparent 50%);
  inset: 0;
  pointer-events: none;
  position: absolute;
}

.cta-strip-top-line {
  background: linear-gradient(to right, transparent, var(--color-gold), transparent);
  height: 1px;
  left: 50%;
  position: absolute;
  top: 0;
  transform: translateX(-50%);
  width: 120px;
}

.cta-strip-inner {
  position: relative;
  z-index: 1;
}

.cta-heading {
  font-size: var(--fs-h2);
  margin-bottom: var(--space-sm);
}

.cta-sub {
  color: rgba(250, 248, 245, 0.7);
  font-size: var(--fs-body-lg);
  margin-bottom: var(--space-lg);
}

/* ==============================
   RESPONSIVE
   ============================== */
@media (min-width: 480px) {
  .stats-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (min-width: 600px) {
  .goals-grid {
    grid-template-columns: 1fr 1fr;
  }

  .partners-grid {
    grid-template-columns: 1fr 1fr;
  }

  .partner-card {
    flex-direction: row;
  }
}

@media (min-width: 768px) {
  .insurance-inner {
    grid-template-columns: 1fr 1fr;
  }

  .faq-inner {
    grid-template-columns: 1fr 1.5fr;
  }

  .why-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (min-width: 900px) {
  .steps-grid {
    grid-template-columns: repeat(4, 1fr);
    gap: 0;
  }

  .step-card {
    border-radius: 0;
    border-right: none;
  }

  .step-card:first-child { border-radius: var(--radius-md) 0 0 var(--radius-md); }
  .step-card:last-child  {
    border-radius: 0 var(--radius-md) var(--radius-md) 0;
    border-right: 1px solid var(--color-grey-light);
  }

  .step-connector {
    background: linear-gradient(to right, var(--color-gold), var(--color-gold-light));
    border-radius: var(--radius-full);
    display: block;
    height: 2px;
    position: absolute;
    right: -1px;
    top: 38px;
    width: 1px;
    z-index: 1;
  }
}

@media (min-width: 1024px) {
  .goals-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .why-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
