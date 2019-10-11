import Vue from "vue";
import Router from "vue-router";
import store from "./store";
import Home from "./views/tabbar/Home";
import Member from "./views/tabbar/Member";
import Shopping from "./views/tabbar/Shopping";
import Search from "./views/tabbar/Search";

import News from "./views/homepage/News";
import Photo from "./views/homepage/Photo";
import Message from "./views/homepage/Message";
import Video from "./views/homepage/Video";
import Contact from "./views/homepage/Contact";
import Shop from "./views/homepage/Shop";

import Finance from "./components/Finance";
import Tech from './components/Tech'

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
      },
      children: [
        {
          path: "finance/:id",
          name: "finance",
          component: Finance,
          props: true,
          meta: {
            keepAlive: true
          }
        },
        {
          path: "tech",
          name: "tech",
          component: Tech,
          meta: {
            keepAlive: true
          }
        }
      ]
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
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      if (from.meta.keepAlive) {
        from.meta.savedPosition = store.state.srcollTop;       
      }
      return { x: 0, y: to.meta.savedPosition || 0 };
    }
  }
});

router.beforeEach((to, from, next) => {
  // 在路由全局钩子beforeEach中，根据keepAlive属性，统一设置页面的缓存性
  // 作用是每次进入该组件，就将它缓存
  if (to.meta.keepAlive) {
    store.commit("keepAlive", to.name);
  }
  next();
});

export default router;
