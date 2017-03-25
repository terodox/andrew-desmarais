'use strict';

// Declare app level module which depends on views, and components
angular.module('andrewDesmaraisApp', [
    'ngRoute',
    // Pages
    'andrewDesmaraisApp.education',
    'andrewDesmaraisApp.experience',
    'andrewDesmaraisApp.home',
    'andrewDesmaraisApp.summary',
    'andrewDesmaraisApp.recommendations',

    //Components
    'andrewDesmaraisApp.skillBar',
    'andrewDesmaraisApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');
    $routeProvider.otherwise({redirectTo: '/home'});
}]);
