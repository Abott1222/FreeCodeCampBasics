(function () {

<<<<<<< HEAD
    //needs http to request from server
    function todoProvider ($http) {

        this._server_host = "";

        //notice async now bc of node?
        //go to node server and give v1/recipes.json and tell me when done
        this.getAllTodos = function (callback) {
            window.alert("in provider get todos");
            window.alert("here is the host server");
            $http.get(this._server_host + "/v1/todos.json")
                .success(function (data, status, headers, conf) {
                    window.alert("provider-todos are loaded!");
                    callback(null, data); //always error and responce pattern
                })
                //if it goes wrong the data is the error
                .error(function (data, status, headers, conf) {
                    window.alert("provider error");
=======
    function todoProvider($http) {

        this._server_host = "";

        this.getAllTodos = function (callback) {
            $http.get(this._server_host + "/v1/todoList.json")
                .success(function (data, status, headers, conf) {
                    callback(null, data);
                })
                .error(function (data, status, headers, conf) {
>>>>>>> b3d3d3ff64c61ac5cbb78c33ccd1f72de72d89df
                    callback(data);
                });
        };

<<<<<<< HEAD
        this.addTodo = function (recipe_data) {
        };


        this.getTodoById = function (id, callback) {
            //get from server host
            $http.get(this._server_host + "/v1/todos/" + id + ".json")
=======

        this.addRecipe = function (recipe_data) {
        };

        this.getTodoById = function (todo_id) {
            console.log("Made it to getTodoById");
            console.log("Todo id is: " + todo_id);
            $http.get(this._server_host + "/v1/todoList/" + todo_id + ".json")
>>>>>>> b3d3d3ff64c61ac5cbb78c33ccd1f72de72d89df
                .success(function (data, status, headers, conf) {
                    callback(null, data);
                })
                .error(function (data, status, headers, conf) {
                    callback(data);
                });
        };
<<<<<<< HEAD
                
    }

    
    todoApp.service("todoProvider", [ "$http", todoProvider ]);

})();
=======
        /*
        this.getUniqueRecipeId = function(todo_data) {
            if (!todo_data.name) {
                return undefined;
            }
            
            var proposed_id = todo_data.id.split(" ").join("_")
                + "" + (new Date().getTime());
            var unique = false;
            while (!unique) {
                var i;
                for (i = 0; i < todoList.length; i++) {
                    if (todoList[i].id == proposed_id) {
                        break;
                    }
                }

                if (i == todoList.length) {
                    unique = true;
                } else {
                    proposed_id = proposed_id + "" + (new Date().getTime());
                }
            }

            return proposed_id;
        };
        */

    }

    todoApp.service("todoProvider", todoProvider);
}) ();
>>>>>>> b3d3d3ff64c61ac5cbb78c33ccd1f72de72d89df
