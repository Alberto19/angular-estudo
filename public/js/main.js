angular
    .module('main', ['diretivas', 'ngAnimate', 'ngRoute'])
    .config(function ($routeProvider, $locationProvider) {

        $locationProvider.html5Mode(true);

      $routeProvider.when('/framework', {
            templateUrl: 'partials/framework/list.html',
            controller: 'FrameworksController'
        });
        $routeProvider.when('/framework/adicionar', {
            templateUrl: 'partials/framework/new.html',
            controller: 'FrameworkController'
        });
         $routeProvider.when('/framework/atualizar/:Id', {
            templateUrl: 'partials/framework/new.html',
            controller: 'FrameworkController'
        });

        $routeProvider.otherwise({redirectTo: '/'});

    });
