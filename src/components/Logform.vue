<template>
    	<div class="login-form">
	    <div class="g-form">
	      <div class="g-form-line">
	        <span class="g-form-label">手机号：</span>
	        <div class="g-form-input">
	          <input type="text" 
	          v-model="mobile" placeholder="请输入用户名">
	        </div>
	      </div>
	      <div class="g-form-line">
	        <span class="g-form-label">验证码：</span>
	        <div class="g-form-input">
	          <input type="password" 
	          v-model="code" placeholder="请输入验证码">
	        </div>
	        <button class="go" v-if="isCode" @click="sendCode">{{btnSendCode}}</button>
	        <button class="nogo" v-else>{{countNum}}s重新发送</button>
	      </div>
	      <div class="g-form-line">
	        <div class="g-form-btn">
	          <button :class="dis" @click="send">确认</button>
	        </div>
	      </div>
	    </div>
  	</div>
</template>

<script>
export default {
    // 接收App.vue传过来的 参数
    props:["Show"],
    data(){
        return{
            mobile:"",
            code:"",
            isCode:true,
            // 验证码倒计时的变量
            countNum:10,
            // 发送验证码按钮的文字
           btnSendCode:"发送验证码",
        //    确认按钮的css
            dis:"but"
        }
    },
    methods:{
        // 发送验证码的按钮
        sendCode(){
            this.isCode=false;
            this.countNumChange();
        },
// 验证码倒计时方法
     countNumChange(){
        let timer=setInterval(()=>{
            this.countNum--;
            if(this.countNum<0){
                clearInterval(timer);
                this.countNum=10;
                this.btnSendCode="再次发送";
                this.isCode=true;
            }
        },1000)
         
        
    },
    send(){
        if(/^1[3-9]\d{9}$/.test(this.mobile) && /^\d{4}$/.test(this.code)){
            this.Show.show=false;
            //需要传递参数
            this.$emit("has-login",this.mobile)




        }else{
            alert("手机号或密码错误!")
        }
    }

    },
    watch:{
        code(newVal,oldVal){
            //判断手机号和验证码,通过正则
            if(/^1[3-9]\d{9}$/.test(this.mobile) && /^\d{4}$/.test(newVal)){
                this.dis="okbutton";
            }else{
                this.dis="but"
            }
        },
        mobile(newVal,oldVal){
            if(/^1[3-9]\d{9}$/.test(newVal) && /^\d{4}$/.test(this.code)){
                this.dis="okbutton";
            }else{
                this.dis="but"
            }
        }
    }

}
</script>

<style>
	.go{
		border: 1px solid #666;
		outline: none;
		background: #fff;
		border-radius: 4px;
		-webkit-border-radius: 4px;
		height: 32px;
	}
	button:hover{
		cursor: pointer;
	}
	.nogo{
		color: #999;
		border: 1px solid #999;
		outline: none;
		background: #fff;
		border-radius: 4px;
		-webkit-border-radius: 4px;
		height: 32px;
	}
	.but {
        color: #ffefee;
        background: #fea6a0;
        width: 30%;
        height: 30px;
        line-height: 30px;
        border: none;
        outline: none;
        border-radius: 4px;
    }

    .okbutton {
        color: #fff;
        background: #d41200;
        width: 30%;
        height: 30px;
        line-height: 30px;
        border: none;
        outline: none;
        border-radius: 4px;
    }

</style>
