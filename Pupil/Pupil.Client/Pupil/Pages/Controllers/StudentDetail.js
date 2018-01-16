pupilApp.controller('studentDetailController', 
    function ($scope, $http, $uibModalInstance, id) {
        var $ctrl = this;
        var studentForm;

        $scope.$watch('studentForm', function (form) {
            studentForm = form;
        });

        if (id) {
            getStudent($scope, $http, id);
            $ctrl.save = function (student) {
                if (studentForm.$valid) {
                    $http.post(__env.apiUrl.concat('/api/students/edit'), student)
                        .then(function (result) {
                            $scope.students = result.data;
                        })
                    .catch(function (data) {
                        alert('error editing student');
                    });

                    $uibModalInstance.close();
                }
            };
        }
        else {
            $ctrl.save = function (student) {
                if (studentForm.$valid) {
                    $http.post(__env.apiUrl.concat('/api/students/add'), student)
                        .then(function (result) {
                            $scope.students = result.data;
                        })
                    .catch(function (data) {
                        alert('error adding student');
                    });

                    $uibModalInstance.close();
                }
            };
        }        

        $ctrl.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
    }
);

function getStudent($scope, $http, id) {
    $http.get(__env.apiUrl.concat('/api/students/').concat(id))
        .then(function (result) {
            $scope.student = result.data;
        })
        .catch(function (data) {
            alert('error getting student');
        });
}