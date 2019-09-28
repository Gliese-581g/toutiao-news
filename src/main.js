import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyload from 'vue-lazyload'
import { Tabbar, TabbarItem, NavBar, Icon, Swipe, SwipeItem, Panel, Tab, Tabs } from 'vant';


Vue.use(VueLazyload, {
    attempt: 3
});

Vue.use(Swipe).use(SwipeItem);
Vue.use(Icon);
Vue.use(Tabbar).use(TabbarItem);
Vue.use(NavBar);
Vue.use(Panel);
Vue.use(Tab).use(Tabs);

Vue.config.productionTip = false;


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
