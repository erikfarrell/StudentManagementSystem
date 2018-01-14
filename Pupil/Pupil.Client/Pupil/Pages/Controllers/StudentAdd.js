pupilApp.config(function ($routeProvider) {
    $routeProvider.when('/students/add', {
        templateUrl: '/Pupil/Pages/Views/StudentAdd.html',
        controller: 'studentAddController'
    });
});

pupilApp.controller('studentAddController', function ($scope) {
    $scope.message = 'Student Add!';
});