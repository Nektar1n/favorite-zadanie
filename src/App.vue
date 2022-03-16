<template>
  <div class="App">
    <router-view/>
  </div>
</template>

<script>

export default {
  name:'App',
  data(){
    return{
      msg: 'str'
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
