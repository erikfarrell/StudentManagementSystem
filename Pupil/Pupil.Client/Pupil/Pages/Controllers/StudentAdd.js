pupilApp.controller('studentAddController', function ($scope, $http, $uibModalInstance) {
    var $ctrl = this;
    var studentForm;

    $scope.$watch('studentForm', function (form) {
        studentForm = form;
    });
    
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

    $ctrl.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
});