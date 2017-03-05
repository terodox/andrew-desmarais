'use strict';

angular.module('andrewDesmaraisApp.summary', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/summary', {
    templateUrl: 'summary/summary.html',
    controller: 'summaryController'
  });
}])

.controller('summaryController', [function() {

}]);