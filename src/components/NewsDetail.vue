<template>
    <div class="detail">
        <h3>
            {{result.title}}
        </h3>
        <div v-html="result.content" class="content"></div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "NewsDetail",
        props: ['query'],
        data: function() {
            return {
                  result: '',
            }
        },
        created() {
            const data = this;
            axios.get(`https://www.mxnzp.com/api/news/details?newsId=${this.query}`)
                .then(response => {
                    console.log(response.data);
                    const result = response.data.data;
                    data.result = result;
                })
                .catch(error => console.log(error))
        }
    }
</script>

<style scoped>
    .detail {
        width: 100%;
    }
    .content {
        font-size: .9em;
        margin: 10px 10px;
        text-align: left;

    }
</style>