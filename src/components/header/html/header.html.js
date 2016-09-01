angular.module("components/header/html/header.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/header/html/header.html",
    "<div class=\"header--title\"><a ng-link=\"['Home']\"><h1>Ravi Chandra Ravulapati, I am...</h1></a></div>");
}]);
