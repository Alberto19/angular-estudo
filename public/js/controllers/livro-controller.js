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


function validate($scope) {
    createMesage($scope, alertInputNull($scope), 'warning');
    return $scope.livro.titulo && $scope.livro.imagem && $scope.livro.descricao;
}

function alertInputNull($scope) {
    if (!$scope.livro.titulo)
        return 'Preencher o titulo';

    if (!$scope.livro.imagem)
        return 'Preencher a imagem';

    if (!$scope.livro.descricao)
        return 'Preencher a descricao';
        
    return '';
}

function createMesage($scope, mensage, type) {
    $scope.mesage.text = mensage;
    $scope.mesage.type = type;
    setTimeout(function () {
        $scope.$apply(function () {
            $scope.mesage.text = '';
            $scope.mesage.type = '';
        });
    }, 2000);
}

