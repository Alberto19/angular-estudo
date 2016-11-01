var api = require('../api'),
    path = require('path');

module.exports  = function(app) {
    
    app.route('/adicionar').post(api.adiciona);
    app.route('/atualizarFramework/:frameworkId').put(api.atualizaFramework);
    app.route('/buscarFrameworkId/:frameworkId').get(api.buscaFramework)
    app.route('/buscarFramework').get(api.listaFramework);


    app.route('/atualizarLivro/:LivroId').put(api.atualizaLivro);
    app.route('/buscarLivroId/:LivroId').get(api.buscaLivro)
    app.route('/buscarLivro').get(api.listaLivro);
  

     app.route('/deletarLivro/:livroId').delete(api.removeLivro);
        
    
    app.all('/*', function(req, res) {
        res.sendFile(path.resolve('public/index.html'));
    });
};