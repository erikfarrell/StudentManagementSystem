//TODO: Working here
pupilApp.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: '/Pupil/Pages/Views/StudentList.html',
        controller: 'studentListController'
    })

    $routeProvider.when('/students', {
        templateUrl: '/Pupil/Pages/Views/StudentList.html',
        controller: 'studentListController'
    });
});

pupilApp.controller('studentListController', function ($scope) {
    $scope.message = 'Student Page!';
});