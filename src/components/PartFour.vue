<template>
  <div class="part-four" id="part-four"></div>
</template>

<script>
// 引入基本模板
let echarts = require("echarts/lib/echarts");

export default {
  name: "partFour",
  data() {
    return {};
  },
  mounted() {
    this.drawECharts();
  },
  methods: {
    drawECharts() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById("part-four"), null, {
        renderer: "svg"
      });
      if(this.$store.state.threejs){
        myChart.setOption({
        // 标题
        title: {
          // 标题文本
          text: "文章成就统计",
          // 标题文本样式
          textStyle: {
            color: "#fff"
          },
          // 标题位置
          x: "center"
        },
        // 图形布局
        grid: {
          // 距离底部高度
          bottom: "20"
        },
        // 横轴
        xAxis: {
          show: true,
          type: "category",
          data: [
            "Github Star数：\n3",
            "码云关注者：\n4",
            "掘金关注者：\n3"
          ],
          axisLine: {
            lineStyle: {
              color: "#fff"
            }
          },
          axisTick:{
            show:false
          },
          axisLabel: {
            show:false,
            // 横轴信息全部显示
            interval: 0
          },
        },
        // 纵轴
        yAxis: {
          type: "value",
          axisLine: {
            lineStyle: {
              color: "#fff"
            }
          },
          splitLine: {
            //---grid 区域中的分隔线
            show: true, //---是否显示，'category'类目轴不显示，此时我的y轴为类目轴，splitLine属性是有意义的
            lineStyle: {
              color: "#666",
              width: 1,
              type: "solid" //---类型
            }
          },
          axisTick: {
            //---坐标轴 刻度
            show: true //---是否显示
          },
          axisLabel: {
            //---坐标轴 标签
            show: true //---是否显示
          }
        },
        // 图形系列
        series: [
          {
            // 图类型
            type: "bar",
            // 数据
            data: [3, 4, 3],
            // 文本
            label: {
              show: true,
              position: "top",
              color: "#fff",
              formatter: "{b}"
            },
            // 柱条样式
            itemStyle: {
              color: "deepskyblue"
            },
            zlevel: 1
          }
        ]
      });
      }
      if(!this.$store.state.threejs||!this.$store.state.web){
        myChart.setOption({
        // 标题
        title: {
          // 标题文本
          text: "文章成就统计",
          // 标题文本样式
          textStyle: {
            color: "#fff"
          },
          // 标题位置
          x: "center"
        },
        // 图形布局
        grid: {
          // 距离底部高度
          bottom: "20"
        },
        // 横轴
        xAxis: {
          show: true,
          type: "category",
          data: [
            "Github Star数：\n3",
            "码云关注者：\n4",
            "掘金关注者：\n3"
          ],
          axisLine: {
            lineStyle: {
              color: "#fff"
            }
          },
          axisTick:{
            show:false
          },
          axisLabel: {
            show:false,
            // 横轴信息全部显示
            interval: 0
          },
        },
        // 纵轴
        yAxis: {
          type: "value",
          axisLine: {
            lineStyle: {
              color: "#fff"
            }
          },
          splitLine: {
            //---grid 区域中的分隔线
            show: true, //---是否显示，'category'类目轴不显示，此时我的y轴为类目轴，splitLine属性是有意义的
            lineStyle: {
              color: "#666",
              width: 1,
              type: "dashed" //---类型
            }
          },
          axisTick: {
            //---坐标轴 刻度
            show: false //---是否显示
          },
          axisLabel: {
            //---坐标轴 标签
            show: false //---是否显示
          }
        },
        // 图形系列
        series: [
          {
            // 图类型
            type: "bar",
            // 数据
            data: [3, 4, 3],
            // 文本
            label: {
              show: true,
              position: "top",
              color: "#fff",
              formatter: "{b}"
            },
            // 柱条样式
            itemStyle: {
              color: "deepskyblue"
            },
            zlevel: 1
          }
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
.part-four {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 500px;
  border: 40px solid transparent;
  border-image: url("~@/./assets/img/border_image.png") 30 30 stretch;
  background: #18202d;
  display: flex;
  align-items: center;
}
.part-four > div > svg:hover {
  cursor: url("../assets/img/b.png") 16 16, auto;
}
</style>
