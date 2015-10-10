'use strict';

angular.module('checkedUpApp')
    .controller('SideNavBarCtrl', function ($scope, $state){

        $scope.currentState = $state.current.name;

        $scope.navigate = function(state){
            $state.go(state);
        };

    });
