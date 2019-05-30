<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue"

export default {
  name: "app",
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss">
@import "./common/styles/config";

body {
  background-color: $base-back-color;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  margin-top: 60px;
  text-align: center;
}
</style>
