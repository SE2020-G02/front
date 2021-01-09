<template>
  <div v-loading="loading" class="big blog-num">
    <div id="mid1">
      <div style="display: inline">
        <div id="small00">
          <div v-show="panes[0][0]!==0">
            <div v-if="isblog===1">
              <div class="blog-num">
                {{ panes[0][0] }}
              </div>
            </div>
            <div v-else>
              <div class="num">
                {{ panes[0][0] }}
              </div>
            </div>
          </div>
        </div>
        <div id="small01">
          <div v-show="panes[0][1]!==0">
            <div v-if="isblog===1">
              <div class="blog-num">
                {{ panes[0][1] }}
              </div>
            </div>
            <div v-else>
              <div class="num">
                {{ panes[0][1] }}
              </div>
            </div>
          </div>
        </div>
        <div id="small02">
          <div v-show="panes[0][2]!==0">
            <div v-if="isblog===1">
              <div class="blog-num">
                {{ panes[0][2] }}
              </div>
            </div>
            <div v-else>
              <div class="num">
                {{ panes[0][2] }}
              </div>
            </div>
          </div>
        </div>
        <div id="small10">
          <div v-show="panes[1][0]!==0">
            <div v-if="isblog===1">
              <div class="blog-num">
                {{ panes[1][0] }}
              </div>
            </div>
            <div v-else>
              <div class="num">
                {{ panes[1][0] }}
              </div>
            </div>
          </div>
        </div>
        <div id="small11">
          <div v-show="panes[1][1]!==0">
            <div v-if="isblog===1">
              <div class="blog-num">
                {{ panes[1][1] }}
              </div>
            </div>
            <div v-else>
              <div class="num">
                {{ panes[1][1] }}
              </div>
            </div>
          </div>
        </div>
        <div id="small12">
          <div v-show="panes[1][2]!==0">
            <div v-if="isblog===1">
              <div class="blog-num">
                {{ panes[1][2] }}
              </div>
            </div>
            <div v-else>
              <div class="num">
                {{ panes[1][2] }}
              </div>
            </div>
          </div>
        </div>
        <div id="small20">
          <div v-show="panes[2][0]!==0">
            <div v-if="isblog===1">
              <div class="blog-num">
                {{ panes[2][0] }}
              </div>
            </div>
            <div v-else>
              <div class="num">
                {{ panes[2][0] }}
              </div>
            </div>
          </div>
        </div>
        <div id="small21">
          <div v-show="panes[2][1]!==0">
            <div v-if="isblog===1">
              <div class="blog-num">
                {{ panes[2][1] }}
              </div>
            </div>
            <div v-else>
              <div class="num">
                {{ panes[2][1] }}
              </div>
            </div>
          </div>
        </div>
        <div id="small22">
          <div v-show="panes[2][2]!==0">
            <div v-if="isblog===1">
              <div class="blog-num">
                {{ panes[2][2] }}
              </div>
            </div>
            <div v-else>
              <div class="num">
                {{ panes[2][2] }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="mid2">
      <div style="display: inline">
        <div id="small03">
          <div v-show="panes[0][3]!==0">
            <div v-if="isblog===1">
              <div class="blog-num">
                {{ panes[0][3] }}
              </div>
            </div>
            <div v-else>
              <div class="num">
                {{ panes[0][3] }}
              </div>
            </div>
          </div>
        </div>
        <div id="small04">
          <div v-show="panes[0][4]!==0" class="num">
            <div v-if="isblog===1">
              <div class="blog-num">
                {{ panes[0][4] }}
              </div>
            </div>
            <div v-else>
              <div class="num">
                {{ panes[0][4] }}
              </div>
            </div>
          </div>
        </div>
        <div id="small05">
          <div v-show="panes[0][5]!==0" class="num">
            <div v-if="isblog===1">
              <div class="blog-num">
                {{ panes[0][5] }}
              </div>
            </div>
            <div v-else>
              <div class="num">
                {{ panes[0][5] }}
              </div>
            </div>
          </div>
        </div>
        <div id="small13">
          <div v-show="panes[1][3]!==0" class="num">
            <div v-if="isblog===1">
              <div class="blog-num">
                {{ panes[1][3] }}
              </div>
            </div>
            <div v-else>
              <div class="num">
                {{ panes[1][3] }}
              </div>
            </div>
          </div>
        </div>
        <div id="small14">
          <div v-show="panes[1][4]!==0" class="num">
            <div v-if="isblog===1">
              <div class="blog-num">
                {{ panes[1][4] }}
              </div>
            </div>
            <div v-else>
              <div class="num">
                {{ panes[1][4] }}
              </div>
            </div>
          </div>
        </div>
        <div id="small15">
          <div v-show="panes[1][5]!==0" class="num">
            <div v-if="isblog===1">
              <div class="blog-num">
                {{ panes[1][5] }}
              </div>
            </div>
            <div v-else>
              <div class="num">
                {{ panes[1][5] }}
              </div>
            </div>
          </div>
        </div>
        <div id="small23">
          <div v-show="panes[2][3]!==0" class="num">
            <div v-if="isblog===1">
              <div class="blog-num">
                {{ panes[2][3] }}
              </div>
            </div>
            <div v-else>
              <div class="num">
                {{ panes[2][3] }}
              </div>
            </div>
          </div>
        </div>
        <div id="small24">
          <div v-show="panes[2][4]!==0" class="num">
            <div v-if="isblog===1">
              <div class="blog-num">
                {{ panes[2][4] }}
              </div>
            </div>
            <div v-else>
              <div class="num">
                {{ panes[2][4] }}
              </div>
            </div>
          </div>
        </div>
        <div id="small25">
          <div v-show="panes[2][5]!==0" class="num">
            <div v-if="isblog===1">
              <div class="blog-num">
                {{ panes[2][5] }}
              </div>
            </div>
            <div v-else>
              <div class="num">
                {{ panes[2][5] }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="mid3">
      <div style="display: inline">
        <div id="small06">
          <div v-show="panes[0][6]!==0" class="num">
            <div v-if="isblog===1">
              <div class="blog-num">
                {{ panes[0][6] }}
              </div>
            </div>
            <div v-else>
              <div class="num">
                {{ panes[0][6] }}
              </div>
            </div>
          </div>
        </div>
        <div id="small07">
          <div v-show="panes[0][7]!==0" class="num">
            <div v-if="isblog===1">
              <div class="blog-num">
                {{ panes[0][7] }}
              </div>
            </div>
            <div v-else>
              <div class="num">
                {{ panes[0][7] }}
              </div>
            </div>
          </div>
        </div>
        <div id="small08">
          <div v-show="panes[0][8]!==0" class="num">
            <div v-if="isblog===1">
              <div class="blog-num">
                {{ panes[0][8] }}
              </div>
            </div>
            <div v-else>
              <div class="num">
                {{ panes[0][8] }}
              </div>
            </div>
          </div>
        </div>
        <div id="small16">
          <div v-show="panes[1][6]!==0" class="num">
            <div v-if="isblog===1">
              <div class="blog-num">
                {{ panes[1][6] }}
              </div>
            </div>
            <div v-else>
              <div class="num">
                {{ panes[1][6] }}
              </div>
            </div>
          </div>
        </div>
        <div id="small17">
          <div v-show="panes[1][7]!==0" class="num">
            <div v-if="isblog===1">
              <div class="blog-num">
                {{ panes[1][7] }}
              </div>
            </div>
            <div v-else>
              <div class="num">
                {{ panes[1][7] }}
              </div>
            </div>
          </div>
        </div>
        <div id="small18">
          <div v-show="panes[1][8]!==0" class="num">
            <div v-if="isblog===1">
              <div class="blog-num">
                {{ panes[1][8] }}
              </div>
            </div>
            <div v-else>
              <div class="num">
                {{ panes[1][8] }}
              </div>
            </div>
          </div>
        </div>
        <div id="small26">
          <div v-show="panes[2][6]!==0" class="num">
            <div v-if="isblog===1">
              <div class="blog-num">
                {{ panes[2][6] }}
              </div>
            </div>
            <div v-else>
              <div class="num">
                {{ panes[2][6] }}
              </div>
            </div>
          </div>
        </div>
        <div id="small27">
          <div v-show="panes[2][7]!==0" class="num">
            <div v-if="isblog===1">
              <div class="blog-num">
                {{ panes[2][7] }}
              </div>
            </div>
            <div v-else>
              <div class="num">
                {{ panes[2][7] }}
              </div>
            </div>
          </div>
        </div>
        <div id="small28">
          <div v-show="panes[2][8]!==0" class="num">
            <div v-if="isblog===1">
              <div class="blog-num">
                {{ panes[2][8] }}
              </div>
            </div>
            <div v-else>
              <div class="num">
                {{ panes[2][8] }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="mid4">
      <div style="display: inline">
        <div id="small30">
          <div v-show="panes[3][0]!==0" class="num">
            <div v-if="isblog===1">
              <div class="blog-num">
                {{ panes[3][0] }}
              </div>
            </div>
            <div v-else>
              <div class="num">
                {{ panes[3][0] }}
              </div>
            </div>
          </div>
        </div>
        <div id="small31">
          <div v-show="panes[3][1]!==0" class="num">
            <div v-if="isblog===1">
              <div class="blog-num">
                {{ panes[3][1] }}
              </div>
            </div>
            <div v-else>
              <div class="num">
                {{ panes[3][1] }}
              </div>
            </div>
          </div>
        </div>
        <div id="small32">
          <div v-show="panes[3][2]!==0" class="num">
            <div v-if="isblog===1">
              <div class="blog-num">
                {{ panes[3][2] }}
              </div>
            </div>
            <div v-else>
              <div class="num">
                {{ panes[3][2] }}
              </div>
            </div>
          </div>
        </div>
        <div id="small40">
          <div v-show="panes[4][0]!==0" class="num">
            <div v-if="isblog===1">
              <div class="blog-num">
                {{ panes[4][0] }}
              </div>
            </div>
            <div v-else>
              <div class="num">
                {{ panes[4][0] }}
              </div>
            </div>
          </div>
        </div>
        <div id="small41">
          <div v-show="panes[4][1]!==0" class="num">
            <div v-if="isblog===1">
              <div class="blog-num">
                {{ panes[4][1] }}
              </div>
            </div>
            <div v-else>
              <div class="num">
                {{ panes[4][1] }}
              </div>
            </div>
          </div>
        </div>
        <div id="small42">
          <div v-show="panes[4][2]!==0" class="num">
            <div v-if="isblog===1">
              <div class="blog-num">
                {{ panes[4][2] }}
              </div>
            </div>
            <div v-else>
              <div class="num">
                {{ panes[4][2] }}
              </div>
            </div>
          </div>
        </div>
        <div id="small50">
          <div v-show="panes[5][0]!==0" class="num">
            <div v-if="isblog===1">
              <div class="blog-num">
                {{ panes[5][0] }}
              </div>
            </div>
            <div v-else>
              <div class="num">
                {{ panes[5][0] }}
              </div>
            </div>
          </div>
        </div>
        <div id="small51">
          <div v-show="panes[5][1]!==0" class="num">
            <div v-if="isblog===1">
              <div class="blog-num">
                {{ panes[5][1] }}
              </div>
            </div>
            <div v-else>
              <div class="num">
                {{ panes[5][1] }}
              </div>
            </div>
          </div>
        </div>
        <div id="small52">
          <div v-show="panes[5][2]!==0" class="num">
            <div v-if="isblog===1">
              <div class="blog-num">
                {{ panes[5][2] }}
              </div>
            </div>
            <div v-else>
              <div class="num">
                {{ panes[5][2] }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="mid5">
      <div style="display: inline">
        <div id="small33">
          <div v-show="panes[3][3]!==0" class="num">
            <div v-if="isblog===1">
              <div class="blog-num">
                {{ panes[3][3] }}
              </div>
            </div>
            <div v-else>
              <div class="num">
                {{ panes[3][3] }}
              </div>
            </div>
          </div>
        </div>
        <div id="small34">
          <div v-show="panes[3][4]!==0" class="num">
            <div v-if="isblog===1">
              <div class="blog-num">
                {{ panes[3][4] }}
              </div>
            </div>
            <div v-else>
              <div class="num">
                {{ panes[3][4] }}
              </div>
            </div>
          </div>
        </div>
        <div id="small35">
          <div v-show="panes[3][5]!==0" class="num">
            <div v-if="isblog===1">
              <div class="blog-num">
                {{ panes[3][5] }}
              </div>
            </div>
            <div v-else>
              <div class="num">
                {{ panes[3][5] }}
              </div>
            </div>
          </div>
        </div>
        <div id="small43">
          <div v-show="panes[4][3]!==0" class="num">
            <div v-if="isblog===1">
              <div class="blog-num">
                {{ panes[4][3] }}
              </div>
            </div>
            <div v-else>
              <div class="num">
                {{ panes[4][3] }}
              </div>
            </div>
          </div>
        </div>
        <div id="small44">
          <div v-show="panes[4][4]!==0" class="num">
            <div v-if="isblog===1">
              <div class="blog-num">
                {{ panes[4][4] }}
              </div>
            </div>
            <div v-else>
              <div class="num">
                {{ panes[4][4] }}
              </div>
            </div>
          </div>
        </div>
        <div id="small45">
          <div v-show="panes[4][5]!==0" class="num">
            <div v-if="isblog===1">
              <div class="blog-num">
                {{ panes[4][5] }}
              </div>
            </div>
            <div v-else>
              <div class="num">
                {{ panes[4][5] }}
              </div>
            </div>
          </div>
        </div>
        <div id="small53">
          <div v-show="panes[5][3]!==0" class="num">
            <div v-if="isblog===1">
              <div class="blog-num">
                {{ panes[5][3] }}
              </div>
            </div>
            <div v-else>
              <div class="num">
                {{ panes[5][3] }}
              </div>
            </div>
          </div>
        </div>
        <div id="small54">
          <div v-show="panes[5][4]!==0" class="num">
            <div v-if="isblog===1">
              <div class="blog-num">
                {{ panes[5][4] }}
              </div>
            </div>
            <div v-else>
              <div class="num">
                {{ panes[5][4] }}
              </div>
            </div>
          </div>
        </div>
        <div id="small55">
          <div v-show="panes[5][5]!==0" class="num">
            <div v-if="isblog===1">
              <div class="blog-num">
                {{ panes[5][5] }}
              </div>
            </div>
            <div v-else>
              <div class="num">
                {{ panes[5][5] }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="mid6">
      <div style="display: inline">
        <div id="small36">
          <div v-show="panes[3][6]!==0" class="num">
            <div v-if="isblog===1">
              <div class="blog-num">
                {{ panes[3][6] }}
              </div>
            </div>
            <div v-else>
              <div class="num">
                {{ panes[3][6] }}
              </div>
            </div>
          </div>
        </div>
        <div id="small37">
          <div v-show="panes[3][7]!==0" class="num">
            <div v-if="isblog===1">
              <div class="blog-num">
                {{ panes[3][7] }}
              </div>
            </div>
            <div v-else>
              <div class="num">
                {{ panes[3][7] }}
              </div>
            </div>
          </div>
        </div>
        <div id="small38">
          <div v-show="panes[3][8]!==0" class="num">
            <div v-if="isblog===1">
              <div class="blog-num">
                {{ panes[3][8] }}
              </div>
            </div>
            <div v-else>
              <div class="num">
                {{ panes[3][8] }}
              </div>
            </div>
          </div>
        </div>
        <div id="small46">
          <div v-show="panes[4][6]!==0" class="num">
            <div v-if="isblog===1">
              <div class="blog-num">
                {{ panes[4][6] }}
              </div>
            </div>
            <div v-else>
              <div class="num">
                {{ panes[4][6] }}
              </div>
            </div>
          </div>
        </div>
        <div id="small47">
          <div v-show="panes[4][7]!==0" class="num">
            <div v-if="isblog===1">
              <div class="blog-num">
                {{ panes[4][7] }}
              </div>
            </div>
            <div v-else>
              <div class="num">
                {{ panes[4][7] }}
              </div>
            </div>
          </div>
        </div>
        <div id="small48">
          <div v-show="panes[4][8]!==0" class="num">
            <div v-if="isblog===1">
              <div class="blog-num">
                {{ panes[4][8] }}
              </div>
            </div>
            <div v-else>
              <div class="num">
                {{ panes[4][8] }}
              </div>
            </div>
          </div>
        </div>
        <div id="small56">
          <div v-show="panes[5][6]!==0" class="num">
            <div v-if="isblog===1">
              <div class="blog-num">
                {{ panes[5][6] }}
              </div>
            </div>
            <div v-else>
              <div class="num">
                {{ panes[5][6] }}
              </div>
            </div>
          </div>
        </div>
        <div id="small57">
          <div v-show="panes[5][7]!==0" class="num">
            <div v-if="isblog===1">
              <div class="blog-num">
                {{ panes[5][7] }}
              </div>
            </div>
            <div v-else>
              <div class="num">
                {{ panes[5][7] }}
              </div>
            </div>
          </div>
        </div>
        <div id="small58">
          <div v-show="panes[5][8]!==0" class="num">
            <div v-if="isblog===1">
              <div class="blog-num">
                {{ panes[5][8] }}
              </div>
            </div>
            <div v-else>
              <div class="num">
                {{ panes[5][8] }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="mid7">
      <div style="display: inline">
        <div id="small60">
          <div v-show="panes[6][0]!==0" class="num">
            <div v-if="isblog===1">
              <div class="blog-num">
                {{ panes[6][0] }}
              </div>
            </div>
            <div v-else>
              <div class="num">
                {{ panes[6][0] }}
              </div>
            </div>
          </div>
        </div>
        <div id="small61">
          <div v-show="panes[6][1]!==0" class="num">
            <div v-if="isblog===1">
              <div class="blog-num">
                {{ panes[6][1] }}
              </div>
            </div>
            <div v-else>
              <div class="num">
                {{ panes[6][1] }}
              </div>
            </div>
          </div>
        </div>
        <div id="small62">
          <div v-show="panes[6][2]!==0" class="num">
            <div v-if="isblog===1">
              <div class="blog-num">
                {{ panes[6][2] }}
              </div>
            </div>
            <div v-else>
              <div class="num">
                {{ panes[6][2] }}
              </div>
            </div>
          </div>
        </div>
        <div id="small70">
          <div v-show="panes[7][0]!==0" class="num">
            <div v-if="isblog===1">
              <div class="blog-num">
                {{ panes[7][0] }}
              </div>
            </div>
            <div v-else>
              <div class="num">
                {{ panes[7][0] }}
              </div>
            </div>
          </div>
        </div>
        <div id="small71">
          <div v-show="panes[7][1]!==0" class="num">
            <div v-if="isblog===1">
              <div class="blog-num">
                {{ panes[7][1] }}
              </div>
            </div>
            <div v-else>
              <div class="num">
                {{ panes[7][1] }}
              </div>
            </div>
          </div>
        </div>
        <div id="small72">
          <div v-show="panes[7][2]!==0" class="num">
            <div v-if="isblog===1">
              <div class="blog-num">
                {{ panes[7][2] }}
              </div>
            </div>
            <div v-else>
              <div class="num">
                {{ panes[7][2] }}
              </div>
            </div>
          </div>
        </div>
        <div id="small80">
          <div v-show="panes[8][0]!==0" class="num">
            <div v-if="isblog===1">
              <div class="blog-num">
                {{ panes[8][0] }}
              </div>
            </div>
            <div v-else>
              <div class="num">
                {{ panes[8][0] }}
              </div>
            </div>
          </div>
        </div>
        <div id="small81">
          <div v-show="panes[8][1]!==0" class="num">
            <div v-if="isblog===1">
              <div class="blog-num">
                {{ panes[8][1] }}
              </div>
            </div>
            <div v-else>
              <div class="num">
                {{ panes[8][1] }}
              </div>
            </div>
          </div>
        </div>
        <div id="small82">
          <div v-show="panes[8][2]!==0" class="num">
            <div v-if="isblog===1">
              <div class="blog-num">
                {{ panes[8][2] }}
              </div>
            </div>
            <div v-else>
              <div class="num">
                {{ panes[8][2] }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="mid8">
      <div style="display: inline">
        <div id="small63">
          <div v-show="panes[6][3]!==0" class="num">
            <div v-if="isblog===1">
              <div class="blog-num">
                {{ panes[6][3] }}
              </div>
            </div>
            <div v-else>
              <div class="num">
                {{ panes[6][3] }}
              </div>
            </div>
          </div>
        </div>
        <div id="small64">
          <div v-show="panes[6][4]!==0" class="num">
            <div v-if="isblog===1">
              <div class="blog-num">
                {{ panes[6][4] }}
              </div>
            </div>
            <div v-else>
              <div class="num">
                {{ panes[6][4] }}
              </div>
            </div>
          </div>
        </div>
        <div id="small65">
          <div v-show="panes[6][5]!==0" class="num">
            <div v-if="isblog===1">
              <div class="blog-num">
                {{ panes[6][5] }}
              </div>
            </div>
            <div v-else>
              <div class="num">
                {{ panes[6][5] }}
              </div>
            </div>
          </div>
        </div>
        <div id="small73">
          <div v-show="panes[7][3]!==0" class="num">
            <div v-if="isblog===1">
              <div class="blog-num">
                {{ panes[7][3] }}
              </div>
            </div>
            <div v-else>
              <div class="num">
                {{ panes[7][3] }}
              </div>
            </div>
          </div>
        </div>
        <div id="small74">
          <div v-show="panes[7][4]!==0" class="num">
            <div v-if="isblog===1">
              <div class="blog-num">
                {{ panes[7][4] }}
              </div>
            </div>
            <div v-else>
              <div class="num">
                {{ panes[7][4] }}
              </div>
            </div>
          </div>
        </div>
        <div id="small75">
          <div v-show="panes[7][5]!==0" class="num">
            <div v-if="isblog===1">
              <div class="blog-num">
                {{ panes[7][5] }}
              </div>
            </div>
            <div v-else>
              <div class="num">
                {{ panes[7][5] }}
              </div>
            </div>
          </div>
        </div>
        <div id="small83">
          <div v-show="panes[8][3]!==0" class="num">
            <div v-if="isblog===1">
              <div class="blog-num">
                {{ panes[8][3] }}
              </div>
            </div>
            <div v-else>
              <div class="num">
                {{ panes[8][3] }}
              </div>
            </div>
          </div>
        </div>
        <div id="small84">
          <div v-show="panes[8][4]!==0" class="num">
            <div v-if="isblog===1">
              <div class="blog-num">
                {{ panes[8][4] }}
              </div>
            </div>
            <div v-else>
              <div class="num">
                {{ panes[8][4] }}
              </div>
            </div>
          </div>
        </div>
        <div id="small85">
          <div v-show="panes[8][5]!==0" class="num">
            <div v-if="isblog===1">
              <div class="blog-num">
                {{ panes[8][5] }}
              </div>
            </div>
            <div v-else>
              <div class="num">
                {{ panes[8][5] }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="mid9">
      <div style="display: inline">
        <div id="small66">
          <div v-show="panes[6][6]!==0" class="num">
            <div v-if="isblog===1">
              <div class="blog-num">
                {{ panes[6][6] }}
              </div>
            </div>
            <div v-else>
              <div class="num">
                {{ panes[6][6] }}
              </div>
            </div>
          </div>
        </div>
        <div id="small67">
          <div v-show="panes[6][7]!==0" class="num">
            <div v-if="isblog===1">
              <div class="blog-num">
                {{ panes[6][7] }}
              </div>
            </div>
            <div v-else>
              <div class="num">
                {{ panes[6][7] }}
              </div>
            </div>
          </div>
        </div>
        <div id="small68">
          <div v-show="panes[6][8]!==0" class="num">
            <div v-if="isblog===1">
              <div class="blog-num">
                {{ panes[6][8] }}
              </div>
            </div>
            <div v-else>
              <div class="num">
                {{ panes[6][8] }}
              </div>
            </div>
          </div>
        </div>
        <div id="small76">
          <div v-show="panes[7][6]!==0" class="num">
            <div v-if="isblog===1">
              <div class="blog-num">
                {{ panes[7][6] }}
              </div>
            </div>
            <div v-else>
              <div class="num">
                {{ panes[7][6] }}
              </div>
            </div>
          </div>
        </div>
        <div id="small77">
          <div v-show="panes[7][7]!==0" class="num">
            <div v-if="isblog===1">
              <div class="blog-num">
                {{ panes[7][7] }}
              </div>
            </div>
            <div v-else>
              <div class="num">
                {{ panes[7][7] }}
              </div>
            </div>
          </div>
        </div>
        <div id="small78">
          <div v-show="panes[7][8]!==0" class="num">
            <div v-if="isblog===1">
              <div class="blog-num">
                {{ panes[7][8] }}
              </div>
            </div>
            <div v-else>
              <div class="num">
                {{ panes[7][8] }}
              </div>
            </div>
          </div>
        </div>
        <div id="small86">
          <div v-show="panes[8][6]!==0" class="num">
            <div v-if="isblog===1">
              <div class="blog-num">
                {{ panes[8][6] }}
              </div>
            </div>
            <div v-else>
              <div class="num">
                {{ panes[8][6] }}
              </div>
            </div>
          </div>
        </div>
        <div id="small87">
          <div v-show="panes[8][7]!==0" class="num">
            <div v-if="isblog===1">
              <div class="blog-num">
                {{ panes[8][7] }}
              </div>
            </div>
            <div v-else>
              <div class="num">
                {{ panes[8][7] }}
              </div>
            </div>
          </div>
        </div>
        <div id="small88">
          <div v-show="panes[8][8]!==0" class="num">
            <div v-if="isblog===1">
              <div class="blog-num">
                {{ panes[8][8] }}
              </div>
            </div>
            <div v-else>
              <div class="num">
                {{ panes[8][8] }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "small-problem",
  props: ['problemid', 'isblog'],
  data() {
    return {
      loading: false,
      show: false,
      panes: [[0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0]],
    }
  },
  mounted: function () {
    this.init()
  },
  methods: {
    getpanes() {
      this.loading = true
      this.$axios.post("/problem/message", {
        problemId: this.problemid
      })
          .then((res) => {
            // alert("发送成功");
            // console.log(res.data);
            if (res.data.code === 0) {
              this.panes = res.data.data.problemInfo.panes
              this.loading = false
            }
          })
    },
    init: function () {
      this.getpanes()
    },
  }
}
</script>

<style scoped>

.num {
  font-size: small;
}

.blog-num {
  font-size: x-large;
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

</style>