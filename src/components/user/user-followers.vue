<template>
  <div style="height: 100%">
    <br />
    <el-table
      :data="tableData"
      style="width: 90%; height: 100%; margin-left: 5%"
      max-height="450"
    >
      <el-table-column fixed prop="nickname" label="昵称"> </el-table-column>
      <el-table-column prop="rank" label="排名"> </el-table-column>
      <el-table-column prop="rank_score" label="积分"> </el-table-column>
      <el-table-column prop="level" label="等级"> </el-table-column>
      <el-table-column prop="follow_state" label="状态"> </el-table-column>
      <el-table-column fixed="right" label="操作">
        <template slot-scope="scope">
          <el-button
            @click.native.prevent="change_state(scope.$index)"
            size="small"
            type="primary"
            round
          >
            用户主页
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "user-followers",
  methods: {
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
    change_state(item) {
      if (item.follow_state === "已关注")
        this.tableData.splice(this.tableData.indexOf(item), 4, "未关注");
      else this.tableData.splice(this.tableData.indexOf(item), 4, "已关注");
    },
  },
  data() {
    return {
      load_num: 8,
      tableData: [
        {
          nickname: "大渣狗",
          rank: 1,
          rank_score: 3100,
          level: 9,
          follow_state: "已关注",
        },
        {
          nickname: "大渣狗",
          rank: 1,
          rank_score: 3100,
          level: 9,
          follow_state: "未关注",
        },
      ],
    };
  },
};
</script>

<style scoped>
</style>