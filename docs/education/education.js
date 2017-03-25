'use strict';

angular.module('andrewDesmaraisApp.education', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/education', {
    templateUrl: 'education/education.html',
    controller: 'educationController'
  });
}])

.controller('educationController', [function() {

}]);