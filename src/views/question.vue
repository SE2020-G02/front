<template>
  <div>
    <el-row>
      <el-col :span="5">
        <div style="height: 700px; border-right: #999999 solid 1px">
          <div
            align="center"
            style="margin-top: 10%; font-size: x-large; font-weight: bold"
          >
            题目信息
          </div>
          <div class="problem-level info">题目难度：{{ level }}</div>
          <hr class="hr-line" />
          <div class="info">题号：{{ problemid }}</div>
          <div class="info">
            {{ problem_info }}
          </div>
          <div align="center" style="margin: 80px; color: #0079fe">
            <!-- <div @click="feedback">反馈</div> -->
            <div v-show="ispractice!=='0'" @click="readblog">查看题解</div>
          </div>
        </div>
      </el-col>
      <el-col :span="14">
        <mid-part style="margin-left: -7%"></mid-part>
      </el-col>
      <el-col :span="5">
        <div class="right-part">
          <div align="center" class="right-title">通过列表</div>
          <div class="subtitle">已通过人数：{{ solved }}</div>
          <hr class="hr-line" />
          <el-table :data="solved_list" stripe class="hr-line">
            <el-table-column prop="rankNum" label="排名"> </el-table-column>
            <el-table-column prop="accountNickname" label="用户">
            </el-table-column>
            <el-table-column prop="solveCostTime" label="耗时">
            </el-table-column>
          </el-table>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import MidPart from "@/components/question/mid-part";
// import TestMidPart from "@/components/question/test-mid-part";
export default {
  name: "question",
  components: {MidPart },
  data() {
    return {
      ispractice: localStorage.getItem('ispractice'),
      level: 4,
      problem_info: "here is problem information",
      solved: 150,
      problemid: "123",
      solved_list: [
        {
          accountNickname: "1",
          solveCostTime: "16: 11",
          roomId:localStorage.getItem('roomid'),
          percentage:100,
          rankNum: 1,
        },
      ],
    };
  },
  mounted() {
    this.init();
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
    init() {
      this.problemid = localStorage.getItem("problemid");
      this.getinfo();
      this.getsolvelist();
    },
    readblog() {
      localStorage.setItem("blogid", "0000");
      this.$router.push("blog");
    },
    async getinfo() {
      this.$axios
        .post("/problem/message", {
          problemId: this.problemid,
        })
        .then((res) => {
          if (res.data.code === 0) {
            this.level = res.data.data.problemInfo.problemLevel;
            this.problem_info = res.data.data.problemInfo.problemInfo;
          }
        })
      .catch(()=>this.alerterror())
    },
    getsolvelist: function () {
      if (localStorage.getItem('ispractice')==='1'){
        this.$axios
            .post("/solve/rank", {
              problemId: this.problemid
            })
            .then((res) => {
              if (res.data.code === 0) {
                this.solved = res.data.data.solveCount;
                this.solved_list = res.data.data.solveRankInfoList;
                for(var i=0; i<this.solved_list.length; i++){
                  this.solved_list[i].rankNum=i+1;
                }
              }
            });
      } else {
        this.$axios
            .post("/roomMember/getMessage", {
              roomId: localStorage.getItem('roomid')
            })
            .then((res) => {
              if (res.data.code === 0) {
                this.solved = res.data.data.roomAccountCount;
                this.solved_list = res.data.data.roomMemberInfoList;
                for(var i=0; i<this.solved_list.length; i++){
                  this.solved_list[i].rankNum=i+1;
                  this.solved_list[i].solveCostTime=this.solved_list[i].timecost
                  var t = this.solved_list[i].solveCostTime
                  var h = parseInt(t / 3600);
                  t %= 3600;
                  var m = parseInt(t / 60);
                  t %= 60;
                  h = h.toString()
                  m = m.toString()
                  t = t.toString()
                  if (h < 10) h = '0' + h;
                  if (m < 10) m = '0' + m;
                  if (t < 10) t = '0' + t;
                  this.solved_list[i].solveCostTime = h + ':' + m + ':' + t;
                }
              }
            });
        let self=this
        if (self && !self._isDestroyed) {
          this.dispatch = setTimeout(() => {
            self.getsolvelist()
          }, 10000)
        }
      }
    },
  },
};
</script>

<style>
.hr-line {
  margin-left: 10%;
  width: 80%;
}

.subtitle {
  color: #999999;
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
  margin-top: 5%;
}

.info {
  margin-left: 10%;
}

.problem-level {
  color: #999999;
}

.bg-purple {
  background-color: blueviolet;
}
</style>
