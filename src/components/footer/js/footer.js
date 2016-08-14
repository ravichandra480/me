(function (angular) {
    angular.module('profile.footer', [])
    .value('$routerRootComponent', 'profileFooter')
    .component('profileFooter', {
        templateUrl: 'components/footer/html/footer.html'
    });
})(angular);
