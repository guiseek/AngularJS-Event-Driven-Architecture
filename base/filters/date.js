angular.module('app').filter("asDate", function () {
    return function (input) {
        return new Date(input);
    }
})