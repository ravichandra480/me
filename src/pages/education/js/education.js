(function (angular) {

    function profileEducationController() {
        var $ctrl = this;
    }

    angular.module('profile.education', [])
    .component('profileEducation', {
        templateUrl: 'pages/education/html/education.html',
        controller: profileEducationController
    });
})(angular);
