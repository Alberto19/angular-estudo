angular.module('main').controller('LivroController', function ($scope, $http, $routeParams) {
    $scope.livro = {};

    $scope.mesage = {
        text: "",
        type: ""
    };

    if ($routeParams.livroId) {
        $http.get('buscarLivroId/' + $routeParams.livroId)
            .success(function (livro) {
                $scope.livro = livro;
            })
            .error(function (erro) {
                $scope.mensagem = "Erro ao buscar foto"
                console.log(erro);
            });
    }

    $scope.submit = function () {
        if (validate($scope)) {            
            if ($scope.livro._id) {
                console.log("Estou aki");
                $http.put('atualizarLivro/' + $scope.livro._id, $scope.livro)
                    .success(function () {
                        createMesage($scope, "Livro atualizado com Sucesso", "success");
                    })
                    .error(function (erro) {
                        createMesage($scope, "Erro ao Alterar", "danger");
                    });
            } else {
                console.log("Estou la");
                $http.post('adicionar', $scope.livro).success(function () {
                    createMesage($scope, "Livro cadastrado com Sucesso", "success");
                }).error(function (erro) {
                    createMesage($scope, "Não foi cadastrar o livro", "danger");
                })
            }
        }
    }

});

