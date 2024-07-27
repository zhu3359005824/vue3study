<template>
  <div class="backgroup">
    <div class="logo">Mysystem</div>
    <div class="login">
      <el-card style="max-width: 480px">
        <div class="form">
          <el-input
            v-model="username"
            style="width: 300px"
            placeholder="请输入账号"
          />
          <el-input
            v-model="password"
            style="width: 300px"
            type="password"
            placeholder="请输入密码"
            show-password
          /><br />
          <el-button type="primary" plain @click="login">登录</el-button>
        </div>

        <div class="Login"></div>
      </el-card>
    </div>
    <div class="clock">
      <div class="time">{{ time }}</div>
      <div class="date">{{ date }}</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      username: "",
      password: "",
      time: "",
      date: "",
    };
  },
  mounted() {
    this.$nextTick(() => {
      setInterval(this.update_clock, 1000);
    });
  },
  methods: {
    update_clock: function () {
      var d = new Date();
      var year = d.getFullYear();
      var mon = d.getMonth() + 1;
      if (mon < 10) mon = "0" + mon;
      var day = d.getDate();
      if (day < 10) day = "0" + day;
      var hour = d.getHours();
      if (hour < 10) hour = "0" + hour;
      var minute = d.getMinutes();
      if (minute < 10) minute = "0" + minute;
      this.time = hour + ":" + minute;
      this.date = year + "/" + mon + "/" + day;
    },
    login: function() {
    axios.post('https://localhost:7089/Login/LoginCheck', {
      "username": this.username,
      "password": this.password
    })
    .then(response => {
      // 登录成功，保存token到本地存储
      localStorage.setItem('token', response.data.token);
      if(response.data){
        alert("登录成功");
        // 可以进行页面跳转或其他操作
        this.$router.push({ name: 'HomeView' }); 
      } else {
        alert("登录失败");
      }
      
      // 进行页面跳转或其他操作
    })
    .catch(error => {
     console.log(error)
      return;
    });
  },
  },
};
</script>


<style scoped>
.clock {
  color: white;
  position: absolute;
  top: 90%;
  left: 15%;
  text-align: left;
  font-size: 20px;
}
.form {
  line-height: 60px;
  padding-left: 15px;
  padding-right: 15px;
}
.login {
  position: absolute;
  top: 30%;
  left: 40%;
}
.el-card {
  height: 200px;
  width: 375px;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 15px;
}
.el-button {
  position: relative;
  left: 40%;
}
.logo {
  color: white;
  font-size: 25px;
  font-weight: 800;
  text-transform: uppercase;
  position: absolute;

  top: 10%;
  left: 10%;
}
.backgroup {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-image: linear-gradient(90deg, cyan, purple);
  background-size: 400%;
  animation: myanimation 10s infinite;
}

@keyframes myanimation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
