<template>
  <div class="background">
    <p>姓名: {{ name }}</p>
    <p>性别：{{ sex }}</p>
    <p>年龄：{{ age }}</p>
    <button @click="changeAge0" class="button">改变年龄</button>

    <h2>一辆{{ car.brand }}车,价值{{ car.price }}</h2>
    <button @click="changeCarPrice" class="button">更新汽车价格</button>

    <br />
    -------------使用ref创建对象类型响应式数据,并改变对象中的属性-----------
    <ul>
      <li v-for="g in games" :key="g.id">{{ g.name }}</li>
      <br />
      <button @click="changeFristGame" class="button">
        改变第一个游戏名称
      </button>
    </ul>
    <br />
    <br />
    <br />
    <br />
    <div class="person">
      计算属性(全名)------使用computed <br />
      姓:<input type="text" v-model="fristName" /> <br />
      名:<input type="text" v-model="lastName" /><br />
      (计算属性)全名:<span>{{ fullName }}</span
      ><br />
      (计算属性)全名:<span>{{ fullName }}</span
      ><br />
      (计算属性)全名:<span>{{ fullName }}</span
      ><br />
      (方法)全名:<span>{{ fullName2() }}</span
      ><br />
      (方法)全名:<span>{{ fullName2() }}</span
      ><br />
      <br />
      <br />
    </div>
    <div class="watch">
      <h1>watch监视数据变化</h1>
      <br />
      <h2>1.ref基本数据类型</h2>

      <h3>当前求和为:{{ sum }}</h3>
      <button @click="changeSum">点我sum+1</button>
      <h2>
        2.ref对象数据类型--监视对象地址值
        (若要监视对象中的属性需要手动开启深度监视,即在watch中添加参数
        {deep:true})
      </h2>
      <h3>姓名:{{ person.name }}</h3>
      <h3>年龄：{{ person.age }}</h3>
      <button @click="changeName">修改名字</button>
      <button @click="changeAge">修改年龄</button>
      <button @click="changePerson">修改人</button>
      <h2>3.reactive对象数据类型--监视对象 (默认开启深度监视)</h2>
      <h3>姓名:{{ person1.name }}</h3>
      <h3>年龄：{{ person1.age }}</h3>
      <button @click="changeName1">修改名字</button>
      <button @click="changeAge1">修改年龄</button>
      <button @click="changePerson1">修改人</button>
      <hr />
      <h2>
        4.监视响应式对象中的某个属性（基本类型和对象类型（对象类型需要开启深度监视））
      </h2>
      <h3>姓名:{{ person2.name }}</h3>
      <h3>年龄：{{ person2.age }}</h3>
      <h3>汽车:{{ person2.car.c1 }},{{ person2.car.c2 }} </h3>

      <button @click="changeName2">修改名字</button>
      <button @click="changeAge2">修改年龄</button>
      <button @click="changeC12">修改第一辆车</button>
      <button @click="changeC22">修改第二辆车</button>
      <button @click="changeCar">修改车</button>
      <hr />
    </div>

    <!--   <div>
      <br>
      <p><input type="text" name="" id="" placeholder="输入账号" v-model="username"></p>
      <input type="password" name="" id="" placeholder="输入密码" v-model="password"><p></p>
      <button @click="login">登录</button>
    </div> -->
  </div>
</template>

<script setup >
//#region  ref与reactive创建响应式数据
//--------------------使用ref创建基本类型响应式数据
import { computed, ref, watch } from "vue";
//--------------------使用reactive创建对象类型响应式数据
import { reactive } from "vue";

//#region 测试登录

/* let username=ref();
let password=ref();

function login(){
  if(username.value=='admin'&&password.value==123){
    alert("登陆成功")
    
  }
} */

//#endregion

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

//PS:reactive定义的对象不可以直接修改地址,需要使用Object.assign(原来的对象,新对象)
function changeAge0() {
  //需要.value改变
  age.value += 1;
}

function changeCarPrice() {
  car.price += 10;
}

function changeFristGame() {
  //-------------使用ref创建对象类型响应式数据-----------
  games.value[0].name = "战舰世界";
}
//#endregion
//#region  computed计算属性
//-------------------------------------------------------------------------------computed属性(只读属性)-------------------------------------
//-------------------计算属性computed的使用-------------------------
let fristName = ref();
let lastName = ref();
//-------------使用computed,有缓存,即多个显示处需要使用该计算属性,只计算一次    而方法会计算多次
let fullName = computed(() => {
  console.log("计算属性");
  return fristName.value + "-" + lastName.value;
});

function fullName2() {
  console.log("方法");
  return fristName.value + lastName.value;
}
//--------------------------------------------------------------------------------------------------------------------------------
//#endregion

//#region watch监视数据变化
//------VUE3中只能监视4种数据-------
//1.ref定义的数据
//2.reactive定义的数据
//3.函数返回一个值(getter函数)
//4.一个包含上述内容的数组

//#region 1.监视ref定义的数据
//------------1.监视ref定义的数据--------------
//(1).基本类型--
let sum = ref(0);

function changeSum() {
  sum.value += 1;
}
watch(sum, (newValue, oldValue) => {
  if (newValue > 10 && oldValue != 0) {
    sum.value -= 1;
    alert("error");
  }
});
//(2).对象类型--
let person = ref({
  name: "张三",
  age: 18,
});

function changeAge() {
  person.value.age += 1;
}
function changeName() {
  person.value.name += "~";
}
function changePerson() {
  person.value = { name: "李四", age: 30 };
}
watch(
  person,
  (newValue, oldValue) => {
    console.log(newValue, "-------", oldValue);
  },
  { deep: true }
);

//------------------------------PS-----------------//
//------------------------------------------------//
//可以使用lanmada表达式返回一个属性来监视，可以代替深度监视
watch(
  () => {
    return person.value.name;
  },
  (newValue, oldValue) => {
    console.log("person.name Change", newValue, oldValue);
  }
);
//#endregion
//#region 2.监视reactive定义的数据
//------------2.监视reactive定义的数据--------------
let person1 = reactive({
  name: "变形金刚",
  age: 180,
});

function changeAge1() {
  person1.age += 1;
}
function changeName1() {
  person1.name += "~";
}

//PS:reactive定义的对象不可以直接修改整个对象,需要使用Object.assign(原来的对象,新对象),没有改变地址
function changePerson1() {
  Object.assign(person1, { name: "奥特曼", age: 300 });
}
watch(
  person1,
  (newValue, oldValue) => {
    console.log(newValue, "-------", oldValue);
  },
  { deep: true }
);
//#endregion

//#region 4.监视响应式对象中的某个属性
//-------------4.监视响应式对象中的某个属性
let person2 = ref({
  name: "张三",
  age: 18,
  car: {
    c1: "奔驰",
    c2: "宝马",
  },
});

function changeName2(){
  person2.value.name+="~"
}
function changeAge2(){
  person2.value.age+=1
}
function changeC12(){
  person2.value.car.c1="奥迪"
}
function changeC22(){
  person2.value.car.c2="大众"
}
function changeCar(){
  person2.value.car={c1:"雅迪",c2:"爱玛"}
}
//--PS--//
//监视对象时，一定要使用lanmada表达式返回要监视的对象的属性--//
watch(()=>{return  person2.value.name},()=>{
  console.log("person.name change")
})
watch(()=>{ return person2.value.car},(newValue,oldValue)=>{
  console.log("person.car Change",newValue,oldValue)
},{deep:true})
//#endregion

//#endregion
</script>

<style scoped >
li {
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

