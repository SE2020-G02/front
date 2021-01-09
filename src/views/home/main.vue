<template>
  <div class="home">
    <div class="bg-header header d-flex ai-center">
      <img
        class="ml-5"
        alt="Vue logo"
        src="../../assets/logo.png"
        @click="goHome"
      />
      <!-- <input
        aria-disabled="true"
        class="searchinput ml-4 mr-2 fs-sm text-white"
        style="height: 24px"
      /> -->
      <div class="ml-4 mr-2" style="width：100px">
        <el-input disabled size="mini" placeholder="输入题号搜索" />
      </div>

      <div
        class="choice text-white d-flex jc-center fs-l"
        v-for="item in headerData"
        :key="item.index"
        @click="onClick(item)"
      >
        {{ item.title }}
      </div>

      <!-- <div
        class="logchoice text-white d-flex jc-center fs-l"
        v-for="item in other"
        :key="item.index"
        @click="logClick(item)"
      >
        {{ item.title }}
      </div> -->

      <div class="user text-white fs-l">
        <el-dropdown @command="userabout">
          <span class="el-dropdown-link">
            用户<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <!-- <el-dropdown-item command="goUser">用户主页</el-dropdown-item> -->
            <el-dropdown-item command="changePwd">修改密码</el-dropdown-item>
            <el-dropdown-item command="logOut">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>

    <router-view />
    <div class="down bg-header d-flex ai-center text-white">
      <div class="fs-l" style="margin-left: 40px">
        加入我们！一起交流，一起学习，思维碰撞，去找到一些有趣的东西！
      </div>
      <div class="d-flex" style="margin-left: auto; margin-right: 40px">
        <div class="fs-m" @click="goIPC">浙ICP备2020043880号</div>
        <div class="fs-m" style="margin-left: 40px">
          联系我们：31801324@stu.zucc.edu.cn
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headerData: [
        {
          code: 1,
          title: "比赛",
          path: "contest",
        },
        {
          code: 2,
          title: "排位",
          path: "ranking",
        },
        {
          code: 3,
          title: "悬赏",
          path: "reward",
        },
        {
          code: 4,
          title: "练习",
          path: "practice",
        },
      ],

      // other: [
      //   {
      //     code: 1,
      //     title: "登录",
      //     path: "login",
      //   },
      //   {
      //     code: 2,
      //     title: "注册",
      //     path: "register",
      //   },
      //   {
      //     code: 3,
      //     title: "管理员",
      //     path: "admin",
      //   },
      // ],
    };
  },

  methods: {
    onClick(item) {
      // if (item.code == 1) {
      //   localStorage.setItem("roomlevel", 1);
      // }
      this.$router.push(item.path);
    },
    goHome() {
      this.$router.push("index");
    },

    userabout(command) {
      if (localStorage.getItem("userid") == null) {
        alert("请先登录！");
        this.$router.push("/");
      } else {
        if (command == "goUser") {
          this.$router.push("user");
          alert(localStorage.getItem("userid"));
        } else if (command == "changePwd") {
          this.$router.push("changepwd");
        } else if (command == "logOut") {
          localStorage.clear();
          // alert(localStorage.getItem("userid"));
          alert("退出成功！");
          this.$router.push("/");
        }
      }
    },
    logClick(item) {
      this.$router.push(item.path);
    },

    goIPC() {
      window.location.href = "http://beian.miit.gov.cn/";
    },
    // goLogin() {
    //   this.$router.push("login");
    // },
    // goRegister() {
    //   this.$router.push("register");
    // },
  },
};
</script>

<style scoped >
.header {
  height: 65px;
  width: 100%;
}
/* .bg-header {
  background: #d3dce6;
}
.grid-header {
  border-radius: 4px;
  min-height: 36px;
} */
img {
  width: 26px;
  height: 26px;
}
.choice {
  width: 70px;
}
.logchoice {
  width: 70px;
}
.user {
  margin-left: auto;
  margin-right: 55px;
}
.el-dropdown-link {
  cursor: pointer;
  color: #ffffff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.searchinput {
  border-style: solid;
  border-color: rgb(153, 153, 153);
  border-width: 1px;
  border-radius: 5px;
  height: 20px;
  background: rgba(36, 41, 46, 0.9);
}
.down {
  height: 86px;
  width: 100%;
}
</style>
