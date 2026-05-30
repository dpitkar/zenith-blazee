<template>
  <!-- ==============================
       PAGE HERO
       ============================== -->
  <section class="page-hero section--dark" aria-label="Contact page hero">
    <HeroFinanceBg />
    <div class="hero-bg" aria-hidden="true"></div>
    <div class="container page-hero-inner">
      <div class="page-hero-content">
        <span class="section-label hero-anim hero-anim--1">Contact</span>
        <h1 class="page-hero-heading hero-anim hero-anim--2">
          Let's Start a<br />
          <span class="gold-text">Conversation.</span>
        </h1>
        <p class="page-hero-sub hero-anim hero-anim--3">
          Whether you have a specific goal in mind or just want to understand your options — we're here to help. No jargon, no pressure.
        </p>
      </div>
    </div>
  </section>

  <!-- ==============================
       FORM + DIRECT CONTACT
       ============================== -->
  <section class="section section--cream form-section">
    <div class="container form-contact-grid">

      <!-- Left: Google Form -->
      <div class="form-col" data-aos="fade-right">
        <span class="section-label">Send Us a Message</span>
        <h2 class="section-heading" id="form-heading">Tell us about your goals</h2>
        <p class="section-sub" style="color: var(--color-grey-dark); margin-bottom: var(--space-md)">
          Fill in a few details and we'll get back to you shortly.
        </p>
        <div class="form-embed-wrapper">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLScJrQ7DS-HkfAxZHzHcxswY7sNf3V2UOmI31nh4wkHSChFMUw/viewform?embedded=true"
            width="100%"
            height="943"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            loading="lazy"
            title="Contact Zenith Blazee"
          >Loading…</iframe>
        </div>
      </div>

      <!-- Right: Direct contact -->
      <div class="direct-col" data-aos="fade-left" data-aos-delay="100">
        <span class="section-label">Prefer to Reach Us Directly?</span>
        <h2 class="section-heading">Get in touch with our partners</h2>
        <div class="contact-cards">
          <div v-for="person in team" :key="person.name" class="contact-card">
            <div class="contact-avatar">{{ person.initials }}</div>
            <div class="contact-info">
              <p class="contact-name">{{ person.name }}</p>
              <p class="contact-role">{{ person.role }}</p>
              <a :href="`mailto:${person.email}`" class="contact-detail-link">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                  <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 7L2 7"/>
                </svg>
                {{ person.email }}
              </a>
              <a :href="`tel:${person.telRaw}`" class="contact-detail-link">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.1 6.1l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                {{ person.phone }}
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
useHead({
  title: 'Contact Us | Zenith Blazee',
  meta: [
    {
      name: 'description',
      content:
        'Get in touch with Zenith Blazee to start your mutual fund investment journey. We respond within 1–2 working days. ARN-334080.'
    }
  ]
})

const team = [
  {
    name: 'Annkkur Bandhu',
    initials: 'AB',
    role: 'Partner',
    email: 'annkkur@zenithblazee.com',
    phone: '+91 93247 75968',
    telRaw: '+919324775968'
  },
  {
    name: 'Dhaval Pitkar',
    initials: 'DP',
    role: 'Partner, CA',
    email: 'dhaval@zenithblazee.com',
    phone: '+91 98338 86968',
    telRaw: '+919833886968'
  }
]
</script>

<style scoped>
/* ── Page Hero ── */
.page-hero {
  align-items: center;
  display: flex;
  min-height: 55vh;
  overflow: hidden;
  position: relative;
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
  padding-bottom: var(--space-xl);
  padding-top: calc(var(--header-height) + var(--space-xl));
  position: relative;
  z-index: 1;
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
  max-width: 50ch;
}

/* ── Form + Direct Contact layout ── */
.form-contact-grid {
  align-items: start;
  display: grid;
  gap: var(--space-xl);
  grid-template-columns: 1fr;
}

.direct-col {
  position: sticky;
  top: calc(var(--header-height) + var(--space-lg));
}

/* ── Direct Contact ── */
.contact-cards {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  margin-top: var(--space-lg);
}

.contact-card {
  align-items: flex-start;
  background-color: var(--color-white);
  border: 1px solid var(--color-grey-light);
  border-radius: var(--radius-md);
  display: flex;
  gap: var(--space-sm);
  padding: var(--space-md);
  transition: box-shadow var(--transition-base), transform var(--transition-base);
}

.contact-card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}

.contact-avatar {
  align-items: center;
  background-color: rgba(201, 168, 76, 0.1);
  border: 1.5px solid rgba(201, 168, 76, 0.2);
  border-radius: var(--radius-full);
  color: var(--color-navy-deep);
  display: flex;
  flex-shrink: 0;
  font-family: var(--font-heading);
  font-size: 0.9rem;
  font-weight: 700;
  height: 48px;
  justify-content: center;
  letter-spacing: 0.05em;
  width: 48px;
}

.contact-name {
  color: var(--color-navy-deep);
  font-size: var(--fs-body);
  font-weight: 600;
}

.contact-role {
  color: var(--color-gold);
  font-size: var(--fs-small);
  font-weight: 600;
  letter-spacing: 0.05em;
  margin-bottom: 0.375rem;
  text-transform: uppercase;
}

.contact-detail-link {
  align-items: center;
  color: var(--color-grey-dark);
  display: flex;
  font-size: var(--fs-small);
  gap: 0.4rem;
  transition: color var(--transition-fast);
}

.contact-detail-link:hover {
  color: var(--color-gold);
}

/* ── Form col text alignment ── */
.form-col .section-label,
.form-col .section-heading,
.form-col .section-sub {
  padding-left: 1.5rem;
}

/* ── Form embed ── */
.form-embed-wrapper {
  min-height: 943px;
  overflow: hidden;
  width: 100%;
}

.form-embed-wrapper iframe {
  border: none;
  display: block;
  min-height: 943px;
  width: 100%;
}

/* ── Responsive ── */
@media (min-width: 900px) {
  .form-contact-grid {
    grid-template-columns: 1.8fr 1fr;
  }
}
</style>
