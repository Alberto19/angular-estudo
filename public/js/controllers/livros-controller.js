angular.module('main').controller('LivrosController', function ($scope, $http) {

    $scope.livros = [];
    
      $scope.mesage = {
        text: "",
        type: ""
    };

    $http.get('buscarLivro').success(function (response) {
        $scope.livros = response;
    }).error(function (erro) {
        console.log(erro);
    });

    $scope.remove = function(livro){
        $http.delete('/deletarLivro/'+ livro._id)
        .success(function(){
            $scope.livros.splice($scope.livros.indexOf(livro),1);
            createMesage($scope, "Removido com sucesso", "success");   
        }).error(function(erro){
            createMesage($scope, "Não foi possivel remover", "warning");
        });
    };

});


