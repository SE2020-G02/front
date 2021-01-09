<template>
  <!-- <div>
    <div class="left">
      <div class="leftup">
        <daypractice></daypractice>
      </div>
      <div class="leftdown">hhh</div>
    </div>
    <div class="right">
      <ranking class="rank"></ranking>
    </div>
  </div> -->
  <div>
    <el-row :gutter="70">
      <el-col :span="15">
        <div class="grid-down3 bg-down3">
          <el-row>
            <el-col :span="24">
              <div class="grid-down3up bg-down3up">
                <daypractice></daypractice>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <div class="grid-down3down bg-down3down">
                <recomdroom></recomdroom>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
      <el-col :span="9">
        <div class="grid-down3 bg-down3 rank">
          <ranking></ranking>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import ranking from "../../components/home/ranking.vue";
import daypractice from "./daypractice.vue";
import recomdroom from "../../components/home/recomdroom.vue";

export default {
  components: {
    ranking,
    daypractice,
    recomdroom,
  },
};
</script>

<style scope>
.left {
  float: left;
  width: 60%;
  height: 700px;
  /* background-color: yellow; */
}
.leftup {
  width: 100%;
  height: 320px;
  /* background-color: blue; */
}
.leftdown {
  width: 100%;
  height: 50%;
  background-color: green;
}
.right {
  float: right;
  width: 40%;
  height: 700px;
  /* background-color: red; */
}

.el-row {
  margin-bottom: 20px;
  /* &:last-child {
    margin-bottom: 0;
  } */
}
.el-col {
  border-radius: 4px;
}
/* .bg-down3 {
  background: #aff;
} */
.grid-down3 {
  border-radius: 4px;
  min-height: 720px;
}
/* .bg-down3up {
  background: #888;
} */
.grid-down3up {
  border-radius: 4px;
  min-height: 370px;
}
/* .bg-down3down {
  background: #cdd;
} */
.grid-down3down {
  border-radius: 4px;
  min-height: 295px;
}
/* .rank {
  height: 600px;
} */
</style>

