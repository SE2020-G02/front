<template>
  <div>
    <b-card no-body style="width: 100%; height: 100%">
      <b-tabs pills card vertical nav-wrapper-class="col-2">
        <b-tab disabled>
          <template #title>
            <br/>
            <h4 align="center">难度选择</h4>
            <hr/>
          </template>
        </b-tab>
        <div v-for="i in 9" :key="i" v-loading="loading">
          <b-tab :disabled="i>6" class="bg-rect-background" @click="changeLevel(i)">
            <br>
            <template #title>
              <div class="level-title" align="center">level {{ i }}</div>
            </template>
            <practice-right
                :problem_lst="problem_lst"
                :level="level"
            ></practice-right>
          </b-tab>
        </div>
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
import PracticeRight from "@/components/practice/practice-right";

export default {
  name: "choose-level",
  components: {PracticeRight},
  data() {
    return {
      level: 1,
      problem_lst: [],
      loading: false,
    };
  },
  mounted() {
    this.loadQuestion();
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
    changeLevel(lev) {
      this.level = lev;
      localStorage.setItem("problemlevel", lev);
      this.loadQuestion();
    },
    loadQuestion() {
      this.loading = true
      this.$axios
          .post("/problem/page", {
            accountId: localStorage.getItem('userid'),
            problemLevel: this.level,
            problemCount: 10,
          })
          .then((res) => {
            if (res.data.code === 0) {
              this.problem_lst = res.data.data.problemInfoList;
            }
          })
      .catch(()=>this.alerterror())
      this.loading = false;
    },
  },
};
</script>

<style scoped>
.level-title {
  font-size: large;
  vertical-align: middle;
}

.bg-rect-background {
  height: 100%;
}
</style>
