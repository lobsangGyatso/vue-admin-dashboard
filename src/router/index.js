import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../layout/Layout.vue'
import dashboard from '../views/dashboard.vue'
import UserProfile from '../views/dashboard/pages/UserProfile.vue'
import Iphone from '../views/component/iphone.vue'
import Table from '../views/tbale/Table.vue'
import Image from '../views/slot/image.vue'
import Shoppingcart from '../views/clothes.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        name: 'DashBoard',
        path: '',
        component: dashboard
      },
      {
        name: 'User Profile',
        path: 'pages/user',
        component: UserProfile
      },
      {
        name: 'iphone',
        path: 'pages/iphone',
        component: Iphone
      },
      {
        name: 'table',
        path: 'pages/table',
        component: Table
      },
      {
        name: 'img',
        path: 'pages/img',
        component: Image
      },
      {
        name: 'shopping card',
        path: 'pages/shoppingcard',
        component: Shoppingcart
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
