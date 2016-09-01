(function (angular) {
    var moduleName = 'profile.cv';
    var componentName = 'profileCv';
    var templateUrl = 'pages/cv/html/cv.html';

    function profileCvController() {
        var $ctrl = this;
    }

    angular.module(moduleName, [
        templateUrl
    ])
    .component(componentName, {
        templateUrl: templateUrl,
        controller: profileCvController
    });
})(angular);
