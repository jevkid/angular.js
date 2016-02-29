'use strict';

var homePage = angular.module('homePage', []);

homePage.controller('TestCtrl', function($scope, $http) {
  $http.get('names/names.json').success(function(data) {
    $scope.names = data;
  });

  $scope.orderBy = 'age';
});
//
//homePage.controller('NameCtrl', ['$scope', '$routeParams',
//  function($scope, $routeParams) {
//    $scope.nameId = $routeParams.nameId;
//  }]);
