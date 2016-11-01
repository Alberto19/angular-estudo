var db = require('../../config/database');

var api = {}

api.adiciona = function(req, res) {
    db.insert(req.body, function(err, newDoc) {
        if(err) return console.log(err);
        console.log('Adicionado com sucesso: ' + newDoc._id);
        res.json(newDoc._id);
    });  
};

api.atualizaFramework = function(req, res) {
    
    db.update({_id : req.params.frameworkId }, req.body, function(err, numReplaced) {
        if (err) return console.log(err);
        if(numReplaced) res.status(200).end();
        res.status(500).end();
        console.log('Atualizado com sucesso: ' + req.body._id);
        res.status(200).end();
    });  
};

api.buscaFramework = function(req, res) {
   db.findOne({_id: req.params.frameworkId }, function(err, doc) {
        if (err) return console.log(err);
        res.json(doc);
    });
};


api.listaFramework = function(req, res) {
    db.find({tipo:'framework'}).exec(function(err, doc) {
        if (err) return console.log(err);
        res.json(doc);
    });
};

api.removeFramework = function(req, res) {

    db.remove({ _id: req.params.frameworkId }, {}, function (err, numRemoved) {
        if (err) return console.log(err);
        console.log('removido com sucesso');
        if(numRemoved) res.status(200).end();
        res.status(500).end();
    });
};

///         Livros

api.atualizaLivro = function(req, res) {
    
    db.update({_id : req.params.livroId }, req.body, function(err, numReplaced) {
        if (err) return console.log(err);
        if(numReplaced) res.status(200).end();
        res.status(500).end();
        console.log('Atualizado com sucesso: ' + req.body._id);
        res.status(200).end();
    });  
};

api.buscaLivro = function(req, res) {
   db.findOne({_id: req.params.livroId }, function(err, doc) {
        if (err) return console.log(err);
        res.json(doc);
    });
};


api.listaLivro = function(req, res) {
    db.find({tipo:'livro'}).exec(function(err, doc) {
        if (err) return console.log(err);
        res.json(doc);
    });
};

api.removeLivro = function(req, res) {

    db.remove({ _id: req.params.livroId }, {}, function (err, numRemoved) {
        if (err) return console.log(err);
        console.log('removido com sucesso');
        if(numRemoved) res.status(200).end();
        res.status(500).end();
    });
};





module.exports = api;