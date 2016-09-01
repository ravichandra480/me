(function (angular) {
    var moduleName = 'profile.contactMe';
    var componentName = 'profileContactMe';
    var templateUrl = 'pages/contactMe/html/contactMe.html';

    function profileContactMeController() {
        var $ctrl = this;
    }

    angular.module(moduleName, [
        templateUrl
    ])
    .component(componentName, {
        templateUrl: templateUrl,
        controller: profileContactMeController
    });
})(angular);
