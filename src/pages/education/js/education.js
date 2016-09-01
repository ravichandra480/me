(function (angular) {
    var moduleName = 'profile.education';
    var componentName = 'profileEducation';
    var templateUrl = 'pages/education/html/education.html';

    function profileEducationController() {
        var $ctrl = this;
    }

    angular.module(moduleName, [
        templateUrl
    ])
    .component(componentName, {
        templateUrl: templateUrl,
        controller: profileEducationController
    });
})(angular);
