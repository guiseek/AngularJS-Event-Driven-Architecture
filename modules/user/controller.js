app.controller('UserCtrl',['UserModel','Notification', function(UserModel,Notification) {
  var self = this;

  self.master = {};
  
  UserModel.findAll();

  // Event Listener
  Notification.addEventListener('user:find_all_success', function(event, data) { _findAll.success(data);  });
  Notification.addEventListener('user:find_all_error', function(event, data) { _findAll.error(data); });
  Notification.addEventListener('user:find_success', function(event, data) { _find.success(data);  });
  Notification.addEventListener('user:find_error', function(event, data) { _find.error(data); });
  Notification.addEventListener('user:create_success', function(event, data) { _create.success(data);  });
  Notification.addEventListener('user:create_error', function(event, data) { _create.error(data); });
  Notification.addEventListener('user:update_success', function(event, data) { _update.success(data);  });
  Notification.addEventListener('user:update_error', function(event, data) { _update.error(data); });
  Notification.addEventListener('user:remove_success', function(event, data) { _remove.success(data);  });
  Notification.addEventListener('user:remove_error', function(event, data) { _remove.error(data); });

  // List
  /*
  self.view = function(user) {
    self.user = user
  }
  */
  self.edit = function(user) {
    self.user = angular.copy(user);
  }
  self.remove = function(user) {
    if (confirm('Tem certeza que deseja remover o usuário '+user.name+'?')) {
      UserModel.remove(user.id);
    }
  }

  // Form
  self.roles = [
    {label: 'Gerente', value: 'manager'},
    {label: 'Avaliador', value: 'measurer'}
  ];
  self.submit = function() {
    self.master = angular.copy(self.user);
    if (self.master.hasOwnProperty('id')) {
      UserModel.update(self.master);
    } else {
      UserModel.create(self.master);
    }
  }
  self.reset = function() {
    self.user = angular.copy(self.master);
  }
  self.reset();

  // Event listener functions
  _findAll = {
    success: function(data) {
      self.users = data;
    },
    error: function(data) {
      console.warn(data);
    }
  }

  _find = {
    success: function(data) {
      self.user = data;
    },
    error: function(data) {
      console.warn(data);
    }
  }

  _create = {
    success: function(data) {
      self.users.push(data);
      self.user = {};
    },
    error: function(data) {
      console.warn(data);
    }
  }

  _update = {
    success: function(data) {
      UserModel.findAll();
      self.user = {};
    },
    error: function(data) {
      console.warn(data);
    }
  }

  _remove = {
    success: function(data) {
      UserModel.findAll();
    },
    error: function(data) {
      console.warn(data);
    }
  }

  // Event destroy
  Notification.removeEventListener('user:find_all_success', function(event, data) { _findAll.success(data);  });
  Notification.removeEventListener('user:find_all_error', function(event, data) { _findAll.error(data); });
  Notification.removeEventListener('user:find_success', function(event, data) { _find.success(data);  });
  Notification.removeEventListener('user:find_error', function(event, data) { _find.error(data); });
  Notification.removeEventListener('user:create_success', function(event, data) { _create.success(data);  });
  Notification.removeEventListener('user:create_error', function(event, data) { _create.error(data); });
  Notification.removeEventListener('user:update_success', function(event, data) { _update.success(data);  });
  Notification.removeEventListener('user:update_error', function(event, data) { _update.error(data); });
  Notification.removeEventListener('user:remove_success', function(event, data) { _remove.success(data);  });
  Notification.removeEventListener('user:remove_error', function(event, data) { _remove.error(data); });

}])