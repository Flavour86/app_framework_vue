import Vue from 'vue'
import Router from 'vue-router'
// import generateRouter from '../generator/router'

Vue.use(Router)
export let routes = []

const routerOptions = {
  routes,
  linkActiveClass: 'active'
}

export default routerOptions
