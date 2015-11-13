var app = angular.module('todoApp',[]); // What's missing? Hint, it's more than one thing.

app.controller("TodosController", function($scope) { // What's missing?
  //$scope.name = null;
  $scope.todos = [{name:""}]; // Store todo items here. What is the data type?
  $scope.addTodo= function(newTodo) { // Rewrite to make this function abailable in your view
    // Add code here
    $scope.todos.push(newTodo);
    $scope.newTodo={};
    $scope.todoForm.$setPristine();
  };
  $scope.deleteAll = function( index) { // Rewrite to make this function abailable in your view
    // Add code here
    // $scope.name = null;

    $scope.todos.splice(index,1);
  };
});