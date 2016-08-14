(function (angular) {
    'use strict';

    function config($locationProvider) {
        $locationProvider.html5Mode(true);
    }
    angular.module('app.config', [
        'ngComponentRouter',
        'profile.home'
    ])
    .config(config)
    .value('$routerRootComponent', 'profileView')
    .component('profileView', {
        template:
        '<ng-outlet></ng-outlet>',
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
