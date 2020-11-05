import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default [
  {
    path: '/',
    name: 'home',
    component: resolve => import('@/views/home/home.vue'),
    children: [
      {
        path: 'card',
        name: 'card',
        component: resolve => import('@/views/card/card.vue')
      }
    ]

  },
]
