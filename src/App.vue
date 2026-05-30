<template>
  <div class="site-wrapper">
    <SiteHeader />
    <main id="main-content" tabindex="-1">
      <RouterView />
    </main>
    <SiteFooter />
  </div>
</template>

<script setup>
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<style>
.site-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100dvh;
}

main {
  flex: 1;
}

main:focus {
  outline: none;
}
</style>
