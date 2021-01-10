<template>
  <div style="margin-bottom: 75px">
    <el-button @click="loadQuestion">
      <i class="el-icon-refresh"></i>
      换一批
    </el-button>
    <hr />

    <div style="overflow: hidden" v-loading="loading">
      <div class="one" v-for="item in load_num" :key="item">
        <br v-if="item >= 6" />
        <div class="card">
          <div align="center" class="card-img">
            <br />
            <small-problem
              :key="problem_lst[item - 1].problemId"
              style="width: 90%; height: 210px; margin-left: 5%"
              :problemid="problem_lst[item - 1]['problemId']"
            ></small-problem>
          </div>
          <div class="card-body">
            <div>
              <h5 class="card-title problemID-text">
                {{ problem_lst[item - 1]["problemId"] }}
              </h5>
              <p class="card-text passed-text">
                通过数：{{ problem_lst[item - 1].problemSolveCount }}
              </p>
            </div>
            <div class="practice-goto-botton">
              <el-button
                type="primary"
                round
                @click="goQuestion(problem_lst[item - 1]['problemId'])"
              >
                就做TA
              </el-button>
            </div>
          </div>
        </div>
      </div>
      <!-- <div v-if="item >= 10" style="margin-bottom: 22%">
        <br />
      </div> -->
    </div>
  </div>
</template>

<script>
import SmallProblem from "@/components/question/small-problem";

export default {
  name: "practice-right",
  components: { SmallProblem },
  props: ["problem_lst", "level"],
  data() {
    return {
      passed: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      load_num: 10,
      loading: false,
    };
  },
  methods: {
    goQuestion(problemid) {
      localStorage.setItem("problemid", problemid);
      alert(localStorage.getItem("problemid"));
      localStorage.setItem("ispractice", "1");
      this.$router.push("question");
    },
    loadQuestion() {
      this.$axios
        .post("/problem/page", {
          accountId: localStorage.getItem("userid"),
          problemLevel: this.level,
          problemCount: this.load_num,
        })
        .then((res) => {
          // alert("发送成功");
          // console.log(res.data);

          if (res.data.code === 0) {
            this.problem_lst = res.data.data.problemInfoList;
            // for (let i = 0; i < this.load_num; i++)
            //   this.getsolve(this.problem_lst[i].problemId, i);

            // console.log(this.problem_lst[2].problemId)
          }
          // alert(res.data.msg);
        });
    },
    getsolve(problemid, i) {
      this.loading = true;
      this.$axios
        .post("/problem/message", {
          problemId: problemid,
        })
        .then((res) => {
          // alert("发送成功");
          // console.log(res.data);

          if (res.data.code === 0) {
            this.passed[i] = res.data.data.problemInfoList.problemSolveCount;
            // console.log(this.problem_lst[2].problemId)
          }
          // alert(res.data.msg);
        });
      this.loading = false;
    },
  },
};
</script>

<style scoped>
.img {
  height: 70%;
  width: 80%;
  display: table-cell;
}

.card-img {
  display: inline;
  /*height: 70%;*/
}

.problemID-text {
  color: blue;
  display: inline;
}

.passed-text {
  display: inline;
  float: right;
}

.one {
  width: 20%;
  height: auto;
  /*border: 1px solid #ccc;*/
  float: left;
  box-sizing: border-box;
}

.practice-goto-botton {
  margin-top: 9px;
  text-align: center;
}

.card {
  width: 15rem;
  margin: 0 auto;
  vertical-align: middle; /*border: black solid 1px*/
}
</style>