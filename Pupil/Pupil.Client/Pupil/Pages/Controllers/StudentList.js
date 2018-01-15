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

pupilApp.controller('studentListController', function ($uibModal, $log, $document) {
    this.open = function (size, parentSelector) {
        var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: '/Pupil/Pages/Views/StudentAdd.html',
            controller: 'studentAddController',
            controllerAs: '$ctrl',
            size: size
        });
    };
});