<template>
  <div class="accountappeal">
    <div style="margin: 20px">当前共有{{ num }}条待处理申诉信息</div>
    <div v-for="item in num" :key="item">
      <div style="margin-bottom: 20px">
        <b-card>
          <b-card-text class="fs-xl"> 申诉用户 {{ user }} </b-card-text>
          <b-card-text> 申诉类型 {{ kind }} </b-card-text>
          <b-card-text> 陈述：{{ info }} </b-card-text>
          <b-link href="#" class="card-link">通过</b-link>
          <b-link href="#" class="card-link">驳回</b-link>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 2,
      //   tableData: {
      user: "username",
      kind: 1,
      info:
        "此处为反馈信息，此处为反馈信息，此处为反馈信息，此处为反馈信息，此处为反馈信息，此处为反馈信息，此处为反馈信息，此处为反馈信息，此处为反馈信息，此处为反馈信息，此处为反馈信息，此处为反馈信息，此处为反馈信息，此处为反馈信息，此处为反馈信息，此处为反馈信息，此处为反馈信息，此处为反馈信息，此处为反馈信息，此处为反馈信息，此处为反馈信息，此处为反馈信息",
      //   },
      kinds: ["题目", "题解", "用户举报"],
    };
  },
};
</script>

<style>
</style>