<template>
  <div>
    <ul>
      <li class="news-item" v-for="(list, index) in newsLists" :key="index">
        <h4>{{list.title}}</h4>
        <router-link :to="{ name: 'newsdetail', query: {newsId: list.newsId} }">
          <img v-lazy="list.imgList[0]" alt />
        </router-link>
        <div class="content">{{list.digest}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import scroll from "../scroll";

export default {
  name: "Photo",
  computed: {
    url() {
      return `https://www.mxnzp.com/api/news/list?typeId=510&page=${this
        .page}`;
    },
  },
  data: function() {
    return {
      newsLists: [],
      isLoading: false,
      page: 1
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
        .catch(error => {
          console.log(error);
        });
    },
    scrolling() {
      const _this = this;
      window.onscroll = () => {
        this.page++;
        scroll.use(_this).then(response => {
          const result = response.data.data;
          result.forEach(item => {
            _this.newsLists.push(item);
          });
          _this.isLoading = false;
        });
      };
    }
  },
  created() {
    this.getNews();
  },
  mounted() {
    this.scrolling();
  }
};
</script>

<style scoped>
ul {
  list-style-type: none;
}
.news-item {
  position: relative;
  margin-bottom: 30px;
  border-bottom: #999999 solid 0.4px;
}

.news-item h4 {
  font-size: 1em;
  margin-bottom: 8px;
}

.news-item img {
  width: 100%;
}

.news-item .content {
  position: absolute;
  bottom: 0;
  text-align: left;
  font-size: 0.8em;
  color: white;
  background-color: rgba(0, 0, 0, 0.6);
}
</style>