'use strict';

angular.module('andrewDesmaraisApp.experience', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/experience', {
    templateUrl: 'experience/experience.html',
    controller: 'experienceController'
  });
}])

.controller('experienceController', [function() {

}]);