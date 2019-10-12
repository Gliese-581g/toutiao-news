import Vue from "vue";
import Router from "vue-router";
import store from "./store";

import Home from "./views/Home";
import NewsLists from './views/NewsLists'
import ListItem from './views/ListItem'

Vue.use(Router);

const router = new Router({
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
            children: [
                {
                  path: "newslists/:id",
                  name: "newslists",
                  component: NewsLists,
                  props: true,
                  meta: {
                    keepAlive: true
                  }
                },
              ]
          },
          {
            path: "/home/newslists/list_item/:id",
            name: "list_item",
            component: ListItem,
            meta: {
              keepAlive: false
            },
            props: route => ({ id: route.params.id })
          }

    ],
    scrollBehavior() { //因为to和from都是同一个组件:id指向同一个组件    
          let postision = store.state.scrollTop.pre;          
          return { x: 0, y: postision || 0 };
      }
})

// router.beforeEach((to, from, next) => {
//     // 在路由全局钩子beforeEach中，根据keepAlive属性，统一设置页面的缓存性
//     // 作用是每次进入该组件，就将它缓存
//     if (to.meta.keepAlive) {
//       store.commit("keepAlive", to.name);
//     }
//     next();
//   });

export default router;
