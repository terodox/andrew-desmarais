'use strict';

angular.module('andrewDesmaraisApp.recommendations', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/recommendations', {
    templateUrl: 'recommendations/recommendations.html',
    controller: 'recommendationsController'
  });
}])

.controller('recommendationsController', [function() {

}]);