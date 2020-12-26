import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue';
import Todos from "../views/Todos.vue";

console.log('Home', Home);

Vue.use(VueRouter)//register router as plugin


//in heere every object is special route
const routes = [
  {
    path: '/',
    // name: 'Home',
    component: Home
  },
  {
    path: '/todos',
    name: Todos,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Todos.vue')
  }
]

const router = new VueRouter({
  mode: 'history',//by default browser use hash
  // base: process.env.BASE_URL,
  base: "http://localhost:8080",
  routes
})

export default router
