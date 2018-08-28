<style src="./list.less" lang="less"></style>
<!-- <style src="https://www.yoyoqianbao.com/static/mobile/css/common.min.css?v=201806211653002"></style> -->
<template>
  <!-- <div class="outerScroller">
  	<div class="scroll-refresh"><span class="load-refresh"></span><span>加载中…</span></div>
    <div class="scroll" id="scroll"> -->
  <div id="proRefresh" class="minirefresh-wrap">
    <div class="minirefresh-scroll">  
      <div id="content-body">
        <div class="yoyo-banner" >
          <!-- <div class="swiper-main"> -->
          <div class="swiper-container swiper-banner" v-if="bannerList.length>0">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="item in bannerList" @click="openBanner(item)">
                <img :src="item.imgUrl" alt="" />
              </div>
            </div>
            <!-- <div class="pagination"></div> -->
          </div>
        </div>
        <div class="">
          <div class="content-box">
            <div class="swiper-container swiper-container-vertical swiper-adv">
              <div class="swiper-wrapper">
                <div class="swiper-slide adv-tips" v-for="item in msgArr">
                  <img class="adv-img" :src="item.logo" alt="">
                  <p class="adv-name">{{item.productName}}</p>
                  <p class="adv-content">{{item.content}}</p>
                </div>
              </div>
            </div>
            <div class="filter-group" v-if="labelArr.length>0">
              <a class="filter-item " :class="{active:productLabel==''}" @click="changeLabel('')">热门推荐</a>
              <a class="filter-item" v-for="item in labelArr" :class="{active:productLabel==item.value}" @click="changeLabel(item.value)">{{item.label}}</a>
              <!-- <a class="filter-item" href="">大额低息</a> {{item.split(':')[1]}}
              <a class="filter-item" href="">不上征信</a>
              <a class="filter-item" href="">不查芝麻</a> -->
            </div>
            <div class="list-item" v-for="item in proList" @click="openNewPage('#/pro/'+item.id)">
		        	<span class="tag " :class="{ 'tag-hot':item.hotLabel==1,'tag-easy':item.hotLabel==2,'tag-new':item.hotLabel==3,'tag-large':item.hotLabel==4,'tag-small':item.hotLabel==5}"></span>
		          <div class="list-body">
		            <div class="pro-img">
		              <img :src="item.logoUrl" alt="">
		            </div>
		            <div class="flex-1">
		              <h2 class="pro-title">{{item.productName}}</h2>
		              <div class="pro-tag">
		                <span v-for="tag in item.productLabel ? item.productLabel.split(',').slice(0, 3):[]">{{tag}}</span>
		              </div>
		              <div class="m-t flex">
		                <p class="flex-1 pro-ratio" v-if="item.showRateDay == 3">
		                  <span class="font-lg font-arial">{{item.minProfitRateDay}}</span><span class="font-arial">%</span>
		                  <span class="pro-item-title">日利率</span>
		                </p>
		                <p class="flex-1 pro-ratio" v-if="item.showRateDay == 2">
		                  <span class="font-lg font-arial">{{item.minProfitRateMonth}}</span><span class="font-arial">%</span>
		                  <span class="pro-item-title">月利率</span>
		                </p>
		                <p class="flex-1 pro-ratio" v-if="item.showRateDay == 1">
		                  <span class="font-lg font-arial">{{item.minProfitRateYear}}</span><span class="font-arial">%</span>
		                  <span class="pro-item-title">年利率</span>
		                </p>
		                <p class="flex-1 pro-limit">
		                  <span class="font-lg font-arial">{{item.maxMoney | processLoan}}</span><span v-if="item.maxMoney>=100000">万</span><span v-else>元</span>
		                  <span class="pro-item-title">最高可贷</span>
		                </p>
		              </div>
		            </div>
		          </div>
		          <div class="list-footer">
		            <span>{{item.advDescription}}</span> <span class="f-r">{{item.applyCount|processCount}}</span>
		          </div>
		        </div>
          </div>
          <!-- <div class="footer">
            <p class="" :class="{hide:isEnd } ">加载更多</p>
            <p class="line" :class="{hide:!isEnd } ">我也是有底线的</p>
          </div> -->
        </div>
        <div class="no-data hide">
          <img src="https://www.yoyoqianbao.com/static/images/empty.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./list"></script>
