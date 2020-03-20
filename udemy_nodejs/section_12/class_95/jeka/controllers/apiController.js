var Todos = require('../models/todoModel');
var bodyParser = require('body-parser');

// creating endpoints
module.exports = function(app) {
    
    // here we put some miiddleware to handle with json
    app.use(bodyParser.json());
    // and here to handle with url encoded
    app.use(bodyParser.urlencoded({
        extended: true
    }));

    app.get('/api/todos/:uname', function(req, res) {
        Todos.find({username: req.params.uname}, 
            function(err, todos){
                if (err) throw err;
                res.send(todos);
        });
    })

    app.get('/api/todo/:id', function(req, res) {
        // the property _id is automatically added by mongo for each document
        Todos.findById({_id: req.params.id}, 
            function(err, todo) {
                if (err) throw err;
                res.send(todo);
        });
    })

    app.post('/api/todo', function(req, res) {
        // if the id is informed
        if (req.body.id) {
            Todos.findByIdAndUpdate(
                req.body.id,
                {
                    todo: req.body.todo, 
                    isDone: req.body.isDone,
                    hasAttachment: req.body.hasAttachment
                },
                function(err, todo) {
                    if(err) throw err;
                    res.send('Updated!');
                }
            );
        } else {
            var newTodo = Todos({
                username: 'test',
                todo: req.body.todo, 
                isDone: req.body.isDone,
                hasAttachment: req.body.hasAttachment
            });
            newTodo.save(function(err){
                if(err) throw err;
                res.send('Created!');
            });
        }
    });

    app.delete('/api/todo/', function(req,res) {
        Todos.findByIdAndRemove(req.body.id, function(err){
            if (err) throw err;
            res.send('Deleted!');
        })
    });
}