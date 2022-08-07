import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import About from '../views/AboutView.vue'
import LogInView from '../views/LogInView.vue'
import ProjectView from '../views/project/ProjectView.vue'
import ProjectDetailsView from '../views/project/ProjectDetailsView.vue'
import CreateProject from '../views/project/CreateProject.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/login',
    name: 'login',
    component: LogInView
  },
  {
    path: '/project',
    name: 'project',
    component: ProjectView
  },
  {
    path: '/projectdetails/:id',
    name: 'projectdetails',
    component: ProjectDetailsView,
    props: true
  },
  {
    path: '/createproject',
    name: 'createproject',
    component: CreateProject
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
