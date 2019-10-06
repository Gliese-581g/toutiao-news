import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Member from "./components/Member"
import Shopping from "./components/Shopping";
import Search from "./components/Search";
import News from "./components/News";
import Photo from "./components/Photo";
import Message from "./components/Message";
import Video from "./components/Video";
import Contact from './components/Contact'
import Shop from "./components/Shop";
import NewsDetail from "./components/NewsDetail";
import Tech from "./components/Tech";
import Finance from "./components/Finance";
import FinanceItem from "./components/FinanceItem";
import AllNews from "./components/news/AllNews";

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/member',
            name: 'member',
            component: Member
        },
        {
            path: '/shopping',
            name: 'shopping',
            component: Shopping
        },
        {
            path: '/search',
            name: 'search',
            component: Search
        },
        {
            path: '/photo',
            name: 'photo',
            component: Photo
        },
        {
            path: '/message',
            name: 'message',
            component: Message
        },
        {
            path: '/video',
            name: 'video',
            component: Video
        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact
        },
        {
            path: '/shop',
            name: 'shop',
            component: Shop
        },
        {
            path: '/news',
            // name: 'news',
            component: News,
            children: [
                {path: '', name: 'news', component: AllNews},
                {
                    path: 'news_tech',
                    name: 'news_tech',
                    component: Tech
                },
                {
                    path: 'news_finance',
                    name: 'news_finance',
                    component: Finance
                },
                {
                    path: 'all_news',
                    name: 'all_news',
                    component: AllNews
                }
            ]
        },
        {
            path: '/news/news_tech/newsdetail',
            name: 'newsdetail',
            component: NewsDetail,
            props: (route) => ({query: route.query.newsId})
        },
        {
            path: '/news/news_finance/finance_item:id',
            name: 'finance_item',
            component: FinanceItem,
            props: (route) => ({id: route.params.id})
        },


    ]
})
