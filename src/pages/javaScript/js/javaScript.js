(function (angular) {

    function profileJavaScriptController() {
        var $ctrl = this;
    }

    angular.module('profile.javaScript', [])
    .component('profileJavaScript', {
        templateUrl: 'pages/javaScript/html/javaScript.html',
        controller: profileJavaScriptController
    });
})(angular);
