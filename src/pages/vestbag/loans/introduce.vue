<style lang="less" scoped>
	.about-wrapper{
		padding-top:50px;
		text-align:center;
		.logo{
			width:100px;
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
			margin-top:50px;
			text-align: left;
			padding: 0 44px;
    	font-size: 30px;
    	color: #666;
    	line-height: 48px;
    	p{
    		margin-top:20px;
    	}
    	.label{
    		display:inline-block;
    		width:50px;
    		height:50px;
    		line-height:50px;
    		border-radius: 50%;
    		color:#fff;
    		background-color: rgb(64,141,247);
    		text-align:center;
    		margin-right:10px;
    	}
    	
		}
		.color-main{
  		color:rgb(64,141,247);
  	}
  	.color-default{
  		color:#333;
  	}
  	.font-24{
  		font-size:24px;
  	}
  	.text-center{
  		text-align:center;
  	}
	}
</style>
<template>
	<div class="about-wrapper">
		<img class="logo" src="../../../img/logo.png" alt="">
		<div class="app-version">游友钱包 V1.0.0</div>
		<div class="app-name color-default"> - 武汉市盛天小额贷款有限责任公司 - </div>
		<div class="app-desc">
       游友钱包是武汉市盛天小额贷款有限责任公司针对盛天旗下广大的游戏玩家打造的纯线上借贷产品。 提供1000-5000纯信用贷款。 实现“申请简单，审批快捷，下款快速，随选随借”的网络借款体验！
    </div>
		<div class="app-desc">
			<p><span class="label">1</span> 5分钟完成申请，借贷无门槛。</p>
			<p><span class="label">2</span> 线上操作，VIP秒级审批。</p>
			<p><span class="label">3</span> 快速放款，超低费率。</p>
			<p><span class="label">4</span> 额度灵活，随到随借。</p>
			<p><span class="label">5</span> 足不出户，随借随还。</p>
			<p><span class="label">6</span> 一对一服务，安全有保障。</p>
		</div>
		<div class="app-desc font-24 text-center">
			Copyright © 2018 武汉市盛天小额贷款有限责任公司 <br/>保留所有权利
		</div>
	</div>
</template>