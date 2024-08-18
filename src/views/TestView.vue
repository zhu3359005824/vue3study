<template>
  <div class="background">
    <div class="content">
      <p>姓名: {{ name }}</p>
      <p>性别：{{ sex }}</p>
      <p>年龄：{{ age }}</p>
      <button @click="changeAge" class="button">改变年龄</button>
    </div>
    <div class="object">
      <h2>一辆{{ car.brand }}车,价值{{ car.price }}</h2><button @click="changeCarPrice" class="button">更新汽车价格</button>
    </div>
  </div>
</template>

<script setup>
//--------------------使用ref创建基本类型响应式数据
import { ref } from "vue";
//--------------------使用reactive创建对象类型响应式数据
import { reactive } from "vue";

let name = "张三"; //非响应式数据,后面的方法不能改变显示在界面上的数据
let sex = "男";
let age = ref(18); //ref() 响应式数据

let car = reactive({ brand: "奔驰", price: 100 });

function changeAge() {
  //需要.value改变
  age.value += 1;
}

function changeCarPrice(){
car.price+=10
}
</script>

<style scoped >
.background {
  width: 100%;
  height: 100%;
  background-color: darkgrey;
  
}
.button {
  width: 10%;
  height: 5%;
}
.content {
  background-color: skyblue;
  box-shadow: 0, 0, 20px;
  border-radius: 15px;
  padding: 20px;
  width: 50%;
  top: 10%;
  left: 20%;
  position: absolute;
  line-height: 60px;
}
</style>

