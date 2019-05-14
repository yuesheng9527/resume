<template>
  <div :class="partFive" class="partfive">
      <div v-if="$store.state.threejs">
      <h3 class="text-center text-top">工作经验</h3>
      <p>
        <a href="javascript:void(0)" style="cursor: url('./static/ico/a.ico') 16 16, auto;">杭州***科技有限公司</a>
        <span class="text-small">| 2019/02 - 至今</span>
      </p>
      <p class="text-small">日常操作：微信小程序、Vue、mpvue、WebApp……</p>
      <p class="text-small">练手项目：1.简单的仿bilibili微信小程序的制作,</p>
      <p class="text-small">&emsp;&emsp;&emsp;2.锁生活微信小程序的多页面搭建,</p>
      <p class="text-small">&emsp;&emsp;&nbsp;3.使用Vue制作简单的商城WebApp,</p>
      <p class="text-small">&emsp;&emsp;&emsp;4.锁生活测试服的WebApp页面搭建,</p>
      <p class="text-small">&emsp;&emsp;&nbsp;&emsp;&emsp;5.使用mpvue进行小程序的组件化开发,</p>
      <p class="text-small">&emsp;6.微信小程序蓝牙功能的使用,</p>
      </div>
      <div v-else>
      <h3 class="text-center text-top">工作经验</h3>
      <p>
        <a href="javascript:void(0)" style="cursor: url('./static/ico/a.ico') 16 16, auto;">杭州***科技有限公司</a>
        <span class="text-small"> 2019/02 - 至今</span>
      </p>
      <p class="text-small">日常操作：微信小程序、Vue、mpvue、WebApp……</p>
      <p class="text-small">练手项目：1.简单的仿bilibili微信小程序的制作,</p>
      <p class="text-small">&emsp;&nbsp;2.锁生活微信小程序的多页面搭建,</p>
      <p class="text-small">&emsp;3.使用Vue制作简单的商城WebApp,</p>
      <p class="text-small">&emsp;&nbsp;4.锁生活测试服的WebApp页面搭建,</p>
      <p class="text-small">&emsp; 5.使用mpvue组件化开发小程序,</p>
      <p class="text-small">&emsp; 6.微信小程序蓝牙功能的使用,</p>
      </div>
  </div>
</template>

<script>
export default {
  name: "partFive",
  data() {
    return {
      partFive: "part-five",
      curWidth: 0
    };
  },
  beforeMount() {
    this.curWidth =
      document.documentElement.clientWidth || document.body.clientWidth;
    if (this.curWidth < 1000) {
      this.partFive = "part-five-responsive";
    }
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
.partfive {
  display: flex;
  align-items: center;
  justify-content: center;
}
.part-five {
  width: 100%;
  height: 500px;
  border: 40px solid transparent;
  border-image: url("~@/./assets/img/border_image.png") 30 30 stretch;
  background: #18202d;
}
.part-five-responsive {
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
  color: rgb(253, 239, 239);
}
</style>
