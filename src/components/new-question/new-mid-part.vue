<template>

  <div class="mid">
    <div style="margin-left: 23%">
      <div class="big" v-loading="loading">
        <div class="choose-box-pos">
          <div class="choose-box-top" v-show="show&&!staticpane[changex][changey]">
            {{ changex + 1 }}-{{ changey + 1 }}
          </div>
          <div class="choose-box" v-show="show&&!staticpane[changex][changey]">
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
        <div id="mid1">
          <div style="display: inline">
            <div id="small00"
                 @click="showchoose(0, 0)">
              <div v-show="panes[0][0]!==0">
                <div v-show="!staticpane[0][0]" style="color: blue">
                  {{ panes[0][0] }}
                </div>
                <div v-show="staticpane[0][0]">
                  {{ panes[0][0] }}
                </div>
              </div>
            </div>
            <div id="small01"
                 @click="showchoose(0, 1)">
              <div v-show="panes[0][1]!==0">
                <div v-show="!staticpane[0][1]" style="color: blue">
                  {{ panes[0][1] }}
                </div>
                <div v-show="staticpane[0][1]">
                  {{ panes[0][1] }}
                </div>
              </div>
            </div>
            <div id="small02"
                 @click="showchoose(0, 2)">
              <div v-show="panes[0][2]!==0">
                <div v-show="!staticpane[0][2]" style="color: blue">
                  {{ panes[0][2] }}
                </div>
                <div v-show="staticpane[0][2]">
                  {{ panes[0][2] }}
                </div>
              </div>
            </div>
            <div id="small10"
                 @click="showchoose(1, 0)">
              <div v-show="panes[1][0]!==0">
                <div v-show="!staticpane[1][0]" style="color: blue">
                  {{ panes[1][0] }}
                </div>
                <div v-show="staticpane[1][0]">
                  {{ panes[1][0] }}
                </div>
              </div>
            </div>
            <div id="small11"
                 @click="showchoose(1, 1)">
              <div v-show="panes[1][1]!==0">
                <div v-show="!staticpane[1][1]" style="color: blue">
                  {{ panes[1][1] }}
                </div>
                <div v-show="staticpane[1][1]">
                  {{ panes[1][1] }}
                </div>
              </div>
            </div>
            <div id="small12"
                 @click="showchoose(1, 2)">
              <div v-show="panes[1][2]!==0">
                <div v-show="!staticpane[1][2]" style="color: blue">
                  {{ panes[1][2] }}
                </div>
                <div v-show="staticpane[1][2]">
                  {{ panes[1][2] }}
                </div>
              </div>
            </div>
            <div id="small20"
                 @click="showchoose(2, 0)">
              <div v-show="panes[2][0]!==0">
                <div v-show="!staticpane[2][0]" style="color: blue">
                  {{ panes[2][0] }}
                </div>
                <div v-show="staticpane[2][0]">
                  {{ panes[2][0] }}
                </div>
              </div>
            </div>
            <div id="small21"
                 @click="showchoose(2, 1)">
              <div v-show="panes[2][1]!==0">
                <div v-show="!staticpane[2][1]" style="color: blue">
                  {{ panes[2][1] }}
                </div>
                <div v-show="staticpane[2][1]">
                  {{ panes[2][1] }}
                </div>
              </div>
            </div>
            <div id="small22"
                 @click="showchoose(2, 2)">
              <div v-show="panes[2][2]!==0">
                <div v-show="!staticpane[2][2]" style="color: blue">
                  {{ panes[2][2] }}
                </div>
                <div v-show="staticpane[2][2]">
                  {{ panes[2][2] }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="mid2">
          <div style="display: inline">
            <div id="small03"
                 @click="showchoose(0, 3)">
              <div v-show="panes[0][3]!==0">
                <div v-show="!staticpane[0][3]" style="color: blue">
                  {{ panes[0][3] }}
                </div>
                <div v-show="staticpane[0][3]">
                  {{ panes[0][3] }}
                </div>
              </div>
            </div>
            <div id="small04"
                 @click="showchoose(0, 4)">
              <div v-show="panes[0][4]!==0">
                <div v-show="!staticpane[0][4]" style="color: blue">
                  {{ panes[0][4] }}
                </div>
                <div v-show="staticpane[0][4]">
                  {{ panes[0][4] }}
                </div>
              </div>
            </div>
            <div id="small05"
                 @click="showchoose(0, 5)">
              <div v-show="panes[0][5]!==0">
                <div v-show="!staticpane[0][5]" style="color: blue">
                  {{ panes[0][5] }}
                </div>
                <div v-show="staticpane[0][5]">
                  {{ panes[0][5] }}
                </div>
              </div>
            </div>
            <div id="small13"
                 @click="showchoose(1, 3)">
              <div v-show="panes[1][3]!==0">
                <div v-show="!staticpane[1][3]" style="color: blue">
                  {{ panes[1][3] }}
                </div>
                <div v-show="staticpane[1][3]">
                  {{ panes[1][3] }}
                </div>
              </div>
            </div>
            <div id="small14"
                 @click="showchoose(1, 4)">
              <div v-show="panes[1][4]!==0">
                <div v-show="!staticpane[1][4]" style="color: blue">
                  {{ panes[1][4] }}
                </div>
                <div v-show="staticpane[1][4]">
                  {{ panes[1][4] }}
                </div>
              </div>
            </div>
            <div id="small15"
                 @click="showchoose(1, 5)">
              <div v-show="panes[1][5]!==0">
                <div v-show="!staticpane[1][5]" style="color: blue">
                  {{ panes[1][5] }}
                </div>
                <div v-show="staticpane[1][5]">
                  {{ panes[1][5] }}
                </div>
              </div>
            </div>
            <div id="small23"
                 @click="showchoose(2, 3)">
              <div v-show="panes[2][3]!==0">
                <div v-show="!staticpane[2][3]" style="color: blue">
                  {{ panes[2][3] }}
                </div>
                <div v-show="staticpane[2][3]">
                  {{ panes[2][3] }}
                </div>
              </div>
            </div>
            <div id="small24"
                 @click="showchoose(2, 4)">
              <div v-show="panes[2][4]!==0">
                <div v-show="!staticpane[2][4]" style="color: blue">
                  {{ panes[2][4] }}
                </div>
                <div v-show="staticpane[2][4]">
                  {{ panes[2][4] }}
                </div>
              </div>
            </div>
            <div id="small25"
                 @click="showchoose(2, 5)">
              <div v-show="panes[2][5]!==0">
                <div v-show="!staticpane[2][5]" style="color: blue">
                  {{ panes[2][5] }}
                </div>
                <div v-show="staticpane[2][5]">
                  {{ panes[2][5] }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="mid3">
          <div style="display: inline">
            <div id="small06"
                 @click="showchoose(0, 6)">
              <div v-show="panes[0][6]!==0">
                <div v-show="!staticpane[0][6]" style="color: blue">
                  {{ panes[0][6] }}
                </div>
                <div v-show="staticpane[0][6]">
                  {{ panes[0][6] }}
                </div>
              </div>
            </div>
            <div id="small07"
                 @click="showchoose(0, 7)">
              <div v-show="panes[0][7]!==0">
                <div v-show="!staticpane[0][7]" style="color: blue">
                  {{ panes[0][7] }}
                </div>
                <div v-show="staticpane[0][7]">
                  {{ panes[0][7] }}
                </div>
              </div>
            </div>
            <div id="small08"
                 @click="showchoose(0, 8)">
              <div v-show="panes[0][8]!==0">
                <div v-show="!staticpane[0][8]" style="color: blue">
                  {{ panes[0][8] }}
                </div>
                <div v-show="staticpane[0][8]">
                  {{ panes[0][8] }}
                </div>
              </div>
            </div>
            <div id="small16"
                 @click="showchoose(1, 6)">
              <div v-show="panes[1][6]!==0">
                <div v-show="!staticpane[1][6]" style="color: blue">
                  {{ panes[1][6] }}
                </div>
                <div v-show="staticpane[1][6]">
                  {{ panes[1][6] }}
                </div>
              </div>
            </div>
            <div id="small17"
                 @click="showchoose(1, 7)">
              <div v-show="panes[1][7]!==0">
                <div v-show="!staticpane[1][7]" style="color: blue">
                  {{ panes[1][7] }}
                </div>
                <div v-show="staticpane[1][7]">
                  {{ panes[1][7] }}
                </div>
              </div>
            </div>
            <div id="small18"
                 @click="showchoose(1, 8)">
              <div v-show="panes[1][8]!==0">
                <div v-show="!staticpane[1][8]" style="color: blue">
                  {{ panes[1][8] }}
                </div>
                <div v-show="staticpane[1][8]">
                  {{ panes[1][8] }}
                </div>
              </div>
            </div>
            <div id="small26"
                 @click="showchoose(2, 6)">
              <div v-show="panes[2][6]!==0">
                <div v-show="!staticpane[2][6]" style="color: blue">
                  {{ panes[2][6] }}
                </div>
                <div v-show="staticpane[2][6]">
                  {{ panes[2][6] }}
                </div>
              </div>
            </div>
            <div id="small27"
                 @click="showchoose(2, 7)">
              <div v-show="panes[2][7]!==0">
                <div v-show="!staticpane[2][7]" style="color: blue">
                  {{ panes[2][7] }}
                </div>
                <div v-show="staticpane[2][7]">
                  {{ panes[2][7] }}
                </div>
              </div>
            </div>
            <div id="small28"
                 @click="showchoose(2, 8)">
              <div v-show="panes[2][8]!==0">
                <div v-show="!staticpane[2][8]" style="color: blue">
                  {{ panes[2][8] }}
                </div>
                <div v-show="staticpane[2][8]">
                  {{ panes[2][8] }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="mid4">
          <div style="display: inline">
            <div id="small30"
                 @click="showchoose(3, 0)">
              <div v-show="panes[3][0]!==0">
                <div v-show="!staticpane[3][0]" style="color: blue">
                  {{ panes[3][0] }}
                </div>
                <div v-show="staticpane[3][0]">
                  {{ panes[3][0] }}
                </div>
              </div>
            </div>
            <div id="small31"
                 @click="showchoose(3, 1)">
              <div v-show="panes[3][1]!==0">
                <div v-show="!staticpane[3][1]" style="color: blue">
                  {{ panes[3][1] }}
                </div>
                <div v-show="staticpane[3][1]">
                  {{ panes[3][1] }}
                </div>
              </div>
            </div>
            <div id="small32"
                 @click="showchoose(3, 2)">
              <div v-show="panes[3][2]!==0">
                <div v-show="!staticpane[3][2]" style="color: blue">
                  {{ panes[3][2] }}
                </div>
                <div v-show="staticpane[3][2]">
                  {{ panes[3][2] }}
                </div>
              </div>
            </div>
            <div id="small40"
                 @click="showchoose(4, 0)">
              <div v-show="panes[4][0]!==0">
                <div v-show="!staticpane[4][0]" style="color: blue">
                  {{ panes[4][0] }}
                </div>
                <div v-show="staticpane[4][0]">
                  {{ panes[4][0] }}
                </div>
              </div>
            </div>
            <div id="small41"
                 @click="showchoose(4, 1)">
              <div v-show="panes[4][1]!==0">
                <div v-show="!staticpane[4][1]" style="color: blue">
                  {{ panes[4][1] }}
                </div>
                <div v-show="staticpane[4][1]">
                  {{ panes[4][1] }}
                </div>
              </div>
            </div>
            <div id="small42"
                 @click="showchoose(4, 2)">
              <div v-show="panes[4][2]!==0">
                <div v-show="!staticpane[4][2]" style="color: blue">
                  {{ panes[4][2] }}
                </div>
                <div v-show="staticpane[4][2]">
                  {{ panes[4][2] }}
                </div>
              </div>
            </div>
            <div id="small50"
                 @click="showchoose(5, 0)">
              <div v-show="panes[5][0]!==0">
                <div v-show="!staticpane[5][0]" style="color: blue">
                  {{ panes[5][0] }}
                </div>
                <div v-show="staticpane[5][0]">
                  {{ panes[5][0] }}
                </div>
              </div>
            </div>
            <div id="small51"
                 @click="showchoose(5, 1)">
              <div v-show="panes[5][1]!==0">
                <div v-show="!staticpane[5][1]" style="color: blue">
                  {{ panes[5][1] }}
                </div>
                <div v-show="staticpane[5][1]">
                  {{ panes[5][1] }}
                </div>
              </div>
            </div>
            <div id="small52"
                 @click="showchoose(5, 2)">
              <div v-show="panes[5][2]!==0">
                <div v-show="!staticpane[5][2]" style="color: blue">
                  {{ panes[5][2] }}
                </div>
                <div v-show="staticpane[5][2]">
                  {{ panes[5][2] }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="mid5">
          <div style="display: inline">
            <div id="small33"
                 @click="showchoose(3, 3)">
              <div v-show="panes[3][3]!==0">
                <div v-show="!staticpane[3][3]" style="color: blue">
                  {{ panes[3][3] }}
                </div>
                <div v-show="staticpane[3][3]">
                  {{ panes[3][3] }}
                </div>
              </div>
            </div>
            <div id="small34"
                 @click="showchoose(3, 4)">
              <div v-show="panes[3][4]!==0">
                <div v-show="!staticpane[3][4]" style="color: blue">
                  {{ panes[3][4] }}
                </div>
                <div v-show="staticpane[3][4]">
                  {{ panes[3][4] }}
                </div>
              </div>
            </div>
            <div id="small35"
                 @click="showchoose(3, 5)">
              <div v-show="panes[3][5]!==0">
                <div v-show="!staticpane[3][5]" style="color: blue">
                  {{ panes[3][5] }}
                </div>
                <div v-show="staticpane[3][5]">
                  {{ panes[3][5] }}
                </div>
              </div>
            </div>
            <div id="small43"
                 @click="showchoose(4, 3)">
              <div v-show="panes[4][3]!==0">
                <div v-show="!staticpane[4][3]" style="color: blue">
                  {{ panes[4][3] }}
                </div>
                <div v-show="staticpane[4][3]">
                  {{ panes[4][3] }}
                </div>
              </div>
            </div>
            <div id="small44"
                 @click="showchoose(4, 4)">
              <div v-show="panes[4][4]!==0">
                <div v-show="!staticpane[4][4]" style="color: blue">
                  {{ panes[4][4] }}
                </div>
                <div v-show="staticpane[4][4]">
                  {{ panes[4][4] }}
                </div>
              </div>
            </div>
            <div id="small45"
                 @click="showchoose(4, 5)">
              <div v-show="panes[4][5]!==0">
                <div v-show="!staticpane[4][5]" style="color: blue">
                  {{ panes[4][5] }}
                </div>
                <div v-show="staticpane[4][5]">
                  {{ panes[4][5] }}
                </div>
              </div>
            </div>
            <div id="small53"
                 @click="showchoose(5, 3)">
              <div v-show="panes[5][3]!==0">
                <div v-show="!staticpane[5][3]" style="color: blue">
                  {{ panes[5][3] }}
                </div>
                <div v-show="staticpane[5][3]">
                  {{ panes[5][3] }}
                </div>
              </div>
            </div>
            <div id="small54"
                 @click="showchoose(5, 4)">
              <div v-show="panes[5][4]!==0">
                <div v-show="!staticpane[5][4]" style="color: blue">
                  {{ panes[5][4] }}
                </div>
                <div v-show="staticpane[5][4]">
                  {{ panes[5][4] }}
                </div>
              </div>
            </div>
            <div id="small55"
                 @click="showchoose(5, 5)">
              <div v-show="panes[5][5]!==0">
                <div v-show="!staticpane[5][5]" style="color: blue">
                  {{ panes[5][5] }}
                </div>
                <div v-show="staticpane[5][5]">
                  {{ panes[5][5] }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="mid6">
          <div style="display: inline">
            <div id="small36"
                 @click="showchoose(3, 6)">
              <div v-show="panes[3][6]!==0">
                <div v-show="!staticpane[3][6]" style="color: blue">
                  {{ panes[3][6] }}
                </div>
                <div v-show="staticpane[3][6]">
                  {{ panes[3][6] }}
                </div>
              </div>
            </div>
            <div id="small37"
                 @click="showchoose(3, 7)">
              <div v-show="panes[3][7]!==0">
                <div v-show="!staticpane[3][7]" style="color: blue">
                  {{ panes[3][7] }}
                </div>
                <div v-show="staticpane[3][7]">
                  {{ panes[3][7] }}
                </div>
              </div>
            </div>
            <div id="small38"
                 @click="showchoose(3, 8)">
              <div v-show="panes[3][8]!==0">
                <div v-show="!staticpane[3][8]" style="color: blue">
                  {{ panes[3][8] }}
                </div>
                <div v-show="staticpane[3][8]">
                  {{ panes[3][8] }}
                </div>
              </div>
            </div>
            <div id="small46"
                 @click="showchoose(4, 6)">
              <div v-show="panes[4][6]!==0">
                <div v-show="!staticpane[4][6]" style="color: blue">
                  {{ panes[4][6] }}
                </div>
                <div v-show="staticpane[4][6]">
                  {{ panes[4][6] }}
                </div>
              </div>
            </div>
            <div id="small47"
                 @click="showchoose(4, 7)">
              <div v-show="panes[4][7]!==0">
                <div v-show="!staticpane[4][7]" style="color: blue">
                  {{ panes[4][7] }}
                </div>
                <div v-show="staticpane[4][7]">
                  {{ panes[4][7] }}
                </div>
              </div>
            </div>
            <div id="small48"
                 @click="showchoose(4, 8)">
              <div v-show="panes[4][8]!==0">
                <div v-show="!staticpane[4][8]" style="color: blue">
                  {{ panes[4][8] }}
                </div>
                <div v-show="staticpane[4][8]">
                  {{ panes[4][8] }}
                </div>
              </div>
            </div>
            <div id="small56"
                 @click="showchoose(5, 6)">
              <div v-show="panes[5][6]!==0">
                <div v-show="!staticpane[5][6]" style="color: blue">
                  {{ panes[5][6] }}
                </div>
                <div v-show="staticpane[5][6]">
                  {{ panes[5][6] }}
                </div>
              </div>
            </div>
            <div id="small57"
                 @click="showchoose(5, 7)">
              <div v-show="panes[5][7]!==0">
                <div v-show="!staticpane[5][7]" style="color: blue">
                  {{ panes[5][7] }}
                </div>
                <div v-show="staticpane[5][7]">
                  {{ panes[5][7] }}
                </div>
              </div>
            </div>
            <div id="small58"
                 @click="showchoose(5, 8)">
              <div v-show="panes[5][8]!==0">
                <div v-show="!staticpane[5][8]" style="color: blue">
                  {{ panes[5][8] }}
                </div>
                <div v-show="staticpane[5][8]">
                  {{ panes[5][8] }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="mid7">
          <div style="display: inline">
            <div id="small60"
                 @click="showchoose(6, 0)">
              <div v-show="panes[6][0]!==0">
                <div v-show="!staticpane[6][0]" style="color: blue">
                  {{ panes[6][0] }}
                </div>
                <div v-show="staticpane[6][0]">
                  {{ panes[6][0] }}
                </div>
              </div>
            </div>
            <div id="small61"
                 @click="showchoose(6, 1)">
              <div v-show="panes[6][1]!==0">
                <div v-show="!staticpane[6][1]" style="color: blue">
                  {{ panes[6][1] }}
                </div>
                <div v-show="staticpane[6][1]">
                  {{ panes[6][1] }}
                </div>
              </div>
            </div>
            <div id="small62"
                 @click="showchoose(6, 2)">
              <div v-show="panes[6][2]!==0">
                <div v-show="!staticpane[6][2]" style="color: blue">
                  {{ panes[6][2] }}
                </div>
                <div v-show="staticpane[6][2]">
                  {{ panes[6][2] }}
                </div>
              </div>
            </div>
            <div id="small70"
                 @click="showchoose(7, 0)">
              <div v-show="panes[7][0]!==0">
                <div v-show="!staticpane[7][0]" style="color: blue">
                  {{ panes[7][0] }}
                </div>
                <div v-show="staticpane[7][0]">
                  {{ panes[7][0] }}
                </div>
              </div>
            </div>
            <div id="small71"
                 @click="showchoose(7, 1)">
              <div v-show="panes[7][1]!==0">
                <div v-show="!staticpane[7][1]" style="color: blue">
                  {{ panes[7][1] }}
                </div>
                <div v-show="staticpane[7][1]">
                  {{ panes[7][1] }}
                </div>
              </div>
            </div>
            <div id="small72"
                 @click="showchoose(7, 2)">
              <div v-show="panes[7][2]!==0">
                <div v-show="!staticpane[7][2]" style="color: blue">
                  {{ panes[7][2] }}
                </div>
                <div v-show="staticpane[7][2]">
                  {{ panes[7][2] }}
                </div>
              </div>
            </div>
            <div id="small80"
                 @click="showchoose(8, 0)">
              <div v-show="panes[8][0]!==0">
                <div v-show="!staticpane[8][0]" style="color: blue">
                  {{ panes[8][0] }}
                </div>
                <div v-show="staticpane[8][0]">
                  {{ panes[8][0] }}
                </div>
              </div>
            </div>
            <div id="small81"
                 @click="showchoose(8, 1)">
              <div v-show="panes[8][1]!==0">
                <div v-show="!staticpane[8][1]" style="color: blue">
                  {{ panes[8][1] }}
                </div>
                <div v-show="staticpane[8][1]">
                  {{ panes[8][1] }}
                </div>
              </div>
            </div>
            <div id="small82"
                 @click="showchoose(8, 2)">
              <div v-show="panes[8][2]!==0">
                <div v-show="!staticpane[8][2]" style="color: blue">
                  {{ panes[8][2] }}
                </div>
                <div v-show="staticpane[8][2]">
                  {{ panes[8][2] }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="mid8">
          <div style="display: inline">
            <div id="small63"
                 @click="showchoose(6, 3)">
              <div v-show="panes[6][3]!==0">
                <div v-show="!staticpane[6][3]" style="color: blue">
                  {{ panes[6][3] }}
                </div>
                <div v-show="staticpane[6][3]">
                  {{ panes[6][3] }}
                </div>
              </div>
            </div>
            <div id="small64"
                 @click="showchoose(6, 4)">
              <div v-show="panes[6][4]!==0">
                <div v-show="!staticpane[6][4]" style="color: blue">
                  {{ panes[6][4] }}
                </div>
                <div v-show="staticpane[6][4]">
                  {{ panes[6][4] }}
                </div>
              </div>
            </div>
            <div id="small65"
                 @click="showchoose(6, 5)">
              <div v-show="panes[6][5]!==0">
                <div v-show="!staticpane[6][5]" style="color: blue">
                  {{ panes[6][5] }}
                </div>
                <div v-show="staticpane[6][5]">
                  {{ panes[6][5] }}
                </div>
              </div>
            </div>
            <div id="small73"
                 @click="showchoose(7, 3)">
              <div v-show="panes[7][3]!==0">
                <div v-show="!staticpane[7][3]" style="color: blue">
                  {{ panes[7][3] }}
                </div>
                <div v-show="staticpane[7][3]">
                  {{ panes[7][3] }}
                </div>
              </div>
            </div>
            <div id="small74"
                 @click="showchoose(7, 4)">
              <div v-show="panes[7][4]!==0">
                <div v-show="!staticpane[7][4]" style="color: blue">
                  {{ panes[7][4] }}
                </div>
                <div v-show="staticpane[7][4]">
                  {{ panes[7][4] }}
                </div>
              </div>
            </div>
            <div id="small75"
                 @click="showchoose(7, 5)">
              <div v-show="panes[7][5]!==0">
                <div v-show="!staticpane[7][5]" style="color: blue">
                  {{ panes[7][5] }}
                </div>
                <div v-show="staticpane[7][5]">
                  {{ panes[7][5] }}
                </div>
              </div>
            </div>
            <div id="small83"
                 @click="showchoose(8, 3)">
              <div v-show="panes[8][3]!==0">
                <div v-show="!staticpane[8][3]" style="color: blue">
                  {{ panes[8][3] }}
                </div>
                <div v-show="staticpane[8][3]">
                  {{ panes[8][3] }}
                </div>
              </div>
            </div>
            <div id="small84"
                 @click="showchoose(8, 4)">
              <div v-show="panes[8][4]!==0">
                <div v-show="!staticpane[8][4]" style="color: blue">
                  {{ panes[8][4] }}
                </div>
                <div v-show="staticpane[8][4]">
                  {{ panes[8][4] }}
                </div>
              </div>
            </div>
            <div id="small85"
                 @click="showchoose(8, 5)">
              <div v-show="panes[8][5]!==0">
                <div v-show="!staticpane[8][5]" style="color: blue">
                  {{ panes[8][5] }}
                </div>
                <div v-show="staticpane[8][5]">
                  {{ panes[8][5] }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="mid9">
          <div style="display: inline">
            <div id="small66"
                 @click="showchoose(6, 6)">
              <div v-show="panes[6][6]!==0">
                <div v-show="!staticpane[6][6]" style="color: blue">
                  {{ panes[6][6] }}
                </div>
                <div v-show="staticpane[6][6]">
                  {{ panes[6][6] }}
                </div>
              </div>
            </div>
            <div id="small67"
                 @click="showchoose(6, 7)">
              <div v-show="panes[6][7]!==0">
                <div v-show="!staticpane[6][7]" style="color: blue">
                  {{ panes[6][7] }}
                </div>
                <div v-show="staticpane[6][7]">
                  {{ panes[6][7] }}
                </div>
              </div>
            </div>
            <div id="small68"
                 @click="showchoose(6, 8)">
              <div v-show="panes[6][8]!==0">
                <div v-show="!staticpane[6][8]" style="color: blue">
                  {{ panes[6][8] }}
                </div>
                <div v-show="staticpane[6][8]">
                  {{ panes[6][8] }}
                </div>
              </div>
            </div>
            <div id="small76"
                 @click="showchoose(7, 6)">
              <div v-show="panes[7][6]!==0">
                <div v-show="!staticpane[7][6]" style="color: blue">
                  {{ panes[7][6] }}
                </div>
                <div v-show="staticpane[7][6]">
                  {{ panes[7][6] }}
                </div>
              </div>
            </div>
            <div id="small77"
                 @click="showchoose(7, 7)">
              <div v-show="panes[7][7]!==0">
                <div v-show="!staticpane[7][7]" style="color: blue">
                  {{ panes[7][7] }}
                </div>
                <div v-show="staticpane[7][7]">
                  {{ panes[7][7] }}
                </div>
              </div>
            </div>
            <div id="small78"
                 @click="showchoose(7, 8)">
              <div v-show="panes[7][8]!==0">
                <div v-show="!staticpane[7][8]" style="color: blue">
                  {{ panes[7][8] }}
                </div>
                <div v-show="staticpane[7][8]">
                  {{ panes[7][8] }}
                </div>
              </div>
            </div>
            <div id="small86"
                 @click="showchoose(8, 6)">
              <div v-show="panes[8][6]!==0">
                <div v-show="!staticpane[8][6]" style="color: blue">
                  {{ panes[8][6] }}
                </div>
                <div v-show="staticpane[8][6]">
                  {{ panes[8][6] }}
                </div>
              </div>
            </div>
            <div id="small87"
                 @click="showchoose(8, 7)">
              <div v-show="panes[8][7]!==0">
                <div v-show="!staticpane[8][7]" style="color: blue">
                  {{ panes[8][7] }}
                </div>
                <div v-show="staticpane[8][7]">
                  {{ panes[8][7] }}
                </div>
              </div>
            </div>
            <div id="small88"
                 @click="showchoose(8, 8)">
              <div v-show="panes[8][8]!==0">
                <div v-show="!staticpane[8][8]" style="color: blue">
                  {{ panes[8][8] }}
                </div>
                <div v-show="staticpane[8][8]">
                  {{ panes[8][8] }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style="margin-left: 40%; width: 20%">
          <el-button @click="submit">
            提交
          </el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "new-mid-part",
  props: ['infos'],
  data() {
    return {
      loading: false,
      day: 0,
      hr: 0,
      min: 0,
      sec: 0,
      show: false,
      initialed: false,
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
    submit() {
      alert('提交成功')
      this.loading = true;
      var panes = "";
      for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
          panes += this.panes[i][j].toString();
        }
      }
      // alert(panes)
      console.log(panes)
      this.$axios
          .post("/reward/creat", {
            rewardInfo: {
              rewardId: "",
              problemId: "",
              rewardMoney: 99,
              rewardState: "未做出"
            },
            problemInfo: {
              problemId: "",
              problemLevel: 0,
              problemPanes: panes,
              problemInfo: this.infos,
              problemSolveCount: 0
            }
          })
          .then((res) => {
            if (res.data.code === 0) {
              alert('创建题目成功')
              this.$router.push("reward");
            } else {
              alert(res.data.msg)
            }
          })
          .catch((error) => {
            alert(error.data.status);
            console.log(error);
          });
      this.loading = false;
    },
    init() {
      for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
          this.staticpane[i][j] = this.panes[i][j] > 0
        }
      }
    },
    setpane(x, y, t) {
      this.notshowchoose()
      let tmp = this.panes[x]
      if (this.panes[x][y] === t)
        tmp[y] = 0
      else
        tmp[y] = t
      this.set(this.panes, x, tmp)
    },
    countup: function () {
      const now = Date.parse(new Date('2020-12-31 20:44'))
      const end = Date.parse(new Date())
      const msec = end - now
      let day = parseInt(msec / 1000 / 60 / 60 / 24)
      let hr = parseInt(msec / 1000 / 60 / 60 % 24)
      let min = parseInt(msec / 1000 / 60 % 60)
      let sec = parseInt(msec / 1000 % 60)
      this.day = day
      this.hr = hr > 9 ? hr : '0' + hr
      this.min = min > 9 ? min : '0' + min
      this.sec = sec > 9 ? sec : '0' + sec
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
}
</script>

<style scoped>

.choose-box-pos {
  position: absolute;
  margin-left: -13%;
  margin-top: 14%;
}

.choose-box-top {
  background-color: #99a9bf;
  width: 160px;
  height: 20px;
}

.choose-box {
  background-color: #99a9bf;
  width: 160px;
  height: 160px;
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

.big {
  /*margin-top: 10%;*/
  /*margin-left: 10%;*/
  height: 700px;
  width: 700px;
}

#mid1 {
  width: 30%;
  height: 30%;
  /*border: black solid 1px;*/
  float: left;
}

#mid2 {
  width: 30%;
  height: 30%;
  /*border: black solid 1px;*/
  border-left: black solid 1px;
  border-right: black solid 1px;
  float: left;
}

#mid3 {
  width: 30%;
  height: 30%;
  /*border: black solid 1px;*/
  float: left;
}

#mid4 {
  width: 30%;
  height: 30%;
  /*border: black solid 1px;*/
  border-top: black solid 1px;
  border-bottom: black solid 1px;
  float: left;
}

#mid5 {
  width: 30%;
  height: 30%;
  border: black solid 1px;
  float: left;
}

#mid6 {
  width: 30%;
  height: 30%;
  /*border: black solid 1px;*/
  border-top: black solid 1px;
  border-bottom: black solid 1px;
  float: left;
}

#mid7 {
  width: 30%;
  height: 30%;
  /*border: black solid 1px;*/
  float: left;
}

#mid8 {
  width: 30%;
  height: 30%;
  /*border: black solid 1px;*/
  border-left: black solid 1px;
  border-right: black solid 1px;
  float: left;
}

#mid9 {
  width: 30%;
  height: 30%;
  /*border: black solid 1px;*/
  float: left;
}

#small00 {
  round-clip: 10;
  border: black solid 1px;
  height: 30%;
  width: 30%;
  font-size: xx-large;
  text-align: center;
  float: left;
  border-radius: 100px;
  margin-left: 1%;
}

#small01 {
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

#small02 {
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

#small03 {
  round-clip: 10;
  border: black solid 1px;
  height: 30%;
  width: 30%;
  font-size: xx-large;
  text-align: center;
  float: left;
  border-radius: 100px;
  margin-left: 1%;
}

#small04 {
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

#small05 {
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

#small06 {
  round-clip: 10;
  border: black solid 1px;
  height: 30%;
  width: 30%;
  font-size: xx-large;
  text-align: center;
  float: left;
  border-radius: 100px;
  margin-left: 1%;
}

#small07 {
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

#small08 {
  round-clip: 10;
  border: black solid 1px;
  height: 30%;
  width: 30%;
  margin-left: 3%;
  font-size: xx-large;
  text-align: center;
  float: left;
  border-radius: 100px;
}

#small10 {
  round-clip: 10;
  border: black solid 1px;
  height: 30%;
  width: 30%;
  margin-left: 1%;
  margin-top: 3%;
  font-size: xx-large;
  text-align: center;
  float: left;
  border-radius: 100px;
}

#small11 {
  round-clip: 10;
  border: black solid 1px;
  height: 30%;
  width: 30%;
  margin-left: 3%;
  margin-top: 3%;
  font-size: xx-large;
  text-align: center;
  /*margin-left: 66%;*/
  float: left;
  border-radius: 100px;
}

#small12 {
  round-clip: 10;
  border: black solid 1px;
  height: 30%;
  width: 30%;
  margin-left: 3%;
  margin-top: 3%;
  font-size: xx-large;
  text-align: center;
  /*margin-left: 66%;*/
  float: left;
  border-radius: 100px;
}

#small13 {
  round-clip: 10;
  border: black solid 1px;
  height: 30%;
  width: 30%;
  margin-left: 1%;
  margin-top: 3%;
  font-size: xx-large;
  text-align: center;
  /*margin-left: 66%;*/
  float: left;
  border-radius: 100px;
}

#small14 {
  round-clip: 10;
  border: black solid 1px;
  height: 30%;
  width: 30%;
  margin-left: 3%;
  margin-top: 3%;
  font-size: xx-large;
  text-align: center;
  /*margin-left: 66%;*/
  float: left;
  border-radius: 100px;
}

#small15 {
  round-clip: 10;
  border: black solid 1px;
  height: 30%;
  width: 30%;
  margin-left: 3%;
  margin-top: 3%;
  font-size: xx-large;
  text-align: center;
  /*margin-left: 66%;*/
  float: left;
  border-radius: 100px;
}

#small16 {
  round-clip: 10;
  border: black solid 1px;
  height: 30%;
  width: 30%;
  margin-left: 1%;
  margin-top: 3%;
  font-size: xx-large;
  text-align: center;
  /*margin-left: 66%;*/
  float: left;
  border-radius: 100px;
}

#small17 {
  round-clip: 10;
  border: black solid 1px;
  height: 30%;
  width: 30%;
  margin-left: 3%;
  margin-top: 3%;
  font-size: xx-large;
  text-align: center;
  /*margin-left: 66%;*/
  float: left;
  border-radius: 100px;
}

#small18 {
  round-clip: 10;
  border: black solid 1px;
  height: 30%;
  width: 30%;
  margin-left: 3%;
  margin-top: 3%;
  font-size: xx-large;
  text-align: center;
  /*margin-left: 66%;*/
  float: left;
  border-radius: 100px;
}

#small20 {
  round-clip: 10;
  border: black solid 1px;
  height: 30%;
  width: 30%;
  margin-left: 1%;
  margin-top: 3%;
  font-size: xx-large;
  text-align: center;
  /*margin-left: 66%;*/
  float: left;
  border-radius: 100px;
}

#small21 {
  round-clip: 10;
  border: black solid 1px;
  height: 30%;
  width: 30%;
  margin-left: 3%;
  margin-top: 3%;
  font-size: xx-large;
  text-align: center;
  /*margin-left: 66%;*/
  float: left;
  border-radius: 100px;
}

#small22 {
  round-clip: 10;
  border: black solid 1px;
  height: 30%;
  width: 30%;
  margin-left: 3%;
  margin-top: 3%;
  font-size: xx-large;
  text-align: center;
  /*margin-left: 66%;*/
  float: left;
  border-radius: 100px;
}

#small23 {
  round-clip: 10;
  border: black solid 1px;
  height: 30%;
  width: 30%;
  margin-left: 1%;
  margin-top: 3%;
  font-size: xx-large;
  text-align: center;
  /*margin-left: 66%;*/
  float: left;
  border-radius: 100px;
}

#small24 {
  round-clip: 10;
  border: black solid 1px;
  height: 30%;
  width: 30%;
  margin-left: 3%;
  margin-top: 3%;
  font-size: xx-large;
  text-align: center;
  /*margin-left: 66%;*/
  float: left;
  border-radius: 100px;
}

#small25 {
  round-clip: 10;
  border: black solid 1px;
  height: 30%;
  width: 30%;
  margin-left: 3%;
  margin-top: 3%;
  font-size: xx-large;
  text-align: center;
  /*margin-left: 66%;*/
  float: left;
  border-radius: 100px;
}

#small26 {
  round-clip: 10;
  border: black solid 1px;
  height: 30%;
  width: 30%;
  margin-left: 1%;
  margin-top: 3%;
  font-size: xx-large;
  text-align: center;
  /*margin-left: 66%;*/
  float: left;
  border-radius: 100px;
}

#small27 {
  round-clip: 10;
  border: black solid 1px;
  height: 30%;
  width: 30%;
  margin-left: 3%;
  margin-top: 3%;
  font-size: xx-large;
  text-align: center;
  /*margin-left: 66%;*/
  float: left;
  border-radius: 100px;
}

#small28 {
  round-clip: 10;
  border: black solid 1px;
  height: 30%;
  width: 30%;
  margin-left: 3%;
  margin-top: 3%;
  font-size: xx-large;
  text-align: center;
  /*margin-left: 66%;*/
  float: left;
  border-radius: 100px;
}

#small30 {
  round-clip: 10;
  border: black solid 1px;
  height: 30%;
  width: 30%;
  margin-left: 1%;
  margin-top: 1%;
  font-size: xx-large;
  text-align: center;
  /*margin-left: 66%;*/
  float: left;
  border-radius: 100px;
}

#small31 {
  round-clip: 10;
  border: black solid 1px;
  height: 30%;
  width: 30%;
  margin-left: 3%;
  margin-top: 1%;
  font-size: xx-large;
  text-align: center;
  /*margin-left: 66%;*/
  float: left;
  border-radius: 100px;
}

#small32 {
  round-clip: 10;
  border: black solid 1px;
  height: 30%;
  width: 30%;
  margin-left: 3%;
  margin-top: 1%;
  font-size: xx-large;
  text-align: center;
  /*margin-left: 66%;*/
  float: left;
  border-radius: 100px;
}

#small33 {
  round-clip: 10;
  border: black solid 1px;
  height: 30%;
  width: 30%;
  margin-left: 1%;
  margin-top: 1%;
  font-size: xx-large;
  text-align: center;
  /*margin-left: 66%;*/
  float: left;
  border-radius: 100px;
}

#small34 {
  round-clip: 10;
  border: black solid 1px;
  height: 30%;
  width: 30%;
  margin-left: 3%;
  margin-top: 1%;
  font-size: xx-large;
  text-align: center;
  /*margin-left: 66%;*/
  float: left;
  border-radius: 100px;
}

#small35 {
  round-clip: 10;
  border: black solid 1px;
  height: 30%;
  width: 30%;
  margin-left: 3%;
  margin-top: 1%;
  font-size: xx-large;
  text-align: center;
  /*margin-left: 66%;*/
  float: left;
  border-radius: 100px;
}

#small36 {
  round-clip: 10;
  border: black solid 1px;
  height: 30%;
  width: 30%;
  margin-left: 1%;
  margin-top: 1%;
  font-size: xx-large;
  text-align: center;
  /*margin-left: 66%;*/
  float: left;
  border-radius: 100px;
}

#small37 {
  round-clip: 10;
  border: black solid 1px;
  height: 30%;
  width: 30%;
  margin-left: 3%;
  margin-top: 1%;
  font-size: xx-large;
  text-align: center;
  /*margin-left: 66%;*/
  float: left;
  border-radius: 100px;
}

#small38 {
  round-clip: 10;
  border: black solid 1px;
  height: 30%;
  width: 30%;
  margin-left: 3%;
  margin-top: 1%;
  font-size: xx-large;
  text-align: center;
  /*margin-left: 66%;*/
  float: left;
  border-radius: 100px;
}

#small40 {
  round-clip: 10;
  border: black solid 1px;
  height: 30%;
  width: 30%;
  margin-left: 1%;
  margin-top: 3%;
  font-size: xx-large;
  text-align: center;
  /*margin-left: 66%;*/
  float: left;
  border-radius: 100px;
}

#small41 {
  round-clip: 10;
  border: black solid 1px;
  height: 30%;
  width: 30%;
  margin-left: 3%;
  margin-top: 3%;
  font-size: xx-large;
  text-align: center;
  /*margin-left: 66%;*/
  float: left;
  border-radius: 100px;
}

#small42 {
  round-clip: 10;
  border: black solid 1px;
  height: 30%;
  width: 30%;
  margin-left: 3%;
  margin-top: 3%;
  font-size: xx-large;
  text-align: center;
  /*margin-left: 66%;*/
  float: left;
  border-radius: 100px;
}

#small43 {
  round-clip: 10;
  border: black solid 1px;
  height: 30%;
  width: 30%;
  margin-left: 1%;
  margin-top: 3%;
  font-size: xx-large;
  text-align: center;
  /*margin-left: 66%;*/
  float: left;
  border-radius: 100px;
}

#small44 {
  round-clip: 10;
  border: black solid 1px;
  height: 30%;
  width: 30%;
  margin-left: 3%;
  margin-top: 3%;
  font-size: xx-large;
  text-align: center;
  /*margin-left: 66%;*/
  float: left;
  border-radius: 100px;
}

#small45 {
  round-clip: 10;
  border: black solid 1px;
  height: 30%;
  width: 30%;
  margin-left: 3%;
  margin-top: 3%;
  font-size: xx-large;
  text-align: center;
  /*margin-left: 66%;*/
  float: left;
  border-radius: 100px;
}

#small46 {
  round-clip: 10;
  border: black solid 1px;
  height: 30%;
  width: 30%;
  margin-left: 1%;
  margin-top: 3%;
  font-size: xx-large;
  text-align: center;
  /*margin-left: 66%;*/
  float: left;
  border-radius: 100px;
}

#small47 {
  round-clip: 10;
  border: black solid 1px;
  height: 30%;
  width: 30%;
  margin-left: 3%;
  margin-top: 3%;
  font-size: xx-large;
  text-align: center;
  /*margin-left: 66%;*/
  float: left;
  border-radius: 100px;
}

#small48 {
  round-clip: 10;
  border: black solid 1px;
  height: 30%;
  width: 30%;
  margin-left: 3%;
  margin-top: 3%;
  font-size: xx-large;
  text-align: center;
  /*margin-left: 66%;*/
  float: left;
  border-radius: 100px;
}

#small50 {
  round-clip: 10;
  border: black solid 1px;
  height: 30%;
  width: 30%;
  margin-left: 1%;
  margin-top: 3%;
  font-size: xx-large;
  text-align: center;
  /*margin-left: 66%;*/
  float: left;
  border-radius: 100px;
}

#small51 {
  round-clip: 10;
  border: black solid 1px;
  height: 30%;
  width: 30%;
  margin-left: 3%;
  margin-top: 3%;
  font-size: xx-large;
  text-align: center;
  /*margin-left: 66%;*/
  float: left;
  border-radius: 100px;
}

#small52 {
  round-clip: 10;
  border: black solid 1px;
  height: 30%;
  width: 30%;
  margin-left: 3%;
  margin-top: 3%;
  font-size: xx-large;
  text-align: center;
  /*margin-left: 66%;*/
  float: left;
  border-radius: 100px;
}

#small53 {
  round-clip: 10;
  border: black solid 1px;
  height: 30%;
  width: 30%;
  margin-left: 1%;
  margin-top: 3%;
  font-size: xx-large;
  text-align: center;
  /*margin-left: 66%;*/
  float: left;
  border-radius: 100px;
}

#small54 {
  round-clip: 10;
  border: black solid 1px;
  height: 30%;
  width: 30%;
  margin-left: 3%;
  margin-top: 3%;
  font-size: xx-large;
  text-align: center;
  /*margin-left: 66%;*/
  float: left;
  border-radius: 100px;
}

#small55 {
  round-clip: 10;
  border: black solid 1px;
  height: 30%;
  width: 30%;
  margin-left: 3%;
  margin-top: 3%;
  font-size: xx-large;
  text-align: center;
  /*margin-left: 66%;*/
  float: left;
  border-radius: 100px;
}

#small56 {
  round-clip: 10;
  border: black solid 1px;
  height: 30%;
  width: 30%;
  margin-left: 1%;
  margin-top: 3%;
  font-size: xx-large;
  text-align: center;
  /*margin-left: 66%;*/
  float: left;
  border-radius: 100px;
}

#small57 {
  round-clip: 10;
  border: black solid 1px;
  height: 30%;
  width: 30%;
  margin-left: 3%;
  margin-top: 3%;
  font-size: xx-large;
  text-align: center;
  /*margin-left: 66%;*/
  float: left;
  border-radius: 100px;
}

#small58 {
  round-clip: 10;
  border: black solid 1px;
  height: 30%;
  width: 30%;
  margin-left: 3%;
  margin-top: 3%;
  font-size: xx-large;
  text-align: center;
  /*margin-left: 66%;*/
  float: left;
  border-radius: 100px;
}

#small60 {
  round-clip: 10;
  border: black solid 1px;
  height: 30%;
  width: 30%;
  margin-left: 1%;
  margin-top: 1%;
  font-size: xx-large;
  text-align: center;
  /*margin-left: 66%;*/
  float: left;
  border-radius: 100px;
}

#small61 {
  round-clip: 10;
  border: black solid 1px;
  height: 30%;
  width: 30%;
  margin-left: 3%;
  margin-top: 1%;
  font-size: xx-large;
  text-align: center;
  /*margin-left: 66%;*/
  float: left;
  border-radius: 100px;
}

#small62 {
  round-clip: 10;
  border: black solid 1px;
  height: 30%;
  width: 30%;
  margin-left: 3%;
  margin-top: 1%;
  font-size: xx-large;
  text-align: center;
  /*margin-left: 66%;*/
  float: left;
  border-radius: 100px;
}

#small63 {
  round-clip: 10;
  border: black solid 1px;
  height: 30%;
  width: 30%;
  margin-left: 1%;
  margin-top: 1%;
  font-size: xx-large;
  text-align: center;
  /*margin-left: 66%;*/
  float: left;
  border-radius: 100px;
}

#small64 {
  round-clip: 10;
  border: black solid 1px;
  height: 30%;
  width: 30%;
  margin-left: 3%;
  margin-top: 1%;
  font-size: xx-large;
  text-align: center;
  /*margin-left: 66%;*/
  float: left;
  border-radius: 100px;
}

#small65 {
  round-clip: 10;
  border: black solid 1px;
  height: 30%;
  width: 30%;
  margin-left: 3%;
  margin-top: 1%;
  font-size: xx-large;
  text-align: center;
  /*margin-left: 66%;*/
  float: left;
  border-radius: 100px;
}

#small66 {
  round-clip: 10;
  border: black solid 1px;
  height: 30%;
  width: 30%;
  margin-left: 1%;
  margin-top: 1%;
  font-size: xx-large;
  text-align: center;
  /*margin-left: 66%;*/
  float: left;
  border-radius: 100px;
}

#small67 {
  round-clip: 10;
  border: black solid 1px;
  height: 30%;
  width: 30%;
  margin-left: 3%;
  margin-top: 1%;
  font-size: xx-large;
  text-align: center;
  /*margin-left: 66%;*/
  float: left;
  border-radius: 100px;
}

#small68 {
  round-clip: 10;
  border: black solid 1px;
  height: 30%;
  width: 30%;
  margin-left: 3%;
  margin-top: 1%;
  font-size: xx-large;
  text-align: center;
  /*margin-left: 66%;*/
  float: left;
  border-radius: 100px;
}

#small70 {
  round-clip: 10;
  border: black solid 1px;
  height: 30%;
  width: 30%;
  margin-left: 1%;
  margin-top: 3%;
  font-size: xx-large;
  text-align: center;
  /*margin-left: 66%;*/
  float: left;
  border-radius: 100px;
}

#small71 {
  round-clip: 10;
  border: black solid 1px;
  height: 30%;
  width: 30%;
  margin-left: 3%;
  margin-top: 3%;
  font-size: xx-large;
  text-align: center;
  /*margin-left: 66%;*/
  float: left;
  border-radius: 100px;
}

#small72 {
  round-clip: 10;
  border: black solid 1px;
  height: 30%;
  width: 30%;
  margin-left: 3%;
  margin-top: 3%;
  font-size: xx-large;
  text-align: center;
  /*margin-left: 66%;*/
  float: left;
  border-radius: 100px;
}

#small73 {
  round-clip: 10;
  border: black solid 1px;
  height: 30%;
  width: 30%;
  margin-left: 1%;
  margin-top: 3%;
  font-size: xx-large;
  text-align: center;
  /*margin-left: 66%;*/
  float: left;
  border-radius: 100px;
}

#small74 {
  round-clip: 10;
  border: black solid 1px;
  height: 30%;
  width: 30%;
  margin-left: 3%;
  margin-top: 3%;
  font-size: xx-large;
  text-align: center;
  /*margin-left: 66%;*/
  float: left;
  border-radius: 100px;
}

#small75 {
  round-clip: 10;
  border: black solid 1px;
  height: 30%;
  width: 30%;
  margin-left: 3%;
  margin-top: 3%;
  font-size: xx-large;
  text-align: center;
  /*margin-left: 66%;*/
  float: left;
  border-radius: 100px;
}

#small76 {
  round-clip: 10;
  border: black solid 1px;
  height: 30%;
  width: 30%;
  margin-left: 1%;
  margin-top: 3%;
  font-size: xx-large;
  text-align: center;
  /*margin-left: 66%;*/
  float: left;
  border-radius: 100px;
}

#small77 {
  round-clip: 10;
  border: black solid 1px;
  height: 30%;
  width: 30%;
  margin-left: 3%;
  margin-top: 3%;
  font-size: xx-large;
  text-align: center;
  /*margin-left: 66%;*/
  float: left;
  border-radius: 100px;
}

#small78 {
  round-clip: 10;
  border: black solid 1px;
  height: 30%;
  width: 30%;
  margin-left: 3%;
  margin-top: 3%;
  font-size: xx-large;
  text-align: center;
  /*margin-left: 66%;*/
  float: left;
  border-radius: 100px;
}

#small80 {
  round-clip: 10;
  border: black solid 1px;
  height: 30%;
  width: 30%;
  margin-left: 1%;
  margin-top: 3%;
  font-size: xx-large;
  text-align: center;
  /*margin-left: 66%;*/
  float: left;
  border-radius: 100px;
}

#small81 {
  round-clip: 10;
  border: black solid 1px;
  height: 30%;
  width: 30%;
  margin-left: 3%;
  margin-top: 3%;
  font-size: xx-large;
  text-align: center;
  /*margin-left: 66%;*/
  float: left;
  border-radius: 100px;
}

#small82 {
  round-clip: 10;
  border: black solid 1px;
  height: 30%;
  width: 30%;
  margin-left: 3%;
  margin-top: 3%;
  font-size: xx-large;
  text-align: center;
  /*margin-left: 66%;*/
  float: left;
  border-radius: 100px;
}

#small83 {
  round-clip: 10;
  border: black solid 1px;
  height: 30%;
  width: 30%;
  margin-left: 1%;
  margin-top: 3%;
  font-size: xx-large;
  text-align: center;
  /*margin-left: 66%;*/
  float: left;
  border-radius: 100px;
}

#small84 {
  round-clip: 10;
  border: black solid 1px;
  height: 30%;
  width: 30%;
  margin-left: 3%;
  margin-top: 3%;
  font-size: xx-large;
  text-align: center;
  /*margin-left: 66%;*/
  float: left;
  border-radius: 100px;
}

#small85 {
  round-clip: 10;
  border: black solid 1px;
  height: 30%;
  width: 30%;
  margin-left: 3%;
  margin-top: 3%;
  font-size: xx-large;
  text-align: center;
  /*margin-left: 66%;*/
  float: left;
  border-radius: 100px;
}

#small86 {
  round-clip: 10;
  border: black solid 1px;
  height: 30%;
  width: 30%;
  margin-left: 1%;
  margin-top: 3%;
  font-size: xx-large;
  text-align: center;
  /*margin-left: 66%;*/
  float: left;
  border-radius: 100px;
}

#small87 {
  round-clip: 10;
  border: black solid 1px;
  height: 30%;
  width: 30%;
  margin-left: 3%;
  margin-top: 3%;
  font-size: xx-large;
  text-align: center;
  /*margin-left: 66%;*/
  float: left;
  border-radius: 100px;
}

#small88 {
  round-clip: 10;
  border: black solid 1px;
  height: 30%;
  width: 30%;
  margin-left: 3%;
  margin-top: 3%;
  font-size: xx-large;
  text-align: center;
  /*margin-left: 66%;*/
  float: left;
  border-radius: 100px;
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