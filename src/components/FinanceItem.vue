<template>
  <div v-if="result">
    <van-nav-bar title="明日头条" id="top" :left-arrow="true" @click-left="onClickLeft" fixed></van-nav-bar>
    <h3 class="title">{{result.title}}</h3>
    <p class="media">
      <img :src="result.media_user.avatar_url" alt />
      <span>{{result.media_user.screen_name}}</span>
    </p>
    <div v-html="result.content" class="item"></div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "finance-item",
  props: ["id"],
  data: function() {
    return {
      result: null
    };
  },
  methods: {
    getNews() {
      axios
        .get(`/api/i${this.id}/info/`)
        .then(response => {
          // console.log(response.data.data);
          this.result = response.data.data;
        })
        .then(() => {
          const imgs = document.querySelectorAll("img");
          imgs.forEach((item, index) => {
            if (index > 0) {
              item.style.width = "100%";
            }
          });
        })
        .catch(error => console.log(error));
    },
    onClickLeft() {
      this.$router.history.go(-1);
    }
  },
  created() {
    this.getNews();
  }
};
</script>

<style>
.title {
    margin-top: 50px;
}
.media {
  margin: 10px 5px;
  display: flex;
}
.media img {
  width: 22px;
  border-radius: 50%;
  margin-right: 8px;
}
.media span {
  font-size: 0.8em;
  font-weight: bold;
  padding-top: 3px;
}
.item {
  padding-bottom: 20px;
}
.item p {
  text-align: left;
  font-size: 0.95em;
  margin-bottom: 10px;
  padding: 0 8px;
}
.item h1 {
  font-size: 1.2em;
}
.item img {
  margin: 16px 0;
}
</style>