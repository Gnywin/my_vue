import Vue from 'vue'
import Router from 'vue-router'

import productList from '@/pages/product/list.vue'
import productDetail from '@/pages/product/detail.vue'

import aboutUs from '@/pages/about/index.vue'
import protocol from '@/pages/protocol/index.vue'

// import creditCard from '@/pages/creditCard/index.vue'
import vestSupport from '@/pages/vestbag/support.vue'
import vestPrivacy from '@/pages/vestbag/privacy.vue'
import vestProtocol from '@/pages/vestbag/protocol.vue'
import vestContact from '@/pages/vestbag/contact.vue'
import vestDisclaimer from '@/pages/vestbag/disclaimer.vue'
// 小贷马甲包
import loanContact from '@/pages/vestbag/loans/contact.vue'
import loanIntroduce from '@/pages/vestbag/loans/introduce.vue'

import range from '@/crud/range.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'product',
      component: productList,
      meta: {
        title: "贷款产品列表"
      }
    },
    {
      path: '/pro/:id',
      name: 'proDetail',
      component: productDetail,
      meta: {
        title: "贷款产品详情",
        // authen:true
      }
    },
    {
      path: '/aboutus',
      name: 'about',
      component: aboutUs,
      meta: {
        title: "关于我们"
        // authen:true
      }
    },
    {
      path: '/protocol',
      name: 'protocol',
      component: protocol,
      meta: {
        title: "服务协议"
        // authen:true
      }
    },
    // {
    //   path: '/card',
    //   name: 'creditCard',
    //   component: creditCard,
    //   meta: {
    //     title: "信用卡",
    //     // authen:true
    //   }
    // }
    {
      path: '/support',
      name: 'support',
      component: vestSupport,
      meta: {
        title: "技术支持",
        // authen:true
      }
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: vestPrivacy,
      meta: {
        title: "隐私政策",
        // authen:true
      }
    },
    {
      path: '/regprotocol',
      name: 'v_protocol',
      component: vestProtocol,
      meta: {
        title: "注册协议",
        // authen:true
      }
    },{
      path: '/contact',
      name: 'contact',
      component: vestContact,
      meta: {
        title: "联系我们",
        // authen:true
      }
    },{
      path: '/disclaimer',
      name: 'disclaimer',
      component: vestDisclaimer,
      meta: {
        title: "免责说明",
        // authen:true
      }
    },{
      path: '/loan/contact',
      name: 'loanContact',
      component: loanContact,
      meta: {
        title: "关于我们",
        // authen:true
      }
    },{
      path: '/loan/introduce',
      name: 'loanIntroduce',
      component: loanIntroduce,
      meta: {
        title: "产品介绍",
        // authen:true
      }
    },{
      path: '/range',
      name: 'range',
      component: range,
      meta: {
        title: "左右间距",
        // authen:true
      }
    }
    ]
})
