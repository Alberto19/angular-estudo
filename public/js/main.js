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

<<<<<<< HEAD
        $routeProvider.otherwise({redirectTo: '/'});
=======
     $routeProvider.when('/livros',{
        templateUrl: 'partials/livros.html',
        controller: 'LivroController'
    });

    $routeProvider.when('/livros/cadastrar',{
        templateUrl: 'partials/cadastrar',
        controller: 'LivroController'
    });

    $routeProvider.otherwise({redirectTo: '/framework'});
>>>>>>> e3480458082201b01abb0c149fff2ef06761beb0

    });
