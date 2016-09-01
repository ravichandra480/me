(function (angular) {
    var templateUrl = 'components/footer/html/footer.html';

    angular.module('profile.footer', [
        templateUrl
    ])
    .value('$routerRootComponent', 'profileFooter')
    .component('profileFooter', {
        templateUrl: templateUrl
    });
})(angular);
