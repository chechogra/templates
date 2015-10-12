'use strict';

angular.module('checkedUpApp')
    .controller('WelcomeCtrl', function ($scope, $mdDialog) {

        $scope.user = {};

        $scope.showContinueReading = function(ev) {
            $mdDialog.show({
                controller: 'ContinueDialogCtrl',
                templateUrl: 'scripts/home/login/dashboard/welcome/continue/continue.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                focusOnOpen: false,
                clickOutsideToClose:false,
                escapeToClose: false
            });
        };

        $scope.init = function (){
            $scope.showContinueReading();
        };

        $scope.continueLearning = function(){

        };

        $scope.startOver = function(){

        };
    });
