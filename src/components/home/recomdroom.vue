<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="grid-recomd bg-recomd">
          <div class="recomdroomtitle topaway">加入比赛</div>
        </div>
      </el-col>
      <el-col :span="18">
        <div class="grid-recomd bg-recomd topaway searchome">
          <searchInput></searchInput>
        </div>
      </el-col>
    </el-row>
    <b-card no-body>
      <b-tabs pills card vertical end>
        <b-tab title="12138" active>
          <b-card-text><room1></room1></b-card-text>
        </b-tab>
        <b-tab title="12139"><b-card-text>Tab contents 2</b-card-text> </b-tab>
        <b-tab title="12140"><b-card-text>Tab contents 3</b-card-text> </b-tab>
        <b-tab title="12141"><b-card-text>Tab contents 4</b-card-text> </b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
import searchInput from "./searchInput.vue";
import room1 from "./room/room1.vue";

export default {
  components: {
    searchInput,
    room1,
  },
};
</script>

<style>
.topaway {
  margin-top: 40px;
}
.searchome {
  float: right;
  /* margin-right: 0px; */
}
.recomdroomtitle {
  /* margin-top: 20px; */
  font-size: 20px;
  /* text-align: center; */
  margin-left: 10px;
  /* margin-bottom: 20px; */
}

.el-row {
  margin-bottom: 0px;
  /* &:last-child {
    margin-bottom: 0;
  } */
}
/* .el-col {
  border-radius: 4px;
} */
/* .bg-recomd {
  background: #fff;
} */
.grid-recomd {
  border-radius: 4px;
  min-height: 40px;
}
</style>