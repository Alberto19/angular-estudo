var api = require('../api'),
    path = require('path');

module.exports  = function(app) {
    
    app.route('/adicionar').post(api.adiciona);

    app.route('/atualizarFramework/:frameworkId').put(api.atualizaFramework);
    app.route('/buscarFrameworkId/:frameworkId').get(api.buscaFramework)
    app.route('/buscarFramework').get(api.listaFramework);
    app.route('/remover/:frameworkId').delete(api.removeFramework);

    app.route('/atualizarLivro/:livroId').put(api.atualizaLivro);
    app.route('/buscarLivroId/:livroId').get(api.buscaLivro)
    app.route('/buscarLivro').get(api.listaLivro);
  

     app.route('/deletarLivro/:livroId').delete(api.removeLivro);
        
    
    app.all('/*', function(req, res) {
        res.sendFile(path.resolve('public/index.html'));
    });
};