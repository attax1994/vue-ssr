import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        component: () => import('./views/Home.vue'),
        children: [
          {
            path: 'item/:id',
            component: () => import('./views/Item.vue'),
          },
        ],
      },
      {
        path: '*',
        component: () => import('./views/Empty.vue'),
      },
    ],
  })
}
