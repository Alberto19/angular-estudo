angular.module('main').controller('LivrosController', function ($scope, $http) {

    $scope.livros = [];

    $http.get('buscarLivro').success(function (response) {
        $scope.livros = response;
    }).error(function (erro) {
        console.log(erro);
    });

    $scope.remove = function(livro){
        $http.delete('/deletarLivro/'+ livro._id)
        .success(function(){
            $scope.livros.splice($scope.livros.indexOf(livro),1);
            $scope.mensagem = 'removido';           
        }).error(function(erro){
            console.log(erro);
        });
    };

});
