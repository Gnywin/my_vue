import Api from '@/api/api'
export default {
  components: {
    // Swiper
  },
  data() {
    return {
      proId:this.$route.params.id,
      detailObj:{
        deadline:""
      }
    };
  },
  mounted() {
    this.getDetail();
  },
  methods: {
    async getDetail(){
      let _this = this;
      let list = await Api.getDetail({id:_this.proId});
      if(list &&list.success){
        this.detailObj = list.data;
      }
      
      // console.log(this.detailObj);
      // this.initBannerSwiper();
    },
    async yoyoSubmit(){
      // yyqb.goLogin();
      let _this = this;
      let list = await Api.countApply({id:_this.proId});
      // 首先判断是否有用户信息，如果有，则直接转跳到第三方链接，否则调用app的登录接口
      // alert(yyqb.getLoginInfo());
      let userInfo = yyqb.getLoginInfo();
      if(userInfo && userInfo.indexOf('userId')>-1){
        window.location.href = _this.detailObj.hrefUrl
      }else{
        yyqb.goLogin();
      }
    },
    // getUserInfo(){
    //   return yyqb.getLoginInfo();
    // }
  },
  filters: {
    // 处理贷款额度
    processLoan(val) {
      if (val >= 10000) {
        if (val % 10000 > 0) {
          return (val / 10000).toFixed(2)
        } else {
          return (val / 10000)
        }

      } else {
        return val;
      }
    },
    unitPointTerms(str){
      if(str){
        var arr  = str.split(',');
        var min = arr[0];
        var max = arr[arr.length-1];
        if(min==max){
          return min;
        }else{
          return min+'~'+max;
        }
      }
    }
  }
}
