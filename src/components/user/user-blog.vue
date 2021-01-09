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
      <el-table-column label="上传时间" prop="update_time"> </el-table-column>
      <el-table-column label="详细信息" prop="blog_info"> </el-table-column>
      <el-table-column align="right">
        <template slot="header" slot-scope="scope">
          <el-input
            @click="scope"
            v-model="search"
            size="mini"
            placeholder="输入关键字搜索"
          />
        </template>
        <template slot-scope="scope" @click="scope">
          <el-button size="small" type="primary" round @click="goBlog"
            >查看详情
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "user-blog",
  data() {
    return {
      tbl: 1,
      blog_list: [
        {
          update_time: "2016-05-02",
          problem_ID: "1",
          blog_info: "I love software engineering",
        },
        {
          update_time: "2016-05-04",
          problem_ID: "12",
          blog_info: "I love software engineering",
        },
        {
          update_time: "2016-05-01",
          problem_ID: "123",
          blog_info: "I love software engineering",
        },
        {
          update_time: "2016-05-03",
          problem_ID: "1234",
          blog_info: "I love software engineering",
        },
      ],
      search: "",
    };
  },
  methods: {
    goBlog() {
      this.$router.push("blog");
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
