<template>
  <div>
    <b-card no-body style="border: 0">
      <b-tabs card>
        <b-tab title="点赞" active>
          <el-table
            :data="
              blog_list.filter(
                (data) =>
                  !search ||
                  data.problem_ID
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                  data.like_user.toLowerCase().includes(search.toLowerCase())
              )
            "
            class="blog-table"
            height="350"
          >
            <el-table-column label="题目编号" prop="problem_ID">
            </el-table-column>
            <el-table-column label="点赞者" prop="like_user"> </el-table-column>
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
                  >查看详情
                </el-button>
              </template>
            </el-table-column>
          </el-table>
        </b-tab>

        <b-tab title="评论">
          <el-table
            :data="
              blog_list.filter(
                (data) =>
                  !search ||
                  data.problem_ID
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                  data.commend_user.toLowerCase().includes(search.toLowerCase())
              )
            "
            class="blog-table"
          >
            <el-table-column label="题目编号" prop="problem_ID">
            </el-table-column>
            <el-table-column label="评论者" prop="commend_user">
            </el-table-column>
            <el-table-column label="评论内容" prop="commend"> </el-table-column>
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
                  >查看详情
                </el-button>
              </template>
            </el-table-column>
          </el-table>
        </b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "user-message",
  data() {
    return {
      tbl: 1,
      blog_list: [
        {
          problem_ID: "1",
          blog_info: "I love software engineering",
          like_user: "舔狗",
          commend_user: "舔狗",
          commend: "宝贝你回来吧我还爱你",
        },
        {
          problem_ID: "12",
          blog_info: "I love software engineering",
          like_user: "舔狗",
          commend_user: "舔狗",
          commend: "宝贝你回来吧我还爱你",
        },
        {
          problem_ID: "123",
          blog_info: "I love software engineering",
          like_user: "舔狗",
          commend_user: "舔狗",
          commend: "宝贝你回来吧我还爱你",
        },
        {
          problem_ID: "1234",
          blog_info: "I love software engineering",
          like_user: "舔狗",
          commend_user: "舔狗",
          commend: "宝贝你回来吧我还爱你",
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
  /*margin-top: 5%;*/
}
</style>
