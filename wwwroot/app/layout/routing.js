openBookApp.config(function ($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl: '/app/views/home.html',
            controller: 'homeCtrl'
        })
});