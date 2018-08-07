<template>
  <div id="app">
    <router-view/>
    <svg-icon></svg-icon>
  </div>
</template>

<script>
import svgIcon from './components/common/svg'

export default {
  name: 'App',
  components: {
    svgIcon
  }
}
</script>

<style>
  @import "./style/common.scss";

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  body {
    margin: 0px;
  }
</style>
