<template>
  <!-- <div>
    <div class="dayleft">
      <img class="img" src="../../assets/home/reward1.png" />
    </div>
    <div class="dayright">
      <div class="titleword">每日一题</div>
      <div class="infos">
        <div style="margin: 5px">题目难度：{{ card.difficult }}</div>
        <div style="margin: 5px">当前已通过人数：{{ card.access }}</div>
        <div style="margin: 5px">当前已提交次数：{{ card.commit }}</div>
        <div style="margin: 5px">通过率：{{ card.rate }}</div>
        <div style="margin: 5px">当前最高成绩：{{ card.max }}</div>
      </div>
      <div class="fs-lg d-flex jc-center ai-center mt-5">
        <el-button
          type="info"
          plain
          class="challenge d-flex jc-center ai-center"
          >开始做题</el-button
        >
      </div>
    </div>
  </div> -->
  <el-row :gutter="0">
    <el-col :span="15">
      <div class="grid-dayprac bg-dayprac">
        <img class="img" src="../../assets/home/reward1.png" />
      </div>
    </el-col>
    <el-col :span="9">
      <div class="grid-dayprac bg-dayprac">
        <div class="daypractitle">每日一题</div>
        <div class="daypracinfo">
          <div style="font-size: 18px; margin-top: 7%; margin-bottom: 7%">
            题目难度：{{ card.difficult }}
          </div>
          <div>当前已通过人数：{{ card.access }}</div>
          <div>当前已提交次数：{{ card.commit }}</div>
          <div>通过率：{{ card.rate }}</div>
          <div style="font-size: 18px; margin-top: 7%; margin-bottom: 7%">
            当前最高成绩：{{ card.max }}
          </div>
          <div class="day-botton"><el-button round>开始做题</el-button></div>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      card: {
        difficult: "4",
        access: "10",
        commit: "10",
        rate: "0.2",
        max: "5min 36s",
      },
    };
  },
};
</script>

<style scoped>
.img {
  /* text-align: center; */
  margin-top: 0;
  width: 80%;
}
.day-botton {
  /* text-align: center; */
  margin: 40px;
}
/* .dayleft {
  float: left;
}
.infos {
  margin-top: 20px;
  margin-left: 350px;
} */
.daypractitle {
  /* margin-top: 20px; */
  font-size: 20px;
  /* text-align: center; */
  margin-left: 50px;
}
.daypracinfo {
  margin-top: 35px;
}

.el-row {
  margin-bottom: 0px;
  /* &:last-child {
    margin-bottom: 0;
  } */
}
/* .bg-dayprac {
  background: #555555;
} */
.grid-dayprac {
  border-radius: 4px;
  min-height: 350px;
}
</style>