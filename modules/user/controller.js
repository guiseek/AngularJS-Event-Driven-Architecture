app.controller('UserCtrl',['$rootScope','UserModel', function($rootScope,UserModel) {
	var self = this;
  UserModel.findAll();
  $rootScope.$on('user:users_loaded_success', function(event, data) {
    self.users = data;
  });
  $rootScope.$on('user:users_loaded_error', function(event, data) {
    self.error = data;
  });
}])