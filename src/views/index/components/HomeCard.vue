<template>
  <!-- <div class="d-flex">
    <div v-for="item in cardData" :key="item.index" class="item">
      <div class="d-flex jc-center">
        <img class="imgs" src="../../../assets/home/reward1.png" />
      </div>
      <div class="mt-3" style="font-size: 26px">{{ item.title }}</div>
      <div class="fs-lg mt-2" style="width: 33%">{{ item.description }}</div>
      <div class="fs-lg mt-2">赏金币值:{{ item.reward }}</div>
      <div class="fs-lg d-flex jc-center ai-center mt-3">
        <el-button
          type="info"
          plain
          class="challenge d-flex jc-center ai-center"
          >挑战</el-button
        >
      </div>
    </div>
  </div> -->
  <el-row :gutter="20">
    <el-col :span="8">
      <div class="grid-cards bg-cards">
        <div class="oneofthree">
          <img class="imgs" src="../../../assets/home/reward1.png" />
          <div class="titleword">悬赏题目01</div>
          <div class="reward-botton">
            <el-button round>挑战</el-button>
          </div>
          <!-- <div class="infomation">
            <div>问题描述：12345678910123456789101234567</div>
            <div>赏金币值：5</div>
          </div> -->
        </div>
      </div>
    </el-col>
    <el-col :span="8"
      ><div class="grid-cards bg-cards">
        <div class="oneofthree">
          <img class="imgs" src="../../../assets/home/reward1.png" />
          <div class="titleword">悬赏题目02</div>
          <div class="reward-botton">
            <el-button round>挑战</el-button>
          </div>
          <!-- <div class="infomation">
            <div>问题描述：12345678910123456789101234567</div>
            <div>赏金币值：5</div>
          </div> -->
        </div>
      </div>
    </el-col>
    <el-col :span="8">
      <div class="grid-cards bg-cards">
        <div class="oneofthree">
          <img class="imgs" src="../../../assets/home/reward1.png" />
          <div class="titleword">悬赏题目03</div>
          <div class="reward-botton">
            <el-button round>挑战</el-button>
          </div>
          <!-- <div class="infomation">
            <div>问题描述：12345678910123456789101234567</div>
            <div>赏金币值：5</div>
          </div> -->
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      cardData: [
        {
          img: "../../../assets/home/reward1.png",
          title: "悬赏题目01",
          description: "sdadsdasdadasdads",
          reward: "5",
        },
        {
          img: "../../../assets/home/reward1.png",
          title: "悬赏题目02",
          description: "sdadsdasdadasdads",
          reward: "5",
        },
        {
          img: "../../../assets/home/reward1.png",
          title: "悬赏题目03",
          description: "sdadsdasdadasdads",
          reward: "5",
        },
      ],
    };
  },
};
</script>

<style>
/* .item {
  width: 33%;
} */
.imgs {
  width: 65%;
  /* margin-top: 4%; */
  margin-left: 17.5%;
}
/* .challenge {
  width: 30%;
  height: 30px;
} */

.titleword {
  margin-top: 4%;
  font-size: 20px;
  text-align: center;
}
.infomation {
  margin-top: 4%;
  font-size: 15px;
}
.reward-botton {
  margin-top: 9px;
  text-align: center;
}

/* .bg-cards {
  background: #d3dce6;
} */
.grid-cards {
  border-radius: 4px;
  min-height: 360px;
}
</style>