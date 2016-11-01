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

       

//livros

        $routeProvider.when('/livros', {
            templateUrl: 'partials/Livros/listar.html',
            controller: 'LivrosController'
        });
      
        $routeProvider.when('/livros/cadastrar', {
            templateUrl: 'partials/Livros/cadastrar.html',
            controller: 'LivroController'
        });
      

         $routeProvider.otherwise({ redirectTo: '/' });

    });
