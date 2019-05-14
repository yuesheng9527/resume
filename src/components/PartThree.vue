<template>
  <div class="part-three" id="part-three"></div>
</template>

<script>
// 引入基本模板
let echarts = require("echarts/lib/echarts");

export default {
  name: "partThree",
  data() {
    return {};
  },
  mounted() {
    this.drawECharts();
  },
  methods: {
    drawECharts() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById("part-three"), null, {
        renderer: "svg"
      });
      if (this.$store.state.threejs) {
        myChart.setOption({
          // 标题
          title: {
            // 标题文本
            text: "技能分布图",
            // 标题样式
            textStyle: {
              color: "#fff"
            },
            // 标题位置
            x: "center"
          },
          // 移动显示
          tooltip: {
            trigger: "item",
            // 显示文字样式
            formatter: "{a} <br/>{b} : {d}%"
          },
          // 注记
          legend: {
            x: "center",
            y: "bottom",
            textStyle: {
              color: "#fff"
            },
            data: [
              "HTML5",
              "CSS3",
              "JavaScript",
              "jQuery",
              "Vue",
              "mpvue",
              "Node",
              "微信小程序",
              "其它"
            ]
          },
          // 注记显示手柄
          calculable: true,
          // 图形系列
          series: [
            {
              name: "技能分布",
              type: "pie",
              radius: [30,110],
              roseType: "area",
              data: [
                { value: 15, name: "HTML5" },
                { value: 25, name: "Vue" },
                { value: 20, name: "其它" },
                { value: 15, name: "CSS3" },
                { value: 20, name: "JavaScript" },
                { value: 10, name: "jQuery" },
                { value: 20, name: "mpvue" },
                { value: 10, name: "Node" },
                { value: 20, name: "微信小程序" }
              ]
            }
          ],
          // 颜色调整
          color: [
            "#00bfff",
            "#207ffc",
            "#00ffdd",
            "#00aeff",
            "#00eeff",
            "#006eff",
            "#0099ff",
            "#00aeff",
            "#0066ff"
          ]
        });
      }
      if (!this.$store.state.threejs||!this.$store.state.web) {
        myChart.setOption({
          // 标题
          title: {
            // 标题文本
            text: "技能分布图",
            // 标题样式
            textStyle: {
              color: "#fff"
            },
            // 标题位置
            x: "center"
          },
          // 移动显示
          tooltip: {
            trigger: "item",
            // 显示文字样式
            formatter: "{a} <br/>{b} : {d}%"
          },
          // 注记
          legend: {
            x: "center",
            y: "bottom",
            textStyle: {
              color: "#fff"
            },
            data: [
              "HTML5",
              "CSS3",
              "JavaScript",
              "jQuery",
              "Vue",
              "mpvue",
              "Node",
              "微信小程序",
              "其它"
            ]
          },
          // 注记显示手柄
          calculable: true,
          // 图形系列
          series: [
            {
              name: "技能分布",
              type: "pie",
              radius: ["10%", "50%"],
              roseType: "area",
              labelLine: {
                normal: {
                  length: 1
                }
              },
              data: [
                { value: 15, name: "HTML5" },
                { value: 25, name: "Vue" },
                { value: 20, name: "其它" },
                { value: 15, name: "CSS3" },
                { value: 20, name: "JavaScript" },
                { value: 10, name: "jQuery" },
                { value: 20, name: "mpvue" },
                { value: 10, name: "Node" },
                { value: 20, name: "微信小程序" }
              ]
            }
          ],
          // 颜色调整
          color: [
            "#00bfff",
            "#207ffc",
            "#00ffdd",
            "#00aeff",
            "#00eeff",
            "#006eff",
            "#0099ff",
            "#00aeff",
            "#0066ff"
          ]
        });
      }
      $(window).resize(function() {
        myChart.resize();
      });
    }
  }
};
</script>

<style>
.part-three {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 500px;
  border: 40px solid transparent;
  border-image: url("~@/./assets/img/border_image.png") 30 30 stretch;
  background: #18202d;
}
.part-three > div > svg:hover {
  cursor: url("../assets/img/b.png") 16 16, auto;
}
</style>
