<template>
  <div class="feedfack">
    <div style="margin: 20px">当前共有{{ num }}条已解决反馈信息</div>
    <div style="margin-bottom: 20px">
      <el-table :data="tableData" height="600" border style="width: 100%">
        <el-table-column fixed prop="appealType" label="反馈类型" width="80">
        </el-table-column>
        <el-table-column prop="appealId" label="反馈编号" width="80">
        </el-table-column>
        <el-table-column prop="accountId" label="用户" width="100">
        </el-table-column>
        <!-- <el-table-column prop="accountNickname" label="用户" width="120">
        </el-table-column> -->
        <el-table-column prop="appealTypeId" label="博客ID" width="80">
        </el-table-column>
        <el-table-column prop="appealMessage" label="反馈信息">
        </el-table-column>
        <el-table-column prop="appealState" label="当前状态" width="85">
        </el-table-column>
        <!-- <el-table-column fixed="right" label="操作" width="100">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small"
              >通过</el-button
            >
            <el-button type="text" size="small">驳回</el-button>
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
      num: 7,

      tableData: [
        {
          appealType: "博客",
          appealId: "1",
          accountId: "7",
          // accountNickname: "66",
          appealTypeId: "0003",
          appealMessage: "aaaa",
          appealState: "已解决",
        },
      ],
    };
  },
  mounted() {
    this.getappeal();
  },
  methods: {
    getappeal() {
      this.$axios
        .post("/appeal/all", {
          state: "已解决",
        })
        .then((res) => {
          if (res.data.code === 0) {
            this.tableData = res.data.data.userAppealInfoLis;
            if (this.tableData == null) this.num = 0;
            else this.num = this.tableData.length;
          }
        })
        .catch(() => {
          this.alerterror();
        });
    },
  },
};
</script>

<style>
</style>