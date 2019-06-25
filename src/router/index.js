import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

import IndexPage from "../components/page/indexPage";

export default new Router({
  // 不使用哈希
  mode: "history",
  routes: [
      {
        path:"/",
        name: "IndexPage",
        component: IndexPage
      }

  ]
})
