'use strict';

angular.module('andrewDesmaraisApp.experience', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/experience', {
    templateUrl: 'experience/experience.html',
    controller: 'experienceController'
  });
}])

.controller('experienceController', [function() {
  this.experience = [
      {
          company: "Newforma",
          title: "Principal Engineer/Technical Lead",
          fromDateString: "September 2014",
          toDateString: "Present",
          summary: "Lead a team to develop and maintain software including, but not limited to, C# based APIs, AngularJs based website, NodeJs and Java based AWS lambda functions.",
          results: [
              "Pioneered Amazon AWS for hosting new cloud offering.",
              "Pushed for use of serverless technologies for higher reliability and scalability.",
              "Introduced event based architectural designs allowing for a more responsive user experience.",
              "Promoted best practices throughout the organization creating an atmosphere focused on delivering high quality software quickly.",
              "Lead team to create highly available APIs while maintaining high velocity",
              "Nominated for every Über performance award offered at Newforma (4 quarters)"
          ]
      },
      {
          company: "CustomScoop",
          title: "Director of Web Development/Senior Full Stack Developer",
          fromDateString: "2006",
          toDateString: "September 2014",
          summary: "Develop and maintain software-as-a-service suite that facilitates the finding, management and reporting of keyword matches. Work to create flexible and scalable solutions allowing for continuous growth and prosperity of the company as a whole.",
          results: [
              "Helped to expand the overall capacity of spidering technology from 400 thousand pages a day to over 2 million.",
              "Helped manage SQL environment processing over 2000 transactions a second with three primary tables growing to over 180 million rows each.",
              "Worked to develop a modular code base allowing for faster debugging and QA cycle."
          ]
      },
      {
          company: "Skillsoft LLC",
          title: "Hosting Engineer/Application Engineer",
          fromDateString: "2004",
          toDateString: "2006",
          summary: "Racked and configured servers to facilitate the expanding customer base while maintaining a high level of stability throughout the product. Worked with development team to implement and maintain processes ensuring the continued high level of uptime.",
          results: [
              "Worked with a team to ensure the high level of uptime and availability all hardware and software required for SkillSoft’s e-learning application."
          ]
      }
  ];
}]);