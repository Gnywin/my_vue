import axios from 'axios';
var _this = this;
// console.log('https>>>>'+process.env.API_ROOT)
const ajaxMethod = {
  ajax: function(type, method, param) {
    // param.t = new Date().getTime();
    // Mint.Indicator.open('加载中...');
    return axios({
        method: 'get',
        url: process.env.API_ROOT  + method,
        // url: process.env.API_ROOT + '/Paper/' + method,
        params: param
    }).then(async (response) => {
        // Mint.Indicator.close();
         return response.data;
    }).catch((error) => {
        // console.log('get请求失败:', error)
        // Mint.Indicator.close();
    });
  },
  ajaxPost: function(type, method, param) {
    // param.t = new Date().getTime();
    // Mint.Indicator.open('加载中...');
    return axios({
        method: 'post',
        // url: process.env.API_ROOT  + method,
        url: process.env.API_ROOT  + method,
        data: param
    }).then(async (response) => {
        // Mint.Indicator.close();JSON.parse(response.data);
        return response.data;
    }).catch((error) => {
        // console.log('post请求失败:', error);
        // Mint.Indicator.close();
    });
  },
  // wechatPay:function(url){
  //   return axios({
  //       method: 'get',
  //       url: url
  //   }).then(async (response) => {
  //       // Mint.Indicator.close();
  //       return response.data;
  //   }).catch((error) => {
  //       console.log('get请求失败:', error)
  //       // Mint.Indicator.close();
  //   });
  // }
}
//输出接口请求方法
export default {
  get: function(method, param) {
    return ajaxMethod.ajax('get', method, param)
  },
  post: function(method, param ) {
    return ajaxMethod.ajaxPost('post', method, param )
  },
  // wepay(url){
  //   return ajaxMethod.wechatPay(url)
  // }
}