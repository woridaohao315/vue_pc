<template>
  <div class="index-wrap">
    <div class="index-left">
      <div class="index-left-block">
        <h2>全部产品</h2>
        <div v-for="(item,key,index) in products" :class="{hr:key<Object.keys(item).length}">
          <h3>{{item.title}}</h3>
          <ul>
            <li v-for="k in item.list">
              <a href="k.url">{{k.name}}</a>
              <span v-show="k.hot" class="hot-tag">HOT</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="index-left-block lastest-news">
        <h2>最新消息</h2>
        <ul>
          <li v-for="n in news">
            <a href="n.url" class="new-item">{{n.title}}</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="index-right">
      <Slide :slides="slides"></Slide>

      <div class="index-board-list">

        <!-- index是奇数的时候 启用 line-last类 -->
        <div class="index-board-item" v-for="(item,index) in borders" :class="[{'line-last':index%2!=0},'index-board-'+item.id]">
          <div class="index-board-item-inner" >
            <h2>{{item.title}}</h2>
            <p>{{item.description}}</p>
			            <div class="index-board-button">
                    <!-- router-link标签要想绑定js原生事件
                      那么必须加事件修饰符 native  否则事件不生效
                       -->
			              <router-link class="button"
                      @click.native="jump(index)"
			              	 :to="{name:item.toKey,params:{oIndex:index}}">立即购买</router-link>
			              	 
			            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Slide from "../Slide"
export default {

  data() {
    return {
      // 全部产品的变量
      products: "",
      news: [],
      slides: [],
      borders: []

    }
  },
  components: {
    Slide,
  },
  methods: {
    // 获取全部产品接口方法
    getAllProductList() {
      this.$axios({
        url: this.$apiUrl.index.index
      }).then(res => {
        this.products = res.data
      })
        .catch(err => {
          if (err) throw err
        })
    },
    getNews() {
      this.$axios({
        url: this.$apiUrl.index.newList
      })
        .then(res => {
          this.news = res.data.data

        })
        .catch(err => {
          if (err) throw err
        })
    },
    getSlide() {
      this.$axios({
        url: this.$apiUrl.index.slides
      })
        .then(res => {
          this.slides = res.data.data

        })
        .catch(err => {
          if (err) throw err
        })
    },
    getBoardList() {
      this.$axios({
        url: this.$apiUrl.index.boardList
      })
        .then(res => {
          // console.log(res.data.data);
          this.borders = res.data.data
        })
        .catch(err => {
          if (err) throw err
        })
    },
    jump(index){
        // alert("1");
        sessionStorage.setItem("oIndex",index)
        // console.log(sessionStorage.getItem("oIndex"));
        
        
    }



  },
  mounted() {
    this.getAllProductList();
    this.getNews(),
    this.getSlide(),
    this.getBoardList()
  }


}
</script>

<style>
.index-wrap {
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
}
.index-left {
  float: left;
  width: 300px;
  text-align: left;
}
.index-right {
  float: left;
  width: 900px;
}
.index-left-block {
  margin: 15px;
  background: #fff;
  box-shadow: 0 0 1px #ddd;
}
.index-left-block .hr {
  margin-bottom: 20px;
}
.index-left-block h2 {
  background: #4fc08d;
  color: #fff;
  padding: 10px 15px;
  margin-bottom: 20px;
}
.index-left-block h3 {
  padding: 0 15px 5px 15px;
  font-weight: bold;
  color: #222;
}
.index-left-block ul {
  padding: 10px 15px;
}
.index-left-block li {
  padding: 5px;
}
.index-board-list {
  overflow: hidden;
}
.index-board-item {
  float: left;
  width: 400px;
  background: #fff;
  box-shadow: 0 0 1px #ddd;
  padding: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
}
.index-board-item-inner {
  min-height: 125px;
  padding-left: 120px;
}
.index-board-car .index-board-item-inner {
  background: url("http://tools.yufenghen.cn/mock/vuepc/images/1.png") no-repeat;
}
.index-board-loud .index-board-item-inner {
  background: url(http://tools.yufenghen.cn/mock/vuepc/images/2.png) no-repeat;
}
.index-board-earth .index-board-item-inner {
  background: url(http://tools.yufenghen.cn/mock/vuepc/images/3.png) no-repeat;
}
.index-board-hill .index-board-item-inner {
  background: url(http://tools.yufenghen.cn/mock/vuepc/images/4.png) no-repeat;
}
.index-board-item h2 {
  font-size: 18px;
  font-weight: bold;
  color: #000;
  margin-bottom: 15px;
}
.line-last {
  margin-right: 0;
}
.index-board-button {
  margin-top: 20px;
}
.lastest-news {
  min-height: 512px;
}
.hot-tag {
  background: red;
  color: #fff;
}
.new-item {
  display: inline-block;
  width: 230px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
