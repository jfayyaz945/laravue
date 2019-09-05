import VueRouter from 'vue-router'
// Pages
import Home from './pages/Home'
//import About from './pages/About'
import Register from './pages/Register'
import Login from './pages/login'
import Dashboard from './pages/user/dashboard'

import CreateComponent from './components/CreateComponent.vue';
import IndexComponent from './components/IndexComponent.vue';
import EditComponent from './components/EditComponent.vue';
// Routes

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      auth: undefined
    }
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    meta: {
      auth: false
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      auth: false
    }
  },
  // USER ROUTES
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    meta: {
      auth: true
    }
  },
  {
    name: 'create',
    path: '/create',
    component: CreateComponent,
    meta: {
      auth: true
    }
  },
  {
      name: 'posts',
      path: '/posts',
      component: IndexComponent,
      meta: {
        auth: true
      }
  },
  {
      name: 'edit',
      path: '/edit/:id',
      component: EditComponent,
      meta: {
        auth: true
      }
  }
]
const router = new VueRouter({
  history: true,
  mode: 'history',
  routes,
})
export default router