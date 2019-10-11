<template>
  <div class="detail">
    <van-nav-bar title="明日头条" id="top" :left-arrow="true" @click-left="onClickLeft" fixed></van-nav-bar>
    <h3 class="title">{{result.title}}</h3>
    <div v-html="result.content" class="content"></div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "NewsDetail",
  props: ["query"],
  data: function() {
    return {
      result: ""
    };
  },
  created() {
    const data = this;
    axios
      .get(`https://www.mxnzp.com/api/news/details?newsId=${this.query}`)
      .then(response => {
        console.log(response.data);
        const result = response.data.data;
        data.result = result;
      })
      .catch(error => console.log(error));
  },
  methods: {
          onClickLeft() {
      this.$router.history.go(-1);
    }
  },
};
</script>

<style scoped>
.detail {
  width: 100%;
  margin-bottom: 55px;
}
.title {
    margin: 55px 11px;
    margin-bottom: 0;
}
.content {
  font-size: 0.9em;
  margin: 10px 10px;
  text-align: left;
}
</style>