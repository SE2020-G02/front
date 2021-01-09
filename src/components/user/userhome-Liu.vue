<template>
  <div class="userhome">
    <el-row :gutter="20">
      <el-col :span="24">
        <div class="grid-userhome-up bg-userhome">hahah</div>
      </el-col>
    </el-row>

    <el-row :gutter="20">
      <el-col :span="24">
        <div class="grid-userhome-down bg-userhome">
          <div class="fs-xl" style="margin-bottom: 20px">我的解答</div>
          <div class="oneblog">
            <el-table :data="tableData">
              <el-table-column fixed prop="problemId" label="题目" width="70">
              </el-table-column>
              <el-table-column prop="blogId" label="Blog" width="70">
              </el-table-column>
              <el-table-column prop="accountNickname" label="作者" width="85">
              </el-table-column>
              <el-table-column prop="date" label="更新日期" width="160">
              </el-table-column>
              <el-table-column prop="main" label="正文" width="400">
              </el-table-column>
              <el-table-column fixed="right" label="操作" width="100">
                <template slot-scope="scope">
                  <el-button
                    @click="handleClick(scope.row)"
                    type="text"
                    size="small"
                    >查看</el-button
                  >
                  <el-button type="text" size="small">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick(row) {
      console.log(row);
    },
  },

  data() {
    return {
      tableData: [
        {
          problemId: "0093",
          blogId: "0917",
          accountNickname: "Liuyujia",
          date: "2021-01-02 08:00:00",
          main:
            "上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄",
        },
      ],
    };
  },
};
</script>


<style>
.userhome {
  margin-top: 3%;
  margin-left: 20%;
  margin-bottom: 3%;
  width: 60%;
  /* background-color: rgb(201, 140, 66); */
}
.el-row {
  margin-bottom: 20px;
  /* &:last-child {
    margin-bottom: 0;
  } */
}
.grid-userhome-up {
  border-radius: 4px;
  min-height: 200px;
}
.grid-userhome-down {
  border-radius: 4px;
  min-height: 500px;
}
.bg-userhome {
  background: #d3dce6;
}
</style>