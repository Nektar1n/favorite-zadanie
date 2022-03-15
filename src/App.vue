<template>
  <div class="App">
    <router-view/>
  </div>
<!--  <nav>-->
<!--    <router-link to="/">Home</router-link> |-->
<!--    <router-link to="/about">About</router-link>-->
<!--  </nav>-->
<!--  <router-view/>-->
</template>

<script>
import axios from "axios";

export default {
  name:'App',
  data(){
    return{
      msg: 'str'
    }
  },
  mounted() {
    // let user
    // axios.get('https://jsonplaceholder.typicode.com/users?_limit=10').then(responce=>{user=responce.data})
    // const res = await fetch(
    //     'https://jsonplaceholder.typicode.com/users?_limit=10'
    // )
    // const users = await res.json()
    // console.log(users)
    // console.log(user)
  }
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

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
