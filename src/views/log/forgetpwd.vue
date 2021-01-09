<template>
  <div class="forgetpwd">
    <div style="margin-top: 7%; font-size: 18px">Password Reset</div>
    <div style="font-size: 32px; margin-top: 1%; margin-bottom: 3%">
      忘记密码
    </div>
    <div class="inputforgetpwd d-flex jc-center">
      <Input
        v-model="forgetForm.username"
        prefix="md-contact"
        size="large"
        placeholder="  Enter Username..."
        style="width: 29%"
      />
    </div>
    <div class="inputforgetpwd d-flex jc-center">
      <Input
        v-model="forgetForm.phone"
        prefix="md-phone-portrait"
        size="large"
        placeholder="  Enter registered phone number..."
        style="width: 29%"
      />
    </div>
    <div class="caution">
      注意：忘记密码只能用于记得用户名和注册时手机号码的用户，可通过上述两条信息向系统提出密码重置请求，成功后密码重置为默认密码000000，请用户及时登录并重新修改设置密码。感谢您的配合。
    </div>
    <Button
      :size="buttonSize"
      type="primary"
      shape="circle"
      style="margin-top: 3%; margin-bottom: 2%; width: 15%"
      @click="pwdreset"
      >提交
    </Button>
  </div>
</template>

<script>
export default {
  data() {
    return { buttonSize: "large", forgetForm: { username: "", phone: "" } };
  },

  methods: {
    async pwdreset() {
      if (this.forgetForm.username === "") alert("用户名不能为空");
      else if (this.forgetForm.phone === "") alert("手机号不能为空");
      else {
        this.$axios
          .post("", {
            accountNickname: this.forgetForm.username,
            accountPhone: this.forgetForm.phone,
          })
          .then((res) => {
            // alert("发送成功");
            // console.log(res.data);
            alert(res.data.msg);
            if (res.data.code === 0) this.$router.push("/");
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
.forgetpwd {
  text-align: center;
}
.inputforgetpwd {
  margin: 2%;
}
.caution {
  margin-top: 3%;
  margin-left: 36%;
  width: 28%;
  color: grey;
}
</style>