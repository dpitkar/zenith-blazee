<template>
  <!-- ==============================
       PAGE HERO
       ============================== -->
  <section class="page-hero section--dark" aria-label="About page hero">
    <HeroFinanceBg />
    <div class="hero-bg" aria-hidden="true"></div>
    <div class="container page-hero-inner">
      <div class="page-hero-content">
        <span class="section-label hero-anim hero-anim--1">About Us</span>
        <h1 class="page-hero-heading hero-anim hero-anim--2">
          We're Not Just Advisors.<br />
          <span class="gold-text">We're in It With You.</span>
        </h1>
        <p class="page-hero-sub hero-anim hero-anim--3">
          Zenith Blazee was built on a simple belief: financial planning works best when it's personal, honest, and long-term.
        </p>
      </div>
    </div>
  </section>

  <!-- ==============================
       OUR STORY
       ============================== -->
  <section class="section section--cream story-section" aria-labelledby="story-heading">
    <div class="container story-inner">
      <div class="story-text" data-aos="fade-right">
        <span class="section-label">Our Story</span>
        <h2 class="section-heading" id="story-heading">
          Two perspectives.<br />One shared mission.
        </h2>
        <p class="story-para">
          Zenith Blazee was founded by two professionals who came from very different worlds — one from luxury hospitality, one from finance — but arrived at the same conviction: that most people deserve better financial guidance than they get.
        </p>
        <p class="story-para">
          Too often, financial advice is transactional. Products are pushed, portfolios are templated, and the client is left to figure out whether any of it actually fits their life. We wanted to change that.
        </p>
        <p class="story-para">
          We started Zenith Blazee to be the kind of advisors we wished existed — people who listen first, plan thoughtfully, and stay genuinely invested in your progress over the long run.
        </p>
      </div>
      <div class="story-values" data-aos="fade-left" data-aos-delay="100">
        <div v-for="val in values" :key="val.title" class="value-item">
          <div class="value-icon" aria-hidden="true" v-html="val.icon"></div>
          <div>
            <p class="value-title">{{ val.title }}</p>
            <p class="value-desc">{{ val.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ==============================
       PARTNER PROFILES
       ============================== -->
  <section class="section section--white" aria-labelledby="team-heading">
    <div class="container">
      <div class="section-intro" data-aos="fade-up">
        <span class="section-label">The Partners</span>
        <h2 class="section-heading" id="team-heading">The people you'll work with</h2>
      </div>

      <div class="profile-cards">
        <article
          v-for="(p, i) in profiles"
          :key="p.name"
          class="profile-card"
          data-aos="fade-up"
          :data-aos-delay="i * 120"
        >
          <div class="profile-avatar-col">
            <div class="profile-avatar" :style="{ backgroundColor: p.avatarBg }">
              {{ p.initials }}
            </div>
            <div class="profile-contact">
              <a :href="`mailto:${p.email}`" class="profile-contact-link">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                  <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 7L2 7"/>
                </svg>
                {{ p.email }}
              </a>
              <a :href="`tel:${p.telRaw}`" class="profile-contact-link">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.1 6.1l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                {{ p.phone }}
              </a>
            </div>
          </div>

          <div class="profile-body">
            <h3 class="profile-name">{{ p.name }}</h3>
            <p class="profile-role gold-text">{{ p.role }}</p>
            <p
              v-for="para in p.bio"
              :key="para"
              class="profile-para"
            >{{ para }}</p>
            <div class="profile-tags">
              <span v-for="tag in p.tags" :key="tag" class="profile-tag">{{ tag }}</span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>

  <!-- ==============================
       CTA STRIP
       ============================== -->
  <section class="cta-strip section--navy" aria-labelledby="about-cta-heading">
    <div class="cta-strip-bg" aria-hidden="true"></div>
    <div class="cta-strip-top-line" aria-hidden="true"></div>
    <div class="container cta-strip-inner" data-aos="fade-up">
      <span class="section-label" style="display: block; text-align: center; margin-bottom: var(--space-sm)">Ready to Begin?</span>
      <h2 class="cta-heading" id="about-cta-heading" style="color: var(--color-cream)">
        Let's Build Your Plan Together
      </h2>
      <p class="cta-sub">
        A short conversation is all it takes. We'll listen, understand where you are, and help map out where you want to go.
      </p>
      <RouterLink to="/contact" class="btn btn--primary">Get in Touch</RouterLink>
    </div>
  </section>
</template>

<script setup>
import { useHead } from '@vueuse/head'
import HeroFinanceBg from '@/components/HeroFinanceBg.vue'

useHead({
  title: 'About Us | Zenith Blazee',
  meta: [
    {
      name: 'description',
      content:
        'Meet Annkkur Bandhu and Dhaval Pitkar, the partners behind Zenith Blazee — combining financial depth with a genuinely client-first approach to mutual fund distribution.'
    }
  ]
})

const values = [
  {
    title: 'Client First, Always',
    desc: 'Every recommendation we make is driven by what is right for you — not what is easiest to sell.',
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`
  },
  {
    title: 'Transparency',
    desc: 'You will always understand what you are investing in, why, and what costs are involved.',
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`
  },
  {
    title: 'Long-Term Thinking',
    desc: 'We are not here for a quick transaction. We measure our success by how close you are to your goals.',
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>`
  }
]

const profiles = [
  {
    name: 'Annkkur Bandhu',
    initials: 'AB',
    role: 'Partner',
    avatarBg: 'rgba(201,168,76,0.12)',
    email: 'annkkur@zeniithhire.com',
    phone: '+91 93247 75968',
    telRaw: '+919324775968',
    bio: [
      "Annkkur brings 15+ years of experience in luxury hospitality — working with some of India's and the world's most prestigious properties, including Taj, Oberoi, Fairmont, and Vantara.",
      "His career has been built around one skill above all else: understanding people. He knows how to listen, how to build trust, and how to create experiences that feel genuinely personal. He carries that exact approach into financial planning.",
      "Annkkur is typically the first point of connection for most clients — and the reason many of them feel immediately at ease talking about money, often for the first time."
    ],
    tags: ['Taj Hotels', 'Oberoi', 'Fairmont', 'Vantara', 'Client Relations', '15+ Years']
  },
  {
    name: 'Dhaval Pitkar',
    initials: 'DP',
    role: 'Partner, CA',
    avatarBg: 'rgba(27,42,74,0.07)',
    email: 'dhaval@zeniithhire.com',
    phone: '+91 98338 86968',
    telRaw: '+919833886968',
    bio: [
      "Dhaval is a Chartered Accountant with experience spanning Big 4 consulting firms and high-growth startups. He has spent his career making sense of complex financials and turning them into clear, actionable decisions.",
      "That rigour — the ability to look at the numbers honestly and build strategies that actually hold up — is exactly what he brings to every client engagement at Zenith Blazee.",
      "Where Annkkur builds the relationship, Dhaval provides the financial backbone. Together, they ensure every plan is as personal as it is sound."
    ],
    tags: ['Chartered Accountant', 'Big 4', 'Startups', 'Financial Planning', 'Compliance']
  }
]
</script>

<style scoped>
/* ── Page Hero ── */
.page-hero {
  min-height: 60vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.hero-bg {
  background:
    radial-gradient(ellipse at 15% 60%, rgba(201, 168, 76, 0.09) 0%, transparent 55%),
    radial-gradient(ellipse at 85% 20%, rgba(201, 168, 76, 0.06) 0%, transparent 50%);
  inset: 0;
  pointer-events: none;
  position: absolute;
}

.page-hero-inner {
  padding-top: calc(var(--header-height) + var(--space-xl));
  padding-bottom: var(--space-xl);
  position: relative;
  z-index: 1;
}

.page-hero-content {
  max-width: 700px;
}

.hero-anim { opacity: 0; }
.hero-anim--1 { animation: fadeIn 0.6s ease 0.2s forwards; }
.hero-anim--2 { animation: fadeSlideUp 0.8s ease 0.4s forwards; }
.hero-anim--3 { animation: fadeSlideUp 0.8s ease 0.65s forwards; }

.page-hero-heading {
  color: var(--color-cream);
  font-size: var(--fs-h1);
  letter-spacing: -0.025em;
  line-height: 1.1;
  margin-bottom: var(--space-md);
}

.page-hero-sub {
  color: rgba(250, 248, 245, 0.75);
  font-size: var(--fs-body-lg);
  font-weight: 300;
  line-height: 1.8;
  max-width: 52ch;
}

/* ── Story ── */
.story-inner {
  align-items: start;
  display: grid;
  gap: var(--space-xl);
  grid-template-columns: 1fr;
}

.story-para {
  color: var(--color-grey-dark);
  font-size: var(--fs-body-lg);
  line-height: 1.8;
  margin-top: var(--space-md);
}

.story-values {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.value-item {
  align-items: flex-start;
  background-color: var(--color-white);
  border: 1px solid var(--color-grey-light);
  border-radius: var(--radius-md);
  display: flex;
  gap: var(--space-sm);
  padding: var(--space-md);
  transition: box-shadow var(--transition-base), transform var(--transition-base);
}

.value-item:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}

.value-icon {
  align-items: center;
  background-color: rgba(201, 168, 76, 0.1);
  border-radius: var(--radius-md);
  color: var(--color-gold);
  display: flex;
  flex-shrink: 0;
  height: 44px;
  justify-content: center;
  width: 44px;
}

.value-title {
  color: var(--color-navy-deep);
  font-size: var(--fs-body);
  font-weight: 600;
  margin-bottom: 0.3rem;
}

.value-desc {
  color: var(--color-grey-dark);
  font-size: var(--fs-small);
  line-height: 1.6;
}

/* ── Profiles ── */
.section-intro {
  margin-bottom: var(--space-lg);
}

.profile-cards {
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
}

.profile-card {
  background-color: var(--color-white);
  border: 1px solid var(--color-grey-light);
  border-radius: var(--radius-md);
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
  overflow: hidden;
  padding: var(--space-lg);
  transition: box-shadow var(--transition-base);
}

.profile-card:hover {
  box-shadow: var(--shadow-md);
}

.profile-avatar-col {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.profile-avatar {
  align-items: center;
  border: 2px solid rgba(201, 168, 76, 0.25);
  border-radius: var(--radius-full);
  color: var(--color-navy-deep);
  display: flex;
  font-family: var(--font-heading);
  font-size: 1.6rem;
  font-weight: 700;
  height: 96px;
  justify-content: center;
  letter-spacing: 0.05em;
  width: 96px;
}

.profile-contact {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-align: center;
}

.profile-contact-link {
  align-items: center;
  color: var(--color-grey-medium);
  display: inline-flex;
  font-size: var(--fs-small);
  gap: 0.4rem;
  justify-content: center;
  transition: color var(--transition-fast);
}

.profile-contact-link:hover {
  color: var(--color-gold);
}

.profile-name {
  color: var(--color-navy-deep);
  font-family: var(--font-heading);
  font-size: var(--fs-h3);
  margin-bottom: 0.25rem;
}

.profile-role {
  font-size: var(--fs-small);
  font-weight: 600;
  letter-spacing: 0.06em;
  margin-bottom: var(--space-sm);
  text-transform: uppercase;
}

.profile-para {
  color: var(--color-grey-dark);
  font-size: var(--fs-body);
  line-height: 1.75;
  margin-top: 0.75rem;
}

.profile-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: var(--space-md);
}

.profile-tag {
  background-color: rgba(201, 168, 76, 0.1);
  border: 1px solid rgba(201, 168, 76, 0.2);
  border-radius: var(--radius-full);
  color: var(--color-navy-rich);
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  padding: 0.25rem 0.75rem;
  text-transform: uppercase;
}

/* ── CTA Strip ── */
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
  margin-inline: auto;
  max-width: 50ch;
}

/* ── Responsive ── */
@media (min-width: 768px) {
  .story-inner {
    grid-template-columns: 1fr 1fr;
  }

  .profile-card {
    flex-direction: row;
  }

  .profile-avatar-col {
    flex-shrink: 0;
    width: 160px;
  }

  .profile-contact {
    text-align: left;
    align-items: flex-start;
  }

  .profile-contact-link {
    justify-content: flex-start;
  }
}
</style>
