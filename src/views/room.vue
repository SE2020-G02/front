<template>
  <div class="roombg">
    <div class="room" style="width: 90%">
      <!-- <el-row>
      <el-col :span="5">
        <div style="height: 700px; border-right: #999999 solid 1px">
          <div
            align="center"
            style="margin-top: 10%; font-size: x-large; font-weight: bold"
          >
            题目信息
          </div>
          <hr class="hr-line" />
          <div class="info">
            {{ problem_info }}
          </div>
        </div>
      </el-col>
      <el-col :span="14">
        <div class="mid">
          <div style="font-size: xx-large; margin-left: 6%">
            距离比赛开始还有
          </div>
          <div style="font-size: 37px; color: #999999; margin-bottom: 20px">
            剩余时间：{{ `${hr}:${min}:${sec}` }}
          </div>
          <div style="margin-left: 18%">
            <el-button @click="dothings">
              <div v-show="isin === 1">
                <div v-show="start === 1">开始答题</div>
                <div v-show="start === 0">退出房间</div>
              </div>
              <div v-show="isin === 0">加入房间</div>
            </el-button>
          </div>
        </div>
      </el-col>
      <el-col :span="5">
        <div class="right-part">
          <div align="center" class="right-title">参与列表</div>
          <div class="subtitle">参与人数：{{ participants }}</div>
          <hr class="hr-line" />
          <div v-for="item in participant_list" :key="item" align="center">
            {{ item.toLowerCase() }}
          </div>
        </div>
      </el-col>
    </el-row> -->
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="grid-room bg-room">
            <div align="center" style="font-size: x-large; font-weight: bold">
              题目信息
            </div>
            <hr class="hr-line" />
            <div class="info">
              {{ problem_info }}
            </div>
          </div>
        </el-col>

        <el-col :span="12">
          <div class="grid-room bg-room" align="center">
            <div style="color: white">-</div>
            <div style="font-size: xx-large; margin-top: 20%">
              距离比赛开始还有
            </div>
            <div
              style="
                font-size: 37px;
                color: #999999;
                margin-top: 20px;
                margin-bottom: 30px;
              "
            >
              剩余时间：{{ `${hr}:${min}:${sec}` }}
            </div>
            <el-button type="primary" plain @click="changebottontype">{{
              bottontype
            }}</el-button>
          </div>
        </el-col>

        <el-col :span="6">
          <div class="grid-room bg-room">
            <div align="center" style="font-size: x-large; font-weight: bold">
              参与列表
            </div>
            <div class="subtitle">参与人数：{{ participants }}</div>
            <hr class="hr-line" />
            <div v-for="item in participant_list" :key="item" align="center">
              {{ item.toLowerCase() }}
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "room",
  data() {
    return {
      level: 4,
      userid: localStorage.getItem("userid"),
      roomid: localStorage.getItem("roomid"),
      problem_ID: localStorage.getItem("problemid"),
      problem_info: "here is problem information",
      time_lefth: 22,
      time_leftm: 0,
      participants: 150,
      participant_list: ["1", "12", "123"],
      timenow: localStorage.getItem("starttime"),
      day: 0,
      hr: 0,
      min: 0,
      sec: 0,
      start: 0,
      isin: 0,

      bottontype: "加入比赛",
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    open() {
      var msg = "确定退出？";
      var username = localStorage.getItem("username");
      if (username === localStorage.getItem("creator")) {
        msg = "房主退出即视为解散房间，确认退出？";
      }
      this.$confirm(msg, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "退出成功!",
          });
          this.isin = 0;
          this.quit();
          this.$router.push("contest");
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消",
          });
        });
    },
    init() {
      this.getparticipants();
      this.countdown();
    },
    dothings() {
      if (!this.isin) {
        this.joinin();
        this.isin = 1;
      } else if (this.start) {
        // this.startgame();
        localStorage.setItem("ispractice", "0");
      } else {
        this.quit();
        this.isin = 0;
      }
    },
    changebottontype() {
      if (this.bottontype === "加入比赛") {
        this.isin = 1;
        this.joinin();
      } else if (this.bottontype === "退出比赛") {
        this.open();
      } else if (this.bottontype === "开始答题"){
        this.startgame();
        localStorage.setItem("ispractice", "0");
      }
    },
    joinin() {
      this.$axios
        .post("/roomMember/join", {
          roomId: this.roomid,
          accountID: this.userid,
        })
        .then((res) => {
          alert(res.data.msg);
          this.getparticipants();
        })
        .catch((error) => {
          alert("服务器错误joinin");
          console.log(error);
        });
    },
    quit() {
      this.$axios
        .post("/roomMember/quit", {
          roomId: this.roomid,
          accountID: this.userid,
        })
        .then(() => {
          this.getparticipants();
        })
        .catch((error) => {
          alert("服务器错误quit");
          console.log(error);
        });
    },
    startgame() {
      localStorage.setItem("problemid", this.problem_ID);
      this.$router.push("/question");
    },
    getparticipants() {
      this.$axios
        .post("/roomMember/room/message", {
          roomId: this.roomid,
        })
        .then((res) => {
          // var is = 0;
          // alert(res.data.msg);
          if (res.data.code === 0) {
            this.participants = res.data.data.memberCount;
            this.participant_list = res.data.data.accountsName;
            for (let i in this.participant_list) {
              if (
                this.participant_list[i] === localStorage.getItem("username")
              ) {
                // alert("已经在房间啦");
                this.isin = 1;
              }
            }
          }
          if (this.isin === 1) this.bottontype = "退出比赛";
          if (this.isin === 0) this.bottontype = "加入比赛";
        })
        .catch((error) => {
          alert("服务器错误getparticipants");
          console.log(error);
        });
    },
    countdown: function () {
      const now = Date.parse(new Date());
      const end = Date.parse(new Date(this.timenow));
      const msec = end - now;
      if (msec < 0) {
        this.day = 0;
        this.hr = "00";
        this.min = "00";
        this.sec = "00";
        this.start = 1;
        this.bottontype="开始答题"
      } else {
        let day = parseInt(msec / 1000 / 60 / 60 / 24);
        let hr = parseInt(msec / 1000 / 60 / 60);
        let min = parseInt((msec / 1000 / 60) % 60);
        let sec = parseInt((msec / 1000) % 60);
        this.day = day;
        this.hr = hr > 9 ? hr : "0" + hr;
        this.min = min > 9 ? min : "0" + min;
        this.sec = sec > 9 ? sec : "0" + sec;
      }
      const that = this;
      setTimeout(function () {
        that.countdown();
      }, 1000);
    },
  },
};
</script>

<style>
.roombg {
  width: 100%;
  background-color: white;
}
.room {
  margin-top: 3%;
  margin-left: 2%;
  margin-bottom: 3%;
  width: 96%;
  /* background-color: rgb(201, 140, 66); */
}
.hr-line {
  margin-left: 10%;
  width: 80%;
}

.subtitle {
  color: #999999;
  margin-top: 10px;
  margin-left: 10%;
}

.right-title {
  margin-top: 10%;
  font-size: x-large;
  font-weight: bold;
}

.right-part {
  margin-top: 10%;
  border-left: #999999 solid 1px;
  height: 700px;
}

.mid {
  margin-top: 30%;
  margin-left: 33%;
}

.info {
  margin-left: 10%;
}

.problem-level {
  color: #999999;
}

/* .bg-room {
  background-color: #d3dce6;
} */
.grid-room {
  border-radius: 4px;
  min-height: 720px;
}
</style>