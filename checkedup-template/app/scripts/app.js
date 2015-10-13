'use strict';

/**
 * @ngdoc overview
 * @name checkedUpApp
 * @description
 * # checkedUpApp
 *
 * Main module of the application.
 */
 angular.module('checkedUpApp', [
    'ngAnimate',
    'ngAria',
    'ngMessages',
    'ngRoute',
    'ui.router',
    'ngSanitize',
    'ngTouch',
    'ngMaterial',
    'ngMdIcons'])
 .config(function ($stateProvider , $locationProvider, $urlRouterProvider, $mdThemingProvider) {

         $mdThemingProvider.definePalette('Primary', {
             "50": "#e9f0f6",
             "100": "#bcd3e4",
             "200": "#90b6d2",
             "300": "#6a9dc2",
             "400": "#4584b3",
             "500": "#206ca4",
             "600": "#1c5f90",
             "700": "#184F80",
             "800": "#144467",
             "900": "#194976",
             "A100": "#bcd3e4",
             "A200": "#90b6d2",
             "A400": "#4584b3",
             "A700": "#18517b",
             'contrastDefaultColor': 'light',
             'contrastDarkColors': ['50', '100', '200', '300', 'A100', 'A200'],
             'contrastLightColors': undefined
         });
         $mdThemingProvider.definePalette('Accent', {
             "50": "#eaf7f1",
             "100": "#c0e8d6",
             "200": "#96d9bb",
             "300": "#73cca4",
             "400": "#50bf8d",
             "500": "#2db276",
             "600": "#279c67",
             "700": "#228659",
             "800": "#1c6f4a",
             "900": "#17593b",
             "A100": "#c0e8d6",
             "A200": "#96d9bb",
             "A400": "#50bf8d",
             "A700": "#228659",
             'contrastDefaultColor': 'light',
             'contrastDarkColors': ['50', '100', '200', '300', 'A100', 'A200'],
             'contrastLightColors': undefined
         });
         $mdThemingProvider.theme('checkedup').primaryPalette('Primary', {
             'hue-1': '100',
             'hue-2': '700',
             'hue-3': '900'
         }).accentPalette('Accent', {'default': '500'});
         $mdThemingProvider.setDefaultTheme('checkedup');

         $urlRouterProvider.otherwise('/');
         // $locationProvider.html5Mode(true);
         $stateProvider
             .state('dashboard', {
                 url: '/dashboard',
                 views: {
                     'content@': {
                         templateUrl: 'scripts/home/login/dashboard/dashboard.html',
                         controller: 'DashboardCtrl'
                     }
                 }
             })
             .state('welcome', {
                 url: '/dashboard/welcome',
                 views: {
                     'content@': {
                         templateUrl: 'scripts/home/login/dashboard/welcome/welcome.html',
                         controller: 'WelcomeCtrl'
                     }
                 }
             })
             .state('questions',{
                 url:'/dashboard/questions',
                 views: {
                     'content@': {
                         templateUrl:'scripts/home/login/dashboard/questions/question.html',
                         controller:'QuestionCtrl'
                     }
                 }
             })
             .state('preferences',{
                 url:'/dashboard/preferences',
                 views: {
                     'content@': {
                         templateUrl:'scripts/home/login/dashboard/preferences/preferences.html',
                         controller:'PreferencesCtrl'
                     }
                 }
             })
             .state('account', {
                 url: '/dashboard/account',
                 views: {
                     'content@': {
                         templateUrl: 'scripts/home/login/dashboard/account/account.html',
                         controller: 'AccountCtrl'
                     }
                 }
             })
             .state('register', {
                 url: '/register/:doctorCode',
                 views: {
                     'content@': {
                         templateUrl: 'scripts/home/register.html',
                         controller: 'RegisterCtrl'
                     }
                 }
             })
             .state('register-no-doctor', {
                 url: '/',
                 views: {
                     'content@': {
                         templateUrl: 'scripts/home/register.html',
                         controller: 'RegisterCtrl'
                     }
                 }
             })
             .state('login', {
                 url: '/login/user',
                 views: {
                     'content@': {
                         templateUrl: 'scripts/home/login/login.html',
                         controller: 'LoginCtrl'
                     }
                 }
             })
             .state('doctor', {
                 url: '/dashboard/doctor',
                 views: {
                     'content@': {
                         templateUrl: 'scripts/home/login/dashboard/doctor/doctor.html',
                         controller: 'DoctorCtrl'
                     }
                 }
             });

     });
