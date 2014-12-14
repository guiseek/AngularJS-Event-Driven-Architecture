var app = angular.module('app',[
  'ui.router'
])
.config(['$stateProvider','$urlRouterProvider','$httpProvider',function($stateProvider,$urlRouterProvider,$httpProvider) {
  $urlRouterProvider.otherwise("/home");
  $stateProvider
    .state('home', {
      url: "/home",
      templateUrl: "modules/home/index.html"
    })
    .state('user', {
      url: "/user",
      templateUrl: "modules/user/index.html"
    });
}])
.run(['$http',function($http) {
}])