<template>
  <div class="feedfack">
    <div style="margin: 20px">当前共有{{ num }}条待处理反馈信息</div>
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

        <el-table-column fixed="right" label="操作" width="100">
          <template slot-scope="scope">
            <el-button
              @click="fbaction(scope.row.appealId, '通过')"
              type="text"
              size="small"
              >通过</el-button
            >
            <el-button
              @click="fbaction(scope.row.appealId, '不通过')"
              type="text"
              size="small"
              >驳回</el-button
            >
          </template>
        </el-table-column>
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
          appealState: "待处理",
        },
      ],
    };
  },
  mounted() {
    this.getappeal();
  },
  methods: {
    alertmsg(msg, type) {
      this.$message({
        message: msg,
        type: type,
      });
    },
    fbaction(appealId, action) {
      // alert(appealId + " " + action);

      this.$axios
        .post("/appeal/action", {
          appealId: appealId,
          action: action,
        })
        .then((res) => {
          if (res.data.code === 0) this.alertmsg("操作成功", "success");
          else if (res.data.code === 1) this.alertmsg("操作失败", "warning");
        })
        .catch(() => {
          this.alerterror();
        });

      this.getappeal();
    },
    getappeal() {
      this.$axios
        .post("/appeal/all", {
          state: "待处理",
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