// reuires the model that works with the db configured
var Todos = require('../models/todoModel');

// takes the express app
module.exports = function(app){
    app.get('/api/setupTodos', function(req, res){
        
        // seed database
        var starterTodos = [
            {
                username: 'test',
                todo: 'Comprar leite',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'test',
                todo: 'Comprar ovos',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'test',
                todo: 'Alimentar o Dan',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'test',
                todo: 'Alimentar Felipe',
                isDone: false,
                hasAttachment: false
            }
        ];

        Todos.create(starterTodos, function(err, results){
            res.send(results);
        });
    });
}