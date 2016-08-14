(function (angular) {
    angular.module('profile.home', [])
    .value('$routerRootComponent', 'profileHome')
    .component('profileHome', {
        template: '<p>Home Page</p>'
    });
})(angular);
