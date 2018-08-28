// // const domain = "domain=.strinitys.com.cn;";
// // const domain = "";
// // console.log('domain',process.env.domain)
// export default {
//   getCookie(c_name) {
//     // if (!process.env.app) {
//     if (document.cookie.length > 0) {
//       var c_start = document.cookie.indexOf(c_name + "=")
//       if (c_start != -1) {
//         c_start = c_start + c_name.length + 1
//         var c_end = document.cookie.indexOf(";", c_start)
//         if (c_end == -1) { c_end = document.cookie.length }
//         return unescape(document.cookie.substring(c_start, c_end))
//       }
//     }
//     return ""
//     // } else {
//     //   // 打包app时，cookie不支持，改用localStorage
//     //   return JSON.parse(localStorage.getItem(c_name));
//     // }
//   },
//   // expireHours以分钟为单位
//   setCookie(c_name, value, c_time) {
//     // if (!process.env.app) {
//     this.delCookie(c_name);
//     // if (c_time) {
//     //   var exdate = new Date()
//     //   exdate.setTime(exdate.getTime() + c_time * 60 * 60 * 1000)
//     //   document.cookie = c_name + "=" + escape(value) +
//     //     ((c_time == null) ? "" : ";" + process.env.domain + "expires=" + exdate.toGMTString())
//     // }else{

//     // }
//     var exdate = new Date()
//     exdate.setTime(exdate.getTime() + c_time * 60 * 60 * 1000)
//     // document.cookie = c_name + "=" + escape(value) +";"+((c_time) ? ( "expires=" + exdate.toGMTString())):"" ;
//     if(c_time){
//       document.cookie = c_name + "=" + escape(value) +";expires=" + exdate.toGMTString() ;
//     }else{
//       document.cookie = c_name + "=" + escape(value);
//     }
//     // } else {
//     //   localStorage.setItem(c_name, JSON.stringify(value));
//     // }
//   },
//   // 删除cookie
//   delCookie(c_name) {
//     // if (!process.env.app) {
//     var exp = new Date();
//     exp.setTime(exp.getTime() - 1);
//     var cval = this.getCookie(c_name);
//     if (cval != null) {
//       document.cookie = c_name + "=" + cval + ";" + process.env.domain + "expires=" + exp.toGMTString();
//     }
//     // } else {
//     //   localStorage.removeItem(c_name);
//     // }
//   },
//   // 获取用户id
//   getUserId() {
//     return this.getCookie('userId');
//   },
//   // // 判断登录
//   // checkLogin(_url){
//   //   let c_userId = this.getCookie('userId');
//   //   if(!c_userId){
//   //     // let c_hashName = window.location.hash;
//   //     this.setCookie('hashName',_url);
//   //     window.location.href = "#/login";
//   //   }else{
//   //     window.location.href = _url;
//   //   }
//   // },
//   // // 更新当前保存的hashName
//   // updateHash(_url){
//   //   // let c_hashName = window.location.hash;
//   //   this.setCookie('hashName','#/'+_url);
//   // },
//   // 存放到sessionStorage
//   setItem(_key, _val) {
//     sessionStorage.setItem(_key, _val);
//   },
//   // 从sessionStorage中取
//   getItem(_key) {
//     return sessionStorage.getItem(_key);
//   }
// }
