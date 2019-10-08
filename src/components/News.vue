<template>
  <div>
    
    <van-tabs v-model="active" :border="false" animated sticky>
      <!-- <van-tab title="推荐">
          <all-news></all-news>
      </van-tab>
      <van-tab title="科技">
        <tech></tech>
      </van-tab> -->
        <finance v-for="(tab, index) in tabs" :key="index" :tab='tab'></finance>
      <!-- <van-tab title="财经" name="news_finance" :to="{name: 'news_finance', params:{id:'__all__'}}"></van-tab> -->
      <!--            <van-tab title="妹子图" :to="{name: 'photo'}">-->
      <!--            </van-tab>-->
    </van-tabs>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import AllNews from './news/AllNews'
import Finance from './Finance'
import Tech from './Tech'

export default {
  name: "news",
  components: {
    AllNews,
    Finance,
  },
  // computed: {
  //   activeName: {
  //     get: function() {
  //       return this.$store.state.activeName
  //     },
  //     set: function(name) {
  //     this.$store.commit('changeTab', name);        
  //     }
  //   }
  // },
  data() {
    return {
      active: 0,
      tabs: ['推荐', '经济', '社会']
    }
  },
    beforeRouteLeave (to, from, next) {
    // 如果下一个页面不是详情页（C），则取消列表页（B）的缓存
    if (to.name !== 'finance_item' && to.name !== 'newsdetail') {
    console.log(from.name);
        this.$store.commit('noKeepAlive', from.name)
    }
    next()
  }
}
</script>

<style scoped>
</style>