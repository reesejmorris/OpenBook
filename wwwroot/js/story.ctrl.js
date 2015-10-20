angular.module('OpenBook').controller("StoryController", function ($scope, $http) {
    var vm = this;

    $http.get('http://localhost:49629/api/story/537aaabe-1370-455e-9921-90b2ba81cc44').success(function (data, status, headers, config) {
        alert("Got them stories bruh")
        $scope.story = data;
    }).error(function (data, status, headers, config) {
        alert("Unable to retrieve story");
    });

    vm.title = $scope.story;
});