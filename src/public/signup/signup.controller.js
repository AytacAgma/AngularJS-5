(function () {
    "use strict";

    angular.module('common')
        .controller('SignupController', SignupController);

    SignupController.$inject = ['AdminService', '$timeout', '$location'];
    function SignupController(AdminService, $timeout, $location) {
        var $ctrl = this;
        
        $ctrl.user = {
            fname: '',
            lname: '',
            phone: '',
            email: '',
            dish: ''
        };
        
        $ctrl.loading = false;
        $ctrl.saved = false;
        $ctrl.invalDish = true;

        $ctrl.checkDish = function (params) {
            $ctrl.invalDish = null;
            var promise = AdminService.getDish($ctrl.user.dish);
            promise.then(function (data) {
                if (data.status === 200) {
                    $ctrl.invalDish = false;
                } else {
                    $ctrl.invalDish = true;
                }
            })
            .catch(function (res) {
                $ctrl.invalDish = true;
            });
        }

        $ctrl.saveUserData = function () {
            $ctrl.loading = true;
            var promise = AdminService.saveUserInfo($ctrl.user)
            promise.then(function (data) {
                $ctrl.loading = false;
                $ctrl.saved = true;
                $timeout(function () {
                    $location.path('/info');
                }, 700);
            });
        };
    }

})();
