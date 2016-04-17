var homePage = angular.module('homePage' [
  'ngRoute',
  'TestCtrl'
  ]);

homePage.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/names', {
        templateUrl: 'partials/name-list.html',
        controller: 'TestCtrl'
    }).
      when('/names/:nameId', {

    })
  }
])
