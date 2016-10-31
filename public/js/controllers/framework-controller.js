angular
    .module('main')
    .controller('FrameworkController', function ($scope, $http) {

        $scope.framework = {};
        $scope.mensagem = '';

        $scope.submeter = function () {
            if ($scope.formulario.$valid) {

                if ($scope.framework._id) {
                    $http
                        .put('buscarPorId' + $scope.framework._id, $scope.framework)
                        .success(function () {
                            $scope.framework = {};
                            $scope.mensagem = 'Framework alterado com sucesso';
                        })
                        .error(function () {
                            $scope.mensagem = 'Não foi possível alterar o framework'
                        });
                } else {
                    $http
                        .post('adicionar', $scope.framework)
                        .success(function (framework) {
                            $scope.mensagem = 'Framework Adicionado com sucesso';
                        })
                        .error(function (erro) {
                            $scope.mensagem = 'Não foi possível adicionar um framework';
                        });
                }

            }
        }

    });