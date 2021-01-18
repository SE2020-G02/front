<template>
  <div>
    <el-row>
      <el-col :span="5">
        <div style="height: 700px; border-right: #999999 solid 1px">
          <div align="center" style="margin-top: 10%; font-size: x-large; font-weight: bold">
            题目信息
          </div>
<!--          <div class="problem-level info">-->
<!--            题目难度：待评定-->
<!--          </div>-->
          <hr class="hr-line">
          <div class="info">
            题号：待编号
          </div>
          <el-input
              v-model="input"
              placeholder="请输入题目描述"
              class="info"
              type="textarea"></el-input>
        </div>
      </el-col>
      <el-col :span="14">
        <new-mid-part style="margin-left: -7%"></new-mid-part>
      </el-col>
      <el-col :span="5">
        <div class="right-part">
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import NewMidPart from "@/components/new-question/new-mid-part";
export default {
  name: "new-question",
  components: {NewMidPart},
  data() {
    return{
      level: 4,
      problem_ID: 14523,
      input: ''
    }
  }
}
</script>

<style scoped>

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
  width: 80%;
}

.problem-level {
  color: #999999;
}

.bg-purple {
  background-color: blueviolet;
}

</style>
