'use strict';

angular.module('checkedUpApp')
  .controller('ForgotPasswordDialogCtrl', function ($scope, $mdDialog){

    $scope.user = {};

    $scope.submit = function(){
        if ($scope.forgotPasswordForm.$invalid) {
            return;
        };
    };

    $scope.cancel = function() {
        $mdDialog.cancel();
    };

  });
