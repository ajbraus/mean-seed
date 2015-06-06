/*
 * ANGULAR APP.JS
 */

'use strict';

angular.module('myApp', ['ngResource', 
                         'ngRoute', 
                         'myApp.services',  
                         'myApp.controllers'])

<<<<<<< HEAD
  // .constant('HOST', 'http://localhost:1337') //DEV
  .constant('HOST', 'http://www.questioncookie.com') //PRODUCTION

  // .run(function(amMoment) {
  //   amMoment.changeLocale('de');
  // })
=======
  .constant('HOST', 'http://localhost:1337') //DEV
  // .constant('HOST', 'http://yourdomain.herokuapp.com') //PRODUCTION
>>>>>>> comments

  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'templates/todos-index'
      , controller: 'RoomIndexCtrl'
      })

      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
  }]);