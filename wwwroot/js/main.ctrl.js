angular.module('OpenBook').controller("MainController", function ($scope, $http) {
    var vm = this;

    vm.title = 'OpenBook';

    vm.snippetContent = '';
    vm.snippetAuthor = '';

    $http.get('http://openbookapi.azurewebsites.net/api/snippet').success(function (data, status, headers, config) {
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

        $http.post('http://openbookapi.azurewebsites.net/api/snippet', snippet, {
        }).success(function (data, status, headers, config) {
            alert("Snippet added successfully");
        }).error(function (data, status, headers, config) {
            alert("Error");
        });
    }
});

