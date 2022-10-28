import { createRouter, createWebHistory } from 'vue-router'

const CateGory = () => import('views/category/CateGory')
const CartView = () => import('views/cart/CartView')
const HomeView = () => import('views/home/HomeView')
const ProFile = () => import('views/profile/ProFile')
const LoginView = () => import('views/login/LoginView')
const RegisterView = () => import('views/login/RegisterView')
const CarRepairLoginView = () => import('views/carRepair/CarRepairLoginView')
const CarRepairNoteView = () => import('views/carRepair/CarRepairNoteView')
const CarRepairSearchView = () => import('views/carRepair/CarRepairSearchView')

const CsvView = () => import('views/csv/CsvView')

const routes = [
  {
    path: '',
    redirect: '/login'
  },
  {
    path: '/login',
    component: LoginView
  },
  {
    path: '/register',
    component: RegisterView
  },
  {
    path: '/home',
    component: HomeView
  },
  {
    path: '/cart',
    component: CartView
  },
  {
    path: '/category',
    component: CateGory
  },
  {
    path: '/profile',
    component: ProFile
  },
  {
    path: '/csv',
    component: CsvView
  },
  {
    path: '/carRepairLogin',
    component: CarRepairLoginView
  },
  {
    path: '/carRepairNote',
    component: CarRepairNoteView
  },
  {
    path: '/carRepairSearch',
    component: CarRepairSearchView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
