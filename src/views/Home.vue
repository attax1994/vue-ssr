<template>
  <div class="home">
    <div>Home page</div>
    <router-view></router-view>
    <input v-model="message" placeholder="edit me">
    <p>Message is: {{ message }}</p>
  </div>
</template>

<script>
  export default {
    name: "Home",
    data() {
      return {message: ''}
    },
  }
</script>

<style scoped lang="scss">
  .home {
    height: 100%;
  }
</style>