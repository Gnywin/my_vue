import tool from '@/tools/https'
export default {
  // 产品列表页假消息 
  sysMsg(param) {
    return tool.get('/sys/advList', param);
  },
  sysBanner(param) {
    return tool.get('/sys/bannerList', param);
  },
  getProList(param){
    return tool.get('/loans/list', param);
  },
  getDetail(param){
  	return tool.get('/loans/get', param);
  },
  countApply(param){
    return tool.get('/loans/applyStatisticsUp', param);
  },
  getProductLabel(param){
    return tool.get('/loans/getProductLabel', param);
  }
  
}
