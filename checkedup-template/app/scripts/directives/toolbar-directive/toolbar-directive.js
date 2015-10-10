'use strict';

angular.module('checkedUpApp')
    .directive('toolBar', function() {
        return {
            restrict: 'A',
            templateUrl: 'scripts/directives/toolbar-directive/toolbar.html',
            controller:'ToolBarCtrl'
        };

    });
