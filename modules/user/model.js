app.factory('UserModel', ['$rootScope','UserService', function($rootScope,UserService) {
  return {
    findAll:function() {
      UserService.findAll().then(this._handleLoadUsersSuccess.bind(this),this._handleLoadUsersError.bind(this));
    },
    _handleLoadUsersSuccess:function(result){
      $rootScope.$broadcast('user:users_loaded_success', result.data);
    },
    _handleLoadUsersError:function(error){
      $rootScope.$broadcast('user:users_loaded_error', error.data);
      console.warn('UsersModel : Users loading error')
    },
    errorCallback: function(response){
      console.error(response);
    }
  };
}]);
