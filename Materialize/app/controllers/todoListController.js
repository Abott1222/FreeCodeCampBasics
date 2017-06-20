(function () {

<<<<<<< HEAD
<<<<<<< HEAD
    function todoListController($scope, todoProvider) {

        //now need to wait. How to show diff UI while waiting
        //when $scope.finished_loading = false do ....
        $scope.new_recipe = { };
        $scope.add_todo_error = "";

        $scope.page_load_error = null;
        $scope.finished_loading = false;


        $scope.todoList =  todoProvider.getAllTodos(function (err, todos) {
            window.alert("attempting to load todos");
            $scope.finished_loading = true;
            if (err) {
                $scope.page_load_error = err.message;
                window.alert("error!");
            } else {
                $scope.todos = todos;
                window.alert("todos are loaded!");
            }                
        });


         $scope.addTodo = function (new_todo_data) {
            try {
                todoProvider.addTodo(new_todo_data);
            } catch(e) {
                $scope.add_todo_error = e.message;
            }

        };

        //$scope.getTotalTodos = function() {
            //return $scope.todoList.length;
        //};

        $scope.temp = {};

=======
    function todoListController($scope) {
        $scope.todoList = [
            {id: "Get better at programming", done: false, category: "programming"},
            {id: "Get better at programming 2", done: false, category: "adv. programming"}
        ];

        $scope.getTotalTodos = function() {
            return $scope.todoList.length;
        };

=======
    function todoListController($scope, todoProvider) {

        $scope.new_recipe = { };
        $scope.add_recipe_error = "";

        $scope.page_load_error = null;
        $scope.finished_loading = false;
        $scope.totalTodos = 0;

        //old non-async call
        //$scope.todoList = todoProvider.getAllTodos();

        $scope.todoList = todoProvider.getAllTodos(function(err, todos) {
            $scope.finished_loading = true;
            if(err) {
                $scope.page_load_error = err.message;
            } else {
                $scope.todoList = todos;
                //$scope.totalTodos = todos.length;
            }

        });

        /*
        Old non-sync add
>>>>>>> b3d3d3ff64c61ac5cbb78c33ccd1f72de72d89df
         $scope.addTodo = function (new_todo_data) {
            $scope.todoList.push({id:new_todo_data.id, done:false});
            $scope.formTodoText = " ";

        };
<<<<<<< HEAD

        $scope.temp = {};

        $scope.returnTodos = function() {
            return $scope.todoList.length;
        };

>>>>>>> 36d78707cf60cb18a738bcac995bca456f7469be
        //only deletes on at a time, how to get total nubmer of checked boxes?

=======
        */



        $scope.addTodo = function (todo_data) {
            try {
                recipeProvider.addRecipe(todo_data);
            } catch (e) {
                $scope.add_recipe_error = e.message;
            }

            // be sure to update our list of recipes.
            $scope.todos = todoProvider.getAllTodos();
        };


        /*
        //Hmm how can I add the asnyc version?
        //only deletes on at a time, how to get total nubmer of checked boxes?
>>>>>>> b3d3d3ff64c61ac5cbb78c33ccd1f72de72d89df
        $scope.clearCompleted = function() {
            angular.forEach($scope.todoList, function(value,index) {
                if(value.done== true) {
                    $scope.todoList.splice(index, 1);
                }
            });
        };
<<<<<<< HEAD
    };

<<<<<<< HEAD
        todoApp.controller("todoListController", ["$scope", "todoProvider", todoListController]);
=======
        todoApp.controller("todoListController", ["$scope", todoListController]);
>>>>>>> 36d78707cf60cb18a738bcac995bca456f7469be
=======
        */
    };

        todoApp.controller("todoListController", ["$scope", "todoProvider", todoListController]);
>>>>>>> b3d3d3ff64c61ac5cbb78c33ccd1f72de72d89df

}) ();

/*
todoApp.controller("todoListController", ["$scope", function($scope) {
    $scope.todoList = [
        {id: "Get better at programming", done: false},
        {id: "Get better at programming 2", done: false}
    ];

    $scope.getTotalTodos = function() {
        return $scope.todoList.length;
    };

     $scope.addTodo = function (new_todo_data) {
        $scope.todoList.push({id:new_todo_data.id, done:false});
        $scope.formTodoText = " ";

    };

    $scope.temp = {}

    $scope.returnTodos = function() {
        return $scope.todoList.length;
    };

    //if you delete this function it works...

    $scope.clearCompleted = function() {
        angular.forEach($scope.todoList, function(value,index) {
            if(value.done== true) {
                $scope.todoList.splice(index, 1);
            }
        });
    };



}]);

*/