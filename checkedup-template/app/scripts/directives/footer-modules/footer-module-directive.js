'use strict';

angular.module('checkedUpApp')
    .directive('footerModule', function() {
        return {
          restrict: 'A',
          templateUrl: 'scripts/directives/footer-modules/footer-module.html',
          controller:'FooterModuleCtrl'
        };

    });
