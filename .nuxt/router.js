import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _382adea8 = () => interopDefault(import('../client/pages/dang-ki/index.vue' /* webpackChunkName: "pages/dang-ki/index" */))
const _f0cab792 = () => interopDefault(import('../client/pages/dang-nhap/index.vue' /* webpackChunkName: "pages/dang-nhap/index" */))
const _23aba2a6 = () => interopDefault(import('../client/pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/dang-ki",
    component: _382adea8,
    name: "dang-ki"
  }, {
    path: "/dang-nhap",
    component: _f0cab792,
    name: "dang-nhap"
  }, {
    path: "/",
    component: _23aba2a6,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
