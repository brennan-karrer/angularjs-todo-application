(function() { 
    'use strict';
    
    /**
     * @ngdoc function
     * @name todoApp.controller:HeaderCtrl
     * @description
     * # HeaderCtrl
     * Controller of the todoApp
     */
    angular.module('todoApp')
      .controller('HeaderCtrl', ['$scope', '$location', function ($scope, $location) {
          
          $scope.isActive = function(viewLocation) {
              return viewLocation === $location.path();
          };
          
      }]);
}());