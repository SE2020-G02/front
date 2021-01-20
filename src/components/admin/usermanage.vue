<template>
  <div class="usermanage bg-rect-background">
    <b-card no-body>
      <b-tabs card>
        <b-tab title="待处理"><feedback></feedback></b-tab>
        <b-tab title="已解决"><feedbackyes></feedbackyes></b-tab>
        <b-tab title="被驳回"><feedbackno></feedbackno></b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
import feedback from "../../components/admin/feedback.vue";
import feedbackyes from "../../components/admin/feedbackyes.vue";
import feedbackno from "../../components/admin/feedbackno.vue";

export default {
  components: {
    feedback,
    feedbackyes,
    feedbackno,
  },
};
</script>

<style>
.usermanage {
  margin: 3%;
  /* height: 700px; */
}
</style>