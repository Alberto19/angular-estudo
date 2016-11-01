angular
				.module('diretivas', [])
				.directive('meuPainel', function () {

								var ddo = {};

								ddo.restric = "AE";

								ddo.scope = {
												nome: '@'
								};

								ddo.transclude = true;

								ddo.templateUrl = 'js/directives/meu-painel.html';

								return ddo;
				});