<template>
  <div class="usermanage bg-rect-background">
    <b-card no-body>
      <b-tabs card>
        <b-tab title="反馈信息"><feedback></feedback></b-tab>
        <b-tab title="用户申诉"><userappeal></userappeal></b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
import feedback from "../../components/admin/feedback.vue";
import userappeal from "../../components/admin/userappeal.vue";

export default {
  components: {
    feedback,
    userappeal,
  },
};
</script>

<style>
.usermanage {
  margin: 3%;
  /* height: 700px; */
}
</style>