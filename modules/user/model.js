angular.module('app').factory('UserModel', ['UserService','Notification', function(UserService,Notification) {
  return {
    // Find all
    findAll:function() {
      UserService.findAll().then(this._handleFindAllSuccess.bind(this),this._handleFindAllError.bind(this));
    },
    _handleFindAllSuccess:function(result){
      Notification.notify('user:find_all_success', result.data);
    },
    _handleFindAllError:function(error){
      Notification.notify('user:find_all_error', error.data);
      console.error('UserModel : User find all error')
    },

    // Find
    find:function(id) {
      UserService.find(id).then(this._handleFindSuccess.bind(this),this._handleFindError.bind(this));
    },
    _handleFindSuccess:function(result){
      Notification.notify('user:find_success', result.data);
    },
    _handleFindError:function(error){
      Notification.notify('user:find_error', error.data);
      console.error('UserModel : User find error')
    },

    // Create
    create:function(data) {
      UserService.create(data).then(this._handleCreateSuccess.bind(this),this._handleCreateError.bind(this));
    },
    _handleCreateSuccess:function(result){
      Notification.notify('user:create_success', result.data);
    },
    _handleCreateError:function(error){
      Notification.notify('user:create_error', error.data);
      console.error('UserModel : User create error')
    },

    // Update
    update:function(data) {
      UserService.update(data).then(this._handleUpdateSuccess.bind(this),this._handleUpdateError.bind(this));
    },
    _handleUpdateSuccess:function(result){
      Notification.notify('user:update_success', result.data);
    },
    _handleUpdateError:function(error){
      Notification.notify('user:update_error', error.data);
      console.error('UserModel : User update error')
    },

    // Remove
    remove:function(id) {
      UserService.remove(id).then(this._handleRemoveSuccess.bind(this),this._handleRemoveError.bind(this));
    },
    _handleRemoveSuccess:function(result){
      Notification.notify('user:remove_success', result.data);
    },
    _handleRemoveError:function(error){
      Notification.notify('user:remove_error', error.data);
      console.error('UserModel : User remove error')
    },
    
    // Error callback
    errorCallback: function(response){
      console.error(response);
    }
  };
}]);
