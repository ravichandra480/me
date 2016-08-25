(function (angular) {

    function profileCvController() {
        var $ctrl = this;
    }

    angular.module('profile.cv', [])
    .component('profileCv', {
        templateUrl: 'pages/cv/html/cv.html',
        controller: profileCvController
    });
})(angular);
