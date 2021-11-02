import Vue from 'vue'
import VueRouter from 'vue-router'
import RandomChars from '../views/RandomChars.vue'
import Cost from '../components/Cost.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/random',
    name: 'Random',
    component: RandomChars
  },
 
  {
    path: '/',
    name: 'Cost',
    component: Cost
  },

]

const router = new VueRouter({
  routes
})

export default router
