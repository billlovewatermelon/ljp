import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
// 登录
import login from "@/views/login";
// 主页面
import index from "@/views/index";
// 商品管理
import Goods from '@/views/goods/Goods';
Vue.use(Router); 

export default new Router({
  routes: [
    {
      path: "/",
      name: "login",
      component: login
    },
    {
      path: "/index",
      name: "index",
      component: index,
      children: [
        {
          path: "/goods/Goods",
          name: "商品管理",
          component: Goods,
          meta: {
            requireAuth: true
          }
        }
      ]
    }
  ]
});
