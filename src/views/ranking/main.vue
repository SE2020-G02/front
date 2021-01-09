<template>
  <div class="ranking">
    <div class="rankheader bg-header d-flex">
      <div class="ranktitle text-white fs-xxl">OurSudoku天梯排名</div>
      <div class="rankinfo text-white fs-l">
        <div>比赛总场数：{{ countContest }}</div>
        <div>总参与人数：{{ countPerson }}</div>
      </div>
    </div>

    <div class="ranklist">
      <el-table
        height="750"
        :data="
          tableData.filter(
            (data) =>
              !search || data.name.toLowerCase().includes(search.toLowerCase())
          )
        "
        style="width: 100%"
      >
        <el-table-column label="排名" prop="rank"> </el-table-column>
        <el-table-column label="用户" prop="name"> </el-table-column>
        <el-table-column label="等级" prop="level"> </el-table-column>
        <el-table-column label="正答率" prop="correct"> </el-table-column>
        <el-table-column label="平均解题时长" prop="time"> </el-table-column>
        <el-table-column label="积分" prop="score"> </el-table-column>

        <!-- <el-table-column align="right">
          <template slot="header" slot-scope="scope">
            <el-input
              @click="scope"
              v-model="search"
              size="small"
              placeholder="输入用户名搜索"
            />
          </template>
          <template slot-scope="scope">
            <el-button
              type="primary"
              round
              size="small"
              @click="handleUser(scope.$index, scope.row)"
              >前往用户主页</el-button
            >
          </template>
        </el-table-column> -->
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      countContest: 227,
      countPerson: 1037,

      tableData: [
        {
          rank: 1,
          name: "王小虎",
          level: 9,
          correct: 0.89,
          time: "10min 5s",
          score: 1550,
        },
        {
          rank: 2,
          name: "fsdg",
          level: 9,
          correct: 0.89,
          time: "10min 5s",
          score: 1550,
        },
        {
          rank: 3,
          name: "o;iu",
          level: 9,
          correct: 0.89,
          time: "10min 5s",
          score: 1550,
        },
        {
          rank: 4,
          name: "ey56ju4",
          level: 9,
          correct: 0.89,
          time: "10min 5s",
          score: 1550,
        },
        {
          rank: 5,
          name: "gwrthrt",
          level: 9,
          correct: 0.89,
          time: "10min 5s",
          score: 1550,
        },
        {
          rank: 6,
          name: "3164578",
          level: 9,
          correct: 0.89,
          time: "10min 5s",
          score: 1550,
        },
        {
          rank: 7,
          name: "hahahah",
          level: 9,
          correct: 0.89,
          time: "10min 5s",
          score: 1550,
        },
        {
          rank: 8,
          name: "ohuo",
          level: 9,
          correct: 0.89,
          time: "10min 5s",
          score: 1550,
        },
        {
          rank: 9,
          name: "affg虎",
          level: 9,
          correct: 0.89,
          time: "10min 5s",
          score: 1550,
        },
        {
          rank: 10,
          name: "王sdagsf",
          level: 9,
          correct: 0.89,
          time: "10min 5s",
          score: 1550,
        },
      ],
      search: "",
    };
  },
  methods: {
    handleUser(index, row) {
      console.log(index, row);
    },
  },
};
</script>

<style>
.rankheader {
  height: 130px;
  width: 100%;
}
.ranktitle {
  margin-top: 75px;
  margin-left: 20%;
}
.rankinfo {
  margin-left: auto;
  margin-right: 21%;
  margin-top: 75px;
}
.ranklist {
  margin-top: 3%;
  margin-left: 15%;
  margin-bottom: 4%;
  width: 70%;
  /* height: 500px; */
}
</style>