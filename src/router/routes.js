
import Portfolio from 'pages/Portfolio'
import ContactMe from 'pages/ContactMe'
import Clients from 'pages/Clients'
import AboutMe from 'pages/AboutMe'
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      {
        path: '/porfolio', // here it is, route /user/profile
        component: Portfolio // we reference /src/pages/Profile.vue imported above
      },
      {
        path: '/contact-me', // here it is, route /user/profile
        component: ContactMe // we reference /src/pages/Profile.vue imported above
      },
      {
        path: '/clients', // here it is, route /user/profile
        component: Clients // we reference /src/pages/Profile.vue imported above
      },
      {
        path: '/about-me', // here it is, route /user/profile
        component: AboutMe // we reference /src/pages/Profile.vue imported above
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
