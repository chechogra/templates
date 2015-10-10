'use strict';

angular.module('checkedUpApp')
    .controller('AccountCtrl', function ($scope) {

        $scope.init = function(){

        };

        $scope.deletePatient = function(){

        };

        $scope.updatePatient = function(accountForm){
            if (accountForm.$invalid) {
                return;
            };
        };
    });
