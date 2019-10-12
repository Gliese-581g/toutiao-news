<template>
  <div class="news-lists" ref="scroll">
    <van-list v-model="loading" @load="onLoad" :finished="!(activeName === adress)">
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
  props: ["adress", "activeName"],
  data: function() {
    return {
      lists: [],
      url: `/api/list/?tag=${this.adress}&ac=wap&count=20&format=json_raw&as=A17538D54D106FF&cp=585DF0A65F0F1E1&min_behot_time=1482491618`,
      loading: false
    }
  },

  methods: {
    onLoad() {
        axios
        .get(this.url)
        .then(response => {
          const result = response.data.data;
          result.forEach(item => {
            this.lists.push(item);
          });
            this.loading = false;
                    
        })
        .catch(error => console.log(error));
    }
  },
}
</script>

<style scoped>
.van-list ul {
  list-style-type: none;
}
</style>