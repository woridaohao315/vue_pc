<template>
  <div >
    <!-- 头部开始 -->
    	<div class="app-head">
      <div class="app-head-inner">
        <img src="./assets/logo.png">
        <div class="head-nav">
          <ul class="nav-list">
            <li>{{username}}</li>
            <li v-show="username==''?false:true" class="nav-pile" >|</li>
            <li v-if="username==''?false:true" @click="logout">退出</li>
            <li @click="login" v-else>登录</li>
            <li class="nav-pile">|</li>
            <li>注册</li>
            <li class="nav-pile">|</li>
            <li >关于</li>
          </ul>
        </div>  
      </div>
		</div>
  <!-- 头部结束 -->

    <BaseDialog :Show="Show" v-show="Show.show">
      <Logform :Show="Show"  @has-login="hasLogin"></Logform>
    
    </BaseDialog>

  </div>
</template>

<script>
// 引入基本对话框组件
import BaseDialog from "./components/base/Dialog"
// 登录框内部内容的组件
import Logform from "./components/Logform"


export default {
  data(){
    return{
      username:"",
      // 要给BaseDialog这个子组件传的参数
        Show:{
          show:false,
        }
    }
  },
  components:{
    BaseDialog,Logform,
  },
  methods:{
    login(){
        this.Show.show=true;
        this.$cookie.log();

    },
    // 子组件给父组件传入的登录成功的用户名
    hasLogin(username){
   
      if(username){
        this.username=username;
        //获取到用户名以后 马上存入缓存
        this.$cookie.setCookie({
          username:this.username
        })

      }

    },

    logout(){
      //用户名变空
        this.username=""
      //session也清空
      $this.$cookie.deleteCookie(this.username)

    }

  },
  mounted(){
    // 页面刷新后获取session数据
    username=this.$cookie.getCookie("username")

  }
  
}
</script>

<style>
	html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
  display: block;
}
body {
  line-height: 1;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
a {
  color: inherit;
  text-decoration: none;
}
body {
  background: #f0f2f5;
  font-family: "Helvetica Neue",Helvetica,Arial,"Hiragino Sans GB","Hiragino Sans GB W3","Microsoft YaHei UI","Microsoft YaHei","WenQuanYi Micro Hei",sans-serif;
  font-size: 14px;
  color: #444;
}
.app-head {
  background: #363636;
  color: #b2b2b2;
  height: 90px;
  line-height: 90px;
  width: 100%;
}
.app-head-inner {
  width: 1200px;
  margin: 0 auto;
}
.head-logo {
  float: left;
}
.app-head-inner img {
  width: 50px;
  margin-top: 20px;
}
.head-nav {
  float: right;
}
.head-nav ul {
  overflow: hidden;
}
.head-nav li {
  cursor: pointer;
  float: left;
}
.nav-pile {
  padding: 0 10px;
}
.app-foot {
  text-align: center;
  height: 80px;
  width: 100%;
  line-height: 80px;
  background: #e3e4e8;
  clear: both;
  margin-top: 30px;
}
.container {
  width: 1200px;
  margin: 0 auto;
}
.hr {
  border-bottom: 1px solid #ddd;
}
.button {
  background: #4fc08d;
  color: #fff;
  display: inline-block;
  padding: 10px 20px;
  cursor: pointer;
}
.button:hover {
  background: #4fc08d;
}

.g-form-line {
  padding: 15px 0;
}
.g-form-label {
  width: 100px;
  font-size: 16px;
  display: inline-block;
}
.g-form-input {
  display: inline-block;
}
.g-form-input input {
  height: 30px;
  width: 200px;
  line-height: 30px;
  vertical-align: middle;
  padding: 0 10px;
  border: 1px solid #ccc;
}
.g-form-btn {
  padding-left: 100px;
}
.g-form-error {
  color: red;
  padding-left: 15px;
}

</style>
