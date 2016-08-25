(function (angular) {
    'use strict';

    function config($locationProvider) {
        $locationProvider.html5Mode(true);
    }
    angular.module('app.config', [
        'ngComponentRouter',
        'profile.header',
        'profile.footer',
        'profile.home',
        'profile.bio',
        'profile.javaScript',
        'profile.workExperiance',
        'profile.skills',
        'profile.education',
        'profile.openWeb',
        'profile.reading',
        'profile.contactMe',
        'profile.social',
        'profile.cv',
        'profile.otherLinks',
        'profile.books'

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
            },
            {
                path: '/bio',
                name: 'Bio',
                component: 'profileBio'
            },
            {
                path: '/Java-script',
                name: 'JavaScript',
                component: 'profileJavaScript'
            },
            {
                path: '/work-experience',
                name: 'WorkExperience',
                component: 'profileWorkExperiance'
            },
            {
                path: '/skills',
                name: 'Skills',
                component: 'profileSkills'
            },
            {
                path: '/education',
                name: 'Education',
                component: 'profileEducation'
            },
            {
                path: '/open-web',
                name: 'OpenWeb',
                component: 'profileOpenWeb'
            },
            {
                path: '/reading',
                name: 'Reading',
                component: 'profileReading'
            },
            {
                path: '/Contact-me',
                name: 'ContactMe',
                component: 'profileContactMe'
            },
            {
                path: '/social',
                name: 'Social',
                component: 'profileSocial'
            },
            {
                path: '/cv',
                name: 'Cv',
                component: 'profileCv'
            },
            {
                path: '/other-links',
                name: 'OtherLinks',
                component: 'profileOtherLinks'
            },
            {
                path: '/books',
                name: 'Books',
                component: 'profileBooks'
            }
        ]
    });
})(angular);
