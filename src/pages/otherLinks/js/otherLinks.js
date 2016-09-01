(function (angular) {

    var moduleName = 'profile.otherLinks';
    var componentName = 'profileOtherLinks';
    var templateUrl = 'pages/otherLinks/html/otherLinks.html';

    function profileOtherLinksController() {
        var $ctrl = this;
    }

    angular.module('profile.otherLinks', [
        templateUrl
    ])
    .component('profileOtherLinks', {
        templateUrl: 'pages/otherLinks/html/otherLinks.html',
        controller: profileOtherLinksController
    });
})(angular);
