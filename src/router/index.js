import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/Layout'
const Home = () => import('@/views/Home')
const Findroom = () => import('@/views/Findroom')
const Info = () => import('@/views/Info')
const My = () => import('@/views/My')
const Login = () => import('@/views/Login')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      { path: 'home', component: Home },
      { path: 'findroom', component: Findroom },
      { path: 'info', component: Info },
      { path: 'my', component: My }
    ]
  },
  { path: '/login', component: Login }
]

const router = new VueRouter({
  routes
})

export default router
