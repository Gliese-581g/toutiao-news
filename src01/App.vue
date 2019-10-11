<template>
  <div id="app">
    <!--    内容部分content-->
    <keep-alive :include="keepAliveComponents">
      <router-view class="container"></router-view>
    </keep-alive>

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
import { mapState } from "vuex";

export default {
  data() {
    return {
      active: 0
    };
  },
  computed: {
    leftText: function() {
        if(this.$route.path !== '/') {
            return '返回'
        } else {
            return ''
        }
    },
    ...mapState(['keepAliveComponents'])
  },
  methods: {
    onClickLeft() {
      this.$router.history.go(-1);
    }
  },
};
</script> 

<style>
* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*width: 400px;*/
  /*height: 800px;*/
}
/* .container {
  padding: 50px 0 40px 0;
} */
</style>
