'use strict';

angular.module('checkedUpApp')
	.controller('RegisterCtrl', function ($scope, $rootScope, $mdDialog, $state, $stateParams) {
        $scope.user = {};
        $scope.doctor = {};

        $scope.init = function(){
            $scope.user = {
                agreedToTou : false
            };
            if($stateParams.doctorCode === ''){
                $state.go('login');
            }
        };

        $scope.register = function(){
            if (!$scope.registerForm.$valid || !$scope.user.agreedToTou) {
                alert('Invalid Form');
                return;
            };
        };

        $scope.showTerms = function(ev) {
          $mdDialog.show({
            controller: 'TermsDialogCtrl',
            templateUrl: 'scripts/home/terms/terms.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true
          });
        };

        $scope.goToLogin = function(){
            $state.go('login');
        };

	});
