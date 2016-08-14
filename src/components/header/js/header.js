(function (angular) {
    angular.module('profile.header', [])
    .value('profileHeader')
    .component('profileHeader', {
        templateUrl: 'components/header/html/header.html'
    });
})(angular);
