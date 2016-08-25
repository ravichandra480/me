(function (angular) {
    var moduleName = 'profile.home';
    var componentName = 'profileHome';
    var templateUrl = 'pages/home/html/home.html';

    function ProfileHomeController() {
        var $ctrl = this;
        $ctrl.tags = [
            {
                title: 'bio',
                url: 'Bio',
                class: 'profile-home--tags__color0'
            },
            {
                title: 'javaScript',
                url: 'JavaScript',
                class: ''
            },
            {
                title: 'work experience',
                url: 'WorkExperience',
                class: 'profile-home--tags__color1'
            },
            {
                title: 'skills',
                url: 'Skills',
                class: 'profile-home--tags__color2'
            },
            {
                title: 'education',
                url: 'Education',
                class: 'profile-home--tags__color3'
            },
            {
                title: 'open web',
                url: 'OpenWeb',
                class: ''
            },
            {
                title: 'reading',
                url: 'Reading',
                class: ''
            },
            {
                title: 'books',
                url: 'Books',
                class: ''
            },
            {
                title: 'contact me',
                url: 'ContactMe',
                class: 'profile-home--tags__color4'
            },
            {
                title: 'social',
                url: 'Social',
                class: ''
            },
            {
                title: 'cv',
                url: 'Cv',
                class: 'profile-home--tags__color5'
            },
            {
                title: 'other links',
                url: 'OtherLinks',
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
        controller: ProfileHomeController
    });
})(angular);
