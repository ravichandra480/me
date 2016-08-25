(function (angular) {

    function profileOtherLinksController() {
        var $ctrl = this;
    }

    angular.module('profile.otherLinks', [])
    .component('profileOtherLinks', {
        templateUrl: 'pages/otherLinks/html/otherLinks.html',
        controller: profileOtherLinksController
    });
})(angular);
