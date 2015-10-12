'use strict';

angular.module('checkedUpApp')
    .controller('DashboardCtrl', function ($scope, $mdToast, $stateParams) {

        var videoPlayer = document.getElementById("video_player");
        $scope.showVideo = true;

        $scope.init = function () {
            if ($stateParams.id) {
                //TODO: DO magic
            }
            videoPlayer.onloadedmetadata = function () {
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


        $scope.playPause = function () {
            if (videoPlayer.paused)
                videoPlayer.play();
            else
                videoPlayer.pause();
        };


    });
