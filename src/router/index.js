import HomePage from '../pages/HomePage.vue'
import AboutPage from '../pages/AboutPage.vue'
import ContactPage from '../pages/ContactPage.vue'

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
    meta: {
      title: 'Zenith Blazee | Mutual Fund Distributor',
      description:
        'Zenith Blazee (ARN-334080) helps individuals invest in mutual funds with personalised, goal-based financial planning. Talk to an advisor today.'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage,
    meta: {
      title: 'About Us | Zenith Blazee',
      description:
        'Meet Annkkur Bandhu and Dhaval Pitkar, the partners behind Zenith Blazee — combining financial depth with a genuinely client-first approach to mutual fund distribution.'
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactPage,
    meta: {
      title: 'Contact Us | Zenith Blazee',
      description:
        'Get in touch with Zenith Blazee to start your mutual fund investment journey. ARN-334080.'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]
