angular.module('main', ['minhasDiretivas'])
.config(function($routeProvider, $locationProvider){

    $locationProvider.html5Mode(true);
    $routeProvider.when('/fotos',{
        templateUrl: 'partials/principal.html',
        controller: 'FotosController'
    });

});
