var pupilApp = angular.module('pupilApp', ['ngRoute', 'ngAnimate', 'ngSanitize', 'ui.bootstrap']);

pupilApp.config(['$locationProvider', function ($locationProvider) {
    $locationProvider.hashPrefix('');
}]);

pupilApp.constant('__env', window.__env);