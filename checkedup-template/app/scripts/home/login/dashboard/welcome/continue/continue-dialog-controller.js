'use strict';

angular.module('checkedUpApp')
    .controller('ContinueDialogCtrl', function ($scope, $mdDialog){

        $scope.cancel = function() {
            $mdDialog.cancel();
        };

    });