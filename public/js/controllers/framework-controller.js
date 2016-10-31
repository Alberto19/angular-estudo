angular.module('main').controller('FrameworkController',
    function($scope,$http){

        $scope.framework = {};
        $scope.mensagem = '';

        $scope.submeter = function(){
            if($scope.formulario.$valid){
                    $http.post('adicionar', $scope.framework)
                        .success(function(framework){
                            $scope.mensagem = 'Framework Adicionado com sucesso';
                        })
                        .error(function(erro){
                            $scope.mensagem = 'Não foi possível adicionar um framework';
                        })
            }
        }


    });