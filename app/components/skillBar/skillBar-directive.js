'use strict';

angular.module('andrewDesmaraisApp.skillBar-directive', [])

    .directive('skillBar', function() {
        return {
            restrict: "E",
            scope: {
                value: "@",
                name: "@"
            },
            templateUrl: "components/skillBar/skillBar.html"
        }
    });
