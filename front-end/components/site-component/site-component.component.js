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
      
      ctrl.barGraph;
      ctrl.guageGraph;
      ctrl.$onInit = function () {
        ctrl.initBarGraph();
        ctrl.initGuageGraph();
      };

      ctrl.initBarGraph = function(){
        ctrl.barGraph = echarts.init(document.getElementById('bar'));

        ctrl.barGraph.setOption({
          title: {
            text: 'ECharts Getting Started Example'
          },
          tooltip: {},
          xAxis: {
            data: ['shirt', 'cardigan', 'chiffon', 'pants', 'heels', 'socks']
          },
          yAxis: {},
          series: [
            {
              name: 'sales',
              type: 'bar',
              data: [5, 20, 36, 10, 10, 20]
            }
          ]
        });
      }
      
      ctrl.initGuageGraph = function(){
        ctrl.guageGraph = echarts.init(document.getElementById('guage'));

        ctrl.guageGraph.setOption({
          series: [
            {
              type: 'gauge',
              center: ['50%', '70%'],
              startAngle: 200,
              endAngle: -20,
              min: 0,
              max: 100,
              splitNumber: 10,
              itemStyle: {
                color: '#FFAB91'
              },
              progress: {
                show: true,
                width: 20
              },
              pointer: {
                show: false
              },
              axisLine: {
                lineStyle: {
                  width: 20
                }
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
                  show: false
                }
                // show: false
                // show: false
              },
              axisLabel: {
                distance: -20,
                color: '#999',
                fontSize: 12
              },
              anchor: {
                show: false
              },
              title: {
                show: false
              },
              detail: {
                valueAnimation: true,
                width: '30%',
                lineHeight: 20,
                borderRadius: 4,
                offsetCenter: [0, '-15%'],
                fontSize: 30,
                fontWeight: 'bold',
                formatter: '{value}',
                color: 'inherit'
              },
              data: [
                {
                  value: 70
                }
              ]
            },
            {
              type: 'gauge',
              center: ['50%', '70%'],
              startAngle: 200,
              endAngle: -20,
              min: 0,
              max: 100,
              itemStyle: {
                color: 'red'
              },
              progress: {
                show: true,
                width: 8
              },
              pointer: {
                show: false
              },
              axisLine: {
                show: false
              },
              axisTick: {
                show: false
              },
              splitLine: {
                show: false
              },
              axisLabel: {
                show: false
              },
              detail: {
                show: false
              },
              data: [
                {
                  value: 70
                }
              ]
            }
          ]
        })
      }
      
    },
  ],
});
