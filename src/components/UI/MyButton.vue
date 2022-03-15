<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "MyButton"
}
</script>

<style scoped>
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
</style>
