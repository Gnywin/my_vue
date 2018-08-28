// //输出接口请求方法
// export default {
//   userName(str) {
//     var regExc = /^[\w\W]{2,10}$/;
//     if (str) {
//       if (!regExc.test(str)) {
//         return "请输入2~10位用户名";
//       }
//     } else {
//       return "请输入用户名";
//     }
//   },
//   name(str) {
//     var regTel = /^[\u4E00-\u9FA5\uf900-\ufa2d\w\s]{2,10}$/;
//     if (str) {
//       if (!regTel.test(str)) {
//         return '请输入2~10位数字、字母、中文或组合的姓名';
//       }
//     } else {
//       return '请输入2~10位数字、字母、中文或组合的姓名';
//     }
//   },
//   msgCode(str) {
//     var regExc = /^\d{6,6}$/;
//     if (str) {
//       if (!regExc.test(str)) {
//         return "请输入6位短信校验码";
//       }
//     } else {
//       return "请输入6位短信校验码";
//     }
//   },
//   pwd(str) {
//     var regExc = /^\w{6,20}$/;
//     if (str) {
//       if (!regExc.test(str)) {
//         return "请输入6~20位数字、字母、下划线或组合";
//       }
//     } else {
//       return "请输入密码";
//     }
//   },
//   tel(str) {
//     var regExc = /^1[345789]\d{9}$/;
//     if (str) {
//       if (!regExc.test(str)) {
//         return "请输入11位有效手机号";
//       }
//     } else {
//       return "请输入手机号";
//     }
//   },
//   address(arr) {
//     if (arr.length < 1) {
//       return '请选择地址';
//     }
//   },
//   dAddress(str){
//     if(!str){
//       return '请输入详细地址';
//     }
//   }
// }
