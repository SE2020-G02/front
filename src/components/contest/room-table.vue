<template>
  <el-table
      height="900"
      :data="table.filter(data =>!search ||data.roomId.toString().includes(search))"
      class="room-table">
    <el-table-column label="房间号" prop="roomId"></el-table-column>
    <el-table-column label="发起人" prop="accountNickname"></el-table-column>
    <el-table-column label="等级" prop="roomLevel"></el-table-column>
    <el-table-column label="参与人数" prop="roomMemberCount"></el-table-column>
    <el-table-column label="当前状态" prop="roomState"></el-table-column>
    <el-table-column label="开始时间" prop="roomStartTime"></el-table-column>
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
            @click="
            enterRoom(
              scope.row.roomId,
              scope.row.accountNickname,
              scope.row.problemId,
              scope.row.roomStartTime,
              scope.row.roomRunningTime
            )
          "
        >{{ goroom }}
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: "room-table",
  props: ["table", 'goroom'],
  data() {
    return {
      roomLevel: 1,
      tbl: 1,
      search: '',
    };
  },
  mounted: function () {
    this.init();
  },
  methods: {
    gopractice(problemid) {
      localStorage.setItem('problemid', problemid)
      this.$router.push('question')
    },
    init() {
      this.roomlist();
      this.gogo();
    },
    enterRoom(theRoomId, creator, problemId, startTime, runningTime) {
      if (this.goroom === '开始练习') {
        localStorage.setItem('problemid', problemId)
        localStorage.setItem('ispractice', '1')
        this.$router.push('question')
      } else {
        localStorage.setItem("roomid", theRoomId);
        localStorage.setItem("creator", creator);
        localStorage.setItem("starttime", startTime);
        localStorage.setItem("runningtime", runningTime);
        localStorage.setItem("problemid", problemId);
        this.$router.push("room");
      }
    },
  },
};
</script>

<style scoped>
.room-table {
  width: 96%;
}
</style>
