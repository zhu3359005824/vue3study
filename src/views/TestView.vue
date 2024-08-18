<template>
  <div class="background">
    
      <p>姓名: {{ name }}</p>
      <p>性别：{{ sex }}</p>
      <p>年龄：{{ age }}</p>
      <button @click="changeAge" class="button">改变年龄</button>
   
  
      <h2>一辆{{ car.brand }}车,价值{{ car.price }}</h2>
      <button @click="changeCarPrice" class="button">更新汽车价格</button>
      
      
      <br />
      -------------使用ref创建对象类型响应式数据,并改变对象中的属性-----------
      <ul>
        <li v-for="g in games " :key="g.id">{{ g.name }}</li><br>
        <button @click="changeFristGame" class="button"> 改变第一个游戏名称</button>
      </ul>
      <br>
    <br>
    <br>
    <br>
    <div class="person">
      计算属性(全名)------使用computed <br>
      姓:<input type="text" v-model="fristName"> <br>
      名:<input type="text" v-model="lastName"><br>
      (计算属性)全名:<span>{{ fullName }}</span><br>
      (计算属性)全名:<span>{{ fullName }}</span><br>
      (计算属性)全名:<span>{{ fullName }}</span><br>
      (方法)全名:<span>{{ fullName2() }}</span><br>
      (方法)全名:<span>{{  fullName2()}}</span><br>
    </div>
  </div>
</template>

<script setup>







//--------------------使用ref创建基本类型响应式数据
import { computed, ref } from "vue";
//--------------------使用reactive创建对象类型响应式数据
import { reactive } from "vue";
//------------------------//
//------------------------//
//-PS:ref也可以创建对象类型响应式数据,不过要在对象后加.value后在点出对象中的属性

let name = "张三"; //非响应式数据,后面的方法不能改变显示在界面上的数据
let sex = "男";
let age = ref(18); //ref() 响应式数据

let car = reactive({ brand: "奔驰", price: 100 });

let games = ref([
  { id: "1", name: "王者荣耀" },
  { id: "2", name: "原神" },
  { id: "3", name: "三国杀" },
]);

//-------------------------------------------------------------------------------computed属性(只读属性)-------------------------------------
//-------------------计算属性computed的使用-------------------------
let fristName=ref();
let lastName=ref();
//-------------使用computed,有缓存,即多个显示处需要使用该计算属性,只计算一次    而方法会计算多次
let fullName=computed(()=>{
  console.log("计算属性")
  return fristName.value+'-'+lastName.value
})

function fullName2(){
  console.log("方法")
  return fristName.value+lastName.value
}
//--------------------------------------------------------------------------------------------------------------------------------




function changeAge() {
  //需要.value改变
  age.value += 1;
}

function changeCarPrice() {
  car.price += 10;
}

function changeFristGame(){
  //-------------使用ref创建对象类型响应式数据-----------
  games.value[0].name='战舰世界'
}
</script>

<style scoped >
li{
  font-size: 20px;
}
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

