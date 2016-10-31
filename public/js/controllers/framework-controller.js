angular.module('main').controller('FrameworkController',
    function($scope,$http){

        $scope.frameworks = [];
        $scope.mensagem = '';

        $http.get('buscar')
        .success(function(frameworks){
            $scope.frameworks = frameworks;
        })
        .error(function(erro){
            console.log(erro);
        });


    });