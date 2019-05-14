<template>
  <div class="part-one">
    <img class="part-one-image" :src="headImage" alt="头像">
    <p>姓&emsp;&emsp;名：金王滔</p>
    <p>学&emsp;&emsp;历：专科</p>
    <p>工作年限：3 月</p>
    <p>年&emsp;&emsp;龄：21</p>
    <p>联系电话：18248508464</p>
    <p>电子邮箱：1294575751@qq.com</p>
    <p>
      码云：
      <a href="https://gitee.com/yuesheng9527" style="cursor: url('./static/ico/a.ico') 16 16, auto;">yuesheng9527</a>
    </p>
    <p>
      GitHub：
      <a
        href="https://github.com/yuesheng9527"
        style="cursor: url('./static/ico/a.ico') 16 16, auto;"
      >yuesheng9527</a>
    </p>
    <p>
      掘金：
      <a
        href="https://juejin.im/user/5cb2bd9df265da0379416a1c"
        style="cursor: url('./static/ico/a.ico') 16 16, auto;"
      >yuesheng9527</a>
    </p>
  </div>
</template>

<script>
export default {
  name: "partOne",
  data() {
    return {
      headImage: require("../assets/img/head_image.png")
    };
  }
};
</script>

<style scoped>
a {
  color: deepskyblue;
}
a:hover {
  color: rgb(118, 190, 248);
}
p {
  line-height: 30px;
}
.part-one {
  width: 100%;
  height: 500px;
  border: 40px solid transparent;
  border-image: url("~@/./assets/img/border_image.png") 30 30 stretch;
  background: #18202d;
  padding-left: 10px;
}
.part-one-image {
  width: 100px;
  height: 100px;
}
</style>
