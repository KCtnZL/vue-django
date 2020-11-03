<template>
    <div id="app">
      <router-view/>
    </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      checked1: false,
      checked2: true,
      tab0: true,
      tab1: true,
      tab2: true
    };
  },
  methods: {
    handleTabRemove (name) {
      this['tab' + name] = false;
    }
  }
}
</script>

<style>
  html, body, #app{
    margin:0;
    border:0;
    padding:0;
    width:100%;
    height:100%;
    font-size: 14px;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }
</style>
