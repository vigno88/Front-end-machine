import Vue from 'vue'
import VueRouter from 'vue-router'

/* Views */
import Landing from '@/views/Landing.vue'
import Selection from '@/views/Selection.vue'
import Product from '@/views/Product.vue'

Vue.use(VueRouter)

  const routes = [
  { path: '/', component: Landing },
  { path: '/selection', component: Selection },
  { path: '/product/:id', component: Product },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.replace('/')

export default router
