(function (angular) {
    var moduleName = 'profile.about';
    var componentName = 'profileHome';
    var templateUrl = 'pages/home/html/home.html';

    function ProfileHomeController() {
        var $ctrl = this;
        $ctrl.tags = [
            {
                title: 'bio',
                url: '/bio',
                class: 'profile-home--tags__color0'
            },
            {
                title: 'javaScript',
                url: '/java-script',
                class: ''
            },
            {
                title: 'work experience',
                url: '/work-experience',
                class: 'profile-home--tags__color1'
            },
            {
                title: 'skills',
                url: '/skills',
                class: 'profile-home--tags__color2'
            },
            {
                title: 'education',
                url: '/education',
                class: 'profile-home--tags__color3'
            },
            {
                title: 'open web',
                url: '/open-web',
                class: ''
            },
            {
                title: 'reading',
                url: '/reading',
                class: ''
            },
            {
                title: 'books',
                url: '/books',
                class: ''
            },
            {
                title: 'contact me',
                url: '/contact-me',
                class: 'profile-home--tags__color4'
            },
            {
                title: 'social',
                url: '/social',
                class: ''
            },
            {
                title: 'cv',
                url: '/cv',
                class: 'profile-home--tags__color5'
            },
            {
                title: 'other links',
                url: '/other-links',
                class: ''
            }
        ];
    }

    angular.module('profile.home', [
        moduleName
    ])
    .value('$routerRootComponent', 'profileHome')
    .component(componentName, {
        templateUrl: templateUrl,
        controller: ProfileHomeController,
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
