var controllers = angular.module('myApp.controllers', []);

controllers.controller('MainController', ['$scope', '$rootScope', '$location', function($scope, $rootScope, $location) {
    $scope.advance = function() {
        var formEntry = $scope.pally;
        $rootScope.palindrome = formEntry;
        if (formEntry == null || formEntry == '') {
            alert('You must enter something!');
        }
        else {
            $location.path('/palindrome');
        }
    }
}])

controllers.controller('PallyController', ['$scope', '$rootScope', function($scope, $rootScope) {
    $scope.reversePalindrome = function(param) {
        var temp = '';
        var i = param.length;

        while (i > 0) {
            temp += param.substring(i - 1, i);
            i--;
        }
        return temp;
    }
    var reversed = $rootScope.palindrome;
    var result = $scope.reversePalindrome(reversed);
    $scope.reversedPally = result;
    $scope.para = '';
    $scope.paraTwo = '';
    
    $scope.checker = function () {
        if (reversed === result) {
            $scope.para = 'This word is a palindrome';
        }
        else {
            $scope.para = 'This word is not a palindrome';
        }
    }
    $scope.checker();
}])