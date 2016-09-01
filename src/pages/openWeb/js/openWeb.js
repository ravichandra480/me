(function (angular) {
    var moduleName = 'profile.openWeb';
    var componentName = 'profileOpenWeb';
    var templateUrl = 'pages/openWeb/html/openWeb.html';

    function profileOpenWebController() {
        var $ctrl = this;
    }

    angular.module(moduleName, [
        templateUrl
    ])
    .component(componentName, {
        templateUrl: templateUrl,
        controller: profileOpenWebController
    });
})(angular);
