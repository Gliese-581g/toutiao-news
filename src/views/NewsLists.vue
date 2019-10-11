<template>
  <div class="news-lists">
    <van-list v-model="loading" @load="onLoad">
      <ul>
        <news-list v-for="(list, index) in lists" :list="list" :key="index"></news-list>
      </ul>
    </van-list>
  </div>
</template>

<script>
import axios from "axios";
import NewsList from "../components/NewsList";

export default {
  name: "NewsLists",
  components: {
    NewsList
  },
  props: ["id"],
  computed: {
    active() {
      let id = this.id;
      // console.log(this.$store.state.activeName.curr === id);
      return this.$store.state.activeName.curr === id;
    }
  },
  data: function() {
    return {
      lists: [],
      url: `/api/list/?tag=${this.id}&ac=wap&count=20&format=json_raw&as=A17538D54D106FF&cp=585DF0A65F0F1E1&min_behot_time=1482491618`,
      loading: false
    };
  },

  methods: {
    onLoad() {
      axios
        .get(this.url)
        .then(response => {
          const result = response.data.data;
          result.forEach(item => {
            this.lists.push(item);
            this.loading = false;
          });
        })
        .catch(error => console.log(error));
    }
  },
  created() {},
  mounted() {},
  beforeRouteUpdate(to, from, next) {
    let pre = from.params.id;
    // console.log(document.documentElement.scrollTop);
    let position = document.documentElement.scrollTop;
    this.$store.commit("savePosition", position);
    this.$store.commit("saveActiveNamePre", pre);
    next();
  }
};
</script>

<style scoped>
.van-list ul {
  list-style-type: none;
}
</style>