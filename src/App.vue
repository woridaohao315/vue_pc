<template>
  <div id="app">
    <div class="container">
      <div class="left">
        <img src="./assets/images/logo.png" alt="">
      </div>
      <div class="right">
        <ul>
          <li @click="boo=true" v-if="boo1">登录</li>
          <template v-else>
                <li>huangjian</li>
                <li @click="log_out">退出</li>
          </template> 
          <li>注册</li>
          <li>关于</li>
        </ul>
      </div>

    </div>
    <modal v-if="boo">
      <p class="close"><span @click="boo=false">x</span></p>
      <p>
        <label for="usermb">手机号 :</label>
        <input type="text" id="usermb">
      </p>
      <p>
        <label for="ver_code">验证码 :</label>
        <input type="text" id="ver_code">  
        <button>发送验证码</button>
      </p>
      <p>
        <button @click="log_in">确认</button>
      </p>
    </modal>
    <router-view/>
  </div>
</template>

<script>
import modal from "./components/modal";
export default {
  name: 'App',
  data(){
    return{
      //控制modal显示隐藏
      boo:false,
      //控制li显示隐藏
      boo1:true,
    }
  },
  methods:{
    log_in(){
      var usermb=document.getElementById("usermb")
      var ver_code=document.getElementById("ver_code")
      if(usermb.value!="" && ver_code.value!=""){
        this.boo=false,
        this.boo1=false
      }
    },
    log_out(){
        this.boo1=true

    }
  },
  components:{
    modal,
  }

}
</script>

<style>
a, abbr, acronym, address, applet, article, aside, audio, b, big, blockquote, body, canvas, caption, center, cite, code, dd, del, details, dfn, div, dl, dt, em, embed, fieldset, figcaption, figure, footer, form, h1, h2, h3, h4, h5, h6, header, hgroup, html, i, iframe, img, ins, kbd, label, legend, li, mark, menu, nav, object, ol, output, p, pre, q, ruby, s, samp, section, small, span, strike, strong, sub, summary, sup, table, tbody, td, tfoot, th, thead, time, tr, tt, u, ul, var, video {
    margin: 0;
    padding: 0;
}
body{
  background-color: #F0F2F5;
}
#app{
  width: 100%;
  height:90px;
  background-color: #363636;
  color:#b2b2b2;
  line-height: 90px;
}
  .container{
    display: flex;
    justify-content: space-between;
    width: 1200px;
    margin: 0 auto;
  }
  #app ul{
    list-style: none;
  }
  #app ul>li{
    float: left;
    border-left: 1px solid #ccc;
    padding-left: 20px;
    margin-left: 20px;
    margin-top: 35px;
    height:20px;
    line-height: 20px;
    cursor: pointer;
  }
  #app ul>li:first-child{
    border: none;
  }
  #app img{
    width: 50px;
    margin-top: 20px;
  }
  #modal{
    width: 800px;
    padding:0 0 30px 0;
    position: fixed;
    top:120px;
    left:500px;
  }
  #modal>p{
    line-height: 50px;
    color:#000;
    text-indent: 30px;
  }
  #modal>p:last-child>button{
    background-color: #fea6a0;
    color: #ffefee;
    margin-left: 50px;
    border: none;
    outline: none;
    height: 30px;
    line-height: 30px;
    width: 30%;
    border-radius: 4px;
    cursor: pointer;
  }
      .close{
        text-align: right;
        margin: 0;
        padding: 0;
        padding-right: 10px;

    }
    .close>span{
        cursor: pointer;

    }
</style>
