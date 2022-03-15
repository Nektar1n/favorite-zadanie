<template>
  <div class="home">
    <MyButton id="upd_btn" @click="updateUsers">UPDATE LIST USERS</MyButton>
    <h1>All USERS</h1>
    <div class="all_users">
      <div class="list_item" v-for="user in localStorageList" :key="user.id" @click="showerDescription(user)">
        <MyButton @click.stop="deleteUser(user)">Delete</MyButton>
        <h1>{{user.first_name}}</h1>
        <p>{{user.last_name}}</p>
        <img class="avatar_item" :src='user.avatar' alt="">
      </div>
    </div>
    <user-description v-if="showDescription" @exitDescription="exitDescription" :userDescription="userDescription">
<!--      <template v-slot:id>{{userDescription.id}}</template>-->
<!--      <template v-slot:name>{{userDescription.first_name}}</template>-->
<!--      <template v-slot:last_name>{{userDescription.last_name}}</template>-->
<!--      <template v-slot:email>{{userDescription.email}}</template>-->
<!--      <template v-slot:city>{{userDescription.address.city}}</template>-->
<!--      <template v-slot:zipcode>{{userDescription.address.zipcode}}</template>-->
<!--      <template v-slot:name_company>{{userDescription.company.name}}</template>-->
<!--      <template v-slot:catch_phrase>{{userDescription.company.catchPhrase}}</template>-->
<!--      <template v-slot:phone>{{userDescription.phone}}</template>-->
<!--      <template v-slot:website>{{userDescription.website}}</template>-->
    </user-description>
  </div>
</template>

<script>

import {mapGetters,mapActions} from 'vuex'
import UserDescription from "@/views/UserDescription";
import MyButton from "@/components/UI/MyButton";

export default {

  name: 'HomeView',
  components: {
    MyButton,
    UserDescription
  },
  data(){
    return{
      showDescription: false,
      userDescription:null,
      // userName:'',
      filteredList:[],
      localStorageList:null
    }
  },
  computed: mapGetters(['allUsers','allCount']),
  methods:{...mapActions(['fetchUsers']),
    exitDescription(){
      this.showDescription=false
    },
    showerDescription(user){
      this.showDescription=true
      // this.userName=user.name
      this.userDescription=user
      this.$router.push({name:'user',params:{id:user.id}});
    },
    deleteUser(user){
      // console.log(user)
      const index=this.allUsers.indexOf(user)
      // console.log(index)
      // this.localStorageList.splice(index,1)
      this.localStorageList=this.localStorageList.filter(u=>u!==user)
      localStorage.setItem('UsersList',JSON.stringify(this.localStorageList))
      console.log(this.allUsers)
    },
    updateUsers(){
      localStorage.setItem('UsersList',JSON.stringify(this.allUsers))
      this.localStorageList=this.allUsers
    }
  },
  mounted() {
    this.fetchUsers(2)
    // console.log(...JSON.parse(localStorage.getItem('UsersList')))
    // // this.allUsers=JSON.parse(localStorage.getItem('UsersList'))
    // console.log(this.allUsers)
    this.localStorageList=JSON.parse(localStorage.getItem('UsersList'))
    console.log(JSON.parse(localStorage.getItem('UsersList')))
    // console.log(this.localStorageList)
  },
}
</script>

<style>
.home{
  margin-top: 90px;
}
.all_users{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.list_item{
  border: 2px solid tan;
  margin-bottom: 15px;
  cursor: pointer;
  /*width: 40%;*/
  margin-left: 10px;
  padding: 10px;
  transition: all .2s ease;
  border-radius: 2px;
}
.list_item:hover{
  background-color: darkseagreen;
  /*background-color: cadetblue;*/
  border-radius: 30px;
}
.btn{
  background: white;
  border: 1px solid teal;
  box-shadow: 0px 5px teal;
  cursor:pointer;
  transition: all .2s ease;
  border-radius: 10px;
}
.btn:hover{
  box-shadow: 0px 1px teal;
  transform: translateY(4px);
}
#upd_btn{
  font-size: 25px;
  height: 50px;
}
.avatar_item{
  width: 300px;
}
</style>
