import { ViteSSG } from 'vite-ssg'
import { createHead } from '@vueuse/head'
import App from './App.vue'
import { routes } from './router'
import './assets/css/main.css'

export const createApp = ViteSSG(
  App,
  {
    routes,
    scrollBehavior (to, from, savedPosition) {
      if (savedPosition) return savedPosition
      return { top: 0, behavior: 'smooth' }
    }
  },
  ({ app, router, isClient }) => {
    // Head management (works both SSG + client)
    const head = createHead()
    app.use(head)

    // Update <title> and meta description on client navigation
    if (isClient) {
      router.afterEach((to) => {
        document.title = to.meta?.title || 'Zenith Blazee'
        const descTag = document.querySelector('meta[name="description"]')
        if (descTag && to.meta?.description) {
          descTag.setAttribute('content', to.meta.description)
        }
      })

      // AOS uses window/document — client only
      import('aos').then(({ default: AOS }) => {
        AOS.init({
          duration: 700,
          easing: 'ease-out-cubic',
          once: true,
          offset: 60
        })
      })
    }
  }
)
