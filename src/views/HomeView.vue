<template>
  <div class="home">
    <MyButton id="upd_btn" @click="updateUsers">REFRESH LIST USERS</MyButton>
    <h1>All USERS</h1>
      <div class="all_users">
        <TransitionGroup name="list">
          <div class="list_item" v-for="user in localStorageList" :key="user" @click="showerDescription(user)">
            <MyButton @click.stop="deleteUser(user)">Delete</MyButton>
            <h1>{{user.first_name}}</h1>
            <p>{{user.last_name}}</p>
            <img class="avatar_item" :src='user.avatar' alt="">
          </div>
        </TransitionGroup>
      </div>
      <Transition name="modal">
        <user-description
            v-if="showDescription"
            @exitDescription="exitDescription"
            :localStorageList="localStorageList"
            :userDescription="userDescription"
            @cancelChange="cancelChange"
        >
        </user-description>
      </Transition>
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
      filteredList:[],
      localStorageList:null,
      revertChange:null,
    }
  },
  computed: mapGetters(['allUsers','allCount',]),
  methods:{...mapActions(['fetchUsers']),
    exitDescription(){
      this.showDescription=false
    },
    showerDescription(user){
      this.showDescription=true
      this.userDescription=user
      this.$router.push({name:'user',params:{id:user.id}});
    },
    deleteUser(user){
      const index=this.allUsers.indexOf(user)
      this.localStorageList=this.localStorageList.filter(u=>u!==user)
      localStorage.setItem('UsersList',JSON.stringify(this.localStorageList))
    },
    updateUsers(){
      localStorage.setItem('UsersList',JSON.stringify(this.allUsers))
      this.localStorageList=JSON.parse(localStorage.getItem('UsersList'))
    },
    cancelChange(revertChange){
      this.revertChange=revertChange
    },
  },
  mounted() {
    this.fetchUsers(2)
    this.localStorageList=JSON.parse(localStorage.getItem('UsersList'))
  },
}
</script>

<style>
.home{
  margin: 90px auto;
  width: 90%;
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
  border-radius: 10px;
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
  transition:all .4s ease;
  border-radius: 10px;
}
.list_item:hover .avatar_item{
  border-radius: 200px;
}

.modal-enter-active{
  transition:all .3s ease ;
}
.modal-leave-active{
  transition:all .2s ease ;
}
.modal-enter-from, .modal-leave-to{
  /*transform: scale(5) !important;*/
  opacity: 0;
}


.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.3s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}


.list-leave-active {
  position: absolute;
}
</style>
