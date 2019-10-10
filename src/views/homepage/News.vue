<template>
  <div>
    <!--    顶部header-->
    <van-nav-bar title="明日头条" id="top"></van-nav-bar>
    <div>
      <van-tabs
        v-model="active"
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
          :to="{name: 'finance', params: {id: tab.url}}"
        >
          <router-view></router-view>
          <!-- <finance :adress="tab.url" :active="active" :number="index"></finance> -->
        </van-tab>
        <van-tab title="科技" :to="{name: 'tech'}">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </van-tab>
      </van-tabs>
    </div>
    <a href="#top">
      <span class="back-to-top">
        <svg
          t="1569513187544"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2482"
          width="20"
          height="20"
        >
          <path
            d="M830.2 475.9L537 182.7V937h-50V182.7L193.8 475.9l-35.4-35.4L512 87l353.6 353.6-35.4 35.3z"
            fill="white"
            p-id="2483"
          />
        </svg>
      </span>
    </a>
  </div>
</template>

<script>
// import Finance from "../../components/Finance";
// import Tech from "../../components/Tech";

export default {
  name: "news",
  components: {
    // Finance,
    // Tech
  },
  data() {
    return {
      active: "__all__",
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
  created() {},
  mounted() {},
  

  //   beforeRouteEnter (to, from, next) {
  //     next(vm => {
  //     vm.$router.push({ name: "finance", params: { id: "__all__" } });
  //   })
  // },

  beforeRouteLeave(to, from, next) {
    // 如果下一个页面不是详情页（C），则取消列表页（B）的缓存
    if (to.name !== "finance_item" && to.name !== "newsdetail") {
      this.$store.commit("noKeepAlive", from.name);
    }
    next();
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

.back-to-top {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  right: 20px;
  bottom: 80px;
}
.icon {
  margin-left: 10px;
  margin-top: 10px;
}
</style>