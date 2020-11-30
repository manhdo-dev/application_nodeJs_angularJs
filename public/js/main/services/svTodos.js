var app = angular.module("app.todos");

app.factory("svTodos", ["$http", function($http) {
    return {
        create: function(todoData) {
            return $http.post("/todos", todoData);
        },
        get: function() {
            return $http.get("/todos");
        },
        getOne: function(id, todoData) {
            return $http.get("/todos/" + id, todoData);
        },
        search: function(id) {
            return $http.get("/search/todos?=", id);
        },
        update: function(id, todoData) {
            return $http.put("/todos/" + id, todoData);
        },
        delete: function(id) {
            return $http.delete("/todos/" + id);
        }
    }
}]);