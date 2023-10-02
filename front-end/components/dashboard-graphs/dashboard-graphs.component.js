"use strict";

angular.module("component").component("dashboardGraph", {
  templateUrl: "components/dashboard-graphs/dashboard-graphs.template.html",
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
      ctrl.$onInit = function () {
        ctrl.initBarGraph();
        ctrl.initGuageGraph();
        window.addEventListener("resize", function () {
          ctrl.barGraphRps1.resize();
          ctrl.barGraphRps2.resize();
          ctrl.barGraphRps3.resize();
          ctrl.guageGraphRps1.resize();
          ctrl.guageGraphRps2.resize();
          ctrl.guageGraphRps3.resize();
        });
      };

      ctrl.initBarGraph = function () {
        ctrl.barGraphRps1 = echarts.init(document.getElementById("bar-rps-1"));

        ctrl.barGraphRps1.setOption({
          // title: {
          //   text: "ECharts Getting Started Example",
          // },
          tooltip: {},
          xAxis: {
            data: ["monday", "truesday", "wednesday", "thursday", "friday", "saturday", "sunday"],
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
        ctrl.barGraphRps2 = echarts.init(document.getElementById("bar-rps-2"));

        ctrl.barGraphRps2.setOption({
          // title: {
          //   text: "ECharts Getting Started Example",
          // },
          tooltip: {},
          xAxis: {
            data: ["monday", "truesday", "wednesday", "thursday", "friday", "saturday", "sunday"],
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

        ctrl.barGraphRps3 = echarts.init(document.getElementById("bar-rps-3"));

        ctrl.barGraphRps3.setOption({
          // title: {
          //   text: "ECharts Getting Started Example",
          // },
          tooltip: {},
          xAxis: {
            data: ["monday", "truesday", "wednesday", "thursday", "friday", "saturday", "sunday"],
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
          document.getElementById("guage-rps-1")
        );

        ctrl.guageGraphRps1.setOption({
          series: [
            {
              type: 'gauge',
              axisLine: {
                lineStyle: {
                  width: 10,
                  color: [
                    [0.5, '#67e0e3'],
                    [0.9, '#37a2da'],
                    [1, '#fd666d'],
                    
                  ]
                }
              },
              pointer: {
                itemStyle: {
                  color: 'auto'
                }
              },
              axisTick: {
                distance: -10,
                length: 10,
                lineStyle: {
                  color: '#fff',
                  width: 2
                }
              },
              splitLine: {
                distance: -10,
                length: 30,
                lineStyle: {
                  color: '#fff',
                  width: 4
                }
              },
              axisLabel: {
                color: 'inherit',
                distance: -40,
                fontSize: 15
              },
              detail: {
                valueAnimation: true,
                formatter: '{value} km/h',
                fontSize: 30,
                color: 'inherit',
                offsetCenter: [0, '125%']
              },
              data: [
                {
                  value: 70
                }
              ]
            }
          ],
        });

        ctrl.guageGraphRps2 = echarts.init(
          document.getElementById("guage-rps-2")
        );

        ctrl.guageGraphRps2.setOption({
          series: [
            {
              type: 'gauge',
              axisLine: {
                lineStyle: {
                  width: 10,
                  color: [
                    [0.5, '#67e0e3'],
                    [0.9, '#37a2da'],
                    [1, '#fd666d'],
                    
                  ]
                }
              },
              pointer: {
                itemStyle: {
                  color: 'auto'
                }
              },
              axisTick: {
                distance: -10,
                length: 10,
                lineStyle: {
                  color: '#fff',
                  width: 2
                }
              },
              splitLine: {
                distance: -10,
                length: 30,
                lineStyle: {
                  color: '#fff',
                  width: 4
                }
              },
              axisLabel: {
                color: 'inherit',
                distance: -40,
                fontSize: 15
              },
              detail: {
                valueAnimation: true,
                formatter: '{value} km/h',
                fontSize: 30,
                color: 'inherit',
                offsetCenter: [0, '125%']
              },
              data: [
                {
                  value: 70
                }
              ]
            }
          ],
        });

        ctrl.guageGraphRps3 = echarts.init(
          document.getElementById("guage-rps-3")
        );

        ctrl.guageGraphRps3.setOption({
          series: [
            {
              type: 'gauge',
              axisLine: {
                lineStyle: {
                  width: 10,
                  color: [
                    [0.5, '#67e0e3'],
                    [0.9, '#37a2da'],
                    [1, '#fd666d'],
                    
                  ]
                }
              },
              pointer: {
                itemStyle: {
                  color: 'auto'
                }
              },
              axisTick: {
                distance: -10,
                length: 10,
                lineStyle: {
                  color: '#fff',
                  width: 2
                }
              },
              splitLine: {
                distance: -10,
                length: 30,
                lineStyle: {
                  color: '#fff',
                  width: 4
                }
              },
              axisLabel: {
                color: 'inherit',
                distance: -40,
                fontSize: 15
              },
              detail: {
                valueAnimation: true,
                formatter: '{value} km/h',
                fontSize: 30,
                color: 'inherit',
                offsetCenter: [0, '125%']
              },
              data: [
                {
                  value: 70
                }
              ]
            }
          ],
        });
      };
    },
  ],
});
