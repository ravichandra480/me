(function (angular) {
    var moduleName = 'profile.workExperiance';
    var componentName = 'profileWorkExperiance';
    var templateUrl = 'pages/workExperience/html/workExperience.html';

    function profileWorkExperianceController() {
        var $ctrl = this;
    }

    angular.module(moduleName, [
        templateUrl
    ])
    .component(componentName, {
        templateUrl: templateUrl,
        controller: profileWorkExperianceController
    });
})(angular);
