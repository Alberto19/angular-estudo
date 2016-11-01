var api = require('../api'),
    path = require('path');

module.exports  = function(app) {
    
    app.route('/adicionar').post(api.adiciona);
    app.route('/buscar/framework').get(api.listaFramework);
    app.route('/buscar').get(api.lista);

    app.route('/deletar/:Id').delete(api.remove);
    app.route('/buscarPorId/:Id').get(api.busca)
    app.route('/atualizar/:frameworkId').put(api.atualiza);

    app.get('/tecnologias', api.listaPorTecnologias)
    app.get('/tecnologiasId/:Id', api.listaPorTecnologia);
        

    // habilitando HTML5MODE
    app.all('/*', function(req, res) {
        res.sendFile(path.resolve('public/index.html'));
    });
};