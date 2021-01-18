<template>
  <div class="register">
    <div style="margin-top: 5%; font-size: 18px">Join OurSudoku</div>
    <div style="font-size: 32px; margin-top: 1%; margin-bottom: 4%">
      新用户注册
    </div>
    <div class="inputregister d-flex jc-center">
      <Input
        v-model="registerForm.username"
        prefix="md-contact"
        size="large"
        placeholder="  Enter Username..."
        style="width: 29%"
      />
    </div>
    <div class="inputregister d-flex jc-center">
      <Input
        v-model="registerForm.phone"
        prefix="md-phone-portrait"
        size="large"
        placeholder="  Enter phone number..."
        style="width: 29%"
      />
    </div>
    <div class="inputregister d-flex jc-center">
      <Input
        v-model="registerForm.pwd"
        prefix="md-unlock"
        size="large"
        type="password"
        placeholder="  Enter Password..."
        style="width: 29%"
      />
    </div>
    <div class="inputregister d-flex jc-center">
      <Input
        v-model="registerForm.pwd2"
        prefix="md-unlock"
        size="large"
        type="password"
        placeholder="  Enter Password again..."
        style="width: 29%"
      />
    </div>
    <Button
      :size="buttonSize"
      type="primary"
      shape="circle"
      style="margin-top: 3%; margin-bottom: 2%; width: 15%"
      @click="register"
      >注册
    </Button>
    <div style="color: #0079fe" @click="goLogin">已有账号？立即登录</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      buttonSize: "large",
      registerForm: { username: "", phone: "", pwd: "", pwd2: "" },
    };
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
    goLogin() {
      this.$router.push("/");
    },

    async register() {
      var reg = /^0?1[3|4|5|6|7|8][0-9]\d{8}$/;

      if (this.registerForm.username === "") alert("用户名不能为空");
      else if (this.registerForm.phone === "") alert("手机号不能为空");
      else if (!reg.test(this.registerForm.phone)) alert("手机号不可用");
      else if (this.registerForm.pwd === "") alert("请输入密码");
      else if (
        this.registerForm.pwd.length < 6 ||
        this.registerForm.pwd.length > 20
      )
        alert("请输入6-20位密码");
      else if (this.registerForm.pwd2 === "") alert("请再次输入密码");
      else if (this.registerForm.pwd !== this.registerForm.pwd2)
        alert("两次输入密码不一致");
      else {
        this.$axios
          .post("/account/register", {
            accountNickname: this.registerForm.username,
            accountPhone: this.registerForm.phone,
            accountPwd: this.registerForm.pwd,
          })
          .then((res) => {
            if (res.data.code === 0) this.$router.push("/");
            else this.alertmsg(res.data.msg, 'warning')
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
.register {
  text-align: center;
}
.inputregister {
  margin: 2%;
}
</style>
