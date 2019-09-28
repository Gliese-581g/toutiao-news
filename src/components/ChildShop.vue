<template>
    <ul class="child-shop">
        <li class="child-bottom" v-for="result in results">
            {{value}}
        </li>

        <img v-for="(p, index) in result" :key="index" src="" alt="">
    </ul>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "ChildShop",
        props: ['results'],
        data: function () {
            return {
               value: 45,
                result: []
            }
        },
        methods: {
            onLoading() {
                axios.get('/api/list/?tag=news_finance&ac=wap&count=20&format=json_raw&as=A17538D54D106FF&cp=585DF0A65F0F1E1&min_behot_time=1482491618')
                    .then(response => {
                      const value = response.data.data;
                      value.forEach((item, index) => {
                          if (index > 2) {
                              this.result.push(item);
                              console.log(item);
                          }
                      })
                    })
                    .catch(error => console.log(error));
                let Promise = setTimeout((e) => {
                    const item = document.querySelector('.child-shop');
                    let isLoading = false;
                    let scroll = document.scrollingElement - window.innerHeight > 200
                    if (!isLoading && scroll) {
                        console.log(this.value);
                    }
                }, 3000)

            }
        }
    }
</script>

<style scoped>
    * {
        margin: 0;
        padding: 0;
    }
    .child-shop {
        color: #0066d0;
        display: flex;
        flex-flow: column;
    }
    .child-bottom {
        background-color: #666666;
        padding-top: 100px;
        margin: 22px;
        border-radius: 50%;
        line-height: normal;
    }

</style>