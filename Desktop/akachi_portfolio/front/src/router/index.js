import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import MyUpdate from '../views/MyUpdate.vue'
import SkillEdit from '../views/SkillEdit.vue'
import CreateSkill from '../views/CreateSkill.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/myupdate',
    name: 'myupdate',
    component: MyUpdate
  },
  {
    path: '/skilledit',
    name: 'SkillEdit',
    component: SkillEdit,
    props: true
  },
  {
    path: '/createskill',
    name: 'CreateSkill',
    component: CreateSkill,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
