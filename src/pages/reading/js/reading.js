(function (angular) {

    function profileReadingController() {
        var $ctrl = this;
    }

    angular.module('profile.reading', [])
    .component('profileReading', {
        templateUrl: 'pages/reading/html/reading.html',
        controller: profileReadingController
    });
})(angular);
