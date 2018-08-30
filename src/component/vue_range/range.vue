<style lang="less">
	// .height-400{
	// 	height:400px;
	// 	padding-top:30px;
	// }
	// .test{
	// 	height:100px;
	// }
	// .contanier{
	// 	padding:20px;
	// }
	.range-bar-wrap{
		position:relative;
		display:flex;
		.bar{
			// margin-top: 10px;
			// border-top: 1px solid #ccc;
			position:relative;
			height:1Px;
			z-index: 1;
			background-color:#007dd4;
		}
		.bar-range-number{
			// padding:0 50px;
			&.left{
				padding-right:50px;
			}
			&.right{
				padding-left:50px;
			}
		}
		.bar-range{
			position:relative;
			margin-top:15px;
			flex:1;
			height:1Px;
			background-color:#ddd;
		}
		.bar-circle{
			position:absolute;
			display:inline-block;
			top:-20px;
			z-index:2;
			// width:0;
			width:40px;
			height:40px;
			border-radius:50%;
			background-color:#fff;
			box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
			// &:after{
			// 	position:absolute;
			// 	content:"";
			// 	width:40px;
			// 	height:40px;
			// 	border-radius:50%;
			// 	background-color:#fff;
			// 	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
			// }
			&.bar-min{
				left:0px;
				// background-color:#ddd;
			}
			&.bar-max{
				// background-color:#999;
			}
		}
	}
</style>
<template>
	<div class="contanier">
		<div class="range-bar-wrap" ref="bar">
			<span class="bar-range-number left">{{minNumber}}</span>
			<div class="bar-range" >
				<div class="bar" :style="{'left':left+'%','width':100-right-left +'%'}"></div>
				<span class="bar-circle bar-min" ref="min" @touchmove="move($event,'min')" :style="{'left':(left-dist)+'%'}"></span>
				<span class="bar-circle bar-max" ref="max" @touchmove="move($event,'max')" :style="{'right':(right-dist)+'%'}"></span>
			</div>
			<span class="bar-range-number right">{{maxNumber}}</span>
		</div>
		<div><span>min:{{min}}</span>   <span>max:{{max}}</span></div>
	</div>
</template>
<script src="./range"></script>
