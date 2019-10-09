<template>
  <div class="finance">
    <ul>
      <span id="top"></span>
      <li v-for="(list, index) in newsLists" :key="index" class="news-item">
        <div v-if="list.image_url !== undefined" class="gallery-right">
          <img v-lazy="list.image_url" alt />
        </div>
        <router-link :to="{ name: 'finance_item', params: { id: list.item_id }}" tag="div">
          <p class="content">{{list.title}}</p>
          <div class="gallery-bottom" v-if="list.image_list.length !== 0">
            <img v-for="(image, index) in list.image_list" :key="index" v-lazy="image.url" alt />
          </div>
        </router-link>
        <p class="content-info">
          <span>{{list.media_name}}</span>
          <span>{{list.datetime}}</span>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import scroll from "../scroll";

export default {
  name: "Finance",
  props: ["adress", "active", "number"],
  data: function() {
    return {
      newsLists: [],
      url: `/api/list/?tag=${this.adress}&ac=wap&count=20&format=json_raw&as=A17538D54D106FF&cp=585DF0A65F0F1E1&min_behot_time=1482491618`,
      isLoading: false
    };
  },

  methods: {
    getNews() {
      axios
        .get(this.url)
        .then(response => {
          const result = response.data.data;
          result.forEach(item => {
            this.newsLists.push(item);
          });
        })
        .catch(error => console.log(error));
    },
    // scrolling() {
    //   window.onscroll = () => {
    //     scroll.use(_this).then(response => {
    //       const result = response.data.data;
    //       result.forEach(item => {
    //         _this.newsLists.push(item);
    //       });
    //       _this.isLoading = false;
    //     });
    //   };
    // },
    scrolled() {
      if (this.active === this.number) {
        const _this = this;
        scroll.use(_this).then(response => {
          const result = response.data.data;
          result.forEach(item => {
            _this.newsLists.push(item);
          });
          _this.isLoading = false;
        });
      }
    }
  },
  created() {
    this.getNews();
  },
  mounted() {
    window.addEventListener("scroll", this.scrolled);
  }
};
</script>

<style scoped>
.news-item {
  background-color: #fff;
  margin: 5px 0;
  padding: 0 10px;
}

.content {
  font-size: 0.9em;
  text-align: left;
  padding: 10px 0;
}
.content-info {
  font-size: 0.7em;
  color: #999999;
  padding-bottom: 15px;
}
.content-info span {
  padding-right: 10px;
}
.gallery-right {
  float: right;
  margin-left: 10px;
  margin-top: 5px;
}
.gallery-right img {
  height: 65px;
  width: 100px;
  object-fit: cover;
}

.gallery-bottom {
  display: flex;
  flex-flow: row;
  margin-bottom: 5px;
  justify-content: space-around;
  height: 70px;
}

.gallery-bottom img {
  display: block;
  margin-right: 3px;
  /* flex: 1; */
  width: 32%;
  object-fit: cover;
}
</style>