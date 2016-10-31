angular.module('diretivas',[])
.directive('minhaFoto', function(){
    var ddo = {};
    ddo.restrict = "AE";

    ddo.scope = {
        site: '@',
		nome: '@'
    };
    ddo.template = '<img class="img-responsive center-block" src="{{site}}" alt="{{nome}}>'
    return ddo;
})
.directive('meuPainel', function(){
	
	var ddo = {};

	ddo.restric = "AE";

	ddo.scope = {
		nome: '@'
	};

	ddo.transclude = true;

	ddo.templateUrl = 'js/directives/meu-painel.html';

	return ddo;
});