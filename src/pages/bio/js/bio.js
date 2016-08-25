(function (angular) {

    function profileBioController() {
        var $ctrl = this;
    }

    angular.module('profile.bio', [])
    .component('profileBio', {
        templateUrl: 'pages/bio/html/bio.html',
        controller: profileBioController
    });
})(angular);
