pupilApp.config(function ($routeProvider) {
    $routeProvider.when('/about', {
            templateUrl: '/Pupil/Pages/Views/About.html',
            controller: 'aboutController'
        });
});

pupilApp.controller('aboutController', ['$scope', 
    function ($scope) {
    $scope.message = 'Erik Farrell - January 2017';
    }
]);