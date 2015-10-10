'use strict';

angular.module('checkedUpApp')
    .controller('FooterModuleCtrl', function ($scope, $state){
        $scope.modules = [];

        $scope.init = function () {
            initModulesArray();
        };

        function initModulesArray(){

        }

        $scope.viewModule = function(module){
            // ModuleService.setCurrentModule(module);
            $state.go('module', {
                id:module.id
            });
        };

    });
