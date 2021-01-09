<template>
  <div>
    <el-table
      :data="
        blog_list.filter(
          (data) =>
            !search ||
            data.problem_ID.toLowerCase().includes(search.toLowerCase())
        )
      "
      class="blog-table"
    >
      <el-table-column label="题目编号" prop="problem_ID"> </el-table-column>
      <el-table-column label="开始时间" prop="start_time"> </el-table-column>
      <el-table-column label="比赛状态" prop="state"> </el-table-column>
      <el-table-column label="持续时间（小时）" prop="time_last">
      </el-table-column>
      <el-table-column label="难度" prop="level"> </el-table-column>
      <el-table-column align="right">
        <template slot="header" slot-scope="scope">
          <el-input
            @click="scope"
            v-model="search"
            size="mini"
            placeholder="输入关键字搜索"
          />
        </template>
        <template slot-scope="scope">
          <el-button
            size="small"
            type="primary"
            round
            @click="handleEdit(scope.$index, scope.row)"
            >进入比赛
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "user-competition",
  data() {
    return {
      tbl: 1,
      blog_list: [
        {
          start_time: "2016-05-04 10:00",
          level: 9,
          problem_ID: "1",
          blog_info: "I love software engineering",
          time_last: 5,
          state: "已开始",
        },
        {
          start_time: "2016-05-04 10:00",
          level: 9,
          problem_ID: "12",
          blog_info: "I love software engineering",
          time_last: 5,
          state: "已结束",
        },
        {
          start_time: "2020-12-31 19:31",
          level: 9,
          problem_ID: "123",
          blog_info: "I love software engineering",
          time_last: 5,
          state: "未开始",
        },
        {
          start_time: "2022-05-03 10:00",
          level: 9,
          problem_ID: "1234",
          blog_info: "I love software engineering",
          time_last: 5,
          state: "已开始",
        },
      ],
      search: "",
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
  },
};
</script>

<style scoped>
.blog-table {
  width: 86%;
  margin-left: 7%;
  margin-top: 5%;
}
</style>
