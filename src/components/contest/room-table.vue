<template>
  <el-table
    height="1000"
    :data="
      table.filter(
        (data) =>
          !search ||
          data.roomID.toLowerCase().includes(search.toLowerCase()) ||
          data.name.toLowerCase().includes(search.toLowerCase())
      )
    "
    class="room-table"
  >
    <el-table-column label="房间号" prop="roomId"> </el-table-column>
    <el-table-column label="发起人" prop="accountNickname"> </el-table-column>
    <el-table-column label="等级" prop="roomLevel"> </el-table-column>
    <el-table-column label="参与人数" prop="roomMemberCount"> </el-table-column>
    <el-table-column label="当前状态" prop="roomState"> </el-table-column>
    <el-table-column label="开始时间" prop="roomStartTime"> </el-table-column>
    <el-table-column align="right">
      <template slot="header" slot-scope="scope">
        <el-input
          disabled
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
          @click="
            enterRoom(
              scope.row.roomId,
              scope.row.accountNickname,
              scope.row.problemId,
              scope.row.roomStartTime,
              scope.row.roomRunningTime
            )
          "
          >进入房间
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: "room-table",
  props: ["table"],
  data() {
    return {
      roomLevel: 1,
      tbl: 1,
      search: "",
    };
  },
  mounted: function () {
    this.init();
  },
  methods: {
    init() {
      this.roomlist();
    },
    enterRoom(theRoomId, creator, problemId, startTime, runningTime) {
      alert(theRoomId);
      // localStorage.setItem("problemid", problemId);
      localStorage.setItem("roomid", theRoomId);
      localStorage.setItem("creator", creator);
      localStorage.setItem("starttime", startTime);
      localStorage.setItem("runningtime", runningTime);
      localStorage.setItem("runningtime", runningTime);
      this.$router.push("room");
    },
  },
};
</script>

<style scoped>
.room-table {
  width: 96%;
}
</style>
