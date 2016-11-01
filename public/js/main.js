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
        $routeProvider.when('/home', {templateUrl: 'partials/home/index.html'});
<<<<<<< .mine            templateUrl: 'partials/home/index.html'
        });
=======>>>>>>> .theirs
<<<<<<< .mine        $routeProvider.otherwise({ redirectTo: '/home' });
=======        $routeProvider.otherwise({redirectTo: '/home'});
>>>>>>> .theirs
    });

<<<<<<< .mine
=======>>>>>>> .theirsfunction validate($scope) {
    createMesage($scope, alertInputNull($scope), 'warning');
    return $scope.livro.titulo && $scope.livro.imagem && $scope.livro.descricao;
}

<<<<<<< .mine
=======>>>>>>> .theirsfunction alertInputNull($scope) {
    if (!$scope.livro.titulo) 
        return 'Preencher o titulo';
<<<<<<< .mine
=======    
>>>>>>> .theirs    if (!$scope.livro.imagem) 
<<<<<<< .mine    if (!$scope.livro.imagem)
=======>>>>>>> .theirs        return 'Preencher a imagem';
    
    if (!$scope.livro.descricao) 
        return 'Preencher a descricao';
<<<<<<< .mine
=======    
>>>>>>> .theirs    return '';
}

function createMesage($scope, mensage, type) {
    $scope.mesage.text = mensage;
    $scope.mesage.type = type;
    setTimeout(function () {
        $scope
            .$apply(function () {
                $scope.mesage.text = '';
                $scope.mesage.type = '';
            });
    }, 2000);
}
