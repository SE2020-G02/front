<template>
  <div>
    <b-card no-body>
      <b-tabs pills card>
        <b-tabs pills card vertical>
          <div v-if="this.tbl === 1">
            <b-tabs pills card vertical nav-wrapper-class="col-2">
              <b-tab @click="roomlist(1)">
                <template #title>
                  <div class="room-title" align="center">level 1</div>
                </template>
                <room-table :table="table" :goroom="goroom"></room-table>
              </b-tab>
              <b-tab @click="roomlist(2)">
                <template #title>
                  <div class="room-title" align="center">level 2</div>
                </template>
                <room-table :table="table" :goroom="goroom"></room-table>
              </b-tab>
              <b-tab @click="roomlist(3)">
                <template #title>
                  <div class="room-title" align="center">level 3</div>
                </template>
                <room-table :table="table" :goroom="goroom"></room-table>
              </b-tab>
              <b-tab @click="roomlist(4)">
                <template #title>
                  <div class="room-title" align="center">level 4</div>
                </template>
                <room-table :table="table" :goroom="goroom"></room-table>
              </b-tab>
              <b-tab @click="roomlist(5)">
                <template #title>
                  <div class="room-title" align="center">level 5</div>
                </template>
                <room-table :table="table" :goroom="goroom"></room-table>
              </b-tab>
              <b-tab @click="roomlist(6)">
                <template #title>
                  <div class="room-title" align="center">level 6</div>
                </template>
                <room-table :table="table" :goroom="goroom"></room-table>
              </b-tab>
              <b-tab disabled>
                <template #title>
                  <div class="room-title" align="center">level 7</div>
                </template>
                <room-table :table="table" :goroom="goroom"></room-table>
              </b-tab>
              <b-tab disabled>
                <template #title>
                  <div class="room-title" align="center">level 8</div>
                </template>
                <room-table :table="table" :goroom="goroom"></room-table>
              </b-tab>
              <b-tab disabled>
                <template #title>
                  <div class="room-title" align="center">level 9</div>
                </template>
                <room-table :table="table" :goroom="goroom"></room-table>
              </b-tab>
              <!-- <b-tab disabled>
                <template #title>
                  <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                </template>
              </b-tab> -->
            </b-tabs>
          </div>
          <div v-if="tbl === 2">
            <b-tabs pills card vertical nav-wrapper-class="col-2">
              <b-tab @click="roomlistState('比赛中')">
                <template #title>
                  <div class="room-title" align="center">比赛中</div>
                </template>
                <room-table :table="table" :goroom="goroom"></room-table>
              </b-tab>
              <b-tab @click="roomlistState('待开始')">
                <template #title>
                  <div class="room-title" align="center">待开始</div>
                </template>
                <room-table :table="table" :goroom="goroom"></room-table>
              </b-tab>
              <b-tab @click="roomlistState('已结束')">
                <template #title>
                  <div class="room-title" align="center">已结束</div>
                </template>
                <room-table :table="table" :goroom="goroom"></room-table>
              </b-tab>
              <!-- <b-tab disabled>
                <template #title>
                  <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                  <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                </template>
              </b-tab> -->
            </b-tabs>
          </div>
        </b-tabs>
        <b-tab title=" " disabled></b-tab>
        <b-tab title=" " disabled></b-tab>
        <b-tab title="参与比赛" active @click="tblchange(1)">
          <template #title>
            <div align="center">参与比赛</div>
          </template>
        </b-tab>
        <b-tab title="我的比赛" @click="tblchange(2)">
          <template #title>
            <div align="center">我的比赛</div>
          </template>
        </b-tab>
      </b-tabs>
      <div class="newroom">
        <el-button type="primary" @click="createbotton"> 创建房间 </el-button>
        <el-dialog title="创建房间" :visible.sync="visible" width="400px">
          <el-form ref="form" label-width="80px">
            <el-form-item label="当前用户">
              {{ username }}
            </el-form-item>
            <el-form-item label="开始时间">
              <el-date-picker
                v-model="roomForm.starttime"
                type="datetime"
                placeholder="选择开始日期时间"
                :picker-options="pickerOptions"
              >
              </el-date-picker>
            </el-form-item>
            <el-form-item label="比赛时长">
              <el-select v-model="timevalue" placeholder="请选择">
                <el-option
                  v-for="item in timetable"
                  :key="item.timevalue"
                  :label="item.label"
                  :value="item.timevalue"
                >
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="等级选择">
              <el-select v-model="levelvalue" placeholder="请选择">
                <el-option
                  v-for="item in leveltable"
                  :key="item.levelvalue"
                  :label="item.label"
                  :value="item.levelvalue"
                  :disabled="item.disabled"
                >
                </el-option>
              </el-select>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="visible = false">取 消</el-button>
            <el-button type="primary" @click="createroom">确 定</el-button>
          </div>
        </el-dialog>

        <el-dialog
          title="创建成功"
          :visible.sync="createsuccess"
          width="30%"
          center
        >
          <div class="roominfo">房间编号：{{ roomForm.roomid }}</div>
          <div class="roominfo">比赛等级：{{ roomForm.roomlevel }}</div>
          <div class="roominfo">开始时间：{{ roomForm.starttime }}</div>
          <div class="roominfo">比赛时长：{{ roomForm.runningtime }}</div>
          <div class="roominfo">当前状态：{{ roomForm.roomstate }}</div>
          <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="createsuccess = false"
              >确 定</el-button
            >
          </span>
        </el-dialog>
      </div>
    </b-card>
  </div>
</template>

<script>
import RoomTable from "@/components/contest/room-table";

export default {
  name: "contest-list",
  components: { RoomTable },
  data() {
    return {
      tbl: 1,
      search: "",
      userid: 0,
      username: null,
      visible: false,
      createsuccess: false,

      roomForm: {
        starttime: "2021-01-05 12:00:00",
        runningtime: 30,
        roomlevel: 1,
        roomid: 0,
        roomstate: "",
      },

      pickerOptions: {
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            },
          },
          {
            text: "明天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() + 3600 * 1000 * 24);
              picker.$emit("pick", date);
            },
          },
          {
            text: "一周后",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() + 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            },
          },
        ],
      },

      timetable: [
        {
          timevalue: 5,
          label: "5分钟",
        },
        {
          timevalue: 10,
          label: "10分钟",
        },
        {
          timevalue: 30,
          label: "30分钟",
        },
        {
          timevalue: 60,
          label: "1小时",
        },
        {
          timevalue: 90,
          label: "1小时30分钟",
        },
        {
          timevalue: 120,
          label: "2小时",
        },
      ],
      timevalue: 30,

      leveltable: [
        {
          levelvalue: 1,
          label: "hard 1",
        },
        {
          levelvalue: 2,
          label: "hard 2",
        },
        {
          levelvalue: 3,
          label: "hard 3",
        },
        {
          levelvalue: 4,
          label: "hard 4",
        },
        {
          levelvalue: 5,
          label: "hard 5",
        },
        {
          levelvalue: 6,
          label: "hard 6",
        },
        {
          levelvalue: 7,
          label: "hard 7",
          disabled: true,
        },
        {
          levelvalue: 8,
          label: "hard 8",
          disabled: true,
        },
        {
          levelvalue: 9,
          label: "hard 9",
          disabled: true,
        },
      ],
      levelvalue: 1,
      table: [],
      goroom: '',
      f:0,
    };
  },
  mounted() {
    this.roomlist(1);
  },
  methods: {
    gogo(){
      if(localStorage.getItem('roomstate')==='已结束'&&this.f===1) return '开始练习'
      return '进入房间'
    },
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
    roomlist(lev) {
      localStorage.setItem("roomlevel", lev);
      this.f=0;
      let t=this.gogo();
      this.goroom=t;
      if (lev === 1) localStorage.setItem("roomstate", "比赛中");
      else if (lev === 2) localStorage.setItem("roomstate", "待开始");
      else localStorage.setItem("roomstate", "已结束");

      this.$axios
        .post("/room/page", {
          roomLevel: lev,
          accountId: localStorage.getItem("userid"),
        })
        .then((res) => {
          if (res.data.code === 0) {
            this.table = res.data.data.roomInfoList;
          }
        })
        .catch(() => {
          this.alerterror()
        });
    },
    roomlistState(state) {
      localStorage.setItem("roomstate", state);
      this.f=1;
      let t=this.gogo();
      this.goroom=t;
      if (state === "比赛中") localStorage.setItem("roomlevel", 1);
      else if (state === "待开始") localStorage.setItem("roomlevel", 2);
      else localStorage.setItem("roomlevel", 3);

      this.$axios
        .post("/room/state", {
          accountId: localStorage.getItem("userid"),
          problemState: state,
        })
        .then((res) => {
          if (res.data.code === 0) {
            this.table = res.data.data.roomInfoList;
          }
        })
        .catch(() => {
          this.alerterror()
        });
    },
    tblchange(newtbl) {
      this.tbl = newtbl;
      if (newtbl === 1) this.roomlist(localStorage.getItem("roomlevel"));
      else this.roomlistState(localStorage.getItem("roomstate"));
    },
    createbotton() {
      this.userid = localStorage.getItem("userid");
      this.username = localStorage.getItem("username");
      this.visible = true;
    },
    timeformat() {
      if (this.roomForm.starttime == null) {
        this.alertmsg('请选择比赛开始时间', 'warning')
      } else {
        const d = new Date(this.roomForm.starttime);
        const resDate =
          d.getFullYear() +
          "-" +
          this.p(d.getMonth() + 1) +
          "-" +
          this.p(d.getDate());
        const resTime =
          this.p(d.getHours()) +
          ":" +
          this.p(d.getMinutes()) +
          ":" +
          this.p(d.getSeconds());
        this.roomForm.starttime = resDate + " " + resTime;
      }
    },
    createroom() {
      this.timeformat();
      this.roomForm.runningtime = this.timevalue;
      this.roomForm.roomlevel = this.levelvalue;

      this.$axios
        .post("/room/creat", {
          accountId: localStorage.getItem("userid"),
          roomStartTime: this.roomForm.starttime,
          roomRunningTime: this.roomForm.runningtime,
          roomLevel: this.roomForm.roomlevel,
        })
        .then((res) => {
          if (res.data.code === 0) {
            this.open(
              res.data.data.roomInfo.roomId,
              res.data.data.roomInfo.roomState
            );
            // this.$router.push("contest");
          } else if (res.data.code === 1) alert("请创建当前时间之后的开始时间");
          this.visible = false;
          this.roomlist(localStorage.getItem("roomlevel"));
        })
        .catch(() => {
          this.alerterror()
        });
    },
    open(roomid, roomstate) {
      this.roomForm.roomid = roomid;
      this.roomForm.roomstate = roomstate;
      this.createsuccess = true;
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    p(s) {
      return s < 10 ? "0" + s : s;
    },
  },
};
</script>

<style scoped>
.newroom {
  position: absolute;
  margin-top: 1%;
  margin-left: 90%;
}

.room-title {
  font-size: large;
  vertical-align: center;
  /*margin-top: 10px;*/
}

.roominfo {
  font-size: 18px;
  margin: 2px;
}
</style>
