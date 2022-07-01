import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/Layout'
const Home = () => import('@/views/Home')
const Findroom = () => import('@/views/Findroom')
const Info = () => import('@/views/Info')
const My = () => import('@/views/My')
const Login = () => import('@/views/Login')
const CityList = () => import('@/components/CityList')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      { path: 'home', component: Home, name: 'home' },
      { path: 'findroom', component: Findroom },
      { path: 'info', component: Info },
      { path: 'my', component: My, name: 'my' }
    ]
  },
  { path: '/login', component: Login },
  { path: '/citylist', component: CityList }
]

const router = new VueRouter({
  routes
})

export default router
