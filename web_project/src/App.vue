<template>
    <div id="app">
      <!-- <el-checkbox v-model="checked1">备选项1</el-checkbox> -->
      <!-- <el-checkbox v-model="checked2">备选项</el-checkbox> -->
      <router-view/>
    </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      checked1: false,
      checked2: true
    };
  }
}
</script>

<style>
  /*@import "assets/css/home.css";*/
  html, body{
    margin:0;
    border:0;
    padding:0;
    width:100%;
    height:100%;
    font-size: 14px;
  }
  #app {
    /* position:absolute; */
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }
</style>
