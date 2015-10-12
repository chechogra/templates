'use strict';

angular.module('checkedUpApp')
    .controller('QuestionCtrl', function ($scope, $state, $stateParams, FILE_SERVER, ModuleService, PatientService) {
        $scope.questions = [];
        $scope.currentQuestion = 0;
        $scope.answers;
        $scope.selectedAnswer = null;

        $scope.init = function(){
            if ($stateParams.id) {
                $scope.currentModule = ModuleService.getModule($stateParams.id);
                ModuleService.setCurrentModule($scope.currentModule);
                $scope.questions = $scope.currentModule.questions;
                $scope.answers = $scope.questions[$scope.currentQuestion].answers;
                angular.forEach($scope.answers, function(answer, key){
                    var uri = answer.image.split('/media')[1]
                    if(uri){
                        $scope.answers[key].image = FILE_SERVER + uri;
                    }
                    $scope.answers[key].selected = false;
                });


            }
        };

        $scope.nextQuestion = function(){
            if($scope.selectedAnswer){
                if ($scope.currentQuestion < $scope.questions.length-1) {
                    $scope.answers = $scope.questions[$scope.currentQuestion].answers;
                    PatientService.answerQuestion($scope.questions[$scope.currentQuestion],$scope.selectedAnswer);
                    $scope.currentQuestion++;
                    ModuleService.nextQuestion($scope.currentQuestion);
                    $scope.init();
                }else{
                    PatientService.answerQuestionAndCompleteModule(ModuleService.getModule($stateParams.id), $scope.questions[$scope.currentQuestion],$scope.selectedAnswer);
                    ModuleService.nextQuestion(++$scope.currentQuestion);
                    $scope.goNextModule();
                    return;
                }
            }else{
                $scope.$emit('toast', 'Please select an answer to this question');
            }


        };

        $scope.selectAnswer = function(answer){
            angular.forEach($scope.answers, function(ans, key){
                if (answer.id == ans.id) {
                    $scope.answers[key].selected = true;
                }else{
                    $scope.answers[key].selected = false;
                }
            });
            $scope.selectedAnswer = answer;
        };


        $scope.prevQuestion = function(){
            ModuleService.prevVideo();
            $state.go('module', {
                id:$stateParams.id
            });
        };

        $scope.goNextModule = function(){
            var modules = ModuleService.getModules();
            var moreModules = false;
            var stateToGo;
            angular.forEach(modules, function(module, key){
                if(module.id == $stateParams.id){
                    if(key + 1 < modules.length){
                        stateToGo = modules[key+1].id;
                        moreModules = true;
                    }
                }
            });
            if(moreModules){
                $state.go('module', {
                    id:stateToGo
                });
            }else{
                $state.go('account');
            }
        };

    });
