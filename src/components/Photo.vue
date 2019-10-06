<template>
  <div>
    <h3>妹子图</h3>
    <div class="gallery">
      <img v-for="(image, index) in images" :key="index" v-lazy="image.imageUrl" />
    </div>
  </div>
</template>

<script>
    import axios from 'axios'
    import scroll from '../scroll'

    export default {
        name: "News",
        data: function () {
            return {
                succeed: false,
                images: [],
                url: 'https://www.mxnzp.com/api/image/girl/list/random',
                isLoading: false
            }
        },
        methods: {
            getPhotos(images) {
                axios.get(this.url)
                    .then(response => {
                        console.log('yes')
                        const results = response.data.data;
                        results.forEach((item, index) => {
                            if (index < 5) {
                                images.push(item)
                            }
                        })
                    })
            },

            scroll(images) {
                window.onscroll = () => {
                    // 距离底部200px时加载一次
                        const _this = this;
                        scroll.use(_this).then(response => {
                            const results = response.data.data;
                            results.forEach((item, index) => {
                                if (index < 4) {
                                    images.push(item)
                                }
                            })
                            this.isLoading = false;
                        })

                }

            }
        },
        created() {
            this.getPhotos(this.images);
        },
        mounted() {
            this.scroll(this.images);
        }

    }
</script>

<style scoped>
.gallery {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
}

.gallery img {
  width: 100%;
  margin: 10px;
}
</style>