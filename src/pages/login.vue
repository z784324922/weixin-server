<template>
  <section class="section login">
    <div class="logo">
        <img :src="mlogo" alt="">
    </div>
    <mt-field class="ltxt" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
    <mt-field class="ltxt" placeholder="请输入密码" type="password" v-model="password"></mt-field>
    <div class="loginbtn" @click="logins">登录</div>
    <div class="register">
      {{msg}}
    </div>
  </section>
</template>

<script>
import mlogo from "../assets/images/mlogo.png";
import router from "../router";
import axios from "axios";
import { Field, Toast } from "mint-ui";

export default {
    data() {
        return {
          mlogo: mlogo,
          phone: "",
          password: "",
          username: "",
          email: "",
          msg:""
        };
    },
    methods: {
      //登录
      logins() {
        this.msg = this.$route.query;
        axios.get("/login",{
          params:{
            username:this.phone,
            password:this.password,
            unionid:this.$route.query.unionid
          }  
        })
        .then(res=>{
          return res.data;
        })
        .then(json=>{
          if(json.code == 0){
            localStorage.tulaobanUserName = this.phone;
            localStorage.tulaobanUnionId = this.$route.query.unionid;
            this.$router.push({path:'/my'})
          }
          else{
             Toast({message: '登录失败!',className:"mToast"});
          }
        })
      }
    }
};
</script>

<style scoped lang="less">
.login {
  position: absolute;
  background: white;
}
.ltitle {
  float: right;
  font-size: 60px;
  margin-right: 50px;
  margin-top: 20px;
  color: #333333;
}
.logo {
  display: flex;
  justify-content: space-around;
  margin: 150px 0;
  img {
    height: 172px;
  }
}
.ltxt {
  height: 90px;
  border-bottom: 1px solid #c9c9cf;
  margin: 0 116px !important;
  input {
    font-size: 30px !important;
  }
  .mintui-field-error {
    font-size: 30px !important;
  }
}
.loginbtn {
  height: 80px;
  line-height: 80px;
  text-align: center;
  box-sizing: border-box;
  margin: 60px 116px;
  background: #e95254;
  color: white;
}
.register {
  text-align: center;
  span {
    font-size: 22px;
    color: #e95254;
  }
  .gang {
    height: 40px;
    padding: 0 10px;
    color: #dddddd;
  }
}
</style>
