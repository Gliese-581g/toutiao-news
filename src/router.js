import Vue from "vue";
import Router from "vue-router";
import store from "./store"
import Home from "./views/tabbar/Home";
import Member from "./views/tabbar/Member";
import Shopping from "./views/tabbar/Shopping";
import Search from "./views/tabbar/Search";
import News from "./components/News";
import Photo from "./components/Photo";
import Message from "./components/Message";
import Video from "./components/Video";
import Contact from "./components/Contact";
import Shop from "./components/Shop";
import NewsDetail from "./components/NewsDetail";

import FinanceItem from "./components/FinanceItem";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/member",
      name: "member",
      component: Member
    },
    {
      path: "/shopping",
      name: "shopping",
      component: Shopping
    },
    {
      path: "/search",
      name: "search",
      component: Search
    },
    {
      path: "/photo",
      name: "photo",
      component: Photo
    },
    {
      path: "/message",
      name: "message",
      component: Message
    },
    {
      path: "/video",
      name: "video",
      component: Video
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact
    },
    {
      path: "/shop",
      name: "shop",
      component: Shop
    },
    {
      path: "/news",
      name: "news",
      component: News,
      meta: {
        keepAlive: true
      }
    },
    {
      path: "/news/newsdetail",
      name: "newsdetail",
      component: NewsDetail,
      meta: {
        keepAlive: false
      },
      props: route => ({ query: route.query.newsId })
    },
    {
      path: "/news/finance_item/:id",
      name: "finance_item",
      component: FinanceItem,
      meta: {
          keepAlive: false
        },
        props: route => ({ id: route.params.id })
    }
],
// scrollBehavior(to, from, savedPosition) { 
//   if (savedPosition) { 
//     return savedPosition 
//   } else { 
//     return { x: 0, y: 0 } 
//   } 
// }
});

router.beforeEach((to, from, next) => {
    // 在路由全局钩子beforeEach中，根据keepAlive属性，统一设置页面的缓存性
    // 作用是每次进入该组件，就将它缓存
    if (to.meta.keepAlive) {
      store.commit('keepAlive', to.name);
    }
    next()
  });


export default router;
