<template>
    <div>
        <ul>
            <li class="news-item" v-for="(list, index) in newsLists" :key="index">
                <h4>{{list.title}}</h4>
                <router-link :to="{ name: 'newsdetail', query: {newsId: list.newsId} }">
                    <img v-lazy="list.imgList[0]" alt="">
                </router-link>
                <div class="content">
                    {{list.digest}}
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import axios from 'axios'
    import sroll from '../sroll'

    export default {
        name: "Photo",
        data: function () {
            return {
                newsLists: [],
                page: 1
            }
        },

        methods: {
            getNews() {
                axios.get('https://www.mxnzp.com/api/news/list?typeId=510&page=1')
                    .then(response => {
                        this.resHandler(response)
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            resHandler(response) {
                const result = response.data.data;
                result.forEach(item => {
                    this.newsLists.push(item)
                });
                console.log(this.page)
                this.page++;
            },
        }
        ,
        created() {
            this.getNews();
        }
        ,
        mounted() {
            let url = 'https://www.mxnzp.com/api/news/list?typeId=510&page='
            sroll.use(url, this.resHandler.bind(this));

        }
    }
</script>

<style scoped>
    ul {
        list-style-type: none;
    }
    .news-item {
        position: relative;
        margin-bottom: 30px;
        border-bottom: #999999 solid .4px;
    }

    .news-item h4 {
        font-size: 1em;
        margin-bottom: 8px;
    }

    .news-item img {
        width: 100%;
    }

    .news-item .content {
        position: absolute;
        bottom: 0;
        text-align: left;
        font-size: .8em;
        color: white;
        background-color: rgba(0, 0, 0, .6);
    }
</style>