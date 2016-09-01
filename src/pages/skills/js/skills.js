(function (angular) {
    var moduleName = 'profile.skills';
    var componentName = 'profileSkills';
    var templateUrl = 'pages/skills/html/skills.html';

    function profileSkillsController() {
        var $ctrl = this;
    }

    angular.module(moduleName, [
        templateUrl
    ])
    .component(componentName, {
        templateUrl: templateUrl,
        controller: profileSkillsController
    });
})(angular);
