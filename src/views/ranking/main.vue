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
          height="750px"
          :data="
          tableData.filter(
            (data) =>
              !search || data.name.toLowerCase().includes(search.toLowerCase())
          )
        "
          style="width: 100%"
      >
        <el-table-column label="排名" prop="rateId"></el-table-column>
        <el-table-column label="用户" prop="accountNickname"></el-table-column>
        <el-table-column label="等级" prop="accountLevel"></el-table-column>
        <el-table-column label="比赛数" prop="rateGameCount"></el-table-column>
        <el-table-column label="平均解题时长" prop="rateAvgTime">
        </el-table-column>
        <el-table-column label="积分" prop="rateNumber">
          <template scope="scope">
            <span v-if="scope.row.rateState==='up'" style="color: limegreen">{{ scope.row.rateNumber }}
              <div style="font-size: 1px; display: inline">
                ▲
              </div>
            </span>
            <span v-else style="color: red">{{ scope.row.rateNumber }}
              <div style="font-size: 1px; display: inline">
                ▼
              </div>
            </span>
          </template>
        </el-table-column>

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
          rateId: 1,
          accountNickname: "王小虎",
          accountId: 9,
          rateGameCount: 0.89,
          rateAvgTime: "10min 5s",
          rateNumber: 1550,
          rateState: "up",
          accountLevel: 1,
        },
      ],
      search: "",
    };
  },
  mounted() {
    this.getranklist();
    this.getstatic();
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
    getranklist() {
      this.axios
          .post('/rate/limit', {})
          .then((res) => {
            if (res.data.code === 0) {
              this.tableData = res.data.data.rateInfoList;
              for (var i = 0; i < this.tableData.length; i++) {
                var t = this.tableData[i].rateAvgTime
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
                this.tableData[i].rateAvgTime = h + ':' + m + ':' + t;
              }
            }
          })
          .catch(() => {
            this.alerterror()
          })
    },
    getstatic() {
      this.axios
          .post('/rate/static', {})
          .then((res) => {
            if (res.data.code === 0) {
              this.countContest = res.data.data.gameCount;
              this.countPerson = res.data.data.gamePeople;
            }
          })
          .catch(() => {
            this.alerterror()
          })
    }
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
