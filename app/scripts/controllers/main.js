(function() { 
    'use strict';
    
    /**
     * @ngdoc function
     * @name todoApp.controller:MainCtrl
     * @description
     * # MainCtrl
     * Controller of the todoApp
     */
    angular.module('todoApp')
      .controller('MainCtrl', function ($scope, localStorageService) {
          
        var todosInStore = localStorageService.get('todos');
        $scope.todos = todosInStore || [];
        $scope.addTodo = function() {
            $scope.todos.push($scope.task);
            localStorageService.set('todos', $scope.todos);
            $scope.task = '';
        };
        
        $scope.removeTodo = function(index) {
            $scope.todos.splice(index, 1);
            localStorageService.set('todos', $scope.todos);
        };
        
      });
}());
