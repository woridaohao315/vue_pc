import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Index from "../components/index";

var router= new Router({
    mode:"history",
    routes:[
        {
            path:"/",
            name:"Index",
            component:Index,
        }
    ]


})

export default router;
