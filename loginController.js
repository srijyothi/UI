talentScreen.controller('loginController', ['$scope', '$state', function ($scope, $state) {
    $scope.email = "",
        $scope.password = "",
        $scope.errorMessage = false;
 $scope.goTosignUp = function () {
      $state.go('/signup');
  };

    $scope.clickOnLogin = function () {
        if($scope.email === 'srijyothi@gmail.com' && $scope.password === 'Excellence@123') {
            $state.go('/dashboard');
        } else {
            $scope.errorMessage = true;
            setTimeout(function() {
                $('#mydiv').fadeOut('fast');
                $scope.errorMessage = false;
            }, 1000);
        }
    };


}]);