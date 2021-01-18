<template>
  <div class="changepwd">
    <div style="margin-top: 5%; font-size: 18px">Modify Password</div>
    <div style="font-size: 32px; margin-top: 1%; margin-bottom: 3%">
      修改密码
    </div>
    <div class="inputchangepwd d-flex jc-center">
      <Input
        v-model="changeForm.old"
        prefix="ios-lock"
        size="large"
        placeholder="  Enter Old Password..."
        style="width: 29%"
      />
    </div>
    <div class="inputchangepwd d-flex jc-center">
      <Input
        v-model="changeForm.new"
        prefix="ios-lock-outline"
        size="large"
        type="password"
        placeholder="  Enter New Password..."
        style="width: 29%"
      />
    </div>
    <div class="inputchangepwd d-flex jc-center">
      <Input
        v-model="changeForm.new2"
        prefix="ios-lock-outline"
        size="large"
        type="password"
        placeholder="  Enter New Password Again..."
        style="width: 29%"
      />
    </div>
    <Button
      :size="buttonSize"
      type="primary"
      shape="circle"
      style="margin-top: 2%; margin-bottom: 6%; width: 15%"
      @click="changePwd"
      >提交
    </Button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      buttonSize: "large",
      changeForm: { old: "", new: "", new2: "" },
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
    changePwd() {
      if (this.changeForm.old === "") this.alertmsg('旧密码不能为空', 'warning')
      else if (this.changeForm.new === "") this.alertmsg('请输入新密码', 'warning')
      else if (
        this.changeForm.new.length < 6 ||
        this.changeForm.new.length > 20
      )
      this.alertmsg('请输入6-20位新密码', 'warning')
      else if (this.changeForm.new2 === "") this.alertmsg('请再次输入新密码')
      else if (this.changeForm.new !== this.changeForm.new2)
      this.alertmsg('两次输入密码不一致', 'warning')
      else {
        this.$axios
          .post("/account/updatePwd", {
            accountNickname: localStorage.getItem("username"),
            accountOldPwd: this.changeForm.old,
            accountNewPwd: this.changeForm.new,
          })
          .then((res) => {
            localStorage.clear;
            if (res.data.code === 0) this.$router.push("/");
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
.changepwd {
  text-align: center;
}
.inputchangepwd {
  margin: 2%;
}
</style>
