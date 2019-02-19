(function () {
    "use strict";

    angular.module('common')
        .service('AdminService', AdminService);


    AdminService.$inject = ['$q', '$http', '$timeout', 'ApiPath'];
    function AdminService($q, $http, $timeout, ApiPath) {
        var service = this;

        service.info = {
            fname: '',
            lname: '',
            phone: '',
            email: '',
            dish: 'A1'
        };

        service.getUserInfo = function () {
            var deferred = $q.defer();
            $timeout(function () {
                deferred.resolve(service.info);
                deferred.reject(null);
            }, 400);
            return deferred.promise;
        }

        service.getDish = function (dish) {
            return $http.get(ApiPath + '/menu_items/' + dish + '.json');
        }

        service.saveUserInfo = function (userData) {
            var deferred = $q.defer();
            $timeout(function () {
                service.info = userData;
                deferred.resolve(service.info);
                deferred.reject(null);
            }, 700);
            return deferred.promise;
        };

    }

})();
