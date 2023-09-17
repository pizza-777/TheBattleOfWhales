import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import RoundView from '../views/RoundView.vue'
import HistoryView from '../views/HistoryView.vue'
import PastRoundView from '../views/PastRoundView.vue'
import RulesView from '../views/RulesView.vue'
import PoolView from '../views/PoolView.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'RoundView',
    component: RoundView
  },
  {
    path: '/history',
    name: 'HistoryView',
    component: HistoryView
  },
  {
    path: '/round/:roundAddress',
    name: 'PastRound',
    component: PastRoundView
  },
  {
    path: '/rules',
    name: 'Rules',
    component: RulesView
  },
  {
    path: '/pool',
    name: 'Pool',
    component: PoolView
  }
]

const router = new VueRouter({
  routes
})

export default router
