(function (angular) {
    var templateUrl = 'components/header/html/header.html';

    angular.module('profile.header', [
        templateUrl
    ])
    .value('profileHeader')
    .component('profileHeader', {
        templateUrl: templateUrl
    });
})(angular);
