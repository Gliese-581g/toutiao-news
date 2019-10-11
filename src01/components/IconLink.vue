<template>
    <div class="icon">
        <router-link :to="icon.name">
            <img :src="icon.url">
        </router-link>
        <p>{{icon.title}}</p>
    </div>
</template>

<script>
    export default {
        name: "IconLink",
        props: [
            'icon'
        ]
    }
</script>

<style scoped>
    .icon {
        margin: 15px 0;
    }

    .icon img {
        width: 45px;
        height: 45px;
        margin: 0 30px;
    }
    .icon p {
        text-align: center;
    }
</style>