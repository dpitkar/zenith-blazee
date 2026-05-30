<template>
  <div class="site-wrapper">
    <SiteHeader />
    <main id="main-content" tabindex="-1">
      <NuxtPage />
    </main>
    <SiteFooter />
  </div>
</template>

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
