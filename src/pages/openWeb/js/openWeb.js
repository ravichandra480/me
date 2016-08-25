(function (angular) {

    function profileOpenWebController() {
        var $ctrl = this;
    }

    angular.module('profile.openWeb', [])
    .component('profileOpenWeb', {
        templateUrl: 'pages/openWeb/html/openWeb.html',
        controller: profileOpenWebController
    });
})(angular);
