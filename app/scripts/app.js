'use strict';

/**
 * @ngdoc overview
 * @name todoApp
 * @description
 * # todoApp
 *
 * Main module of the application.
 */
angular
  .module('todoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'LocalStorageModule'
  ])
  .config(function (localStorageServiceProvider) {
      localStorageServiceProvider.setPrefix('ls');
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'mainID', // 'views/main.html'
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'aboutID', // 'views/about.html'
        controller: 'AboutCtrl'
      })
      .when('/contact', {
        templateUrl: 'contactID' // 'views/contact.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
