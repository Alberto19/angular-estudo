angular
    .module('main')
    .controller('FrameworkController', function ($scope, $http, $routeParams) {

        $scope.framework = {};
        $scope.mensagem = '';

        if ($routeParams.frameworkId) {
            $http
                .get('buscarPorId/' + $routeParams.frameworkId)
                .success(function (framework) {
                    $scope.framework = framework;
                })
                .error(function (erro) {
                    $scope.mensagem = 'Não foi possivel obter o Framework';
                })
        }

        $scope.submeter = function () {
            if ($scope.formulario.$valid) {

                if ($scope.framework._id) {
                    $http
                        .put('atualizar/' + $scope.framework._id, $scope.framework)
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