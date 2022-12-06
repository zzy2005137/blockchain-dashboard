<template lang="">
  <div id="main"></div>
</template>
<script>
import * as echarts from "echarts";

export default {
  data() {
    return {
      option: {
        title: {
          text: "剩余完工时间预测",
          left: "center",
        },
        xAxis: {
          type: "category",
          data: [
            "12-5",
            "12-6",
            "12-7",
            "12-8",
            "12-9",
            "12-10",
            "12-11",
            "12-12",
          ],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [260, 210, 230, 200, 185, 160, 114, 90, 96, 70, 75, 60, 30],
            type: "line",
          },
        ],
      },
    };
  },
  methods: {
    drawLine() {
      var chartDom = document.getElementById("main");
      var myChart = echarts.init(chartDom);
      this.option && myChart.setOption(this.option);
      //图表大小跟随容器变化
      window.onresize = function () {
        myChart.resize();
      };
    },
  },
  mounted() {
    this.drawLine();
  },
};
</script>
<style>
#main {
  width: 100%;
  height: 450px;
  margin-top: 2rem;
}
</style>
