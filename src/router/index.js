import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

import IndexPage from "../components/page/indexPage";
import Detail from "../components/page/Detail";
import Count from "../components/page/detail/Count";
import Analysis from "../components/page/detail/Analysis";
import Forecast from "../components/page/detail/Forecast";
import Publish from "../components/page/detail/Publish";


export default new Router({
  // 不使用哈希
  mode: "history",
  routes: [
      {
        path:"/",
        name: "IndexPage",
        component: IndexPage
      },
      {
        path:"/detail",
            redirect: "/detail/count",
        name:"Detail",
        component:Detail,
        children:[
          {
            path: "/detail/count",
            name:"Count",
            component:Count
          }, 
          {
            path: "/detail/analysis",
            name: "Analysis",
            component: Analysis
          }, 
          {
            path: "/detail/forecast",
            name: "Forecast",
            component: Forecast
          }, 
          {
            path: "/detail/publish",
            name: "Publish",
            component: Publish
          },
          
        ]

      }

  ]
})
