<style lang="less">
	.height-400{
		height:400px;
		padding-top:30px;
	}
	.test{
		height:100px;
	}
	.contanier{
		padding:20px;
	}
</style>
<template>
	<div class="height-400">
		<div class="test">
			<p>vux range</p>
			<Range :min="0" :max="100"/>
		</div>

		<div class="contanier">
			<vueRange :min="0" :max="100"/>
		</div>
		
	</div>
</template>
<script src="./range"></script>
