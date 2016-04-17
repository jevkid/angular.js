var homePage = angular.module('homePage', []);

homePage.controller('TestCtrl', function ($scope, $http) {
  $http.get('data/temperature.json').success(function(data) {
    $scope.temp = data;
  })
  $http.get('data/test.json').success(function(testData) {
    $scope.temp = testData;
  })
})

