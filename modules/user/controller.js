app.controller('UserCtrl',['$rootScope','UserModel', function($rootScope,UserModel) {
  var self = this;

  UserModel.findAll();

  //var userFindAllSuccess = $rootScope.$on('user:find_all_success', function(event, data) { findAllSuccess(data);  });
  //var userFindAllError = $rootScope.$on('user:find_all_error', function(event, data) { findAllError(data); });

  // Event Listener
  $rootScope.$on('user:find_all_success', function(event, data) { findAllSuccess(data);  });
  $rootScope.$on('user:find_all_error', function(event, data) { findAllError(data); });
  $rootScope.$on('user:find_success', function(event, data) { findSuccess(data);  });
  $rootScope.$on('user:find_error', function(event, data) { findError(data); });
  $rootScope.$on('user:create_success', function(event, data) { createSuccess(data);  });
  $rootScope.$on('user:create_error', function(event, data) { createError(data); });
  $rootScope.$on('user:update_success', function(event, data) { updateSuccess(data);  });
  $rootScope.$on('user:update_error', function(event, data) { updateError(data); });
  $rootScope.$on('user:remove_success', function(event, data) { updateSuccess(data);  });
  $rootScope.$on('user:remove_error', function(event, data) { updateError(data); });

  var find = function(id) {
    return UserModel.find(id);
  }

  // List
  self.view = function(id) {
    self.user = find(id);
  }
  self.edit = function(id) {
    self.user = find(id);
  }
  self.remove = function(id) {
    UserModel.remove(id);
  }

  // Form
  self.roles = [
    {label: 'Gerente', value: 'manager'},
    {label: 'Avaliador', value: 'measurer'}
  ];
  self.submit = function() {
    if (self.user.hasOwnProperty('id')) {
      UserModel.update(self.user);
    } else {
      UserModel.create(self.user);
    }
  }

  // Event Dispatcher
  var findAllSuccess = function(data) {
    self.users = data;
  }
  var findAllError = function(data) {
    console.warn(data);
  }
  var findSuccess = function(data) {
    self.user = data;
  }
  var findError = function(data) {
    console.warn(data);
  }
  var createSuccess = function(data) {
    self.users.push(data);
  }
  var createError = function(data) {
    console.warn(data);
  }
  var updateSuccess = function(data) {
    UserModel.findAll();
  }
  var updateError = function(data) {
    console.warn(data);
  }
  var removeSuccess = function(data) {
    UserModel.findAll();
  }
  var removeError = function(data) {
    console.warn(data);
  }

  //$rootScope.$on('$destroy', userFindAllSuccess, userFindAllError, console.log('destroy'));
}])