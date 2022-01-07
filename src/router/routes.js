
import Portfolio from 'pages/Portfolio'
import ContactMe from 'pages/ContactMe'
import Clients from 'pages/Clients'
import AboutMe from 'pages/AboutMe'
import Experiments from 'pages/Experiments'
import WorkExperience from 'pages/WorkExperience'
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      {
        path: '/portfolio',
        component: Portfolio
      },
      {
        path: '/contact-me',
        component: ContactMe
      },
      {
        path: '/work-experience',
        component: WorkExperience
      },
      {
        path: '/clients',
        component: Clients
      },
      {
        path: '/experiments',
        component: Experiments
      },
      {
        path: '/about-me',
        component: AboutMe
      }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
