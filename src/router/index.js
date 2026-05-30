import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import AboutPage from '../pages/AboutPage.vue'
import ContactPage from '../pages/ContactPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
    meta: {
      title: 'Zenith Blazee | Mutual Fund Distributor',
      description:
        'Zenith Blazee helps individual investors achieve their financial goals through goal-based mutual fund planning. AMFI Registered Mutual Fund Distributor | ARN-334080.'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage,
    meta: {
      title: 'About Us | Zenith Blazee',
      description:
        'Meet Annkkur Bandhu and Dhaval Pitkar, the partners behind Zenith Blazee — combining financial depth with a genuinely client-first approach.'
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactPage,
    meta: {
      title: 'Contact Us | Zenith Blazee',
      description:
        'Get in touch with Zenith Blazee to start your mutual fund investment journey. We respond within 1–2 working days.'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    return { top: 0, behavior: 'smooth' }
  }
})

router.afterEach((to) => {
  document.title = to.meta?.title || 'Zenith Blazee'
  const descTag = document.querySelector('meta[name="description"]')
  if (descTag && to.meta?.description) {
    descTag.setAttribute('content', to.meta.description)
  }
})

export default router
