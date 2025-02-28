"use strict";

angular.module("component").component("dashboardGraph", {
  templateUrl: "components/dashboard-graphs/dashboard-graphs.template.html",
  controller: [
    "$scope",
    "$location",
    "$routeParams",
    "$rootScope",
    // "RevenueService",
    "$interval",
    "DashboardService",
    "UserService",
    "Constant",
    function DashboardGraphController(
      $scope,
      $location,
      $routeParams,
      $rootScope,
      // RevenueService,
      $interval,
      DashboardService,
      UserService,
      Constant
    ) {
      var ctrl = this;

      ctrl.myInterval = $interval(function() {
        // Code to be executed periodically
        console.log('Interval is running...');
        ctrl.initDashboardData();
      }, 1000); // Runs every 1000 milliseconds (1 second)
    
      // Detect when the view is destroyed
      $scope.$on('$destroy', function() {
        // Clear the interval when the view is changed or destroyed
        $interval.cancel(ctrl.myInterval);
      });
      ctrl.barGraphRps1;
      ctrl.barGraphRps2;
      ctrl.barGraphRps3;
      ctrl.guageGraphRps1;
      ctrl.guageGraphRps1;
      ctrl.guageGraphRps1;
      ctrl.authUser;
      ctrl.$onInit = function () {
        ctrl.authUser = JSON.parse(localStorage.getItem("user"));
        console.log(ctrl.authUser);
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
            data: ["monday", "truesday", "wednesday", "thursday", "friday"],
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
            data: ["monday", "truesday", "wednesday", "thursday", "friday"],
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
            data: ["monday", "truesday", "wednesday", "thursday", "friday"],
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
              type: "gauge",
              axisLine: {
                lineStyle: {
                  width: 10,
                  color: [
                    [0.5, "#719415"],
                    [0.9, "#D1BF09"],
                    [1, "#E50E0E"],
                  ],
                },
              },
              
              max: 200,
              splitNumber: 2,
              pointer: {
                itemStyle: {
                  color: "auto",
                },
              },
              axisTick: {
                distance: -10,
                length: 10,
                lineStyle: {
                  color: "#fff",
                  width: 2,
                },
              },
              splitLine: {
                distance: -10,
                length: 20,
                lineStyle: {
                  color: "#fff",
                  width: 2,
                },
              },
              axisLabel: {
                color: "inherit",
                distance: -40,
                fontSize: 15,
              },
              detail: {
                valueAnimation: true,
                formatter: "{value}",
                fontSize: 30,
                color: "inherit",
                offsetCenter: [0, "125%"],
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
          document.getElementById("guage-rps-2")
        );

        ctrl.guageGraphRps2.setOption({
          series: [
            {
              type: "gauge",
              axisLine: {
                lineStyle: {
                  width: 10,
                  color: [
                    [0.5, "#719415"],
                    [0.9, "#D1BF09"],
                    [1, "#E50E0E"],
                  ],
                },
              },
              
              max: 200,
              splitNumber: 2,
              pointer: {
                itemStyle: {
                  color: "auto",
                },
              },
              axisTick: {
                distance: -10,
                length: 10,
                lineStyle: {
                  color: "#fff",
                  width: 2,
                },
              },
              splitLine: {
                distance: -10,
                length: 20,
                lineStyle: {
                  color: "#fff",
                  width: 2,
                },
              },
              axisLabel: {
                color: "inherit",
                distance: -40,
                fontSize: 15,
              },
              detail: {
                valueAnimation: true,
                formatter: "{value}",
                fontSize: 30,
                color: "inherit",
                offsetCenter: [0, "125%"],
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
          document.getElementById("guage-rps-3")
        );

        ctrl.guageGraphRps3.setOption({
          series: [
            {
              type: "gauge",
              axisLine: {
                lineStyle: {
                  width: 10,
                  color: [
                    [0.5, "#719415"],
                    [0.9, "#D1BF09"],
                    [1, "#E50E0E"],
                  ],
                },
              },
              
              max: 200,
              splitNumber: 2,
              pointer: {
                itemStyle: {
                  color: "auto",
                },
              },
              axisTick: {
                distance: -10,
                length: 10,
                lineStyle: {
                  color: "#fff",
                  width: 2,
                },
              },
              splitLine: {
                distance: -10,
                length: 20,
                lineStyle: {
                  color: "#fff",
                  width: 2,
                },
              },
              axisLabel: {
                color: "inherit",
                distance: -40,
                fontSize: 15,
              },
              detail: {
                valueAnimation: true,
                formatter: "{value}",
                fontSize: 30,
                color: "inherit",
                offsetCenter: [0, "125%"],
              },
              data: [
                {
                  value: 0,
                },
              ],
            },
          ],
        });
      };

      ctrl.initDashboardData = function(){
        DashboardService.getFlowRate1().then(
          function success(response){
            console.log(response.data[response.data.length - 1].value);
            let flow_rate_value = response.data[response.data.length - 1].value.toFixed(2) ;
            ctrl.guageGraphRps1.setOption({
              series: [
                {
                  data: [{ value: flow_rate_value }],
                },
              ],
            })
          },
          function error(response){
            console.log(response);
          }
        )

        DashboardService.getFlowRate2().then(
          function success(response){
            console.log(response.data[response.data.length - 1].value);
            let flow_rate_value = response.data[response.data.length - 1].value.toFixed(2) ;
            ctrl.guageGraphRps2.setOption({
              series: [
                {
                  data: [{ value: flow_rate_value }],
                },
              ],
            })
          },
          function error(response){
            console.log(response);
          }
        )
      }
    },
  ],
});
