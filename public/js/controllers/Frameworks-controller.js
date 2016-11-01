angular
    .module('main')
    .controller('FrameworksController', function ($scope, $http) {

        $scope.frameworks = [];
        $scope.filtro = '';

        $http
            .get('buscar/framework')
            .success(function (frameworks) {
                $scope.frameworks = frameworks;
            })
            .error(function (erro) {
               console.log(erro);
            })

    });