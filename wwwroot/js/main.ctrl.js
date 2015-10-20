angular.module('OpenBook').controller("MainController", function ($scope, $http) {
    var vm = this;

    vm.title = 'OpenBook';

    vm.snippetContent = '';
    vm.snippetAuthor = '';

    $http.get('http://localhost:49629/api/snippet').success(function (data, status, headers, config) {
        alert("successsssss");
        $scope.snippets = data;
    }).error(function (data, status, headers, config) {
        alert("Unable to get snippets");
    });

    $scope.submit = function()
    {   
        debugger;

        var snippet = {
            'SnippetContent': $scope.snippetContent,
            'SnippetAuthor': $scope.snippetAuthor
        }

        $http.post('http://localhost:49629/api/snippet', snippet, {
        }).success(function (data, status, headers, config) {
            alert("Snippet added successfully");
        }).error(function (data, status, headers, config) {
            alert("Error");
        });
    }
});

