angular.module('OpenBook').controller("storyCtrl", function ($scope, $http) {
    var vm = this;

    $http.get('http://localhost:49629/api/story').success(function (data, status, headers, config) {
        alert("Got them stories bruh")
        $scope.story = data;
    }).error(function (data, status, headers, config) {
        alert("Unable to retrieve story");
    });

    vm.title = $scope.story;
});