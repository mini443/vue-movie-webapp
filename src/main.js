// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vonic from 'vonic/src/index.js'

import './assets/stylus/index.styl'

// Page Components
import index from './components/index/index.vue'
import popular from './components/popular/popular.vue'
import coming from './components/coming/coming.vue'
import top from './components/top/top.vue'
import mine from './components/mine/mine.vue'
import filmDetail from './components/filmDetail/filmDetail.vue'
import personDetail from './components/personDetail/personDetail.vue'
import skin from './components/skin/skin.vue'
import collection from './components/collection/collection.vue'
import setting from './components/setting/setting.vue'

import about from './components/about/about.vue'

const routes = [
  {
    path: '/',
    component: index,
    children: [
      { path: '', redirect: '/popular' },
      { path: 'popular', component: popular },
      { path: 'coming', component: coming },
      { path: 'top', component: top },
      { path: 'mine', component: mine }
    ]
  },
  { path: '/filmDetail', component: filmDetail },
  { path: '/personDetail', component: personDetail },
  { path: '/skin', component: skin },
  { path: '/collection', component: collection },
  { path: '/setting', component: setting },
  { path: '/about', component: about }
]

/* eslint-disable no-new */
Vue.use(Vonic.app, {
  routes
})
