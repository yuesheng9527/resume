<template>
  <div :class="partSix" class="partsix">
    <div>
      <h3 class="text-center">编程技能</h3>
      <p class="font-small">
        <span class="font-bold">前端：</span>HTML/HTML5、CSS/CSS3、JS/ES6、jQuery、Vue、mpvue、微信小程序……
      </p>
      <p class="font-small">
        <span class="font-bold">后端：</span>Node、Java基础
      </p>
      <p class="font-small">
        <span class="font-bold">其他：</span>C#、C基础
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "partSix",
  data() {
    return {
      partSix: "part-six",
      curWidth: 0
    };
  },
  beforeMount() {
    this.curWidth =
      document.documentElement.clientWidth || document.body.clientWidth;
    if (this.curWidth < 1000) {
      this.partSix = "part-six-responsive";
    }
  }
};
</script>

<style scoped>
.partsix {
  display: flex;
  align-items: center;
  justify-content: center;
}
.part-six {
  width: 100%;
  height: 500px;
  border: 40px solid transparent;
  border-image: url("~@/./assets/img/border_image.png") 30 30 stretch;
  background: #18202d;
}
.part-six-responsive {
  width: 100%;
  border: 40px solid transparent;
  border-image: url("~@/./assets/img/border_image.png") 30 30 stretch;
  background: #18202d;
}
.text-center {
  text-align: center;
}
.font-small {
  font-size: 0.9em;
}
.font-bold {
  font-weight: bold;
  color: deepskyblue;
}
</style>
