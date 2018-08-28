<style lang="less">
	.height-400{
		height:400px;
		padding-top:30px;
	}
	.test{
		height:100px;
	}

	.my-range-bar{
		position:relative;
		.bar{
			margin-top: 10px;
			border-top: 1px solid #ccc;
		}
		.bar-range{
			position:relative;
			// display:inline-block;
			height:1px;
			background-color:#007dd4;
		}
		.bar-circle{
			position:absolute;
			display:inline-block;
			top:-10px;
			width:20px;
			height:20px;
			border-radius:50%;
			background-color:#fff;
			border:1px solid #ccc;
			&.bar-min{
				left:20px;
				// &:before{
				// 	position:absolute;
				// 	content:"";
				// 	height:1px;
				// 	width:100%;
				// }
			}
			&.bar-max{
				left:250px;
			}
		}
	}
</style>
<template>
	<div class="height-400">
		<div class="test"><Range :min="0" :max="100" /></div>
		<div class="my-range-bar">
			<div class="bar"></div>
			<div class="bar-range">
				<span class="bar-circle bar-min"></span>
				<span class="bar-circle bar-max"></span>
			</div>
		</div>
	</div>
</template>
<script src="./range"></script>
