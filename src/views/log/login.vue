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
    <div style="margin-top: 10%" @click="goIPC">浙ICP备2020043880号</div>
  </div>
</template>

<script>
export default {
  data() {
    return { buttonSize: "large", loginForm: { username: "", pwd: "" } };
  },
  methods: {
    alerterror() {
      this.$confirm('服务器错误', "提示", {
        confirmButtonText: "确定",
        type: "warning",
      })
    },
    alertmsg(msg, type){
      this.$message({
        message: msg,
        type: type
      })
    },
    goIPC() {
      window.location.href = "http://beian.miit.gov.cn/";
    },
    goRegister() {
      this.$router.push("register");
    },
    goForgetPwd() {
      this.$router.push("forgetpwd");
    },

    async login() {
      if (this.loginForm.username === "" || this.loginForm.pwd === "") {
        this.alertmsg('用户名或密码不能为空', 'warning')
      } else {
        this.$axios
          .post("/account/login", {
            accountNickname: this.loginForm.username,
            accountPwd: this.loginForm.pwd,
          })
          .then((res) => {
            if (res.data.code === 0) {
              localStorage.setItem(
                "userid",
                res.data.data.accountInfo.accountId
              );
              localStorage.setItem(
                "username",
                res.data.data.accountInfo.accountNickname
              );
              this.alertmsg('登录成功', 'success')
              this.$router.push("home");
            } else {
              this.alertmsg('用户名与密码不匹配', 'warning')
            }
          })
          .catch(() => {
            this.alerterror()
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
