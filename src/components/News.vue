<template>
    <div>
        <van-tabs v-model="active" animated>
            <van-tab title="推荐" :to="{name: 'all_news'}">
            </van-tab>
            <van-tab title="科技" :to="{name: 'news_tech'}">
            </van-tab>
            <van-tab title="财经" :to="{name: 'news_finance'}">
            </van-tab>
            <!--            <van-tab title="妹子图" :to="{name: 'photo'}">-->
            <!--            </van-tab>-->
        </van-tabs>
        <router-view></router-view>
    </div>
</template>

<script>
    import {mapMutations} from 'vuex'

    export default {
        name: "News",
        components: {},
        data() {
            return {
                active: 0
            };
        },
        methods: {
            ...mapMutations([
                'changeLeftText'])
        },
        created() {
            this.changeLeftText();
        }
    }
</script>

<style scoped>

</style>