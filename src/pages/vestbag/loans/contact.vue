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
    		width:80px;
    		height:80px;
    		line-height:80px;
    		border-radius: 50%;
    		color:#fff;
    		background-color: rgb(64,141,247);
    		text-align:center;
    		margin-right:20px;
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
        <p><span class="label">服务</span>注重为客户提供贷款咨询、搜索、匹配等一站式借款服务。通过大数据智能匹配，综合比较推荐放款快、额度高、费率低的贷款方案，轻松实现贷款申请，满足借款需求。</p>
        <p><span class="label">团队</span>年轻，富有朝气和活力。是一支具备丰富金融、电子商务、互联网专业及管理经验的精英团队，团队气氛活跃、团结、和谐、向上。</p>
        <p><span class="label">资源</span>拥有大数据作为支撑，在放贷审核征信信用方面具有先进的技术。在审核时间和下款速度等方面都优于同行业！</p>
    </div>
		<div class="app-desc">
			<div>客服热线：<span class="color-main">027-86655050</span></div>
      <div>微信公众号：<span class="color-default">游友钱包(yoyoqianbao)</span></div>
		</div>
		<div class="app-desc font-24 text-center">
			Copyright © 2018 武汉市盛天小额贷款有限责任公司 <br/>保留所有权利
		</div>
	</div>
</template>