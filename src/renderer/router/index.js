import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: require('@/views/LandingPage')
    },
    {
      path: '/erweima',
      name: 'erweima-page',
      component: require('@/views/ErweimaPage')
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
