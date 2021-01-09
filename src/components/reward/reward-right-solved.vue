<template>
  <div>
    <el-button @click="loadSolvedQuestion">
      <i class="el-icon-refresh"></i>
      换一批
    </el-button>
    <hr />
    <div class="one" v-for="item in 10" :key="item">
      <div v-if="item >= 6">
        <br />
      </div>
      <div class="card">
        <div align="center" class="card-img">
          <br />
          <small-problem
            style="width: 90%; height: 210px; margin-left: 5%"
            :problemid="reward_lst[item - 1]['problemId']"
            :change="1"
          ></small-problem>
        </div>
        <div class="card-body">
          <div class="reward-goto-botton">
            <div>
              <h5 class="card-title problemID-text">
                {{ reward_lst[item - 1]["problemId"] }}
              </h5>
            </div>
            <div align="center">
              <el-button
                type="primary"
                round
                class="todo-button"
                @click="goQuestion(reward_lst[item - 1]['problemId'])"
                >就做TA
              </el-button>
            </div>
          </div>
        </div>
      </div>
      <div v-if="item >= 10" style="margin-bottom: 22%">
        <br />
      </div>
    </div>
  </div>
</template>

<script>
import SmallProblem from "@/components/question/small-problem";
export default {
  name: "reward-right-solved",
  components: { SmallProblem },
  props: ["reward_lst"],
  data() {
    return {};
  },
  methods: {
    goQuestion(problemid) {
      localStorage.setItem("problemid", problemid);
      alert(localStorage.getItem("problemid"));
      this.$router.push("question");
    },
    async loadSolvedQuestion() {
      this.$axios
        .post("/reward/page", {
          rewardState: "已做出",
          rewardCount: 10,
        })
        .then((res) => {
          // alert("发送成功");
          // console.log(res.data);

          if (res.data.code === 0) {
            this.reward_lst = res.data.data.rewardInfoList;
            // console.log(this)
          }
          // alert(res.data.msg);
        });
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

.todo-button {
  margin: 0 auto;
}

.card-img {
  display: inline;
}

.problemID-text {
  color: blue;
}

.one {
  width: 20%;

  height: auto;

  /*border: 1px solid #ccc;*/

  float: left;

  box-sizing: border-box;
}

.reward-goto-botton {
  margin-top: 9px;
  /*text-align: center;*/
}

.card {
  width: 15rem;
  margin: 0 auto;
  vertical-align: middle; /*border: black solid 1px*/
}
</style>