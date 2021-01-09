<template>
  <el-row>
    <el-col :span="5" class="bg-purple">
      <el-row style="margin-top: 8%">
        <el-col :span="8">
          <div style="display: inline; margin-left: 10%">
            <img src="./headphoto.png" />
          </div>
        </el-col>
        <el-col :span="16" style="margin-top: 3%">
          <div style="display: inline">
            <div style="display: inline">username</div>
            <div style="display: inline; margin-left: 30%">level:6</div>
          </div>
          <div style="margin-left: 0%">nothing here</div>
        </el-col>
      </el-row>
      <div style="display: inline">
        <div>
          <div style="display: inline; margin-left: 12%">
            {{ original }}
          </div>
          <div style="display: inline; margin-left: 31%">
            {{ rank }}
          </div>
          <div style="display: inline; margin-left: 23%">
            {{ score }}
          </div>
        </div>
        <div>
          <div style="display: inline; margin-left: 9%">原创</div>
          <div style="display: inline; margin-left: 23%">排名</div>
          <div style="display: inline; margin-left: 20%">积分</div>
        </div>
        <hr />
        <div>
          <b-tabs
            pills
            card
            vertical
            nav-wrapper-class="w-100"
            style="height: 100%"
          >
            <b-tab @click="shows = 6">
              <template #title>
                <div align="center">我的粉丝</div>
              </template>
            </b-tab>
            <b-tab @click="shows = 7">
              <template #title>
                <div align="center">我的关注</div>
              </template>
            </b-tab>
            <b-tab active @click="shows = 1">
              <template #title>
                <div align="center">我的解法</div>
              </template>
            </b-tab>
            <b-tab @click="shows = 2">
              <template #title>
                <div align="center">我的收藏</div>
              </template>
            </b-tab>
            <b-tab @click="shows = 3">
              <template #title>
                <div align="center">我的点赞</div>
              </template>
            </b-tab>
            <b-tab @click="shows = 4">
              <template #title>
                <div align="center">我的比赛</div>
              </template>
            </b-tab>
            <b-tab @click="shows = 5">
              <template #title>
                <div align="center">我的信息</div>
              </template>
            </b-tab>
            <b-tab><br /></b-tab>
            <b-tab><br /></b-tab>
            <b-tab><br /></b-tab>
            <b-tab><br /></b-tab>
            <b-tab><br /></b-tab>
            <b-tab><br /></b-tab>
          </b-tabs>
        </div>
      </div>
    </el-col>
    <el-col :span="19">
      <div v-if="shows === 1">
        <user-blog></user-blog>
      </div>
      <div v-else-if="shows === 2">
        <user-collection></user-collection>
      </div>
      <div v-else-if="shows === 3">
        <user-likes></user-likes>
      </div>
      <div v-else-if="shows === 4">
        <user-competition></user-competition>
      </div>
      <div v-else-if="shows === 5">
        <user-message></user-message>
      </div>
      <div v-else-if="shows === 6">
        <user-followers></user-followers>
      </div>
      <div v-else-if="shows === 7">
        <user-follows></user-follows>
      </div>
    </el-col>
  </el-row>
  <!--  <div class="d-flex">-->
  <!--    <div class="left-part">123</div>-->
  <!--    <div>456789</div>-->
  <!--  </div>-->
</template>

<script>
import UserBlog from "@/components/user/user-blog";
import UserLikes from "@/components/user/user-likes";
import UserCollection from "@/components/user/user-collection";
import UserCompetition from "@/components/user/user-competition";
import UserMessage from "@/components/user/user-message";
import UserFollowers from "@/components/user/user-followers";
import UserFollows from "@/components/user/user-follows";

export default {
  name: "my-user",
  components: {
    UserFollows,
    UserFollowers,
    UserMessage,
    UserCompetition,
    UserCollection,
    UserLikes,
    UserBlog,
  },
  data() {
    return {
      imgUrl: "headphoto.png",
      original: 3,
      rank: 3,
      score: 1050,
      shows: 1,
    };
  },
};
</script>

<style scoped>
.big-div {
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
}

.bg-purple {
  background: #f9fafc;
  height: 600px;
}

.bg-purple-light {
  background: #e5e9f2;
  height: 100%;
}
</style>