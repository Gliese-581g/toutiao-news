<template>
  <div v-if="loaded"  class="news-item">
    <van-nav-bar title="今日头条" id="top" :left-arrow="true" @click-left="onClickLeft" fixed></van-nav-bar>
    <h3 class="title">{{result.title}}</h3>
    <p class="media">
      <img :src="result.media_user.avatar_url" alt />
      <span>{{result.media_user.screen_name}}</span>
      <button class="none-focus" @click="focusOn" v-if="!focus">+ 关注</button>
      <button class="focus" @click="focusOn" v-else>已关注</button>
    </p>
    <div v-html="result.content" class="item"></div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "news-item",
  props: ["id"],
  data: function() {
    return {
      result: [],
      focus: false,
      loaded: false
    };
  },
  methods: {
    getNews() {
      const _this = this;
      axios
        .get(`/api/i${this.id}/info/`)
        .then(response => {
          // console.log(response.data.data);
          _this.result = response.data.data;
          _this.loaded = true;        
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
    },
    focusOn() {
      this.focus = !this.focus;
    }
  },
  created() {
    this.getNews();
  }
};
</script>

<style>
.title {
    margin-top: 55px;
    padding: 0 10px;
    padding-right: 15px;

}
.media {
  margin: 10px 5px;
  display: flex;
}
.media img {
  width: 8%;
  border-radius: 50%;
  margin-right: 8px;
}
.media span {
  font-size: 0.8em;
  font-weight: bold;
  padding-top: 3px;
}
.media button{
  width: 65px;
  margin-left: auto;
  margin-right: 15px;
  font-size: .7em;
  background-color: #ed4040;
  padding: 5px 0;
  color: white;
  border-radius: 30%/80%;
  outline: none;
  border: 0;
}
.media .focus {
  background-color:rgb(209, 209, 209);
  color: rgb(104, 120, 136);
}
.item {
  padding-bottom: 75px;
}
.item p {
  text-align: left;
  font-size: 1em;
  margin-bottom: 10px;
  padding: 0 8px;
}
.item h1 {
  font-size: 1.3em;
}
.item img {
  width: 100%;
  margin: 16px 0;
}
</style>