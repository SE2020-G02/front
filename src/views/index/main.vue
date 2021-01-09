<template>
  <div>
    <div class="tgrd"><themeground></themeground></div>
    <!-- <div class="fs-md more" @click="goReward">更多悬赏？点这里！</div>
    <div class="carl">
      <el-carousel indicator-position="outside" height="350px">
        <el-carousel-item v-for="item in 3" :key="item">
          <home-card></home-card>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="down3"><downthree></downthree></div> -->
  </div>
</template>

<script>
import themeground from "../../components/home/themeground.vue";
// import downthree from "../../components/home/downthree.vue";
// import HomeCard from "./components/HomeCard.vue";

export default {
  // data() {
  //   return { screenWidth: document.body.clientWidth };
  // },
  components: {
    themeground,
    // HomeCard,
    // downthree,
  },
  // methods: {
  //   goReward() {
  //     this.$router.push("reward");
  //   },
  // },
};
</script>

<style>
.carl {
  margin-top: 27px;
  margin-left: 18%;
  width: 64%;
}

.down3 {
  margin-top: 80px;
  margin-left: 18%;
  margin-bottom: 70px;
  width: 64%;
}
.more {
  margin-left: 72%;
  margin-top: 55px;
}
</style>

