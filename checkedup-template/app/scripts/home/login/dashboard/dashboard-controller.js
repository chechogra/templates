'use strict';

angular.module('checkedUpApp')
    .controller('DashboardCtrl', function ($scope, $stateParams) {

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


        $scope.playPause = function () {
            if (videoPlayer.paused)
                videoPlayer.play();
            else
                videoPlayer.pause();
        };


    });
