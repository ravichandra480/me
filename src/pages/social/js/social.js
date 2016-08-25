(function (angular) {

    function profileSocialController() {
        var $ctrl = this;
    }

    angular.module('profile.social', [])
    .component('profileSocial', {
        templateUrl: 'pages/social/html/social.html',
        controller: profileSocialController
    });
})(angular);
