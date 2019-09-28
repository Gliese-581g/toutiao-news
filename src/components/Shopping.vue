<template>
    <div>这是购物车界面</div>
</template>

<script>
    import {mapMutations} from 'vuex'

    export default {
        name: "Shopping",
        methods: {
            ...mapMutations([
                'changeLeftText'])
        },
        created() {
            this.changeLeftText();
        }
    }
</script>

<style scoped>

</style>