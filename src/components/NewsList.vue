<template>
        <li class="news-item">
          <div v-if="list.image_url !== undefined" class="gallery-right">
            <img v-lazy="list.image_url" alt />
          </div>
          <router-link :to="{ name: 'list_item', params: { id: list.item_id }}" tag="div">
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
</template>
<script>
export default {
    props: ['list']
}
</script>
<style scoped>
.news-item {
  background-color: #fff;
  margin: 5px 0;
  padding: 0 10px;
}

.content {
  font-size: 1em;
  text-align: left;
  padding: 10px 0;
}
.content-info {
  font-size: 0.8em;
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