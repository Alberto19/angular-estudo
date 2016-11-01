angular
    .module('main')
    .controller('FrameworksController', function ($scope, $http) {

        $scope.frameworks = [];
        $scope.filtro = '';
        $scope.mensagem = {
            text: '',
            type: ''
        };

        $http
            .get('buscarFramework')
            .success(function (frameworks) {
                $scope.frameworks = frameworks;
            })
            .error(function (erro) {
                console.log(erro);
            })

        $scope.remover = function (framework) {
            $http
                .delete('remover/'+ framework._id)
                .success(function() {
                    var indiceFramework = $scope
                        .frameworks
                        .indexOf(framework);
                    $scope
                        .frameworks
                        .splice(indiceFramework, 1);
                    $scope.mensagem.text = 'Framework ' + framework.nome + ' foi removido com sucesso';
                    $scope.mensagem.type = 'success';

                }).error( function (erro) {
                    console.log(erro);
                    $scope.mensagem.text = 'Não foi possível remover ' + framework.nome;
                    $scope.mensagem.type = 'danger';
                });
        };

    });