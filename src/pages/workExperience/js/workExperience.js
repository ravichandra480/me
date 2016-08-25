(function (angular) {

    function profileWorkExperianceController() {
        var $ctrl = this;
    }

    angular.module('profile.workExperiance', [])
    .component('profileWorkExperiance', {
        templateUrl: 'pages/workExperience/html/workExperience.html',
        controller: profileWorkExperianceController
    });
})(angular);
