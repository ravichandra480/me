angular.module("pages/home/html/home.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("pages/home/html/home.html",
    "<section class=\"profile-home\"><ul class=\"profile-home--tags\"><li ng-repeat=\"tag in $ctrl.tags\" class=\"{{::tag.class}}\"><a ng-link=\"[tag.url]\" ng-bind=\"tag.title\"></a> <span ng-if=\"!$last\">,</span></li></ul></section><ng-outlet></ng-outlet>");
}]);
