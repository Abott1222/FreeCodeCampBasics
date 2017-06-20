(function () {

<<<<<<< HEAD
<<<<<<< HEAD
    function todoController($scope, $routeParams, todoProvider) {
        window.alert("routeParams is " + $routeParams.todo_id);
        $scope.finished_loading = false;
        $scope.page_load_error = null;

        recipeProvider.getTodoById($routeParams.id, function (err, todo) {
            $scope.finished_loading = true;
            if (err) {
                $scope.page_load_error = "Unable to load todo: " + JSON.stringify(err);
            } else {
                $scope.todoList = todo;
=======
    function todoController($scope, $routeParams, todoProvider) {
        window.alert("routeParams is " + $routeParams.todo_id);

        $scope.finished_loading = false;
        $scope.page_load_error = null;

        todoProvider.getRecipeById($routeParams.todo_id, function (err, todo) {
            $scope.finished_loading = true;
            if (err) {
                $scope.page_load_error = "Unable to load recipe: " + JSON.stringify(err);
            } else {
                $scope.todo = todo;
>>>>>>> b3d3d3ff64c61ac5cbb78c33ccd1f72de72d89df
            }
        });
    };

<<<<<<< HEAD
        todoApp.controller("todoController", ["$scope", "$routeParams", "todoProvider" ,todoController]);

}) ();



=======
    function todoController($scope, $routeParams) {
        window.alert("routeParams is " + $routeParams.todo_id);

        $scope.todoList = [
            {id: "Get better at programming", done: false, category: "programming"},
            {id: "Get better at programming 2", done: false, category: "adv. programming"}
        ];

        $scope.getTotalTodos = function() {
            return $scope.todoList.length;
        };

        var index;

         for(index in $scope.todoList) {
            if( $scope.todoList[index].category == $routeParams.todo_id) {
                break;
            }
         }

         $scope.todo = $scope.todoList[index];
    };

        todoApp.controller("todoController", ["$scope", "$routeParams", todoController]);

}) ();
>>>>>>> 36d78707cf60cb18a738bcac995bca456f7469be
=======
    todoApp.controller("todoController", ["$scope", "$routeParams", "todoProvider", todoController]);

}) ();
>>>>>>> b3d3d3ff64c61ac5cbb78c33ccd1f72de72d89df
