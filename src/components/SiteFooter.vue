<template>
  <footer class="site-footer" role="contentinfo">
    <div class="container footer-inner">
      <!-- Brand -->
      <div class="footer-brand">
        <div class="footer-logo-wrap">
          <img src="/logo.png" alt="" class="footer-logo-img" width="36" height="36" />
          <span class="footer-logo-name">Zenith Blazee</span>
        </div>
        <p class="footer-tagline">
          Helping you build wealth with clarity, care, and a plan that's truly yours.
        </p>
        <span class="footer-arn">ARN-334080</span>
      </div>

      <!-- Quick Links -->
      <div class="footer-col">
        <p class="footer-heading">Quick Links</p>
        <nav class="footer-nav" aria-label="Footer navigation">
          <RouterLink to="/" class="footer-link">Home</RouterLink>
          <RouterLink to="/about" class="footer-link">About Us</RouterLink>
          <RouterLink to="/contact" class="footer-link">Contact</RouterLink>
        </nav>
      </div>

      <!-- Partners -->
      <div class="footer-col">
        <p class="footer-heading">Get in Touch</p>
        <div class="footer-partners">
          <div class="footer-partner">
            <p class="partner-name">Annkkur Bandhu</p>
            <p class="partner-role">Partner</p>
            <a href="mailto:annkkur@zeniithhire.com" class="contact-link">
              <svg class="contact-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="m22 7-10 7L2 7"/>
              </svg>
              annkkur@zeniithhire.com
            </a>
            <a href="tel:+919324775968" class="contact-link">
              <svg class="contact-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.1 6.1l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              +91 93247 75968
            </a>
          </div>
          <div class="footer-partner">
            <p class="partner-name">Dhaval Pitkar</p>
            <p class="partner-role">Partner</p>
            <a href="mailto:dhaval@zeniithhire.com" class="contact-link">
              <svg class="contact-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="m22 7-10 7L2 7"/>
              </svg>
              dhaval@zeniithhire.com
            </a>
            <a href="tel:+919833886968" class="contact-link">
              <svg class="contact-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.1 6.1l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              +91 98338 86968
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="container footer-bottom-inner">
        <p class="footer-copy">
          © {{ year }} Zenith Blazee. AMFI Registered Mutual Fund Distributor.
        </p>
        <p class="footer-disclaimer">
          Mutual Fund investments are subject to market risks. Please read all scheme related documents carefully before investing.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>

<style scoped>
.site-footer {
  background-color: var(--color-navy-deep);
  color: var(--color-cream);
}

.footer-inner {
  display: grid;
  gap: var(--space-lg);
  grid-template-columns: 1fr;
  padding-block: var(--space-lg);
}

/* Brand */
.footer-logo-wrap {
  align-items: center;
  display: flex;
  gap: 0.6rem;
  margin-bottom: var(--space-sm);
}

.footer-logo-img {
  display: block;
  height: 36px;
  object-fit: contain;
  width: auto;
}

.footer-logo-name {
  font-family: var(--font-heading);
  font-size: 1.05rem;
  font-weight: 600;
}

.footer-tagline {
  color: rgba(250, 248, 245, 0.65);
  font-size: var(--fs-small);
  line-height: 1.6;
  max-width: 28ch;
  margin-bottom: var(--space-sm);
}

.footer-arn {
  background-color: rgba(201, 168, 76, 0.12);
  border: 1px solid rgba(201, 168, 76, 0.25);
  border-radius: var(--radius-full);
  color: var(--color-gold);
  display: inline-block;
  font-size: var(--fs-label);
  font-weight: 600;
  letter-spacing: 0.1em;
  padding: 0.25rem 0.75rem;
  text-transform: uppercase;
}

/* Columns */
.footer-heading {
  color: var(--color-gold);
  font-family: var(--font-body);
  font-size: var(--fs-label);
  font-weight: 600;
  letter-spacing: 0.12em;
  margin-bottom: var(--space-sm);
  text-transform: uppercase;
}

.footer-nav {
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
}

.footer-link {
  color: rgba(250, 248, 245, 0.75);
  font-size: var(--fs-small);
  transition: color var(--transition-fast);
}

.footer-link:hover {
  color: var(--color-gold-light);
}

/* Partners */
.footer-partners {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.footer-partner {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.partner-name {
  color: var(--color-cream);
  font-size: var(--fs-body);
  font-weight: 600;
}

.partner-role {
  color: var(--color-gold);
  font-size: var(--fs-small);
  margin-bottom: 0.375rem;
}

.contact-link {
  align-items: center;
  color: rgba(250, 248, 245, 0.7);
  display: inline-flex;
  font-size: var(--fs-small);
  gap: 0.5rem;
  transition: color var(--transition-fast);
}

.contact-link:hover {
  color: var(--color-gold-light);
}

.contact-icon {
  flex-shrink: 0;
  opacity: 0.7;
}

/* Bottom bar */
.footer-bottom {
  border-top: 1px solid rgba(250, 248, 245, 0.1);
}

.footer-bottom-inner {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding-block: var(--space-md);
}

.footer-copy,
.footer-disclaimer {
  color: rgba(250, 248, 245, 0.45);
  font-size: 0.75rem;
}

@media (min-width: 768px) {
  .footer-inner {
    align-items: start;
    grid-template-columns: 1.2fr 0.8fr 1.5fr;
  }

  .footer-partners {
    flex-direction: row;
    gap: var(--space-lg);
  }

  .footer-bottom-inner {
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
  }
}
</style>
