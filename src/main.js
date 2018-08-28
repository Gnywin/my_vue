// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '../config/rem'
import 'swiper/dist/css/swiper.css';
// import MiniRefreshTools from 'minirefresh';
// import 'minirefresh/dist/minirefresh.min.css'

// import Api from '@/api/api'
// import myheader from '@/components/common/header/header.vue'
// import myfooter from '@/components/common/footer/footer.vue'

// import { Toast} from 'vux'
// Vue.use(Toast)

Vue.config.productionTip = false


// Vue.prototype.validate = validate;
// import cookie from '@/tools/cookie';
/* 路由发生变化修改页面title */
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  // if (to.meta.authen) {
  //   // if (!cookie.getCookie('departmentId')) {
  //   //   next({
  //   //     path: '/'
  //   //     // query: { redirect: to.fullPath }
  //   //   })
  //   // } else {
  //   //   next()
  //   // }
  // } else {
  //   next() // 确保一定要调用 next()
  // }
  next() // 确保一定要调用 next()
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
