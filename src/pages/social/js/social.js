(function (angular) {

    var moduleName = 'profile.social';
    var componentName = 'profileSocial';
    var templateUrl = 'pages/social/html/social.html';

    function profileSocialController() {
        var $ctrl = this;
    }

    angular.module(moduleName, [
        templateUrl
    ])
    .component(componentName, {
        templateUrl: templateUrl,
        controller: profileSocialController
    });
})(angular);
