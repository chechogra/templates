'use strict';

angular.module('checkedUpApp')
    .controller('AccountCtrl', function ($scope, $mdDialog) {

        $scope.init = function(){

        };

        $scope.showDeleteAccoount = function($event) {
            //TODO fix prevent default (only works the first time)
            $event.preventDefault();
            $mdDialog.show({
                controller: 'AccountCtrl',
                templateUrl: 'scripts/home/login/dashboard/account/delete/delete-patient.html',
                parent: angular.element(document.body),
                focusOnOpen: false,
                scope: $scope,
                targetEvent: $event,
                clickOutsideToClose:true,
                escapeToClose: true
            });
        };

        $scope.deletePatient = function($event){
            $mdDialog.hide();
        };

        $scope.cancel = function($event){
            $mdDialog.hide();
        };

        $scope.updatePatient = function(accountForm){
            if (accountForm.$invalid) {
                return;
            };
        };
    });
