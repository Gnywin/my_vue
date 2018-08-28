import Api from '@/api/api'
import Swiper from 'swiper/dist/js/swiper.min.js';

import MiniRefreshTools from 'minirefresh';
import 'minirefresh/dist/minirefresh.min.css'
// console.log('domain',process.env.domain)
export default {
  components: {
    // Swiper
  },
  data() {
    return {
      urlDomain: process.env.domain,
      isEnd: false, //标示列表是否已经加载完毕
      isAjax: false, //标示列表目前是否正在加载中
      pageNo: 1,
      pageSize: 10,
      productLabel: '', //标签筛选
      mySwiper: {}, //banner轮播
      advSwiper: {}, //广告轮播
      proList: [], //产品列表
      msgArr: [], //假消息列表
      bannerList: [], //轮播列表
      labelArr: [], //标签数据
      proRefresh: {},
      timer: null
    };
  },
  mounted() {
    this.init();
    this.initEvent();
    this.sysMsg();
    this.timer = setTimeout(() => {
      this.sysMsg()
    }, (this.msgArr.length || 40) * 3000)
  },
  destroyed() {
    clearInterval(this.timer)
  },
  methods: {
    init() {
      this.pageNo = 1;
      this.proList = [];
      this.isEnd = false;
      this.isAjax = false;
      this.getList();
      // this.sysMsg();
      this.getBanner();
      this.getProductLabel();
    },
    changeLabel(type) {
      this.productLabel = type;
      this.pageNo = 1;
      this.proList = [];
      this.isEnd = false;
      this.isAjax = false;
      this.getList();
    },
    /**
     * 滚动事件监听
     * @Author   shunzizhan
     * @DateTime 2018-06-26T17:20:38+0800
     * @return   {[type]}                 [description]
     */
    initEvent() {
      var _this = this;
      this.proRefresh = new MiniRefresh({
        container: '#proRefresh',
        // isUseBodyScroll:true,
        isScrollBar: false,
        down: {
          isAuto: false,
          dampRateBegin: 1,
          callback: function() {
            // 下拉事件
            _this.init();
          }
        },
        up: {
          isAuto: false,
          // loadFull:{
          //   isEnable:true
          // },
          // offset:600,
          toTop: {
            isEnable: false
          },
          contentnomore: "我也是有底线的",
          callback: function() {
            _this.pageNo += 1;
            // alert("上啦"+_this.curPageIndex);
            if (!_this.isEnd&& !_this.isAjax) {
              _this.getList();
            } else {
              _this.proRefresh.endUpLoading(true);
            }
          }
        }
      });
    },
    /**
     * 获取产品列表
     * @Author   shunzizhan
     * @DateTime 2018-06-26T11:54:07+0800
     * @return   {[type]}                 [description]
     */
    async getList() {
      var _this = this;
      this.isAjax = true;
      let list = await Api.getProList({
        pageSize: _this.pageSize,
        pageNo: _this.pageNo,
        productLabel: _this.productLabel
      });
      if (list && list.success) {
        this.isAjax = false;
        if (parseInt(this.proList.length) + parseInt(list.data.list.length) >= list.data.count) {
          this.isEnd = true;
        }
        this.proList = this.proList.concat(list.data.list);
        if (this.isEnd) {
          this.proRefresh.endUpLoading(true);
        } else {
          this.proRefresh.endUpLoading(false);
        }

        if (this.pageNo == 1) {
          this.proRefresh.endDownLoading();
        }
      }else{ 
        // this.proRefresh.endDownLoading();
        // this.proRefresh.endUpLoading(true);
      }
    },
    async getProductLabel() {
      let list = await Api.getProductLabel({});
      if (list && list.success) {
        this.labelArr = list.data;
      }
    },
    async getBanner() {
      let list = await Api.sysBanner({});
      if (list && list.success) {
        this.bannerList = list.data;
        if (this.bannerList.length == 1) {
          return;
        }
        setTimeout(() => {
          this.initBannerSwiper();
        }, 200)
      }
    },
    /**
     * 初始化banner 轮播
     * @Author   shunzizhan
     * @DateTime 2018-06-26T11:54:42+0800
     * @return   {[type]}                 [description]
     */
    initBannerSwiper() {
      if (this.mySwiper.destroy) {
        this.mySwiper.destroy();
      }
      this.mySwiper = new Swiper('.swiper-banner', {
        loop: true,
        // autoplay: 3000, //可选选项，自动滑动
        // speed: 3000,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        resizeReInit: true,
        updateOnImagesReady: true,
        pagination: '.pagination'
        // autoplayDisableOnInteraction : false
      })
    },
    /**
     * 初始化广告 轮播
     * @Author   shunzizhan
     * @DateTime 2018-06-26T11:54:42+0800
     * @return   {[type]}                 [description]
     */
    initMsgSwiper() {
      let _this = this;
      if (this.advSwiper.destroy) {
        this.advSwiper.destroy();
        // return
      }
      this.advSwiper = new Swiper('.swiper-adv', {
        loop: true,
        allowTouchMove: false,
        initialSlide: Math.ceil(Math.random() * _this.msgArr.length),
        direction: 'vertical',
        // autoplay: 3000, //可选选项，自动滑动
        // speed: 3000,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        resizeReInit: true,
        updateOnImagesReady: true
      })
    },
    async sysMsg() {
      let list = await Api.sysMsg({});
      if (list && list.success) {
        this.msgArr = list.data;
        // setTimeout(() => {
        //   this.sysMsg()
        // }, list.data.length * 3000)

        setTimeout(() => {
          this.initMsgSwiper();
        }, 200)
      }
    },
    // goItem(_name) {
    //   this.$router.push({ name: _name })
    // },
    openNewPage(url) {
      let _this = this;
      yyqb.goH5Page(_this.urlDomain + url)
    },
    /**
     * 点击banner,打开页面
     * @Author   shunzizhan
     * @DateTime 2018-07-06T17:56:27+0800
     * @param    {[type]}                 item [description]
     * @return   {[type]}                      [description]
     */
    openBanner(item) {
      let _this = this;
      // 如果没有链接，则不转跳
      if(!item.hrefUrl){
        return;
      }
      // 首先判断打开的banner是否需要登录，不只需要登录，则直接打开
      if (item.needLogin == 1) {
        let userInfo = JSON.stringify(yyqb.getLoginInfo());
        // 首先判断当前用户是否已经登录
        if (userInfo && userInfo.indexOf('userId') > -1) {
          yyqb.goH5Page(item.hrefUrl)
        } else {
          yyqb.goLogin();
        }
      } else {
        yyqb.goH5Page(item.hrefUrl)
      }
    }
  },
  filters: {
    processLoan(val) {
      if (val >= 100000) {
        if (val % 10000 > 0) {
          return (val / 10000).toFixed(2)
        } else {
          return (val / 10000)
        }

      } else {
        return val;
      }
    },
    processCount(val) {
      if (val) {
        if (val > 10000) {
          return Math.round(val / 10000) + "万人申请"
        } else {
          return val + "人申请"
        }
      } else {
        return "0人申请";
      }
    }
  }
}
