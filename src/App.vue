<template>
  <div id="app">
    <div class="container">
      <div class="left">
        <img src="./assets/images/logo.png" alt="">
      </div>
      <div class="right">
        <ul>
          <li>登录</li>
          <li>注册</li>
          <li>关于</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
a, abbr, acronym, address, applet, article, aside, audio, b, big, blockquote, body, canvas, caption, center, cite, code, dd, del, details, dfn, div, dl, dt, em, embed, fieldset, figcaption, figure, footer, form, h1, h2, h3, h4, h5, h6, header, hgroup, html, i, iframe, img, ins, kbd, label, legend, li, mark, menu, nav, object, ol, output, p, pre, q, ruby, s, samp, section, small, span, strike, strong, sub, summary, sup, table, tbody, td, tfoot, th, thead, time, tr, tt, u, ul, var, video {
    margin: 0;
    padding: 0;
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
  ul{
    list-style: none;
  }
  ul>li{
    float: left;
    border-right: 1px solid #ccc;
    padding-right: 20px;
    margin-right: 20px;

    
  }
  img{
    width: 50px;
    margin-top: 20px;
  }

</style>
