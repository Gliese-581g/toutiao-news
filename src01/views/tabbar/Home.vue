<template>
  <div class="home">
    <!--    顶部header-->
    <van-nav-bar title="聚合内容" @click-left="onClickLeft" fixed></van-nav-bar>
    <div class="carousel">
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img :src="image" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="main">
      <icon-link v-for="(icon, index) in icons" :key="index" :icon="icon"></icon-link>
    </div>
  </div>
</template>

<script>
import IconLink from "../../components/IconLink";

export default {
  name: "Home.vue",
  components: { IconLink },
  data() {
    return {
      images: [
        require("../../assets/images/lunbo01.jpg"),
        require("../../assets/images/lunbo02.jpg"),
        require("../../assets/images/lunbo03.jpg"),
        require("../../assets/images/lunbo04.jpg"),
        require("../../assets/images/lunbo05.jpg")
      ],
      icons: [
        {
          url: require("../../assets/icons/news.png"),
          name: "news",
          title: "新闻"
        },
        {
          url: require("../../assets/icons/photo.png"),
          name: "photo",
          title: "图片"
        },
        {
          url: require("../../assets/icons/shopping.png"),
          name: "shopping",
          title: "购物"
        },
        {
          url: require("../../assets/icons/leave-message.png"),
          name: "leave-mesage",
          title: "信息"
        },
        {
          url: require("../../assets/icons/video.png"),
          name: "video",
          title: "视频"
        },
        {
          url: require("../../assets/icons/contact.png"),
          name: "contact",
          title: "反馈"
        }
      ]
    };
  },
  methods: {
    onClickLeft() {
      this.$router.history.go(-1);
    }
  }
};
</script>

<style scoped>
.van-swipe {
  margin-top: 50px;
  height: 150px;
}
.van-swipe img {
  width: 100%;
}
.main {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  margin-top: 40px;
}

.main div {
  margin: 15px 0;
  /*background-color: #999999;*/
  /*border: #2f242c solid 1px;*/
}
</style>