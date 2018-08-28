// import Api from '@/api/api'
// var wx = require('weixin-js-sdk');
// export default {
//   list:{},
// 	// 获取礼券
//   async getCoupon() {
//     let userId = Api.getUserId();
//     if (userId) {
//       let list = await Api.share({ "userId": userId });
//       // console.log(list);
//       // alert(JSON.stringify(list));
//     }
//   },
//   // 初始化条件
//   initWeXin() {
//    let _this = this;
//    let img_url = "http://www.strinitys.com.cn/static/img/share.jpg";
//    var _img = document.getElementsByTagName('img')[0];
//    if(_img){
//    	 img_url = _img.getAttribute('src');
//    	 if(img_url.indexOf('http')<0){
//    	 	img_url = window.location.origin + img_url;
//    	 }
//    }
//    // document.getElementsByTagName('img')[0] ? ((document.getElementsByTagName('img')[0].getAttribute('src').indexOf('http')<0)?(window.location.origin +document.getElementsByTagName('img')[0].getAttribute('src')):document.getElementsByTagName('img')[0].getAttribute('src')):'http://www.strinitys.com.cn/static/img/share.jpg',
//    let dataShare = {
//     title: document.getElementById("shareTitle").value,
//     desc: document.getElementById("description").content ,
//     link: document.getElementById("shareLink").value,
//     icon:  img_url,
//     imgUrl: img_url,
//     type: 'link',
//     dataUrl: '',
//     success: function() {
//       _this.getCoupon();
//     },
//     cancel: function() {
//       // alert('fail')
//     }
//    }
//     this.call(dataShare);
//   },
//   // 分享
//   async call(_dataShare) {
//     let _this = this;
//     if (Api.isWechat()) {
//       if(!_this.list.appId){
//         _this.list = await Api.weChatParam({ url: window.location.href });
//       }
      
//       // alert(JSON.stringify(list))
//       wx.config({
//         debug: false,
//         appId: _this.list.appId,
//         timestamp: _this.list.timestamp,
//         nonceStr: _this.list.nonceStr,
//         signature: _this.list.signature,
//         jsApiList: ['onMenuShareAppMessage', 'onMenuShareTimeline', 'onMenuShareQQ', 'onMenuShareWeibo', 'onMenuShareQZone']
//       });
//       wx.ready(function() {
//         // 分享到朋友圈 
//         wx.onMenuShareTimeline(_dataShare);
//         // // 分享给微信好友                
//         wx.onMenuShareAppMessage(_dataShare);
//         // // 分享到QQ好友                
//         wx.onMenuShareQQ(_dataShare);
//         // // 分享到微博                
//         wx.onMenuShareWeibo(_dataShare);
//         // // 分享到QQ空间                
//         wx.onMenuShareQZone(_dataShare);
//       })
//     }
//   }
// }