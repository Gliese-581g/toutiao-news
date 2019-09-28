<template>
    <div id="app">
        <!--    顶部header-->
        <van-nav-bar title="聚合内容" :left-text="leftText"  @click-left="onClickLeft"></van-nav-bar>
        <!--    内容部分content-->
        <router-view class="container"></router-view>

        <!--    底部导航 bottom-->
        <van-tabbar v-model="active" route>
            <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
            <van-tabbar-item icon="friends-o" to="/member">个人</van-tabbar-item>
            <van-tabbar-item icon="shopping-cart-o" to="/shopping">购物车</van-tabbar-item>
            <van-tabbar-item icon="search" to="/search">搜索</van-tabbar-item>
        </van-tabbar>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                active: 0,
            }
        },
        computed: {
          leftText: function () {
              return this.$store.state.leftText
            }
        },
        methods: {
            onClickLeft() {
                this.$router.push({name: 'home'})
            }
        }
    }
</script>

<style>
    * {
        margin: 0;
        padding: 0;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        /*width: 400px;*/
        /*height: 800px;*/
    }

    .van-nav-bar {
        position: fixed;
        width: 100%;
        /*background-color: #ed4040;*/
    }

    .van-nav-bar__title {
        /*color: white;*/
    }

    .container {
        padding: 50px 0 40px 0;
    }
</style>
