talentScreen.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider
        .otherwise('/login');
    $stateProvider
        .state('/login', {
            url: '/login',
            templateUrl: 'app/views/login.html'
        }) .state('/signup', {
            url: '/signup',
            templateUrl: 'app/views/signup.html'
        })
        .state('/dashboard', {
            url: '/dashboard',
            templateUrl: 'app/views/dashboard.html'
        })

}]);