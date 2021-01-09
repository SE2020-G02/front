<template>
  <div class="blog">
    <el-row :gutter="50">
      <el-col :span="17">
        <div class="grid-blog bg-blog">
          <div class="d-flex">
            <img src="../components/user/headphoto.png" style="width: 80px" />
            <div style="height: 80px">
              <div style="margin: 10px">{{ author }}</div>
              <div class="fs-sm" style="margin: 10px; color: grey">
                {{ signature }}
              </div>
            </div>
            <!-- <div style="height: 100px; color: #999999">
              最近更新：{{ update_time }}
            </div> -->
          </div>
          <hr />
          <div class="mainbody" align="center" style="margin-bottom: 6%">
            <div class="fs-xl" style="margin: 20px">题目{{ problemid }}</div>
            <!-- <img
             src="../components/practice/problem.png"
             style="height: 300px"
           /> -->
            <small-problem
              :problemid="problemid"
              :isblog="1"
              style="width: 25rem; height: 25rem; margin-left: 5%"
            ></small-problem>
            <div class="fs-md">当前blog：{{ blogid }}</div>
            <!-- <div>
              <small-problem :problemid="problemid"></small-problem>
            </div> -->
          </div>
          <div style="margin-left: 10px; margin-bottom: 20px">
            {{ blog_info }}
          </div>
          <div style="margin-left: 10px; margin-bottom: 20px">
            更新时间：{{ update_time }}
          </div>
          <div
            class="d-flex"
            style="margin-left: 10px; margin-bottom: 20px; color: #0079fe"
          >
            <div @click="feedback">反馈</div>
            <div
              style="margin-left: auto; margin-right: 5px"
              @click="visible = true"
            >
              编写题解
            </div>
            <el-dialog title="编写题解" :visible.sync="visible">
              <el-form ref="form" label-width="80px">
                <el-form-item label="当前题号">
                  {{ problemid }}
                </el-form-item>
                <el-form-item label="输入题解">
                  <el-input
                    type="textarea"
                    v-model="newbloginfo"
                    autosize="ture"
                    show-word-limit="true"
                    maxlength="2000"
                  ></el-input>
                </el-form-item>
              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button @click="visible = false">取 消</el-button>
                <el-button type="primary" @click="submitblog">确 定</el-button>
              </div>
            </el-dialog>
          </div>
        </div>
      </el-col>

      <el-col :span="7">
        <div class="grid-blog bg-blog">
          <div class="fs-xl" style="text-align: center">更多解答</div>
          <div
            style="
              margin-top: 10%;
              margin-bottom: 5%;
              margin-left: 5px;
              color: grey;
            "
          >
            还有其他{{ more_blog_num }}条解答
          </div>
          <!-- <hr color=" #d4d9de" /> -->
          <el-table :data="more_blog_list" border style="width: 100%">
            <el-table-column prop="blogId" label="Blog"> </el-table-column>
            <el-table-column prop="problemId" label="题目"> </el-table-column>
            <el-table-column prop="accountNickname" label="作者">
            </el-table-column>
            <el-table-column fixed="right" width="50">
              <template slot-scope="scope">
                <el-button
                  @click="readotherblog(scope.row.blogId)"
                  type="text"
                  size="small"
                  >查看</el-button
                >
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// import smallProblem from "../components/question/small-problem.vue";

import SmallProblem from "@/components/question/small-problem";
export default {
  components: { SmallProblem },
  // components: { smallProblem },
  // name: "blog",
  data() {
    return {
      author: "渣男12138",
      signature:
        "这个人什么也没说，这个人什么也没说，这个人什么也没说，这个人什么也没说",
      problemid: 12769,
      blogid: "0000",
      blog_info: "这里是题解正文，这里是题解正文，这里是题解正文",
      // comment_num: 158,
      update_time: "2020-11-17 22:33",
      more_blog_num: 123,
      more_blog_list: [
        {
          name: "王小虎",
          blogid: 1242,
          problemid: "0003",
        },
      ],

      visible: false,
      newbloginfo: "",
      // formLabelWidth: "120px",
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.problemid = localStorage.getItem("problemid");
      this.getbloginfo();
      this.getmorelist();
    },
    submitblog() {
      this.$axios
        .post("/blogs/creat", {
          accountId: localStorage.getItem("userid"),
          problemId: this.problemid,
          // accountNickname: localStorage.getItem("username"),
          blogMessage: this.newbloginfo,
        })
        .then((res) => {
          if (res.data.code === 0) {
            this.blogid = res.data.data.blogId;
            // alert(this.blogid);
            localStorage.setItem("blogid", res.data.data.blogId);
            alert("提交成功");
            this.init();
          }
        })
        .catch((error) => {
          alert("服务器错误submitblog");
          console.log(error);
        });

      this.visible = false;
    },
    getbloginfo() {
      this.$axios
        .post("/blogs/display", {
          problemId: this.problemid,
          blogId: this.blogid,
        })
        .then((res) => {
          // alert("problemid: " + this.problemid + "   blogid: " + this.blogid);
          if (res.data.code == 1) {
            this.author = "none";
            this.signature = "none";
            this.blogid = "none";
            this.blog_info = "暂无信息：当前还没有人为这道题目编写题解";
            this.update_time = "无";
          } else {
            // alert("bloginfo code: 0");
            this.author = res.data.data.accountPublicInfo.accountNickname;
            this.signature = res.data.data.accountPublicInfo.accountSignature;
            this.blogid = res.data.data.blogInfo.blogId;
            this.blog_info = res.data.data.blogInfo.blogMessage;
            this.update_time = res.data.data.blogInfo.blogUpdateTime;
          }
        })
        .catch((error) => {
          alert("服务器错误getbloginfo");
          console.log(error);
        });
    },
    getmorelist() {
      this.$axios
        .post("/blogs/all", {
          problemId: this.problemid,
        })
        .then((res) => {
          if (res.data.code === 0) {
            // alert("获取通过列表成功");
            this.more_blog_list = res.data.data.blogsInfoList;
            if (this.more_blog_list == null) {
              this.more_blog_num = 0;
            } else {
              this.more_blog_num = this.more_blog_list.length;
            }
          }
        })
        .catch((error) => {
          alert("服务器错误getmorelist");
          console.log(error);
        });
    },
    readotherblog(theblogid) {
      // alert(theblogid);
      this.blogid = theblogid;
      localStorage.setItem("blogid", theblogid);
      this.init();
    },
    feedback() {},
    write() {
      this.$router.push("writeblog");
    },
  },
};
</script>

<style>
.blog {
  margin-top: 3%;
  margin-left: 13%;
  margin-bottom: 3%;
  width: 74%;
  /* background-color: rgb(201, 140, 66); */
}
.grid-blog {
  border-radius: 4px;
  min-height: 500px;
}
/* .bg-blog {
  background: #d3dce6;
} */
.mainbody {
  margin-top: 3%;
  /* height: 250px; */
  /* background-color: rgb(221, 142, 142); */
}
.more-blog-title {
  font-size: x-large;
}

.right-table {
  width: 90%;
  margin-left: 5%;
}

.right-part {
  margin-left: 10%;
  width: 80%;
}

.more-blog-subtitle {
  margin-top: 5%;
  color: #999999;
  margin-left: 10%;
  font-size: small;
}

.left-down-part {
  margin-left: 5%;
}

.bg-purple {
  color: blueviolet;
  background-color: blueviolet;
}

.left-part {
  margin-left: 20%;
  /*margin-top: 10%;*/
  height: 700px;
}
</style>