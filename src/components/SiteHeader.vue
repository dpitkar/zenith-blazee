<template>
  <header class="site-header" :class="{ 'site-header--scrolled': isScrolled }" role="banner">
    <div class="container header-inner">
      <RouterLink to="/" class="logo-link" aria-label="Zenith Blazee — Home">
        <img src="/logo.png" alt="" class="logo-img" width="40" height="40" />
        <span class="logo-name">Zenith Blazee</span>
      </RouterLink>

      <nav class="nav-desktop" aria-label="Main navigation">
        <RouterLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="nav-link"
          :class="{ 'nav-link--active': $route.path === link.to }"
        >
          {{ link.label }}
        </RouterLink>
        <RouterLink to="/contact" class="nav-cta-link">Get in Touch</RouterLink>
      </nav>

      <button
        class="hamburger"
        :class="{ 'hamburger--open': menuOpen }"
        @click="menuOpen = !menuOpen"
        :aria-expanded="String(menuOpen)"
        aria-controls="nav-overlay"
        aria-label="Toggle navigation menu"
      >
        <span class="hamburger-bar"></span>
        <span class="hamburger-bar"></span>
        <span class="hamburger-bar"></span>
      </button>
    </div>

    <!-- Mobile overlay -->
    <div
      id="nav-overlay"
      class="nav-overlay"
      :class="{ 'nav-overlay--open': menuOpen }"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
    >
      <button
        class="nav-overlay-close"
        @click="menuOpen = false"
        aria-label="Close navigation"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      <nav class="nav-overlay-links" aria-label="Mobile navigation links">
        <RouterLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="nav-overlay-link"
          @click="menuOpen = false"
        >{{ link.label }}</RouterLink>
        <RouterLink
          to="/contact"
          class="nav-overlay-link nav-overlay-link--cta"
          @click="menuOpen = false"
        >Get in Touch</RouterLink>
      </nav>

      <div class="nav-overlay-footer">
        <a href="mailto:annkkur@zeniithhire.com" class="nav-overlay-contact">annkkur@zeniithhire.com</a>
        <a href="mailto:dhaval@zeniithhire.com" class="nav-overlay-contact">dhaval@zeniithhire.com</a>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const menuOpen = ref(false)

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
]

function onScroll() {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.site-header {
  left: 0;
  padding: 1.25rem 0;
  position: fixed;
  right: 0;
  top: 0;
  transition:
    background-color var(--transition-base),
    padding var(--transition-base),
    box-shadow var(--transition-base);
  z-index: var(--z-header);
}

.site-header--scrolled {
  background-color: var(--color-navy-deep);
  box-shadow: var(--shadow-md);
  padding: 0.75rem 0;
}

.header-inner {
  align-items: center;
  display: flex;
  justify-content: space-between;
  gap: var(--space-md);
}

/* Logo */
.logo-link {
  align-items: center;
  display: flex;
  flex-shrink: 0;
  gap: 0.6rem;
  z-index: 1;
}

.logo-img {
  display: block;
  height: 40px;
  object-fit: contain;
  transition: height var(--transition-base);
  width: auto;
}

.site-header--scrolled .logo-img {
  height: 34px;
}

.logo-name {
  color: var(--color-cream);
  font-family: var(--font-heading);
  font-size: 1.05rem;
  font-weight: 600;
  letter-spacing: 0.01em;
  transition: color var(--transition-fast);
  white-space: nowrap;
}

.logo-link:hover .logo-name {
  color: var(--color-gold-light);
}

/* Desktop nav */
.nav-desktop {
  align-items: center;
  display: none;
  gap: 2.5rem;
}

.nav-link {
  color: var(--color-cream);
  font-size: 0.925rem;
  font-weight: 500;
  letter-spacing: 0.03em;
  padding-block: 0.375rem;
  position: relative;
  transition: color var(--transition-fast);
}

.nav-link::after {
  background-color: var(--color-gold);
  bottom: 0;
  content: '';
  height: 2px;
  left: 0;
  position: absolute;
  transition: width var(--transition-base);
  width: 0;
}

.nav-link:hover,
.nav-link--active {
  color: var(--color-gold);
}

.nav-link--active::after,
.nav-link:hover::after {
  width: 100%;
}

.nav-link:focus-visible {
  border-radius: 2px;
  outline: 2px solid var(--color-gold);
  outline-offset: 4px;
}

.nav-cta-link {
  align-items: center;
  background-color: var(--color-gold);
  border: 2px solid var(--color-gold);
  border-radius: var(--radius-sm);
  color: var(--color-navy-deep);
  display: inline-flex;
  font-size: var(--fs-label);
  font-weight: 600;
  letter-spacing: 0.07em;
  min-height: 40px;
  padding: 0.5rem 1.5rem;
  text-transform: uppercase;
  transition:
    background-color var(--transition-fast),
    border-color var(--transition-fast),
    transform var(--transition-fast),
    box-shadow var(--transition-fast);
}

.nav-cta-link:hover {
  background-color: var(--color-gold-light);
  border-color: var(--color-gold-light);
  box-shadow: 0 4px 16px rgba(201, 168, 76, 0.35);
  transform: translateY(-1px);
}

.nav-cta-link:focus-visible {
  outline: 2px solid var(--color-cream);
  outline-offset: 3px;
}

/* Hamburger */
.hamburger {
  border-radius: var(--radius-sm);
  display: flex;
  flex-direction: column;
  gap: 5px;
  height: 44px;
  justify-content: center;
  padding: 10px 8px;
  transition: background-color var(--transition-fast);
  width: 44px;
  z-index: calc(var(--z-header) + 10);
}

.hamburger:hover {
  background-color: rgba(250, 248, 245, 0.1);
}

.hamburger:focus-visible {
  outline: 2px solid var(--color-gold);
  outline-offset: 2px;
}

.hamburger-bar {
  background-color: var(--color-cream);
  border-radius: 2px;
  display: block;
  height: 2px;
  transform-origin: center;
  transition:
    transform var(--transition-base),
    opacity var(--transition-fast);
  width: 100%;
}

.hamburger--open .hamburger-bar:first-child {
  transform: translateY(7px) rotate(45deg);
}

.hamburger--open .hamburger-bar:nth-child(2) {
  opacity: 0;
  transform: scaleX(0);
}

.hamburger--open .hamburger-bar:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

/* Mobile overlay */
.nav-overlay {
  align-items: center;
  background-color: var(--color-navy-deep);
  display: flex;
  flex-direction: column;
  inset: 0;
  justify-content: center;
  position: fixed;
  transform: translateX(100%);
  transition: transform 0.42s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: calc(var(--z-header) + 5);
}

.nav-overlay--open {
  transform: translateX(0);
}

.nav-overlay-close {
  align-items: center;
  border-radius: var(--radius-sm);
  color: var(--color-cream);
  display: flex;
  height: 44px;
  justify-content: center;
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
  transition: color var(--transition-fast), background-color var(--transition-fast);
  width: 44px;
}

.nav-overlay-close:hover {
  background-color: rgba(250, 248, 245, 0.08);
  color: var(--color-gold);
}

.nav-overlay-links {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  text-align: center;
}

.nav-overlay-link {
  color: var(--color-cream);
  font-family: var(--font-heading);
  font-size: clamp(1.75rem, 6vw, 2.5rem);
  font-weight: 600;
  letter-spacing: -0.01em;
  position: relative;
  transition: color var(--transition-fast);
}

.nav-overlay-link::after {
  background-color: var(--color-gold);
  bottom: -4px;
  content: '';
  height: 2px;
  left: 50%;
  position: absolute;
  transform: translateX(-50%) scaleX(0);
  transform-origin: center;
  transition: transform var(--transition-base);
  width: 100%;
}

.nav-overlay-link:hover {
  color: var(--color-gold);
}

.nav-overlay-link:hover::after {
  transform: translateX(-50%) scaleX(1);
}

.nav-overlay-link--cta {
  border: 1.5px solid rgba(201, 168, 76, 0.5);
  border-radius: var(--radius-sm);
  color: var(--color-gold);
  font-family: var(--font-body);
  font-size: var(--fs-body-lg);
  font-weight: 600;
  letter-spacing: 0.08em;
  margin-top: 0.5rem;
  padding: 0.875rem 2.5rem;
  text-transform: uppercase;
  transition: border-color var(--transition-fast), background-color var(--transition-fast);
}

.nav-overlay-link--cta::after {
  display: none;
}

.nav-overlay-link--cta:hover {
  background-color: rgba(201, 168, 76, 0.06);
  border-color: var(--color-gold);
  color: var(--color-gold-light);
}

.nav-overlay-footer {
  align-items: center;
  bottom: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  position: absolute;
}

.nav-overlay-contact {
  color: rgba(250, 248, 245, 0.45);
  font-size: var(--fs-small);
  transition: color var(--transition-fast);
}

.nav-overlay-contact:hover {
  color: var(--color-gold-light);
}

@media (min-width: 768px) {
  .nav-desktop {
    display: flex;
  }

  .hamburger {
    display: none;
  }
}
</style>
