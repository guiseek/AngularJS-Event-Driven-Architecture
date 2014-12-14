app.directive('userUnique', ['UserModel','Notification', function (UserModel,Notification) {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, element, attrs, ngModel) {
            element.bind('blur', function (e) {
                if (!ngModel || !element.val()) return;
                var property = scope.$eval(attrs.userUnique);
                var value = element.val();
                var data = {};
                data[property.name] = value;

                UserModel.unique(data);

                Notification.addEventListener('user:unique_success', function(event, data) { _unique.success(data) });
                Notification.addEventListener('user:unique_error', function(event, data) { _unique.error(data) });

                _unique = {
                  success: function(data) {
                    if (value == element.val()) {
                        ngModel.$setValidity('unique', true);
                    }
                  },
                  error: function(data) {
                    ngModel.$setValidity('unique', false);
                  }
                }

                Notification.removeEventListener('user:unique_success', function(event, data) { _unique.success(data) });
                Notification.removeEventListener('user:unique_error', function(event, data) { _unique.error(data) });
            });

        }
    }
}]);