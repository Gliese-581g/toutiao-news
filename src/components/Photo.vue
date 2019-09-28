<template>
    <div>
        <h3>妹子图</h3>
        <div class="gallery">
            <img v-for="(image, index) in images" :key="index" v-lazy="image.imageUrl"/>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "News",
        data: function () {
            return {
                succeed: false,
                images: []
            }
        },
        methods: {
            getPhotos(images) {
                axios.get('https://www.mxnzp.com/api/image/girl/list/random')
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
                let isLoading = false
                window.onscroll = () => {
                    // 距离底部200px时加载一次
                    let bottomOfWindow = document.documentElement.offsetHeight - document.documentElement.scrollTop - window.innerHeight <= 200
                    if (bottomOfWindow && isLoading == false) {
                        isLoading = true;
                        axios.get('https://www.mxnzp.com/api/image/girl/list/random').then(response => {
                            const results = response.data.data;
                            results.forEach((item, index) => {
                                if (index < 4) {
                                    images.push(item)
                                }
                            })
                            isLoading = false
                        })
                    }
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