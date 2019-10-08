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
        </router-link>
        <div class="gallery-bottom">
          <img v-for="(image, index) in list.image_list" :key="index" v-lazy="image.url" alt />
        </div>
        <p class="content-info">
          <span>{{list.media_name}}</span>
          <span>{{list.datetime}}</span>
        </p>
      </li>
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
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import scroll from "../../scroll";

export default {
  name: "allNews",
  data: function() {
    return {
      newsLists: [],
      url:
        "/api/list/?tag=__all__&ac=wap&count=20&format=json_raw&as=A17538D54D106FF&cp=585DF0A65F0F1E1&min_behot_time=1482491618",
      isLoading: false
    };
  },

  methods: {
    getNews: function() {
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
  },
  created() {
    this.getNews();
  },
  mounted() {
      const _this = this;
    scroll.scrolling(_this);
  }
};
</script>

<style scoped>
.finance {
  padding-bottom: 10px;
  background-color: #f0f3f6;
}

.news-item {
  background-color: #fff;
  margin: 8px 0;
  padding: 0 10px;
  overflow: hidden;
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
}

.gallery-bottom {
  display: flex;
  flex-flow: row;
  margin-bottom: 5px;
}

.gallery-bottom img {
  flex: 1 1 30px;
  margin-right: 3px;
  height: 80px;
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