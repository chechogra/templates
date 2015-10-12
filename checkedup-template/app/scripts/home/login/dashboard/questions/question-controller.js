'use strict';

angular.module('checkedUpApp')
    .controller('QuestionCtrl', function ($scope, $state) {

        $scope.init = function(){

        };

        $scope.nextQuestion = function(){
            $scope.$emit('toast', 'Please select an answer to this question');
        };

        $scope.selectAnswer = function(answer){

        };


        $scope.prevQuestion = function(){
        };

        $scope.goNextModule = function(){

        };

    });
