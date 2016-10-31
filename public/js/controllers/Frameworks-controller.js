angular
    .module('main')
    .controller('FrameworksController', function ($scope, $http) {

        $scope.frameworks = [];
        $scope.filtro = '';

        $http
            .get('buscar')
            .success(function (frameworks) {
                $scope.frameworks = frameworks;
            })
            .error(function (erro) {
               console.log(erro);
            })

    });