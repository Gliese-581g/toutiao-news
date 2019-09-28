<template>
    <div class="shop-item">
        <div>
            <img v-for="(image, index) in images" :key="index" src="" alt="">
            <child-shop @click="onChange" :align="results" >
            </child-shop>
        </div>
        <p><span></span><span></span></p>
        <button class="btn" @click="onchange"></button>
    </div>
</template>

<script>
    import axios from 'axios'
    import ChildShop from "./ChildShop";
    export default {
        name: "Shop",
        components: [
          ChildShop
        ],
        data: function() {
            return {
                results: [],
                images: [1, 3, 4, 2, 5]
            }
        },
        methods: {
            onChange: function () {
                alert('you click me !')
            }
        },
        created() {
            axios.get('/api/list/?tag=news_finance&ac=wap&count=20&format=json_raw&as=A17538D54D106FF&cp=585DF0A65F0F1E1&min_behot_time=1482491618')
                .then((response) => {
                    const results = response.data.data;
                    results.forEach((item, index) => {
                       if (index > 2) {
                           this.results.push(item);
                       }
                    })

            })
        },
        mounted() {

        }
    }
</script>

<style scoped>
    .shop-item {
        display: flex;
        flex-flow: row nowrap;
        background-color: #0066d0;
        padding: 10px 4px 3px 5px;
        margin-top: 30px;
        border: #999999 solid 1px;
        border-radius: 2px;
        justify-content: center;


    }
</style>