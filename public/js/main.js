angular.module('main', ['ngAnimate','ngRoute'])
.config(function($routeProvider, $locationProvider){

    $locationProvider.html5Mode(true);
    $routeProvider.when('/framework',{
        templateUrl: 'partials/404.html',
        controller: 'FrameworkController'
    });

    $routeProvider.otherwise({redirectTo: '/framework'});

});
