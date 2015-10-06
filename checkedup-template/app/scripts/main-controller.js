'use strict';

angular.module('checkedUpApp')
    .controller('MainCtrl', function ($scope, $rootScope, $mdDialog, $mdSidenav,  $mdToast, $state) {

        $rootScope.$on('toast', function (event, alert) {
            $mdToast.show(
                $mdToast.simple()
                    .content(alert)
                    .position('top right')
                    .hideDelay(3000)
            );
        });

        $rootScope.$on('modal', function (event, alert){
            $mdDialog.show(
                $mdDialog.alert()
                    .clickOutsideToClose(true)
                    .content(alert)
                    .ok('Got it!')
                    .targetEvent(event)
            );
        });

        $scope.toggleSidenav = function (menuId) {
            $mdSidenav(menuId).toggle();
        };

        $scope.getUser = function () {
            var user = angular.fromJson(sessionStorage.user);
            var userToSend = {};
            userToSend.firstName = user.firstName;
            userToSend.lastName = user.lastName;
            return userToSend;
        };

        $scope.logout = function(ev){
            $mdDialog.show({
                controller: 'logoutDialogCtrl',
                templateUrl: 'scripts/home/login/dashboard/logout/logout.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose:true
            });
        };

    });
