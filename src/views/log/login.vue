<template>
  <div class="login">
    <div style="margin-top: 9%; font-size: 18px">Sign in to OurSudoku</div>
    <div style="font-size: 32px; margin-top: 1%; margin-bottom: 4%">登录</div>
    <div class="inputlogin d-flex jc-center">
      <Input
        v-model="loginForm.username"
        prefix="md-contact"
        size="large"
        placeholder="  Enter Username..."
        style="width: 29%"
      />
    </div>
    <div class="inputlogin d-flex jc-center">
      <Input
        v-model="loginForm.pwd"
        prefix="md-unlock"
        size="large"
        type="password"
        placeholder="  Enter Password..."
        style="width: 29%"
      />
    </div>
    <Button
      :size="buttonSize"
      type="primary"
      shape="circle"
      style="margin-top: 3%; margin-bottom: 2%; width: 15%"
      @click="login"
      >登录
    </Button>
    <div class="d-flex jc-center">
      <div style="margin-right: 3%; color: #0079fe" @click="goRegister">
        注册新用户
      </div>
      <div style="margin-left: 3%; color: #0079fe" @click="goForgetPwd">
        忘记密码
      </div>
    </div>
  </div>
</template>

<script>
// import { mapMutations } from "vuex";

export default {
  data() {
    return { buttonSize: "large", loginForm: { username: "", pwd: "" } };
  },
  methods: {
    goRegister() {
      this.$router.push("register");
    },
    goForgetPwd() {
      this.$router.push("forgetpwd");
    },

    // ...mapMutations(["changeLogin"]),
    async login() {
      // let _this = this;
      if (this.loginForm.username === "" || this.loginForm.pwd === "") {
        alert("用户名或密码不能为空");
      } else {
        this.$axios
          .post("/account/login", {
            accountNickname: this.loginForm.username,
            accountPwd: this.loginForm.pwd,
          })
          .then((res) => {
            // alert("发送成功");
            // console.log(res.data);

            if (res.data.code === 0) {
              localStorage.setItem(
                "userid",
                res.data.data.accountInfo.accountId
              );
              localStorage.setItem(
                "username",
                res.data.data.accountInfo.accountNickname
              );
              // alert(
              //   localStorage.getItem("userid") +
              //     localStorage.getItem("username")
              // );

              // localStorage.removeItem("userid");
              // localStorage.setItem("userid", 555);
              // alert(localStorage.getItem("userid"));
              // _this.userToken = "Bearer " + res.data.data.body.token;
              // 将用户token保存到vuex中
              // _this.changeLogin({ Authorization: _this.userToken });
              this.$router.push("home");
            }
            alert(res.data.msg);
          })
          .catch((error) => {
            alert("服务器错误");
            console.log(error);
          });
      }
    },
  },
};
</script>

<style>
.login {
  text-align: center;
}
.inputlogin {
  margin: 2%;
}
</style>