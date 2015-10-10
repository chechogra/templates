'use strict';

angular.module('checkedUpApp')
    .controller('ToolBarCtrl', function ($scope){

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

    });
