<template>
  <div class="d-flex">
    <el-select
      v-model="value"
      multiple
      filterable
      remote
      reserve-keyword
      placeholder="请输入房间号"
      :remote-method="remoteMethod"
      :loading="loading"
    >
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>

    <div class="d-flex" style="margin-left: 10px; margin-right: 10px">
      <el-button icon="el-icon-search" circle></el-button>
      <div style="margin-top: 8px; margin-left: 15px" @click="goContest">
        更多
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [],
      value: [],
      list: [],
      loading: false,
      states: [
        "12344",
        "12345",
        "23451",
        "14124",
        "18797",
        "13231",
        "11344",
        "34645",
        "12514",
        "19878",
        "93421",
        "32514",
        "76542",
        "31435",
        "21111",
      ],
    };
  },
  mounted() {
    this.list = this.states.map((item) => {
      return { value: `value:${item}`, label: `房间：${item}` };
    });
  },
  methods: {
    goContest() {
      this.$router.push("contest");
    },

    remoteMethod(query) {
      if (query !== "") {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
          this.options = this.list.filter((item) => {
            return item.label.toLowerCase().indexOf(query.toLowerCase()) > -1;
          });
        }, 200);
      } else {
        this.options = [];
      }
    },
  },
};
</script>