'use strict';

angular.module('checkedUpApp')
    .controller('WelcomeCtrl', function ($scope, $mdDialog, $state) {

        $scope.user = {};

        $scope.showContinueReading = function($event) {
            $mdDialog.show({
                controller: 'ContinueDialogCtrl',
                templateUrl: 'scripts/home/login/dashboard/welcome/continue/continue.html',
                parent: angular.element(document.body),
                focusOnOpen: false,
                scope: $scope,
                targetEvent: $event,
                clickOutsideToClose:false,
                escapeToClose: false
            });
        };

        $scope.showPrograms = function($event) {
            $mdDialog.show({
                controller: 'ProgramsDialogCtrl',
                templateUrl: 'scripts/home/login/dashboard/welcome/programs/programs.html',
                parent: angular.element(document.body),
                focusOnOpen: false,
                targetEvent: $event,
                scope: $scope,
                clickOutsideToClose:false,
                escapeToClose: false
            });
        };

        $scope.init = function ($event){
            $scope.showContinueReading($event);
        };

        $scope.continueLearning = function($event){
            $mdDialog.hide();
            $scope.showPrograms($event);
        };

        $scope.startOver = function($event){
            $mdDialog.hide();
            $state.go('dashboard');
        };


    });
