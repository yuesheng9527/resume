<template>
  <div :class="partSeven" class="partseven">
    <div>
      <h3 class="text-center">求职意向</h3>
      <p class="text-small">
        <span class="font-bold">期望职位：</span>前端工程师
      </p>
      <p class="text-small">
        <span class="font-bold">工作技能：</span>Vue
      </p>
      <p class="text-small">
        <span class="font-bold">目标城市：</span>杭州、北京、上海、广州、深圳
      </p>
      <p class="text-small">
        <span class="font-bold">期望薪资：</span>5K - 6K
      </p>
      <p class="text-small">
        <span class="font-bold">入职时间：</span>6月24号以后
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "partSeven",
  data() {
    return {
      partSeven: "part-seven",
      curWidth: 0
    };
  },
  beforeMount() {
    this.curWidth =
      document.documentElement.clientWidth || document.body.clientWidth;
    if (this.curWidth < 1000) {
      this.partSeven = "part-sevev-responsive";
    }
  }
};
</script>

<style scoped>
.partseven {
  display: flex;
  align-items: center;
  justify-content: center;
}
.part-seven {
  width: 100%;
  height: 500px;
  border: 40px solid transparent;
  border-image: url("~@/./assets/img/border_image.png") 30 30 stretch;
  background: #18202d;
}
.part-sevev-responsive {
  width: 100%;
  border: 40px solid transparent;
  border-image: url("~@/./assets/img/border_image.png") 30 30 stretch;
  background: #18202d;
}
.text-center {
  text-align: center;
}
.text-small {
  font-size: 0.9em;
}
.font-bold {
  text-align: center;
  color: deepskyblue;
}
</style>
