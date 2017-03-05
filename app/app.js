'use strict';

// Declare app level module which depends on views, and components
angular.module('andrewDesmaraisApp', [
    'ngRoute',
    'andrewDesmaraisApp.education',
    'andrewDesmaraisApp.experience',
    'andrewDesmaraisApp.summary',
    'andrewDesmaraisApp.recommendations',
    'andrewDesmaraisApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');
    $routeProvider.otherwise({redirectTo: '/summary'});
}]);
