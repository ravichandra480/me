(function (angular) {
    var moduleName = 'profile.books';
    var componentName = 'profileBooks';
    var templateUrl = 'pages/books/html/books.html';

    function profileBooksController() {
        var $ctrl = this;
    }

    angular.module(moduleName, [
        templateUrl
    ])
    .component(componentName, {
        templateUrl: templateUrl,
        controller: profileBooksController
    });
})(angular);
