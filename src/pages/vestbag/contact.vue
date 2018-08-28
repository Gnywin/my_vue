<style lang="less" scoped>
	.about-wrapper{
		padding-top:140px;
		text-align:center;
		.logo{
			width:124px;
		}
		.app-name{
			margin-top:20px;
			font-size:32px;
			color:#666;
		}
		.app-version{
			margin-top:24px;
			font-size:28px;
			color:#999;
		}
		.app-desc{
			margin-top:20px;
			text-align: left;
			padding: 0 44px;
    	font-size: 32px;
    	color: #666;
    	line-height: 48px;
    	a{
    		color: #666;
    		text-decoration: underline;
    	}
		}
	}
</style>
<template>
	<div class="about-wrapper">
		<img class="logo" src="../../img/youdao_logo.jpg" alt="">
		<div class="app-name">{{appName}}</div>
		<div class="app-version">V1.0.0</div>
		<div class="app-desc">
        {{appName}}是一款金融理财资讯新闻产品，专注于移动互联网，为用户提供有价值的、个性化的、理财数据可视化、专业权威的资讯服务
    </div>
    <div class="app-desc">
    联系电话：<a href="tel:02786655050">027-86655050</a>
    </div>
	</div>
</template>
<script>
export default {
  data() {
    return {
      appName: process.env.APP_NAME
    };
  }
}
</script>