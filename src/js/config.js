(function (angular) {
    'use strict';

    function config($locationProvider) {
        $locationProvider.html5Mode(true);
    }
    angular.module('app.config', [
        'ngComponentRouter',
        'profile.home',
        'profile.header',
        'profile.footer'
    ])
    .config(config)
    .value('$routerRootComponent', 'profileView')
    .component('profileView', {
        template:
            '<profile-header></profile-header>' +
            '<ng-outlet></ng-outlet>' +
            '<profile-footer></profile-footer>',
        $routeConfig: [
            {
                path: '/',
                name: 'Home',
                component: 'profileHome',
                useAsDefault: true
            }
        ]
    });
})(angular);
