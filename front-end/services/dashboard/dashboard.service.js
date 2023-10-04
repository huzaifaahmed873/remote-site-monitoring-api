'use strict';

function DashboardService($rootScope, $http, API_URL) {
  return {
    get: function () {
      return $http({
        method: 'POST',
        url: API_URL + '/values/flowRate1'
      });
    },

    
  };
}

angular.module('core').factory('DashboardService', DashboardService);