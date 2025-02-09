<template>
  <!-- <transition name="fade" mode="out-in"> -->
  <div id="app">
    <router-link to="/">Home</router-link> |
    <router-view />
  </div>
  <!-- </transition> -->
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;*/
}
</style>
