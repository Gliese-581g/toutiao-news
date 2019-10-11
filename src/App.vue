<template>
  <div id="app">
    <keep-alive include="home">
      <router-view class="container"></router-view>
    </keep-alive>
    </div>
</template>
<script>
export default {
    name: 'app',
}
</script> 

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
