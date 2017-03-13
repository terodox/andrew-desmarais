'use strict';

angular.module('andrewDesmaraisApp.recommendations', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/recommendations', {
    templateUrl: 'recommendations/recommendations.html',
    controller: 'recommendationsController'
  });
}])

.controller('recommendationsController', [function() {
  this.recommendedMe = [
      {
          name: "Brain Morin",
          title: "Software Engineer",
          recommendationBody: "As the technical lead for APIs, Andrew demonstrated the ability to effectively communicate with those above and below his position in the organizational structure. He has an outstanding, deep knowledge of AWS. Andrew's desire to write high value code is the strongest I can recall. Once he knows there is a new feature customers want, his mission becomes to implement that feature. He often makes solving complex problems look easy. He gives and takes constructive criticism during code reviews professionally and his willingness to do so benefits everyone around him. Andrew's commitment to automated testing ensures he and his teammates spend time writing new code, not fixing regressions. Andrew is someone who deeply cares about his work and is not someone who simply works for the paycheck. His abilities across server, web, and mobile prove that he can succeed in any technical stack."
      },
      {
          name: "James Milillo",
          title: "Principal Software Engineer",
          recommendationBody: "Andy is a diligent worker. He is extremely passionate about writing clean, maintainable code. Following Scrum guidelines, Andy prefers being on a team that takes ownership of product functionality from start to finish. Any company would benefit from having Andy as part of their team."
      },
      {
          name: "Doug Domeny",
          title: "Principal Software Engineer",
          recommendationBody: "Andy brings energy and drive toward developing state-of-the-art solutions. He learns quickly and has attained a high level of competency in AWS and a broad number of other technologies. Andy gives leadership and direction to the team and stays focused on the real problem. He communicates clearly and collaborates effectively."
      },
      {
          name: "David Underwood",
          title: "Business System Analyst",
          recommendationBody: "Andrew is one of the most dedicated lead developers I have ever had the pleasure of working with. He is always looking to solve a problem for the long term and is the first to volunteer for the most challenging projects. Beyond his technical expertise Andrew has the kind of personality that brings out the best in others. I would not hesitate to hire him and hope to have the opportunity to work with him again."
      }
  ]
}]);