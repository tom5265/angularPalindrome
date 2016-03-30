var app = angular.module('myApp', ['myApp.controllers', 'ngRoute']);
app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })
        .when('/palindrome', {
            templateUrl: 'views/palindrome.html',
            controller: 'PallyController'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);