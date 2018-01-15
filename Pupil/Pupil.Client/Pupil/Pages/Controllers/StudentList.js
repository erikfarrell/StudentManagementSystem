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

pupilApp.controller('studentListController', function ($route, $scope, $http) {
    getStudents($scope, $http);

    $scope.delete = function (id) {
        if(confirm("Are you sure you wish to delete this record?"))
        {
            deleteStudent($scope, $http, $route, id);
        }
    }
});

pupilApp.controller('studentModalController', function ($route, $uibModal, $log, $document) {
    this.add = function () {
        var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: '/Pupil/Pages/Views/StudentDetail.html',
            controller: 'studentDetailController',
            controllerAs: '$ctrl',
            size: 'lg'
        }).closed.then(function () {
            $route.reload();
        });
    };

    this.edit = function (id) {
        var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: '/Pupil/Pages/Views/StudentDetail.html',
            controller: 'studentDetailController',
            controllerAs: '$ctrl',
            size: 'lg'
        }).closed.then(function () {
            $route.reload();
        });
    };
});

function getStudents($scope, $http)
{
    $http.get(__env.apiUrl.concat('/api/students'))
        .then(function (result) {
            $scope.students = result.data;
        })
        .catch(function (data) {
            alert('error getting students');
        });
}

function deleteStudent($scope, $http, $route, id)
{
    $http.delete(__env.apiUrl.concat('/api/students/delete/').concat(id))
        .then(function (result) {
            $route.reload();
        })
        .catch(function (data) {
            alert('error deleting student');
        });
}