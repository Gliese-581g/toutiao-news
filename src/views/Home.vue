<template>
  <div>
    <!--  顶部header  -->
    <van-nav-bar title="明日头条" id="top"></van-nav-bar>
    <!--  tab栏和新闻列表  -->
    <div>
      <van-tabs
        v-model="activeName"
        :border="false"
        :swipe-threshold="6"
        @change="beforeLeave"
        animated
        sticky
      >
        <van-tab
          v-for="(tab, index) in tabs"
          :key="index"
          :title="tab.title"
          :name="tab.url"
          :to="{name: 'newslists', params: {id: tab.url}}"
        >
          <router-view v-if="tab.url === activeName || tab.url === pre"></router-view>
        </van-tab>
      </van-tabs>
    </div>
    <!-- 回到顶部的按钮 -->
    <to-top></to-top>
  </div>
</template>

<script>
import ToTop from "../components/ToTop";
export default {
  name: "home",
  components: {
    ToTop
  },
  computed: {
    pre() {
      return this.$store.state.activeNamePre;
    }
  },
  data() {
    return {
      activeName: "__all__",
      tabs: [
        { title: "推荐", url: "__all__" },
        { title: "热点", url: "news_hot" },
        { title: "娱乐", url: "news_entertainment" },
        { title: "社会", url: "news_society" },
        { title: "国际", url: "news_world" },
        { title: "财经", url: "news_finance" }
      ]
    };
  },
  methods: {
    beforeLeave() {
      let position = document.documentElement.scrollTop;
      this.$store.commit("savePosition", position);
    }
  },
  created() {
    this.$router.push({ name: "newslists", params: { id: "__all__" } });
  },
  mounted() {
    window.addEventListener("beforeunload", () => {
      window.scrollTo(0, 0);
    });
  }
};
</script>
<style scoped>
.van-nav-bar {
  background-color: #ed4040;
}
.van-nav-bar__title {
  color: white;
  font-weight: bold;
  font-size: 1.2em;
}
</style>