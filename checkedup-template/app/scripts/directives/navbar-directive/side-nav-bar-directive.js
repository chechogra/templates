'use strict';

angular.module('checkedUpApp')
    .directive('sideNav', function() {
        return {
          restrict: 'E',
          templateUrl: 'scripts/directives/navbar-directive/side-nav-bar.html',
          controller:'SideNavBarCtrl'
        };

    });
