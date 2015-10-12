'use strict';

angular.module('checkedUpApp')
    .controller('ProgramsDialogCtrl', function ($scope, $mdDialog){

        $scope.cancel = function() {
            $mdDialog.cancel();
        };

    });