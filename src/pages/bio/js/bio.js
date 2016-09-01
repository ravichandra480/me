(function (angular) {
    var moduleName = 'profile.bio';
    var componentName = 'profileBio';
    var templateUrl = 'pages/bio/html/bio.html';

    function profileBioController() {
        var $ctrl = this;
    }

    angular.module(moduleName, [
        templateUrl
    ])
    .component(componentName, {
        templateUrl: templateUrl,
        controller: profileBioController
    });
})(angular);
