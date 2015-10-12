'use strict';

angular.module('checkedUpApp')
    .controller('DashboardCtrl', function ($scope, $mdToast, $stateParams) {

        $scope.showVideo = true;
        $scope.video_player = document.getElementById('video_player');
        $scope.video_player_icon = "play_arrow";

        $scope.toogleVideoPlayer = function() {

            if ($scope.video_player.paused){
                $scope.video_player_icon = "pause";
                $scope.video_player.play();
            }else{
                $scope.video_player_icon = "play_arrow";
                $scope.video_player.pause();
            }
        };

        $scope.init = function () {
            if ($stateParams.id) {
                //TODO: DO magic
            }
            $scope.video_player.onloadedmetadata = function () {
                $scope.showVideo = true;
            };
        };

        $scope.showActionToast = function() {
            var toast = $mdToast.simple()
                .content('Action Toast!')
                .action('OK')
                .highlightAction(false)
                .hideDelay(false)
                .parent(document.getElementById("content_dashboard"))
                .position('bottom');
            $mdToast.show(toast).then(function(response) {
                if ( response == 'ok' ) {
                    alert('You clicked \'OK\'.');
                }
            });
        };

    });
