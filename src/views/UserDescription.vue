<template>
  <div class="user_description">
    <button class="ext_btn" @click="$emit('exitDescription'),$router.push({name:'home'}),exitDescription()">
      exit
    </button>
    <div class="wrapper">
          <input type="text" class="change_input" disabled v-model="usrDescription.id">
      <hr>
          <span>First name: </span><input type="text" class="change_input" disabled v-model="usrDescription.first_name">
      <hr>
          <span>Last name: </span><input type="text" class="change_input" disabled v-model="usrDescription.last_name">
      <hr>
          <span>Email: </span><input type="text" class="change_input email" disabled v-model="usrDescription.email">
      <hr>
          <input type="image" :src="usrDescription.avatar" alt="" class="user_description_avatar">
    <div class="change_buttons">
        <MyButton class="change_buttons_btn" v-if="!showChangeButton" @click="changeDescription">Change data user</MyButton>
        <MyButton class="change_buttons_btn save_btn" v-if="showChangeButton" @click="saveChangeDescription">Save data user</MyButton>
        <MyButton class="change_buttons_btn" v-if="showChangeButton" @click="exitChangeDescription">Cancel</MyButton>
    </div>
    </div>
  </div>
</template>

<script>
import MyButton from "@/components/UI/MyButton";
export default {
  name: "UserDescription",
  data(){
    return{
      showChangeButton:false,
      usrDescription:this.userDescription,
      revertOldName:null,
      revertOldLastName:null,
      revertOldEmail:null,
      revertOldId:null
    }
  },methods:{
    changeDescription(){
      this.showChangeButton=!this.showChangeButton
      // document.querySelectorAll(".change_input").forEach((i)=>i.disabled=false)
      // localStorage.setItem('UsersList')
      // console.log(this.usrDescription)
      this.revertOldName=this.usrDescription.first_name
      this.revertOldLastName=this.usrDescription.last_name
      this.revertOldEmail=this.usrDescription.email
      this.revertOldId=this.usrDescription.id

      document.querySelectorAll(".change_input").forEach((inp)=>{
        inp.disabled=false
        inp.style.textShadow="none"
        inp.style.outline='2px solid black'
        inp.style.color="white"
      })
    },
    saveChangeDescription(){
      document.querySelectorAll(".change_input").forEach((inp)=>{
        inp.disabled=true
        inp.style.outline="none"
        inp.style.textShadow="1px 0 0 #fff, -1px 0 0 #fff, 0 1px 0 #fff, 0 -1px 0 #fff, 1px 1px #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff";
        inp.style.color="black"
        // console.log(this.usrDescription)
        // this.$emit('usrChanged',this.usrDescription)
        // localStorage.setItem[this.usrDescription.id]('UsersList',JSON.stringify(this.usrDescription))
      })
      this.showChangeButton=false
      // this.$emit('saveChange',this.usrDescription)
      localStorage.setItem('UsersList', JSON.stringify(this.localStorageList))
    },
    exitChangeDescription(){
      document.querySelectorAll(".change_input").forEach((inp)=>{
        inp.disabled=true
        inp.style.outline="none"
        inp.style.textShadow="1px 0 0 #fff, -1px 0 0 #fff, 0 1px 0 #fff, 0 -1px 0 #fff, 1px 1px #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff";
        inp.style.color="black"
      })
      this.showChangeButton=false
      this.usrDescription.first_name=this.revertOldName
      this.usrDescription.last_name=this.revertOldLastName
      this.usrDescription.email=this.revertOldEmail
      this.usrDescription.id=this.revertOldId


      // this.localStorageList=JSON.parse(localStorage.getItem('UsersList'))
      localStorage.setItem('UsersList', JSON.stringify(this.localStorageList))
      // this.usrDescription=this.userDescription
    },
    exitDescription(){
      if(this.showChangeButton){
        this.usrDescription.first_name=this.revertOldName
        this.usrDescription.last_name=this.revertOldLastName
        this.usrDescription.email=this.revertOldEmail
        this.usrDescription.id=this.revertOldId
      }
    }

  },
  components: {MyButton},
  props:{
    userDescription:Object,
    localStorageList:Object
  },
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
  border-radius: 20px;
}

.ext_btn{
  position: absolute;
  top: 2px;
  right: 2px;
  background: none;
  border: 2px solid white;
  color: white;
  height: 40px;
  width: 50px;
  cursor: pointer;
  font-size: 16px;
  border-radius: 20px;
  box-shadow: 0px 5px brown;
  transition: all .2s ease;
}
.ext_btn:hover{
  color: brown;
  border: 3px solid brown;
  transform: translateY(4px);
  box-shadow: 0px 1px maroon;
}
.user_description_avatar{
  /*width: 100%;*/
  width: 40%;
  position: absolute;
  top: 10%;
  right: 10%;
  z-index: -10;
  border-radius: 200px;
  /*min-height: 100%;*/
}
.change_input{
  margin-top: 15px;
  font-size: 32px;
  font-weight: bold;
  background: none;
  border: none;
  width: 90%;
  color: black;
  text-shadow: 1px 0 0 #fff, -1px 0 0 #fff, 0 1px 0 #fff, 0 -1px 0 #fff, 1px 1px #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff;
  padding: 10px;
  transition: all .2s ease;
  border-radius: 20px;
}
.change_buttons{
  display: flex;
  flex-direction: row;
  width: 30%;
  margin-top: 10px;
}
.change_buttons_btn{
  margin-bottom: 20px;
  height: 40px;
}
.save_btn{
  margin-right: 10px;
}
.wrapper{
  width: 480px;
  position: relative;
  outline: 1px solid gray;
  padding: 10px;
  border-radius: 10px;
}
.wrapper span{
  font-size: 20px;

}
hr{
  width: 40%;
  margin-left: 0;

}
@keyframes blinker {
  50% {
    opacity: 0;
  }
}
@media (max-width: 900px) {
  .user_description{
    width: 300px;
  }
  .email{
    font-size: 20px;
  }
  .wrapper{
    width: 300px;
  }
  .change_buttons{
    width: 70%;
  }
}
</style>

