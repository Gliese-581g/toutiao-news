import Vue from "vue";
import Router from "vue-router";

import Home from "./views/Home";
import ListItem from './views/ListItem'

Vue.use(Router);

const router = new Router({
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
          },
          {
            path: "/home/list_item/:id",
            name: "list_item",
            component: ListItem,
            meta: {
              keepAlive: false
            },
            props: route => ({ id: route.params.id })
          }

    ],
})

export default router;
