"use strict";

angular.module("component").component("dashboard", {
  templateUrl: "components/dashboard/dashboard.template.html",
  controller: [
    "$scope",
    "$location",
    "$routeParams",
    "$rootScope",
    // "RevenueService",
    "DashboardService",
    "Constant",
    function DashboardController(
      $scope,
      $location,
      $routeParams,
      $rootScope,
      // RevenueService,
      DashboardService,
      Constant
    ) {
      var ctrl = this;
      
      ctrl.$onInit = function () {
        
      };

      
    },
  ],
});
