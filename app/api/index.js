var db = require('../../config/database');

var api = {}

api.adiciona = function(req, res) {
    
    db.insert(req.body, function(err, newDoc) {
        if(err) return console.log(err);
        console.log('Adicionado com sucesso: ' + newDoc._id);
        res.json(newDoc._id);
    });  
};

api.busca = function(req, res) {
   db.findOne({_id: req.params.Id }, function(err, doc) {
        if (err) return console.log(err);
        res.json(doc);
    });
};

api.atualiza = function(req, res) {
    
    db.update({_id : req.params.Id }, req.body, function(err, numReplaced) {
        if (err) return console.log(err);
        if(numReplaced) res.status(200).end();
        res.status(500).end();
        console.log('Atualizado com sucesso: ' + req.body._id);
        res.status(200).end();
    });  
};

api.lista = function(req, res) {
    db.find({}).exec(function(err, doc) {
        if (err) return console.log(err);
        res.json(doc);
    });
};

api.remove = function(req, res) {

    db.remove({ _id: req.params.frameworkId }, {}, function (err, numRemoved) {
        if (err) return console.log(err);
        console.log('removido com sucesso');
        if(numRemoved) res.status(200).end();
        res.status(500).end();
    });
};

api.listaPorTecnologia = function(req, res) {
    var tecnologiaId = parseInt(req.params.Id);
    db.find({tecnologia: tecnologiaId}, function(err, doc) {
        if (err) return console.log(err);
        res.json(doc);
    });
};

api.listaPorTecnologias = function(req, res) {

    res.json([
        {
            _id: 1, 
            nome: 'AngularJS'
        }, 
        { 
            _id: 2, 
            nome: 'Bower', 
        }, 
        { 
            _id: 3, 
            nome: 'Gulp'
        },
         { 
            _id: 4, 
            nome: 'Jasmine'
        }
    ]);   
};


module.exports = api;