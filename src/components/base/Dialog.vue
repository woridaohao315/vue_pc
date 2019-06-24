<template>
<div>
        <!-- 该组件是白色背景 红色边框的一个组件封装  内容通过slot传入 -->
        <div class="dialog-wrap">
	      <div class="dialog-cover"></div>
	     
	        <div class="dialog-content">
	          <p class="dialog-close" @click="close">x</p>
	         <slot></slot>
	        </div>
	      
	    </div>



</div>
    

</template>

<script>
export default {
  // 接收父组件传过来的Show对象
    props:["Show"],
    data(){
        return{
         
        }
    },
    methods:{
        close(){
          this.Show.show=false;
          console.log(this.Show);
          
        }
    }


}
</script>

<style scoped>
.dialog-wrap{
	z-index: 50;
}


.dialog-wrap {
  position: fixed;
  width: 100%;
  height: 100%;
}
.dialog-cover {
  background: rgba(0,0,0,0.3);
  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
 
}
.dialog-content {
  width: 50%;
  position: fixed;
  max-height: 50%;
  overflow: auto;
  background: #fff;
  top: 20%;
  left: 50%;
  margin-left: -25%;
  z-index: 10;
  border: 2px solid #464068;
  padding: 2%;
  line-height: 1.6;
   border: 1px solid #f00;
}
.dialog-close {
  position: absolute;
  right: 5px;
  top: 5px;
  width: 20px;
  height: 20px;
  text-align: center;
  cursor: pointer;
}
.dialog-close:hover {
  color: #4fc08d;
}

</style>
