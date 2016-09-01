(function (angular) {

    var moduleName = 'profile.reading';
    var componentName = 'profileReading';
    var templateUrl = 'pages/reading/html/reading.html';

    function profileReadingController() {
        var $ctrl = this;
    }

    angular.module(moduleName, [
        templateUrl
    ])
    .component(componentName, {
        templateUrl: templateUrl,
        controller: profileReadingController
    });
})(angular);
