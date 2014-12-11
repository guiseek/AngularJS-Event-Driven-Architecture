app.factory('UserModel', ['$rootScope','UserService', function($rootScope,UserService) {
  return {
    findAll:function() {
      UserService.findAll().then(this._handleFindAllSuccess.bind(this),this._handleFindAllError.bind(this));
    },
    _handleFindAllSuccess:function(result){
      $rootScope.$emit('user:find_all_success', result.data);
    },
    _handleFindAllError:function(error){
      $rootScope.$emit('user:find_all_error', error.data);
      console.error('UserModel : User find all error')
    },
    find:function(id) {
      UserService.find(id).then(this._handleFindSuccess.bind(this),this._handleFindError.bind(this));
    },
    _handleFindSuccess:function(result){
      $rootScope.$emit('user:find_success', result.data);
    },
    _handleFindError:function(error){
      $rootScope.$emit('user:find_error', error.data);
      console.error('UserModel : User find error')
    },
    create:function(data) {
      UserService.create(data).then(this._handleCreateSuccess.bind(this),this._handleCreateError.bind(this));
    },
    _handleCreateSuccess:function(result){
      $rootScope.$emit('user:create_success', result.data);
    },
    _handleCreateError:function(error){
      $rootScope.$emit('user:create_error', error.data);
      console.error('UserModel : User create error')
    },
    update:function(data) {
      UserService.update(data).then(this._handleUpdateSuccess.bind(this),this._handleUpdateError.bind(this));
    },
    _handleUpdateSuccess:function(result){
      $rootScope.$emit('user:update_success', result.data);
    },
    _handleUpdateError:function(error){
      $rootScope.$emit('user:update_error', error.data);
      console.error('UserModel : User update error')
    },
    remove:function(id) {
      UserService.remove(id).then(this._handleRemoveSuccess.bind(this),this._handleRemoveError.bind(this));
    },
    _handleRemoveSuccess:function(result){
      $rootScope.$emit('user:remove_success', result.data);
    },
    _handleRemoveError:function(error){
      $rootScope.$emit('user:remove_error', error.data);
      console.error('UserModel : User remove error')
    },
    errorCallback: function(response){
      console.error(response);
    }
  };
}]);
