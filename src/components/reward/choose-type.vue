<template>
  <div>
    <b-card no-body style="width: 100%; height: 100%">
      <b-tabs pills card vertical nav-wrapper-class="col-2">
        <b-tab disabled>
          <template #title>
            <br />
            <h4 align="center">悬赏</h4>
            <hr />
          </template>
        </b-tab>
        <b-tab active class="bg-rect-background" @click="loadQuestion('未做出')">
          <br />
          <template #title>
            <div class="level-title" align="center">未做出</div>
          </template>
          <reward-right :reward_lst="reward_lst"></reward-right>
        </b-tab>
        <b-tab class="bg-rect-background" @click="loadQuestion('已做出')">
          <br />
          <template #title>
            <div class="level-title" align="center">已做出</div>
          </template>
          <reward-right-solved :reward_lst="reward_lst"></reward-right-solved>
        </b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
import RewardRight from "@/components/reward/reward-right";
import RewardRightSolved from "@/components/reward/reward-right-solved";

export default {
  name: "choose-type",
  components: { RewardRightSolved, RewardRight },
  data() {
    return{
      reward_lst: []
    }
  },
  mounted() {
    this.loadQuestion('未做出')
  },
  methods:{
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
    async loadQuestion(s){
      this.$axios.
      post("/reward/page", {
        rewardState: s,
        rewardCount: 15
      })
          .then((res) => {
            if (res.data.code === 0) {
              this.reward_lst=res.data.data.rewardInfoList
            }
          })
      .catch(()=>this.alerterror())
    },
  }
};
</script>

<style scoped>
</style>
