"use strict";

angular.module("component").component("site", {
  templateUrl: "components/site-component/site-component.template.html",
  controller: [
    "$scope",
    "$location",
    "$routeParams",
    "$rootScope",
    // "RevenueService",
    // "DashboardService",
    "UserService",
    "Constant",
    function DashboardGraphController(
      $scope,
      $location,
      $routeParams,
      $rootScope,
      // RevenueService,
      // DashboardService,
      UserService,
      Constant
    ) {
      var ctrl = this;

      ctrl.barGraphRps1;
      ctrl.barGraphRps2;
      ctrl.barGraphRps3;
      ctrl.guageGraphRps1;
      ctrl.guageGraphRps1;
      ctrl.guageGraphRps1;
      ctrl.lineGraphSkid1;
      ctrl.lineGraphSkid2;
      ctrl.lineGraphSkid3;
      ctrl.indicators = [
        {
          state: 0,
          style: {
            top: "144px",
            left: "421px",
          }
        },
        {
          state: 1,
          style: {
            top: "240px",
            left: "422px",
          }
        },
        {
          state: 2,
          style: {
            top: "336px",
            left: "427px",
          }
        },
        {
          state: 0,
          style: {
            top: "150px",
            left: "663px",
          }
        },
        {
          state: 1,
          style: {
            top: "242px",
            left: "662px",
          }
        },
        {
          state: 2,
          style: {
            top: "338px",
            left: "663px",
          }
        },
        {
          state: 0,
          style: {
            top: "530px",
            left: "398px",
          }
        },
        {
          state: 1,
          style: {
            top: "530px",
            left: "428px",
          }
        },
        {
          state: 2,
          style: {
            top: "530px",
            left: "457px",
          }
        },
        {
          state: 0,
          style: {
            top: "530px",
            left: "488px",
          }
        },
      ];
      ctrl.$onInit = function () {
        ctrl.initBarGraph();
        ctrl.initGuageGraph();
        ctrl.initLineGraph();
        console.log(ctrl.indicators);
        window.addEventListener("resize", function () {
          ctrl.barGraphRps1.resize();
          ctrl.barGraphRps2.resize();
          ctrl.barGraphRps3.resize();
          ctrl.guageGraphRps1.resize();
          ctrl.guageGraphRps2.resize();
          ctrl.guageGraphRps3.resize();
          ctrl.lineGraphSkid1.resize();
          ctrl.lineGraphSkid2.resize();
          ctrl.lineGraphSkid3.resize();
        });
      };

      ctrl.initBarGraph = function () {
        ctrl.barGraphRps1 = echarts.init(document.getElementById("bar-skid-1"));

        ctrl.barGraphRps1.setOption({
          title: {
            text: "ECharts Getting Started Example",
          },
          tooltip: {},
          xAxis: {
            data: ["shirt", "cardigan", "chiffon", "pants", "heels", "socks"],
          },
          yAxis: {},
          series: [
            {
              name: "sales",
              type: "bar",
              data: [5, 20, 36, 10, 10, 20],
            },
          ],
        });
        ctrl.barGraphRps2 = echarts.init(document.getElementById("bar-skid-2"));

        ctrl.barGraphRps2.setOption({
          title: {
            text: "ECharts Getting Started Example",
          },
          tooltip: {},
          xAxis: {
            data: ["shirt", "cardigan", "chiffon", "pants", "heels", "socks"],
          },
          yAxis: {},
          series: [
            {
              name: "sales",
              type: "bar",
              data: [5, 20, 36, 10, 10, 20],
            },
          ],
        });

        ctrl.barGraphRps3 = echarts.init(document.getElementById("bar-skid-3"));

        ctrl.barGraphRps3.setOption({
          title: {
            text: "ECharts Getting Started Example",
          },
          tooltip: {},
          xAxis: {
            data: ["shirt", "cardigan", "chiffon", "pants", "heels", "socks"],
          },
          yAxis: {},
          series: [
            {
              name: "sales",
              type: "bar",
              data: [5, 20, 36, 10, 10, 20],
            },
          ],
        });
      };

      ctrl.initGuageGraph = function () {
        ctrl.guageGraphRps1 = echarts.init(
          document.getElementById("guage-skid-1")
        );

        ctrl.guageGraphRps1.setOption({
          series: [
            {
              type: "gauge",
              center: ["50%", "70%"],
              startAngle: 200,
              endAngle: -20,
              min: 0,
              max: 100,
              splitNumber: 10,
              itemStyle: {
                color: "#FFAB91",
              },
              progress: {
                show: true,
                width: 20,
              },
              pointer: {
                show: false,
              },
              axisLine: {
                lineStyle: {
                  width: 20,
                },
              },
              axisTick: {
                // distance: -45,
                // splitNumber: 5,
                // lineStyle: {
                //   width: 2,
                //   color: '#999'
                // }
                show: false,
              },
              splitLine: {
                distance: 0,
                length: 0,
                lineStyle: {
                  // width: 0,
                  // color: '#999'
                  show: false,
                },
                // show: false
                // show: false
              },
              axisLabel: {
                distance: -20,
                color: "#999",
                fontSize: 12,
              },
              anchor: {
                show: false,
              },
              title: {
                show: false,
              },
              detail: {
                valueAnimation: true,
                width: "30%",
                lineHeight: 20,
                borderRadius: 4,
                offsetCenter: [0, "-15%"],
                fontSize: 30,
                fontWeight: "bold",
                formatter: "{value}",
                color: "inherit",
              },
              data: [
                {
                  value: 70,
                },
              ],
            },
            {
              type: "gauge",
              center: ["50%", "70%"],
              startAngle: 200,
              endAngle: -20,
              min: 0,
              max: 100,
              itemStyle: {
                color: "red",
              },
              progress: {
                show: true,
                width: 8,
              },
              pointer: {
                show: false,
              },
              axisLine: {
                show: false,
              },
              axisTick: {
                show: false,
              },
              splitLine: {
                show: false,
              },
              axisLabel: {
                show: false,
              },
              detail: {
                show: false,
              },
              data: [
                {
                  value: 70,
                },
              ],
            },
          ],
        });

        ctrl.guageGraphRps2 = echarts.init(
          document.getElementById("guage-skid-2")
        );

        ctrl.guageGraphRps2.setOption({
          series: [
            {
              type: "gauge",
              center: ["50%", "70%"],
              startAngle: 200,
              endAngle: -20,
              min: 0,
              max: 100,
              splitNumber: 10,
              itemStyle: {
                color: "#FFAB91",
              },
              progress: {
                show: true,
                width: 20,
              },
              pointer: {
                show: false,
              },
              axisLine: {
                lineStyle: {
                  width: 20,
                },
              },
              axisTick: {
                // distance: -45,
                // splitNumber: 5,
                // lineStyle: {
                //   width: 2,
                //   color: '#999'
                // }
                show: false,
              },
              splitLine: {
                distance: 0,
                length: 0,
                lineStyle: {
                  // width: 0,
                  // color: '#999'
                  show: false,
                },
                // show: false
                // show: false
              },
              axisLabel: {
                distance: -20,
                color: "#999",
                fontSize: 12,
              },
              anchor: {
                show: false,
              },
              title: {
                show: false,
              },
              detail: {
                valueAnimation: true,
                width: "30%",
                lineHeight: 20,
                borderRadius: 4,
                offsetCenter: [0, "-15%"],
                fontSize: 30,
                fontWeight: "bold",
                formatter: "{value}",
                color: "inherit",
              },
              data: [
                {
                  value: 70,
                },
              ],
            },
            {
              type: "gauge",
              center: ["50%", "70%"],
              startAngle: 200,
              endAngle: -20,
              min: 0,
              max: 100,
              itemStyle: {
                color: "red",
              },
              progress: {
                show: true,
                width: 8,
              },
              pointer: {
                show: false,
              },
              axisLine: {
                show: false,
              },
              axisTick: {
                show: false,
              },
              splitLine: {
                show: false,
              },
              axisLabel: {
                show: false,
              },
              detail: {
                show: false,
              },
              data: [
                {
                  value: 70,
                },
              ],
            },
          ],
        });

        ctrl.guageGraphRps3 = echarts.init(
          document.getElementById("guage-skid-3")
        );

        ctrl.guageGraphRps3.setOption({
          series: [
            {
              type: "gauge",
              center: ["50%", "70%"],
              startAngle: 200,
              endAngle: -20,
              min: 0,
              max: 100,
              splitNumber: 10,
              itemStyle: {
                color: "#FFAB91",
              },
              progress: {
                show: true,
                width: 20,
              },
              pointer: {
                show: false,
              },
              axisLine: {
                lineStyle: {
                  width: 20,
                },
              },
              axisTick: {
                // distance: -45,
                // splitNumber: 5,
                // lineStyle: {
                //   width: 2,
                //   color: '#999'
                // }
                show: false,
              },
              splitLine: {
                distance: 0,
                length: 0,
                lineStyle: {
                  // width: 0,
                  // color: '#999'
                  show: false,
                },
                // show: false
                // show: false
              },
              axisLabel: {
                distance: -20,
                color: "#999",
                fontSize: 12,
              },
              anchor: {
                show: false,
              },
              title: {
                show: false,
              },
              detail: {
                valueAnimation: true,
                width: "30%",
                lineHeight: 20,
                borderRadius: 4,
                offsetCenter: [0, "-15%"],
                fontSize: 30,
                fontWeight: "bold",
                formatter: "{value}",
                color: "inherit",
              },
              data: [
                {
                  value: 70,
                },
              ],
            },
            {
              type: "gauge",
              center: ["50%", "70%"],
              startAngle: 200,
              endAngle: -20,
              min: 0,
              max: 100,
              itemStyle: {
                color: "red",
              },
              progress: {
                show: true,
                width: 8,
              },
              pointer: {
                show: false,
              },
              axisLine: {
                show: false,
              },
              axisTick: {
                show: false,
              },
              splitLine: {
                show: false,
              },
              axisLabel: {
                show: false,
              },
              detail: {
                show: false,
              },
              data: [
                {
                  value: 70,
                },
              ],
            },
          ],
        });
      };

      ctrl.initLineGraph = function () {
        const hoursInDay = Array.from({ length: 24 }, (_, index) => {
          const hour = index % 12 || 12; // Convert 0 to 12 for AM/PM
          const period = index < 12 ? "AM" : "PM";
          return `${hour}:00 ${period}`;
        });
        let value = [0, 1];
        ctrl.lineGraphSkid1 = echarts.init(
          document.getElementById("line-skid-1")
        );

        ctrl.lineGraphSkid1.setOption({
          xAxis: {
            type: "category",
            data: hoursInDay,
          },
          yAxis: {
            type: "value",
            data: value,
          },
          series: [
            {
              data: [0.5, 0.1, 0.7, 0, 0, 0.3, 0.8],
              type: "line",
            },
          ],
        });

        ctrl.lineGraphSkid3 = echarts.init(
          document.getElementById("line-skid-3")
        );

        ctrl.lineGraphSkid3.setOption({
          xAxis: {
            type: "category",
            data: hoursInDay,
          },
          yAxis: {
            type: "value",
          },
          series: [
            {
              data: [150, 230, 224, 218, 135, 147, 260],
              type: "line",
            },
          ],
        });

        ctrl.lineGraphSkid2 = echarts.init(
          document.getElementById("line-skid-2")
        );

        ctrl.lineGraphSkid2.setOption({
          xAxis: {
            type: "category",
            data: hoursInDay,
          },
          yAxis: {
            type: "value",
          },
          series: [
            {
              data: [150, 230, 224, 218, 135, 147, 260],
              type: "line",
            },
          ],
        });
      };
    },
  ],
});
