<template>
  <div>
    <div style="font-size: 20px; text-align: center; margin-bottom: 20px">
      天梯排位
    </div>
    <div style="text-align: center; margin-bottom: 25px">
      仅展示排名前10的玩家
    </div>
    <el-table :data="data1" border style="width: 100%">
      <el-table-column prop="rank" label="排名" class="table1">
      </el-table-column>
      <el-table-column prop="name" label="用户" class="table1">
      </el-table-column>
      <el-table-column prop="level" label="等级" class="table1">
      </el-table-column>
      <el-table-column prop="integral" label="积分" class="table1">
      </el-table-column>
    </el-table>
    <div class="morerank" @click="goRanking">更多排位信息</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      columns1: [
        {
          title: "排名",
          key: "rank",
        },
        {
          title: "用户",
          key: "name",
        },
        {
          title: "等级",
          key: "level",
        },
        {
          title: "积分",
          key: "integral",
        },
      ],
      data1: [
        {
          rank: 1,
          name: "John",
          level: 9,
          integral: "1515",
        },
        {
          rank: 2,
          name: "John",
          level: 9,
          integral: "1515",
        },
        {
          rank: 3,
          name: "John",
          level: 9,
          integral: "1515",
        },
        {
          rank: 4,
          name: "John",
          level: 9,
          integral: "1515",
        },
        {
          rank: 5,
          name: "John",
          level: 8,
          integral: "1515",
        },
        {
          rank: 6,
          name: "John",
          level: 8,
          integral: "1515",
        },
        {
          rank: 7,
          name: "John",
          level: 8,
          integral: "1515",
        },
        {
          rank: 8,
          name: "John",
          level: 8,
          integral: "1515",
        },
        {
          rank: 9,
          name: "John",
          level: 8,
          integral: "1515",
        },
        {
          rank: 10,
          name: "John",
          level: 8,
          integral: "1515",
        },
        // {
        //   rank: 11,
        //   name: "John",
        //   level: 7,
        //   integral: "1515",
        // },
        // {
        //   rank: 12,
        //   name: "John",
        //   level: 7,
        //   integral: "1515",
        // },
        // {
        //   rank: 13,
        //   name: "John",
        //   level: 7,
        //   integral: "1515",
        // },
        // {
        //   rank: 14,
        //   name: "John",
        //   level: 7,
        //   integral: "1515",
        // },
        // {
        //   rank: 15,
        //   name: "John",
        //   level: 7,
        //   integral: "1515",
        // },
        // {
        //   rank: 7,
        //   name: "John",
        //   level: 8,
        //   integral: "1515",
        // },
        // {
        //   rank: 8,
        //   name: "John",
        //   level: 8,
        //   integral: "1515",
        // },
        // {
        //   rank: 9,
        //   name: "John",
        //   level: 8,
        //   integral: "1515",
        // },
        // {
        //   rank: 10,
        //   name: "John",
        //   level: 8,
        //   integral: "1515",
        // },
        // {
        //   rank: 11,
        //   name: "John",
        //   level: 7,
        //   integral: "1515",
        // },
        // {
        //   rank: 12,
        //   name: "John",
        //   level: 7,
        //   integral: "1515",
        // },
        // {
        //   rank: 13,
        //   name: "John",
        //   level: 7,
        //   integral: "1515",
        // },
        // {
        //   rank: 14,
        //   name: "John",
        //   level: 7,
        //   integral: "1515",
        // },
        // {
        //   rank: 15,
        //   name: "John",
        //   level: 7,
        //   integral: "1515",
        // },
      ],
    };
  },
  methods: {
    goRanking() {
      this.$router.push("ranking");
    },
  },
};
</script>
<style>
.table1 {
  height: 30px;
}
.morerank {
  font-size: 15px;
  margin-top: 10%;
  margin-left: 65%;
}
</style>
