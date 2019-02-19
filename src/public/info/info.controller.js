(function () {
    "use strict";

    angular.module('common')
        .controller('UserInfoController', UserInfoController);
    
    UserInfoController.$inject = ['ApiPath', 'dish', 'uinfo'];
    function UserInfoController(ApiPath, dish, uinfo){
        var $ctrl = this;
        $ctrl.basePath = ApiPath;
        $ctrl.dish = dish.data;
        $ctrl.uinfo = uinfo;
        console.log($ctrl.uinfo);
        
    }
    
})();