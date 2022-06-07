<template>
  <div class="dashboard-container">
    <el-row>
      <el-col :span="10">
        <div class="dashboard-text" id="map"></div>
      </el-col>
      <el-col :span="11" offset="1">
        <!-- 当前单位信息 -->
        <el-descriptions
          class="margin-top"
          title="当前用户信息"
          :column="1"
          :size="size"
          border
        >
          <el-descriptions-item
            v-for="(value, key) in org"
            :key="key"
            class="text item"
          >
            <template slot="label"> {{ key }} </template>
            {{ value }}
          </el-descriptions-item>
        </el-descriptions>
        <!-- END 当前单位信息 -->
      </el-col>
    </el-row>
  </div>
</template>

<script>
// Echarts
import * as echarts from "echarts";
import SC from "./jiangsuMap.js";

export default {
  name: "Dashboard",
  data() {
    return {
      org: {
        当前机构: "南京检测中心",
        节点数: "1",
        证书信息:
          "baca0e6b14193e2e6ee7516947613eb161937e4c58ed44f513760bba484038b7_sk",
        用户名: "用户1-南京",
        私钥生成时间: "2022-05-31 10:18:53.762868598 +0800 CST",
      },
    };
  },
  computed: {
    // ...mapGetters(["name"]),
  },
  methods: {
    drawMap() {
      echarts.registerMap("SC", SC);
      let Chart = echarts.init(document.getElementById("map"));
      // 颜色或文字的配置
      let option = {
        title: {
          text: "江苏省电力物资检测中心分布图",
          // subtext: "1 + 3 + N",
          left: "center",
        },
        geo: {
          type: "map",
          aspectScale: 1, // 横向拉伸
          roam: true, // 地图操作 开启缩放或者平移，可以设置成 'scale' 或者 'move'。
          map: "SC",
          label: {
            show: true,
            normal: {
              show: true, // 默认地图文字字号和字体颜色
              fontSize: 10,
              color: "#ffffff",
            },
            emphasis: {
              show: true,
              fontSize: 10, // 选中地图文字字号和字体颜色
              color: "#CFCFCF",
            },
          },
          itemStyle: {
            normal: {
              areaColor: "skyblue", //地图本身的颜色
              borderColor: "white", //省份边框颜色
              borderWidth: 1, // 省份边框宽度
              opacity: 1, //图形透明度
            },
            emphasis: {
              areaColor: "#040c3c", // 高亮时候地图显示的颜色
              borderWidth: 0, // 高亮时的边框宽度
            },
          },
          textFixed: {
            Alaska: [20, -20],
          },
        },
        series: [
          {
            type: "effectScatter",
            coordinateSystem: "geo",
            symbolSize: 12,
            label: {
              normal: {
                show: false,
              },
              emphasis: {
                show: false,
              },
            },
            itemStyle: {
              normal: {
                shadowBlur: 10,
                color: "#00ECC8",
              },
              emphasis: {
                borderColor: "#fff",
                borderWidth: 1,
              },
            },
          },
          {
            // 定位点
            type: "effectScatter",
            coordinateSystem: "geo",
            geoIndex: 0,
            symbolSize: function (params) {
              return (params[2] / 100) * 15;
            },
            symbol: "circle",
            itemStyle: {
              color: "#0E436D",
            },
            encode: {
              tooltip: 2,
            },
            data: [
              [118.767413, 32.041544, 100],
              [120.619585, 31.299379, 100],
              [119.915176, 32.484882, 100],
              [117.184811, 34.261792, 100],
            ],
          },
          {
            // 定位点
            type: "effectScatter",
            coordinateSystem: "geo",
            geoIndex: 0,
            symbolSize: function (params) {
              return (params[2] / 100) * 15;
            },
            symbol: "circle",
            itemStyle: {
              color: "green",
            },
            encode: {
              tooltip: 2,
            },
            data: [[118.767413, 32.041544, 120]],
          },
        ],
      };
      Chart.setOption(option);
    },
  },
  mounted() {
    this.drawMap();
  },
};
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
#map {
  width: 700px;
  height: 700px;
  margin: 0 auto;
}
</style>
