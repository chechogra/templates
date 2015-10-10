'use strict';

angular.module('checkedUpApp')        
	.controller('TermsDialogCtrl', function ($scope, $mdDialog){

		$scope.cancel = function() {
          $mdDialog.cancel();
        };
        
	});