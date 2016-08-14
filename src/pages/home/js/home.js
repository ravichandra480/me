(function (angular) {
    angular.module('profile.home', [
        'profile.about'
    ])
    .value('$routerRootComponent', 'profileHome')
    .component('profileHome', {
        templateUrl: 'pages/home/html/home.html',
        $routeConfig: [
            {
                path: '/',
                name: 'About',
                component: 'profileAbout',
                useAsDefault: true
            }
        ]
    });
})(angular);
