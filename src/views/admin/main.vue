<template>
  <div class="admin">
    <b-card no-body>
      <b-tabs pills card vertical nav-wrapper-class="col-2">
        <b-tab disabled>
          <template #title>
            <br />
            <h4 align="center">管理</h4>
            <hr />
          </template>
        </b-tab>

        <b-tab active class="bg-rect-background">
          <template #title>
            <div align="center">用户</div>
          </template>
          <usermanage></usermanage>
        </b-tab>

        <b-tab class="bg-rect-background">
          <template #title>
            <div align="center">题目</div>
          </template>
          <expandquesbank></expandquesbank>
        </b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
import usermanage from "../../components/admin/usermanage.vue";
import expandquesbank from "../../components/admin/expandquesbank.vue";

export default {
  components: {
    usermanage,
    expandquesbank,
  },
};
</script>

<style>
</style>