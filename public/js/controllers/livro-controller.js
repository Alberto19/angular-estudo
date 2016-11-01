angular.module('main').controller('LivroController', function ($scope, $http) {

    $scope.mesage = {
        text: "",
        type: ""
    };

    $scope.livros = {};

    /*$scope.livros = [{
        titulo:"Casa Blanca",
        descricao:"Casa pintada de blanca",
        imagem:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQkj9n0cpj9L5mssR72YffGaviTs_Bt7x2wVi_1CLr7AU8OI6g7hk8zoyo",    
    }]*/

    
    $http.get('buscar').success(function(response){
        $scope.livros = response;
    }).error(function(erro){
        console.log(erro);
    }); 

    $scope.submeter = function () {
        $http.post('adicionar', $scope.livro)
            .success(function () {                
                $scope.mesage.text = 'Livro Adicionado com sucesso';
                $scope.mesage.type = 'success';
            })
            .error(function (erro) {
                $scope.mesage.text = 'Não foi possível adicionar o livro';
                $scope.mesage.type = 'danger';
            })

    }

});
