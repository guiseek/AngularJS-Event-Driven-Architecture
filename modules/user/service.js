app.factory('UserService', ['$http', function($http) {
  return {
    findAll:function(){
      return $http.get('http://localhost:8888/api/user').
        error(this.errorCallback.bind(this));
    },
    errorCallback: function(response){
      console.error(response);
    }
  };
}]);
