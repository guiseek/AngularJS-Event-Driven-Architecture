app.factory('UserService', ['$http', function($http) {
  API_ROUTE = 'http://localhost:8888/api/user';
  return {
    findAll:function(){
      return $http.get(API_ROUTE).
        error(this.errorCallback.bind(this));
    },
    find:function(id){
      return $http.get(API_ROUTE + '/' + id).
        error(this.errorCallback.bind(this));
    },
    create:function(data){
      return $http.post(API_ROUTE, data).
        error(this.errorCallback.bind(this));
    },
    update:function(data){
      return $http.put(API_ROUTE + '/' + data.id, data).
        error(this.errorCallback.bind(this));
    },
    remove:function(id){
      return $http.delete(API_ROUTE + '/' + id).
        error(this.errorCallback.bind(this));
    },
    errorCallback: function(error){
      console.error(error);
    }
  };
}]);
