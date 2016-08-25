(function (angular) {

    function profileSkillsController() {
        var $ctrl = this;
    }

    angular.module('profile.skills', [])
    .component('profileSkills', {
        templateUrl: 'pages/skills/html/skills.html',
        controller: profileSkillsController
    });
})(angular);
