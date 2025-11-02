import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/women',
    name: 'Women',
    component: () => import('../views/WomenView.vue')
  },
  {
    path: '/men',
    name: 'Men',
    component: () => import('../views/MenView.vue')
  },
  {
    path: '/stories',
    name: 'Stories',
    component: () => import('../views/StoriesView.vue')
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('../views/SearchView.vue')
  },
  {
    path: '/account',
    name: 'Account',
    component: () => import('../views/AccountView.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('../views/CartView.vue')
  },
  {
    path: '/stores',
    name: 'Stores',
    component: () => import('../views/Stores.vue')

  },
  {
    path: '/careers',
    name: 'Careers',
    component: () => import('../views/Careers.vue')
  },{ 
  path: '/products',
  name: 'Products',
  component: () => import('../views/Products.vue')
  },
  {
    path: '/articles/:id',
    name: 'ArticleDetail',
    component: () => import('@/views/ArticleDetail.vue')
  }, 
  {
     path: '/product/:id', 
     component: () => import('../views/ProductDetail.vue'),
     props: true 
    },
  
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router