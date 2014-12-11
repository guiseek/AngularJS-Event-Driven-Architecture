var app = angular.module('app',[
  'ui.router'
])
.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider) {
  $urlRouterProvider.otherwise("/home");
  $stateProvider
    .state('user', {
      url: "/user",
      templateUrl: "modules/user/index.html"
    })
}])
.run(['$rootScope','$http',function($rootScope,$http) {
  $http.defaults.headers.common['X-Token'] = 'ee977806d7286510da8b9a7492ba58e2484c0ecc';
}])