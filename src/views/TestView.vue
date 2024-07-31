<template>
  <div class="background">
   <div class="content">
    <p>姓名: {{ name }}</p>
    <p>性别：{{ sex }}</p>
    <p>年龄：{{ age }}</p>
    <button @click="changeAge" class="button">改变年龄</button>
   </div>
  </div>
</template>

<script setup>

let name='张三'//非响应式数据,后面的方法不能改变显示在界面上的数据
let sex='男'
let age=18

function changeAge(){
  age=age+1
}
 
</script>

<style scoped >
.button{
  width: 10%;
  height: 5%;
}
.content{
  background-color:skyblue;
  box-shadow: 0,0,20px;
  border-radius: 15px;
  padding: 20px;
  width: 50%;
  top: 10%;
  left: 20%;
  position: absolute;
  line-height: 60px;
  
}
</style>

