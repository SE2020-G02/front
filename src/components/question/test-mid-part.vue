<template>
  <div class="mid">
    <div class="el-icon-timer" style="margin-left: 40%">
      已用时间：
      <span>{{ `${hr}:${min}:${sec}` }}</span>
    </div>
    <div class="big">
      <div class="choose-box"
           v-show="show&&!staticpane[changex][changey]"
           @mouseover="showchoose(changex, changey)">
        <div
            v-show="show&&!staticpane[changex][changey]"
            @mouseover="showchoose(changex, changey)">
          {{ changex + 1 }}-{{ changey + 1 }}
        </div>
        <div
            v-show="show&&!staticpane[changex][changey]"
            @mouseover="showchoose(changex, changey)">
          <el-button id="choose-button1" @click="setpane(changex, changey, 1)">1</el-button>
          <el-button id="choose-button2" @click="setpane(changex, changey, 2)">2</el-button>
          <el-button id="choose-button3" @click="setpane(changex, changey, 3)">3</el-button>
          <el-button id="choose-button4" @click="setpane(changex, changey, 4)">4</el-button>
          <el-button id="choose-button5" @click="setpane(changex, changey, 5)">5</el-button>
          <el-button id="choose-button6" @click="setpane(changex, changey, 6)">6</el-button>
          <el-button id="choose-button7" @click="setpane(changex, changey, 7)">7</el-button>
          <el-button id="choose-button8" @click="setpane(changex, changey, 8)">8</el-button>
          <el-button id="choose-button9" @click="setpane(changex, changey, 9)">9</el-button>
        </div>
      </div>
      <div>
        <div v-for="i in 9" :key="i">
          <div class="mid">
            <div v-for="j in 3" :key="j">
              <div v-for="k in 3" :key="k">
                <div class="small"
                     @click="showchoose(i/3*3+j, 9*i+3*j+k-9*x-4)">
                  <div v-show="panes[i/3*3+j][9*i+3*j+k-9*x-4]!==0">
                    <div v-show="!staticpane[i/3*3+j][9*i+3*j+k-9*x-4]" style="color: blue">
                      {{ panes[i / 3 * 3 + j][9 * i + 3 * j + k - 9 * x - 4] }}
                    </div>
                    <div v-show="staticpane[i/3*3+j][9*i+3*j+k-9*x-4]">
                      {{ panes[i / 3 * 3 + j][9 * i + 3 * j + k - 9 * x - 4] }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="submit">
        <el-button @click="submitproblem">
          提交
        </el-button>
      </div>
    </div>
    <div>
      <!--      <div class="choose-button">-->
      <!--        <el-button circle class="num-button" @click="setpane(changex, changey, 1)">1</el-button>-->
      <!--        <el-button circle class="num-button" @click="setpane(changex, changey, 2)">2</el-button>-->
      <!--        <el-button circle class="num-button" @click="setpane(changex, changey, 3)">3</el-button>-->
      <!--        <el-button circle class="num-button" @click="setpane(changex, changey, 4)">4</el-button>-->
      <!--        <el-button circle class="num-button" @click="setpane(changex, changey, 5)">5</el-button>-->
      <!--        <el-button circle class="num-button" @click="setpane(changex, changey, 6)">6</el-button>-->
      <!--        <el-button circle class="num-button" @click="setpane(changex, changey, 7)">7</el-button>-->
      <!--        <el-button circle class="num-button" @click="setpane(changex, changey, 8)">8</el-button>-->
      <!--        <el-button circle class="num-button" @click="setpane(changex, changey, 9)">9</el-button>-->
      <!--      </div>-->
    </div>
  </div>
</template>

<script>
export default {
  name: 'test-mid-part',
  data() {
    return {
      timenow: new Date(),
      problemid: '0523',
      day: 0,
      hr: 0,
      min: 0,
      sec: 0,
      show: false,
      stringpanes: '',
      panes: [[0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0]],
      staticpane: [[true, false, true, false, true, false, true, false, true],
        [true, false, true, false, true, false, true, false, true],
        [true, false, true, false, true, false, true, false, true],
        [true, false, true, false, true, false, true, false, true],
        [true, false, true, false, true, false, true, false, true],
        [true, false, true, false, true, false, true, false, true],
        [true, false, true, false, true, false, true, false, true],
        [true, false, true, false, true, false, true, false, true],
        [true, false, true, false, true, false, true, false, true],],
      changex: 0,
      changey: 0,
      toback: ''
    }
  },
  mounted: function () {
    this.init()
    this.countup()
  },
  methods: {
    getback(x, y) {
      if (this.changex === x && this.changey === y)
        return 'background-color="blue"'
      return ''
    },
    async submitproblem() {
      // console.log(this.panes)
      if (localStorage.getItem('ispractice') === '0') {
        let runningtime = localStorage.getItem('runningtime')
        let timecost = parseInt(this.hr) * 60 + parseInt(this.min)
        if (runningtime < timecost) {
          alert('比赛已结束')
          return
        }
      }
      for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
          if (this.panes[i][j] === 0) {
            alert('未完成本题')
            return
          }
        }
      }
      this.problemid = localStorage.getItem('problemid')
      this.$axios.post("/solve/submit", {
        "problemId": this.problemid,
        "accountId": localStorage.getItem('userid'),
        "problemPanes": this.panes,
        "solveCostTime": this.hr * 3600 + this.min * 60 + this.sec
      })
          .then((res) => {
            alert(res.data.msg);
            // alert(this.panes)
            // console.log(res.data);

            if (res.data.code === 0) {
              this.$router.push("practice");
            }

            // if (res.data.code === 0) {
            //   this.panes = res.data.data.problemInfo.panes
            //   for (let i = 0; i < 9; i++) {
            //     for (let j = 0; j < 9; j++) {
            //       this.staticpane[i][j] = this.panes[i][j] > 0
            //     }
            //   }
            // }
          })
          .catch((error) => {
            alert(error.data.status);
            console.log(error);
          });
    },
    async getpanes() {
      this.problemid = localStorage.getItem('problemid')
      this.$axios.post("/problem/message", {
        problemId: this.problemid
      })
          .then((res) => {
            // alert("发送成功");
            // console.log(res.data);

            if (res.data.code === 0) {
              this.stringpanes = res.data.data.problemInfo.problemPanes
              for (let i = 0; i < 9; i++) {
                for (let j = 0; j < 9; j++) {
                  this.panes[i][j] = parseInt(this.stringpanes[i * 9 + j])
                  this.staticpane[i][j] = this.panes[i][j] > 0
                }
              }
            }
          })
    },
    init() {
      this.getpanes()
      this.problemid = localStorage.getItem('problemid')
      if (localStorage.getItem('ispractice') === '0') {
        this.timenow = new Date(localStorage.getItem('starttime'))
      } else {
        this.timenow = new Date()
      }
      // alert(localStorage.getItem('userid'))
    },
    setpane(x, y, t) {
      // this.loading = true;
      this.notshowchoose()
      let tmp = this.panes[x]
      if (this.panes[x][y] === t)
        tmp[y] = 0
      else
        tmp[y] = t
      this.set(this.panes, x, tmp)
      // this.loading = false;
    },
    countup: function () {
      const now = Date.parse(new Date())
      const end = Date.parse(new Date(this.timenow))
      const msec = now - end
      if (msec < 0) {
        this.day = 0;
        this.hr = '00';
        this.min = '00';
        this.sec = '00';
      } else {
        let day = parseInt(msec / 1000 / 60 / 60 / 24)
        let hr = parseInt(msec / 1000 / 60 / 60)
        let min = parseInt(msec / 1000 / 60 % 60)
        let sec = parseInt(msec / 1000 % 60)
        this.day = day
        this.hr = hr > 9 ? hr : '0' + hr
        this.min = min > 9 ? min : '0' + min
        this.sec = sec > 9 ? sec : '0' + sec
      }
      const that = this
      setTimeout(function () {
        that.countup()
      }, 1000)
    },
    showchoose(x, y) {
      this.changex = x
      this.changey = y
      this.show = true
    },
    notshowchoose() {
      this.show = false
    }
  }
};
</script>

<style>

.mid {
  width: 30%;
  height: 30%;
  /*border: black solid 1px;*/
  float: left;
}

.small {
  round-clip: 10;
  border: black solid 1px;
  height: 30%;
  width: 30%;
  font-size: xx-large;
  text-align: center;
  margin-left: 3%;
  float: left;
  border-radius: 100px;
}

.choose-box-top {
  position: absolute;
  margin-left: -20%;
  margin-top: 18%;
  background-color: #99a9bf;
  width: 160px;
  height: 20px;
}

.choose-box {
  position: absolute;
  margin-left: -13%;
  margin-top: 15%;
  background-color: #99a9bf;
  width: 10rem;
  height: 11rem;
}

#choose-button1 {
  height: 30%;
  width: 30%;
  margin-left: 1%;
  margin-top: 1%;
  border-radius: 60px;
  font-size: large;
}

#choose-button2 {
  height: 30%;
  width: 30%;
  margin-left: 3%;
  margin-top: 1%;
  border-radius: 60px;
  font-size: large;
}

#choose-button3 {
  height: 30%;
  width: 30%;
  margin-left: 3%;
  margin-top: 1%;
  border-radius: 60px;
  font-size: large;
}

#choose-button4 {
  height: 30%;
  width: 30%;
  margin-left: 1%;
  margin-top: 3%;
  border-radius: 60px;
  font-size: large;
}

#choose-button5 {
  height: 30%;
  width: 30%;
  margin-left: 3%;
  margin-top: 3%;
  border-radius: 60px;
  font-size: large;
}

#choose-button6 {
  height: 30%;
  width: 30%;
  margin-left: 3%;
  margin-top: 3%;
  border-radius: 60px;
  font-size: large;
}

#choose-button7 {
  height: 30%;
  width: 30%;
  margin-left: 1%;
  margin-top: 3%;
  border-radius: 60px;
  font-size: large;
}

#choose-button8 {
  height: 30%;
  width: 30%;
  margin-left: 3%;
  margin-top: 3%;
  border-radius: 60px;
  font-size: large;
}

#choose-button9 {
  height: 30%;
  width: 30%;
  margin-left: 3%;
  margin-top: 3%;
  border-radius: 60px;
  font-size: large;
}


.submit {
  margin-left: 40%;
  margin-bottom: 1%;
  width: 20%;
}

.choose-button {
  margin-left: 22%;
  margin-top: -5%;
  /*margin-bottom: 4%;*/
}

.num-button {
  height: 3rem;
  width: 3rem;
  margin-right: 1%;
}

.big {
  /*margin-top: 10%;*/
  margin-left: 20%;
  height: 700px;
  width: 700px;
}

.mid {
  margin-top: 5%;
}

.bg-red {
  background-color: red;
}

.bg-purple {
  background-color: blueviolet;
}

</style>