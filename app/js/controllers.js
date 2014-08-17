'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('MyCtrl1', ['$scope', function($scope) {
        $scope.Test=function(){

            console.log($scope.Classes);
            console.log($scope.ProjectName);
        }

  }])
  .controller('MyCtrl2', ['$scope', function($scope) {

  }]);
