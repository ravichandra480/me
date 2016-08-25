(function (angular) {

    function profileBooksController() {
        var $ctrl = this;
    }

    angular.module('profile.books', [])
    .component('profileBooks', {
        templateUrl: 'pages/books/html/books.html',
        controller: profileBooksController
    });
})(angular);
