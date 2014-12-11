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
    //$httpProvider.defaults.headers.common['X-Token'] = 'ee977806d7286510da8b9a7492ba58e2484c0ecc';
}])
.run(['$rootScope','$http',function($rootScope,$http) {
  $http.defaults.headers.common['X-Token'] = 'ee977806d7286510da8b9a7492ba58e2484c0ecc';
}])