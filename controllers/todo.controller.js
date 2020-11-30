const todoModelRepository = require('../models/repository/todo.repository');
const resErr = require('../models/resError');

module.exports = {
    createTodoController: (req, res, next) => {
        var data = req.body;
        try {
            todoModelRepository.createTodo(data).then(docs => {
                res.status(200).json(docs);
            }).catch(err => {
                throw resErr(400, "Bad request");
            })
        } catch (err) {
            throw resErr(500, "Unexpected error");
        }
    },
    getAllTodoController: (req, res, next) => {
        try {
            todoModelRepository.getAllTodo().then(docs => {
                res.status(200).json(docs);
            }).catch(err => {
                throw resErr(400, "Bad request");
            })
        } catch (err) {
            throw resErr(500, "Unexpected error");
        }
    },
    getOneTodoController: (req, res, next) => {
        var id = req.params.id;
        try {
            todoModelRepository.getOneTodo(id).then(docs => {
                res.status(200).json(docs)
            }).catch(err => {
                throw resErr(400, "Bad request");
            })
        } catch (err) {
            throw resErr(500, "Unexpected error");
        }
    },
    updateTodoController: (req, res, next) => {
        var id = req.params.id;
        var data = req.body;
        try {
            todoModelRepository.updateTodo(id, data).then(docs => {
                res.status(200).json(docs);
            }).catch(err => {
                throw resErr(400, "Bad request");
            })
        } catch (err) {
            throw resErr(500, "Unexpected error");
        }
    },
    deleteTodoController: (req, res, next) => {
        var id = req.params.id;
        var data = req.body;
        try {
            todoModelRepository.deleteTodo(id, data).then(docs => {
                res.status(200).json(docs);
            }).catch(err => {
                throw resErr(400, "Bad request");
            })
        } catch (err) {
            throw resErr(500, "Unexpected error");
        }
    },
    searchTodoController: (req, res, next) => {
        console.log("Searching");
        var q = req.query.q;
        console.log("q in controller", q);
        try {
            todoModelRepository.searchTodo(q).then(docs => {
                res.status(200).json(docs);
            }).catch(err => {
                throw resErr(400, "Bad request");
            })
        } catch (err) {
            throw resErr(500, "Unexpected error");
        }
    }
};