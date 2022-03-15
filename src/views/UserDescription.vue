<template>
  <div class="user_description">
    <button class="ext_btn" @click="$emit('exitDescription'),$router.push({name:'home'})">
      exit
    </button>
          <h1>ID: {{userDescription.id}}
          <input type="text" disabled :value="userDescription.first_name"></h1>
          <h2>{{userDescription.last_name}}</h2>
          <h2>EMAIL: {{userDescription.email}}</h2>
          <img :src="userDescription.avatar" alt="" class="user_description_avatar">
    <div class="change_buttons">
        <MyButton class="change_buttons_btn" v-if="!showChangeButton" @click="showChangeButton=!showChangeButton">Change data user</MyButton>
        <MyButton class="change_buttons_btn save_btn" v-if="showChangeButton">Save data user</MyButton>
        <MyButton class="change_buttons_btn" v-if="showChangeButton" @click="showChangeButton=!showChangeButton">Cancel</MyButton>
    </div>
  </div>
</template>

<script>
import MyButton from "@/components/UI/MyButton";
export default {
  name: "UserDescription",
  data(){
    return{
      showChangeButton:false
    }
  },
  components: {MyButton},
  props:{
    userDescription:Object
  }
}

</script>

<style scoped>
.user_description{
  position: fixed;
  background-color: darkslategray;
  color: white;
  width: 500px;
  height: 500px;
  left:50%;
  top:50%;
  transform:translate(-50%,-50%);
  padding: 50px;
  border: 2px solid darkseagreen;
  text-align: left;
}
@media (max-width: 900px) {
  .user_description{
    width: 300px;
  }
}
.ext_btn{
  position: absolute;
  top: 0;
  right: 0;
  background: none;
  border: 2px solid white;
  color: white;
  height: 40px;
  width: 50px;
  cursor: pointer;
  font-size: 16px;
}
.ext_btn:hover{
  color: brown;
  border: 3px solid brown;
}
.user_description_avatar{
  width: 80%;
  position: absolute;
  top: 10%;
  z-index: -10;
}
input{
  font-size: 40px;
  background: none;
  border: none;
  text-decoration: black;
}
.change_buttons{
  display: flex;
  flex-direction: column;
  width: 30%;
}
.change_buttons_btn{
  margin-bottom: 50px;
  height: 40px;
}
.save_btn{
  margin-top: 60px;
}
</style>

