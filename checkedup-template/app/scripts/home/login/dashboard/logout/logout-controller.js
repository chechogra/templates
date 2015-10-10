'use strict';

angular.module('checkedUpApp')
  .controller('logoutDialogCtrl', function ($scope,$state, $mdDialog){

    $scope.submit = function(){
        $state.go('login');
        $scope.$emit('modal', "Logged out successfully");
    };

    $scope.cancel = function() {
        $mdDialog.cancel();
    };

  });
