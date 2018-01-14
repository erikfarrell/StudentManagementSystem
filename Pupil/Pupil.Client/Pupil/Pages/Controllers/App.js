var pupilApp = angular.module('pupilApp', ['ngRoute', 'ui.bootstrap']);

pupilApp.config(['$locationProvider', function ($locationProvider) {
    $locationProvider.hashPrefix('');
}]);