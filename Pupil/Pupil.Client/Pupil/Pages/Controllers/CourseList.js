pupilApp.config(function ($routeProvider) {
    $routeProvider.when('/courses', {
        templateUrl: '/Pupil/Pages/Views/CourseList.html',
        controller: 'courseListController'
    });
});

pupilApp.controller('courseListController', function ($scope) {
    $scope.message = 'Course Page!';
});