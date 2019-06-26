<template>
    <div class="gtop">
		<div class="swiper-container" style="width:900px;">
		    <div class="swiper-wrapper" style="width: 100%;">
		        <div class="swiper-slide" style="width: 100%;" v-for="slide in slides">
		            <img :src="slide.src" alt="" />
		        </div>	
		    </div>
		    <div class="pagination"></div>
	  	</div>
   	</div>
</template>

<script>
 // 引入swiper模块
	import Swiper from "../../static/swiper";
	// npm方式下载的swiper用法不太一样 自行研究
    // import sw from "swiper";
export default {
	props:["slides"],
	updated(){
	// 调用加载swiper功能的代码
		this.setSwiper();
	},
	methods:{
		setSwiper(){
			let myswiper=new Swiper('.swiper-container',{
				// 自动轮播 间隔时间
				autoplay: 2000,
				// 是否无缝轮播
				loop: true,
				// 指定分页器元素
				pagination: '.pagination',
				// 分页器是否可点击
				paginationClickable :true,
				//自动轮播效果 在用户点击分页器后会失效 加上该属性就不会失效
	            autoplayDisableOnInteraction : false
	            //其他设置
	       });
		}

	}
   

}
</script>

<style>
@import "../../static/swiper.min.css";
.gtop{
		position: relative;
    margin: 15px 15px 15px 0;
    width: 900px;
    height: 500px;
    overflow: hidden;
	}    
	
	.swiper-slide {
		position: relative;
		overflow: hidden
	}
	.swiper-slide img{
		width: 100%;
	}
	.pagination {
		position: absolute;
		z-index: 20;
		bottom: 10px;
		width: 100%;
		text-align: center;
	}

	 .swiper-pagination-bullet {
		display: inline-block;
		width: 8px;
		height: 8px;
		border-radius: 8px;
		-webkit-border-radius: 8px;
		background: #cbc2bb;
		opacity: .8;
		cursor: pointer
	}
	.pagination .swiper-pagination-bullet:nth-child(2){
		margin: 0 10px;
	}
	.swiper-pagination-bullet-active {
		background: #d81300;
	}

</style>
