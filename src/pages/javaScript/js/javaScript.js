(function (angular) {

    var moduleName = 'profile.javaScript';
    var componentName = 'profileJavaScript';
    var templateUrl = 'pages/javaScript/html/javaScript.html';

    function profileJavaScriptController() {
        var $ctrl = this;
    }

    angular.module(moduleName, [
        templateUrl
    ])
    .component(componentName, {
        templateUrl: templateUrl,
        controller: profileJavaScriptController
    });
})(angular);
