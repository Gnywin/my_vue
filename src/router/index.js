import Vue from 'vue'
import Router from 'vue-router'

import home from '@/crud/home.vue'
import range from '@/crud/range.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      meta: {
        title: "我的组件"
      }
    },{
      path: '/range',
      name: 'range',
      component: range,
      meta: {
        title: "双向滑动",
        // authen:true
      }
    }
    ]
})
