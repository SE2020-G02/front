<template>
  <div>
    <div class="tgrd"><themeground></themeground></div>
    <!-- <div class="carl"><task1></task1></div>
    <div class="down3"><downthree></downthree></div> -->
    <div class="fs-md more" @click="goReward">更多悬赏？点这里！</div>
    <div class="carl">
      <!-- <div class="d-flex flex-column jc-center"> -->
      <el-carousel indicator-position="outside" height="350px">
        <el-carousel-item v-for="item in 3" :key="item">
          <!-- <h3 class="medium">{{ item }}</h3> -->
          <home-card></home-card>
        </el-carousel-item>
      </el-carousel>
      <!-- </div> -->
    </div>
    <div class="down3"><downthree></downthree></div>
  </div>
</template>

<script>
import themeground from "../../components/home/themeground.vue";
// // import carousel from "../../components/home/carousel.vue";
import downthree from "../../components/home/downthree.vue";

// import task1 from "../../components/home/carl/task1.vue";
import HomeCard from "./components/HomeCard.vue";
export default {
  data() {
    return { screenWidth: document.body.clientWidth };
  },
  components: {
    // carousel,
    //task1,
    themeground,
    HomeCard,
    downthree,
  },
  methods: {
    goReward() {
      this.$router.push("reward");
    },
  },
};
</script>

<style>
.carl {
  margin-top: 27px;
  margin-left: 18%;
  width: 64%;
  /* background-color: #999; */
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

