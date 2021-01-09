<template>
  <div class="expand bg-rect-background">
    <!-- <Upload multiple type="drag" action="//jsonplaceholder.typicode.com/posts/">
      <div style="padding: 20px 0">
        <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
        <p>Click or drag files here to upload</p>
      </div>
    </Upload> -->
    <el-upload
      class="upload-demo"
      drag
      action="https://jsonplaceholder.typicode.com/posts/"
      multiple
    >
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <div class="el-upload__tip" slot="tip">
        <!-- 只能上传jpg/png文件，且不超过500kb -->
        仅允许.txt文件上传，具体如下图所示
      </div>
    </el-upload>
    <!-- <div style="margin-bottom: 20px">
      上传格式要求：仅允许.txt文件上传，具体如下图所示
    </div> -->
    <img style="margin-top: 15px" src="../../assets/upload.png" />
  </div>
</template>

<script>
export default {};
</script>

<style>
.expand {
  margin: 3%;
  height: 700px;
}
.img {
  width: 100px;
}
</style>