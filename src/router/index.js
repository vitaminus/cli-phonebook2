import Vue from 'vue'
import Router from 'vue-router'
import Phones from '@/components/Phones'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Phones',
      component: Phones
    }
  ]
})
