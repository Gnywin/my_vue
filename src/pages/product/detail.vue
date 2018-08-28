<style src="./detail.less" lang="less" scoped></style>
<template>
	<div class="main">
    <div class="tips-info"><em class="ico ico-info"></em><span>同时申请多个平台，可以大大提高下款率哦！</span></div>
    <div class="pro-detail bg-white">
      <div class="flex">
        <div class="pro-img">
          <img :src="detailObj.logoUrl" alt="">
        </div>
        <div class="flex-1">
          <h1 class="pro-name">{{detailObj.productName}}<span class="pro-apply">{{detailObj.applyCount}}人申请</span></h1>
          <div class="tag-group"><span v-for="tag in detailObj.productLabel ? detailObj.productLabel.split(','):[]">{{tag}}</span></div>
          <div class="pro-adv">{{detailObj.advDescription}}</div>
        </div>

      </div>
      
      <div class="flex card-group">
        <div class="card flex-3">
          <p class="card-title">可贷金额</p>
          <!-- <p class="card-num">2000~50000<span class="card-unit">元</span></p> -->
          <p class="spec-font" v-if="detailObj.minMoney==detailObj.maxMoney">
            <span class="card-num">{{detailObj.maxMoney}}</span><span class="card-unit">元</span>
          </p>
          <p class="spec-font" v-else>
            <span class="card-num">{{detailObj.minMoney | processLoan}}</span><span class="card-unit" v-if="detailObj.minMoney<10000">元</span><span class="card-unit" v-else>万元</span>
            <span class="card-num">~</span>
            <span class="card-num">{{detailObj.maxMoney | processLoan}}</span><span class="card-unit" v-if="detailObj.maxMoney<10000">元</span><span class="card-unit" v-else>万元</span>
          </p>
        </div>
        <div class="card flex-2">
          <p class="card-title">可贷期限</p>
          
          <!-- <p class="card-num" v-if="detailObj.deadline.termType==2">{{detailObj.deadline.breakpointTerms}}<span class="card-unit">个月</span></p> -->
          <p class="card-num" v-if="detailObj.deadline.termType==3">{{detailObj.deadline.breakpointTerms | unitPointTerms}}<span class="card-unit">天</span></p>
          <p class="card-num" v-else>{{detailObj.deadline.breakpointTerms | unitPointTerms}}<span class="card-unit">个月</span></p>
        </div>
        <div class="card flex-1" v-if="detailObj.showRateDay==1">
          <p class="card-title">年利率</p>
          <p class="card-num">{{detailObj.minProfitRateYear}}<span class="card-unit">%</span></p>
        </div>
        <div class="card flex-1" v-if="detailObj.showRateDay==2">
          <p class="card-title">月利率</p>
          <p class="card-num">{{detailObj.minProfitRateMonth}}<span class="card-unit">%</span></p>
        </div>
        <div class="card flex-1" v-if="detailObj.showRateDay==3">
          <p class="card-title">日利率</p>
          <p class="card-num">{{detailObj.minProfitRateDay}}<span class="card-unit">%</span></p>
        </div>
      </div>
    </div>
    <div class="apply-group bg-white">
      <h2 class="sub-title">申请条件</h2>
      <div class="apply-desc" v-html="detailObj.requirement">
      </div>
    </div>
    <div class="apply-group bg-white">
      <h2 class="sub-title">申请流程</h2>
      <div class="apply-img">
        <img :src="detailObj.processImgUrl" alt="">
      </div>
    </div>
    <div class="apply-group bg-white">
      <h2 class="sub-title">产品说明</h2>
      <div class="apply-desc" v-html="detailObj.productExplain">
      </div>
    </div>
    <div class="btn" @click="yoyoSubmit()">
      立即申请
    </div>
  </div>
</template>
<script src="./detail"></script>