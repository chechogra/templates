'use strict';

angular.module('checkedUpApp')
    .controller('LoginCtrl', function ($scope, $mdDialog, $state) {
        $scope.user = {};

        $scope.login = function(){

        };

        $scope.showTrouble = function(ev) {
            $mdDialog.show({
                controller: 'TermsDialogCtrl',
                templateUrl: 'scripts/home/login/trouble/trouble.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose:true
            });
        };

        $scope.showForgotPassword = function(ev) {
          $mdDialog.show({
            controller: 'ForgotPasswordDialogCtrl',
            templateUrl: 'scripts/home/login/forgot/forgot-password.html',
            parent: angular.element(document.body),
            focusOnOpen: false,
            targetEvent: ev,
            clickOutsideToClose:true
          });
        };

        $scope.goToRegister = function(){
            $state.go('register-no-doctor');
        };
    });
