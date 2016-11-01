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
         $routeProvider.when('/framework/atualizar/:frameworkId', {
            templateUrl: 'partials/framework/new.html',
            controller: 'FrameworkController'
        });


        $routeProvider.otherwise({redirectTo: '/'});

     $routeProvider.when('/livros',{
        templateUrl: 'partials/livros.html',
        controller: 'LivroController'
    });

    $routeProvider.when('/livros/cadastrar',{
        templateUrl: 'partials/cadastrar',
        controller: 'LivroController'
    });

    $routeProvider.otherwise({redirectTo: '/framework'});


    });
