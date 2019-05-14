<template>
  <div class="app" id="app">
    <div v-if="$store.state.threejs">
      <div v-if="show" :class="[goway?'animated bounceOutDown':'','banner']">
        <img class="hidden-md-only hidden-lg-only hidden-xl-only" :src="bannerXSSM" alt="banner 图">
        <img
          class="hidden-xs-only hidden-sm-only hidden-lg-only hidden-xl-only"
          :src="bannerMD"
          alt="banner 图"
        >
        <img class="hidden-xs-only hidden-sm-only hidden-md-only" :src="bannerLGXL" alt="banner 图">
      </div>
      <div v-else class="div2">
        <el-button
          :class="['button2','animated infinite bounce']"
          type="text"
          style="cursor: url('./static/ico/a.ico') 16 16, auto;"
          @click="go4"
        >3D按钮</el-button>
      </div>
      <!-- 第一行 -->
      <el-row>
        <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8" class="part animated bounceInDown">
          <router-view name="PartOne" class="img-aoqi"/>
        </el-col>
        <el-col
          :xs="24"
          :sm="24"
          :md="8"
          :lg="8"
          :xl="8"
          class="part animated bounceInDown delay-1s"
        >
          <router-view name="PartTwo" class="img-aoqi"/>
        </el-col>
        <el-col
          :xs="24"
          :sm="24"
          :md="8"
          :lg="8"
          :xl="8"
          class="part animated bounceInDown delay-2s"
        >
          <router-view name="PartThree" class="img-aoqi"/>
        </el-col>
      </el-row>
      <!-- 第二行 -->
      <el-row>
        <el-col
          :xs="24"
          :sm="24"
          :md="8"
          :lg="8"
          :xl="8"
          class="part animated bounceInDown delay-3s"
        >
          <router-view name="PartFour" class="img-aoqi"/>
        </el-col>
        <el-col
          :xs="24"
          :sm="24"
          :md="8"
          :lg="8"
          :xl="8"
          class="part animated bounceInDown delay-4s"
        >
          <router-view name="PartFive" class="img-aoqi"/>
        </el-col>
        <el-col
          :xs="24"
          :sm="24"
          :md="4"
          :lg="4"
          :xl="4"
          class="part animated bounceInDown delay-5s"
        >
          <router-view name="PartSix" class="img-aoqi"/>
        </el-col>
        <el-col
          :xs="24"
          :sm="24"
          :md="4"
          :lg="4"
          :xl="4"
          class="part animated bounceInDown delay-5s"
        >
          <router-view name="PartSeven" class="img-aoqi"/>
        </el-col>
      </el-row>
    </div>
    <div v-else id="perspective">
      <img
        src="./assets/img/quxiao.png"
        class="img3"
        @click="go4"
        style="cursor: url('./static/ico/a.ico')16 16,auto;"
      >
      <div id="wrap">
        <div class="ss">
          <router-view name="PartOne"/>
        </div>
        <div class="ss">
          <router-view name="PartTwo"/>
        </div>
        <div class="ss">
          <router-view name="PartThree"/>
        </div>
        <div class="ss">
          <router-view name="PartFour"/>
        </div>
        <div class="ss">
          <router-view name="PartFive"/>
        </div>
        <div class="ss">
          <router-view name="PartSix"/>
        </div>
        <div class="ss">
          <router-view name="PartSeven"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      show: true,
      goway: false,
      bannerXSSM: require("./assets/img/banner_640.png"),
      bannerMD: require("./assets/img/banner_1000.png"),
      bannerLGXL: require("./assets/img/banner.png")
    };
  },
  mounted() {
    this.goWay();
    this.go1();
    this.go2();
    this.go3();
    this.go5();
  },
  methods: {
    go1() {
      !(function() {
        function o(w, v, i) {
          return w.getAttribute(v) || i;
        }
        function j(i) {
          return document.getElementsByTagName(i);
        }
        function l() {
          var i = j("script"),
            w = i.length,
            v = i[w - 1];
          return {
            l: w,
            z: o(v, "zIndex", -1),
            o: o(v, "opacity", 0.5),
            c: o(v, "color", "4,75,190"),
            n: o(v, "count", 99)
          };
        }
        function k() {
          (r = u.width =
            window.innerWidth ||
            document.documentElement.clientWidth ||
            document.body.clientWidth),
            (n = u.height =
              window.innerHeight ||
              document.documentElement.clientHeight ||
              document.body.clientHeight);
        }
        function b() {
          e.clearRect(0, 0, r, n);
          var w = [f].concat(t);
          var x, v, A, B, z, y;
          t.forEach(function(i) {
            (i.x += i.xa),
              (i.y += i.ya),
              (i.xa *= i.x > r || i.x < 0 ? -1 : 1),
              (i.ya *= i.y > n || i.y < 0 ? -1 : 1),
              e.fillRect(i.x - 0.5, i.y - 0.5, 1, 1);
            for (v = 0; v < w.length; v++) {
              x = w[v];
              if (i !== x && null !== x.x && null !== x.y) {
                (B = i.x - x.x), (z = i.y - x.y), (y = B * B + z * z);
                y < x.max &&
                  (x === f &&
                    y >= x.max / 2 &&
                    ((i.x -= 0.03 * B), (i.y -= 0.03 * z)),
                  (A = (x.max - y) / x.max),
                  e.beginPath(),
                  (e.lineWidth = A / 2),
                  (e.strokeStyle = "rgba(" + s.c + "," + (A + 0.2) + ")"),
                  e.moveTo(i.x, i.y),
                  e.lineTo(x.x, x.y),
                  e.stroke());
              }
            }
            w.splice(w.indexOf(i), 1);
          }),
            m(b);
        }
        var u = document.createElement("canvas"),
          s = l(),
          c = "c_n" + s.l,
          e = u.getContext("2d"),
          r,
          n,
          m =
            window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function(i) {
              window.setTimeout(i, 1000 / 45);
            },
          a = Math.random,
          f = {
            x: null,
            y: null,
            max: 20000
          };
        u.id = c;
        u.style.cssText =
          "position:fixed;top:0;left:0;z-index:" + s.z + ";opacity:" + s.o;
        j("body")[0].appendChild(u);
        k(), (window.onresize = k);
        (window.onmousemove = function(i) {
          (i = i || window.event), (f.x = i.clientX), (f.y = i.clientY);
        }),
          (window.onmouseout = function() {
            (f.x = null), (f.y = null);
          });
        for (var t = [], p = 0; s.n > p; p++) {
          var h = a() * r,
            g = a() * n,
            q = 2 * a() - 1,
            d = 2 * a() - 1;
          t.push({
            x: h,
            y: g,
            xa: q,
            ya: d,
            max: 6000
          });
        }
        setTimeout(function() {
          b();
        }, 100);
      })();
    },
    go2() {
      var a_idx = 0;
      jQuery(document).ready(function($) {
        $("body").click(function(e) {
          var a = new Array("大象~~", "你回来了", "动感光波", "滚来滚去");
          var $i = $("<span/>").text(a[a_idx]);
          a_idx = (a_idx + 1) % a.length;
          var x = e.pageX,
            y = e.pageY;
          $i.css({
            "z-index": 999999999999999999999999999999999999999999999999999999999999999999999,
            top: y - 20,
            left: x,
            position: "absolute",
            "font-weight": "bold",
            color: "#044bbe"
          });
          $("body").append($i);
          $i.animate(
            {
              top: y - 180,
              opacity: 0
            },
            1500,
            function() {
              $i.remove();
            }
          );
        });
      });
    },
    go3() {
      if (!this.$store.state.threejs) {
        let oImg = document.getElementsByClassName("ss");
        let oImglength = oImg.length;
        let deg = 360 / oImglength;
        window.onload = () => {
          let translateZ = 320;
          for (let i = 0; i < oImglength; i++) {
            let countDeg = deg * i;
            oImg[i].style.transform =
              "rotateY(" + countDeg + "deg) translateZ(" + translateZ + "px)";
            let delayTime = oImglength - i;
            oImg[i].style.transition = "1s " + delayTime * 0.1 + "s";
          }
        };
        let rotateX = 0;
        let rotateY = 0;
        document.onmousedown = function(e) {
          let oldX = e.clientX;
          let oldY = e.clientY;
          this.onmousemove = function(e) {
            let newX = e.clientX;
            let newY = e.clientY;
            let minusX = newX - oldX;
            let minusY = newY - oldY;
            rotateX -= minusY * 0.1;
            rotateY += minusX * 0.2;
            wrap.style.transform =
              "rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)";
            oldX = newX;
            oldY = newY;
            this.onmouseup = function(e) {
              this.onmousemove = null;
            };
          };
        };
      }
    },
    go4() {
      this.$store.commit("threejs");
    },
    go5(){
      function IsPC() {
        var userAgentInfo = navigator.userAgent;
        var Agents = ["Android", "iPhone",
                    "SymbianOS", "Windows Phone",
                    "iPad", "iPod"];
        var flag = true;
        for (var v = 0; v < Agents.length; v++) {
            if (userAgentInfo.indexOf(Agents[v]) > 0) {
                flag = false;
                break;
            }
        }
        return flag;
      }
        var flag = IsPC();//true为PC端，false为手机端和ipad 
        this.$store.commit('web',flag);
    },
    goWay() {
      setTimeout(() => {
        this.goway = true;
        setTimeout(() => {
          this.show = false;
        }, 1000);
      }, 6000);
    }
  }
};
</script>

<style>
#perspective {
  perspective: 800px; /*景深*/
}
.img3 {
  position: absolute;
  width: 50px;
  height: 50px;
  right: 5px;
  top: -145px;
}
#wrap {
  position: relative;
  width: 300px;
  height: 300px;
  /* border: 1px solid red; */
  margin: 150px auto;
  transform-style: preserve-3d; /*3d风格*/
}
.ss {
  width: 100%;
  position: absolute;
  box-shadow: 0 0 30px rgb(68, 0, 255);
}
body {
  background: #011128;
  color: #fff;
}
.app {
  width: 100%;
  height: 1000px;
}
.part {
  padding: 20px;
}
.banner img {
  width: 100%;
  height: 80px;
}
.div2 {
  position: relative;
  display: flex;
  justify-content: center;
  height: 80px;
}
.button2 {
  position: absolute;
  font-size: 40px;
  background: #011128;
  color: #044bbe;
  bottom: 0px;
}
p {
  text-align: center;
}
.img-aoqi {
  -webkit-transition: all ease-out 0.1s;
  -o-transition: all ease-out 0.1s;
  transition: all ease-out 0.1s;
  -ms-transition: all ease-out 0.1s;
}
.img-aoqi:hover {
  -webkit-transform: scale(1.08);
  -o-transform: scale(1.08);
  transform: scale(1.08);
  -ms-transform: scale(1.08);
}
</style>
