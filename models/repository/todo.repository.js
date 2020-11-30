const todoModel = require('../todo.model');
const resErr = require('../resError');

module.exports = {
    createTodo: async(data) => {
        if (!data) {
            throw resErr(400, " Invalid data")
        }
        try {
            var createSeedTodo = new todoModel(data);

            var result = await createSeedTodo.save();
            return result;
        } catch (err) {
            throw resErr(500, "Unexpected error");
        }
    },
    getAllTodo: async() => {
        try {
            var result = await todoModel.find();
            return result;
        } catch (err) {
            throw resErr(500, "Unexpected error");
        }
    },
    getOneTodo: async(id) => {
        if (!id) {
            throw resErr(400, "Invalid data");
        }
        try {
            var result = await todoModel.findById(id);
            return result;
        } catch (err) {
            throw resErr(500, "Unexpected error");
        }
    },
    updateTodo: async(id, data) => {
        if (!data) {
            throw resErr(400, "Invalid data");
        }
        try {
            var result = await todoModel.findByIdAndUpdate(id, data);
            return result;
        } catch (err) {
            throw resErr(500, "Unexpected error");
        }
    },
    deleteTodo: async(id, data) => {
        if (!data) {
            throw resErr(400, "Invalid data");
        }

        try {
            var result = await todoModel.findByIdAndRemove(id, data);
            return result;
        } catch (err) {
            throw resErr(500, "Unexpected error");
        }
    },
    searchTodo: async(q, condition) => {
        console.log('q in repository', q);
        var condition = {
            text: {
                $regex: q,
                $options: "$i" // tuy chon khong phan biet kieu chu
            }
        }

        try {
            var result = await todoModel.find(condition);
            return result;
        } catch (err) {
            throw resErr(500, "Unexpected error");
        }
    }
};