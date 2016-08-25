(function (angular) {

    function profileContactMeController() {
        var $ctrl = this;
    }

    angular.module('profile.contactMe', [])
    .component('profileContactMe', {
        templateUrl: 'pages/contactMe/html/contactMe.html',
        controller: profileContactMeController
    });
})(angular);
