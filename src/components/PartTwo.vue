<template>
  <div class="part-two" id="part-two"></div>
</template>

<script>
// 引入基本模板
let echarts = require("echarts/lib/echarts");

// 引用中国地图
require("echarts/map/js/china.js");

export default {
  name: "partTwo",
  data() {
    return {};
  },
  mounted() {
    this.drawECharts();
  },
  methods: {
    drawECharts() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById("part-two"), null, {renderer: 'svg'});

      // 排行前五城市
      let myFirendCity = [
        { name: "北京", value: ["116.46", "39.92", "0"] },
        { name: "上海", value: ["121.48", "31.22", "1"] },
        { name: "广州", value: ["113.23", "23.16", "1"] },
        { name: "深圳", value: ["114.07", "22.62", "0"] },
        { name: "杭州", value: ["120.19", "30.26", "9"] },
      ];

      // 好友分布省份
      let myFriendProvince = [
        { name: '北京' , value: '0'}, 
        { name: '天津' , value: '0'},
        { name: '上海' , value: '4'}, 
        { name: '重庆' , value: '0'}, 
        { name: '河北' , value: '0'}, 
        { name: '河南' , value: '0'}, 
        { name: '云南' , value: '2'}, 
        { name: '辽宁' , value: '0'}, 
        { name: '黑龙江' , value: '4'}, 
        { name: '湖南' , value: '3'}, 
        { name: '安徽' , value: '1'}, 
        { name: '山东' , value: '0'}, 
        { name: '新疆' , value: '0'}, 
        { name: '江苏' , value: '4'}, 
        { name: '浙江' , value: '3'}, 
        { name: '江西' , value: '2'}, 
        { name: '湖北' , value: '0'}, 
        { name: '广西' , value: '0'}, 
        { name: '甘肃' , value: '3'}, 
        { name: '山西' , value: '0'}, 
        { name: '内蒙古' , value: '0'}, 
        { name: '陕西' , value: '0'}, 
        { name: '吉林' , value: '0'}, 
        { name: '福建' , value: '0'}, 
        { name: '贵州' , value: '0'}, 
        { name: '广东' , value: '5'}, 
        { name: '青海' , value: '1'}, 
        { name: '西藏' , value: '0'}, 
        { name: '四川' , value: '1'}, 
        { name: '宁夏' , value: '0'}, 
        { name: '海南' , value: '0'}, 
        { name: '台湾' , value: '0'},
        { name: '香港' , value: '0'}, 
        { name: '澳门' , value: '0'},
        { name: '南海诸岛', value: '0'}
      ];
      myChart.setOption({
        // 标题
        title: {
          text: "好友分布",
          textStyle: {
            color: "#fff"
          },
          x: "center"
        },
        // 移动显示
        tooltip: {
          trigger: "item",
          // 鼠标移动过去显示
          formatter: function(params) {
            if (params.value[2] == undefined) {
              if (!params.name) {
                return "该地区暂无好友";
              } else {
                return params.name + " : " + params.value;
              }
            } else {
              return params.name + " : " + params.value[2];
            }
          }
        },
        // 左边注记
        visualMap: {
          text: ["", "好友数"],
          min: 0,
          max: 9,
          // 是否能通过手柄显示
          calculable: true,
          inRange: {
            color: ["#e6d70d", "#ff5506", "#ff0000"]
          },
          textStyle: {
            color: "#fff"
          }
        },
        // geo
        geo: {
          map: "china"
        },
        // 数据
        series: [
          // 排行前五城市
          {
            name: "排行前五",
            type: "effectScatter",
            coordinateSystem: "geo",
            symbolSize: function(val) {
              return val[2] * 2;
            },
            showEffectOn: "render",
            rippleEffect: {
              brushType: "stroke"
            },
            hoverAnimation: true,
            label: {
              normal: {
                formatter: "{b}",
                position: "right",
                show: true,
                color: "#fff"
              }
            },
            itemStyle: {
              normal: {
                color: "#ddb926",
                shadowBlur: 10,
                shadowColor: "#333"
              }
            },
            // 类似于 z-index
            zlevel: 1,
            data: myFirendCity
          },
          // 好友分布省份
          {
            name: "好友数",
            type: "map",
            mapType: "china",
            // 是否允许缩放
            roam: false,
            label: {
              // 显示省份标签
              normal: {
                formatter: myFirendCity,
                show: false,
                textStyle: {
                  color: "#fff"
                }
              },
              // 对应的鼠标悬浮效果
              emphasis: {
                show: false
              }
            },
            itemStyle: {
              normal: {
                borderWidth: 0.5, // 区域边框宽度
                borderColor: "#fff", // 区域边框颜色
                areaColor: "deepskyblue" // 区域颜色
              },
              // 对应的鼠标悬浮效果
              emphasis: {
                borderWidth: 1,
                borderColor: "#fff",
                areaColor: "#00aeff"
              }
            },
            // 数据
            data: myFriendProvince
          }
        ]
      });
      $(window).resize(function() {
        myChart.resize();
      });
    }
  }
};
</script>

<style>
.part-two {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 500px;
  border: 40px solid transparent;
  border-image: url("~@/./assets/img/border_image.png") 30 30 stretch;
  background: #18202d;
}
.part-two > div > svg:hover {
  cursor: url("../assets/img/b.png") 16 16, auto;
}
</style>
