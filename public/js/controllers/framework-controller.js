angular
    .module('main')
    .controller('FrameworkController', function ($scope, $http, $routeParams) {

        $scope.framework = {};
        $scope.mensagem = {
            text: '',
            type: ''
        };

        if ($routeParams.frameworkId) {
            $http
                .get('buscarFrameworkId/' + $routeParams.frameworkId)
                .success(function (framework) {
                    $scope.framework = framework;
                })
                .error(function (erro) {
                    $scope.mensagem.text = 'Não foi possivel obter o Framework';
                    $scope.mensagem.type = 'danger';
                })
        }

        $scope.submeter = function () {
            if ($scope.formulario.$valid) {

                if ($scope.framework._id) {
                    $http
                        .put('atualizarFramework/' + $scope.framework._id, $scope.framework)
                        .success(function () {
                            $scope.mensagem.text = 'Framework alterado com sucesso';
                            $scope.mensagem.type = 'success';

                            setTimeout(function () {
                                window.location.href = '/framework';         
                            }, 2000);
                            

                        })
                        .error(function () {
                            $scope.mensagem.text = 'Não foi possível alterar o framework';
                            $scope.mensagem.type = 'danger';
                        });
                } else {
                    $http
                        .post('adicionar', $scope.framework)
                        .success(function (framework) {
                            $scope.mensagem.text = 'Framework Adicionado com sucesso';
                            $scope.mensagem.type = 'success'
                        })
                        .error(function (erro) {
                            $scope.mensagem.text = 'Não foi possível adicionar um framework';
                            $scope.mensagem.type = 'danger';
                        });
                }

            }
        }

    });