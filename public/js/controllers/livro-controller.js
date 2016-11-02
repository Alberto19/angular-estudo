angular.module('main').controller('LivroController', function ($scope, $http) {
    $scope.mesage = {
        text: "",
        type: ""
    };

    $scope.submit = function () {
        if (validate($scope)) {
            $http.post('adicionar', $scope.livro).success(function () {
                createMesage($scope, "Livro cadastrado com Sucesso", "success");
            }).error(function (erro) {
                createMesage($scope, "Não foi cadastrar o livro", "danger");
            })
        }
    }

});

