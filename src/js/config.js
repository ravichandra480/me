(function(angular) {
    'use strict';

        function config($locationProvider){
            $locationProvider.html5Mode(true);
        }
        angular.module('app.config', ['ngComponentRouter', 'heroes', 'crisis-center'])
        .config(config)
        .value('$routerRootComponent', 'app')
        .component('app', {
          template:
            '<nav>\n' +
            '  <a ng-link="[\'CrisisCenter\']">Crisis Center</a>\n' +
            '  <a ng-link="[\'Heroes\']">Heroes</a>\n' +
            '</nav>\n' +
            '<ng-outlet></ng-outlet>\n',
          $routeConfig: [
            {path: '/crisis-center/...', name: 'CrisisCenter', component: 'crisisCenter', useAsDefault: true},
            {path: '/heroes/...', name: 'Heroes', component: 'heroes' }
          ]
        });
})(angular);
