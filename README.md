# yoyoqianbao_h5

> 游友钱包h5是基本复用web_h5的页面布局，从而提供给app嵌套的页面，与web_h5不同之处，此处所有数据，都是走接口请求【web_h5因考虑SEO,首屏数据，都是通过jsp渲染】

## 项目环境
 - node.js,[详见官网](http://www.runoob.com/nodejs/nodejs-install-setup.html)
 - 安装vuejs,`npm install vue`,[详见vue](https://cn.vuejs.org/v2/guide/installation.html)
 - 安装依赖包，`npm install`
 - 启动项目，`npm run dev`
 - 打包项目，`npm run build`
 - 线上地址：http://h5.yoyoqianbao.com 【测试环境，本地绑定host 10.0.7.6 h5.yoyoqianbao.com】
 - 接口地址：http://api.yoyoqianbao.com 【测试环境，本地绑定host 10.0.7.6 api.yoyoqianbao.com】

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8081
npm run dev

# build for production with minification
npm run build

```

## 项目结构
 - build webpack启动项目的基本配置文件
 - config 全局设置的一些配置文件
 - src 开发环境的资源
 	- api 后台的接口地址及方法
 	- img 项目使用的图标
 	- pages 所有页面
 		- about 关于我们
 		- ~~creditCard~~ 信用卡管理，目前废弃，直接使用第三链接
 		- empty 空白页，目前也暂时没有用到
 		- product 贷款产品，列表页、详情页
 		- protocol 服务协议页  
 	- router 项目路由的配置，文件之间的关系，在路由中就可以看出来
 	- style 全局的样式文件
 	- tools 基础的公共类、方法，涉及日期格式处理、cookie的操作（h5中使用的是cookie+sessionStorage,app中使用的是localStorage+sessionStorage）
 - static 存放的部分静态资源，主要是图片 

## 路由
```javaScript
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
    {
      path: '/card',
      name: 'creditCard',
      component: creditCard,
      meta: {
        title: "信用卡",
        // authen:true
      }
    }]
})
```
> - 贷款产品列表：http://h5.yoyoqianbao.com/#/ 
> - 贷款产品详情：http://h5.yoyoqianbao.com/#/pro/:id
> - 关于我们 : http://h5.yoyoqianbao.com/#/aboutus 
> - 服务协议：http://h5.yoyoqianbao.com/#/protocol  

## tips
- 列表轮播：使用的`swiper4.X`
- 列表中下拉刷新，上拉加载：使用的是[MiniRefresh](http://www.minirefresh.com/minirefresh-doc/api/api_minirefresh.html)
- 列表页，打开新页面：调用移动人员提供的接口`yyqb.goH5Page(url)`
- 详情页，点申请：调用移动人员提供的接口`yyqb.goLogin();`

## 代码仓库及发布
- 仓库名：st_yoyoqianbao_h5
- 发布：prp平台 【https://prpv2.stnts.com/ptask/task/list/】
	- 测试环境 yoyoqianbao-h5-test
	- 线上环境 yoyoqianbao-h5

## 版本
| 日期       |    版本 | 稳定分支 |备注  |
| :--------: | :------:|:--------:| :--  |
| 2018-08-16 | v1.0.2  |  master |  增加贷款超市官网马甲包 http://h5.yoyoqianbao.com/static/website/index.html http://h5.yoyoqianbao.com/static/website/protocol.html 更新apk|
| 2018-08-02 | v1.0.1  |  master |  增加贷款超市马甲包 /loan/contact /loan/introduce |
| 2018-07-04 | v1.0.0  |  master |   |
