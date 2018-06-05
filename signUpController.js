talentScreen.controller('signUpController', ['$scope', '$state', function ($scope, $state) {
    $scope.data = "signup CONTROLLER";

    $scope.Login = function () {
        $state.go('/login');
    }
}]);