angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('getStarted', {
    url: '/page1',
    templateUrl: 'templates/getStarted.html',
    controller: 'getStartedCtrl'
  })

  .state('whatDoesTheDoctorSayToYou', {
    url: '/page4',
    templateUrl: 'templates/whatDoesTheDoctorSayToYou.html',
    controller: 'whatDoesTheDoctorSayToYouCtrl'
  })

  .state('getWellSoon', {
    url: '/page12',
    templateUrl: 'templates/getWellSoon.html',
    controller: 'getWellSoonCtrl'
  })

  .state('doctorSReminders', {
    url: '/page7',
    templateUrl: 'templates/doctorSReminders.html',
    controller: 'doctorSRemindersCtrl'
  })

  .state('lOGIN', {
    url: '/page8',
    templateUrl: 'templates/lOGIN.html',
    controller: 'lOGINCtrl'
  })

  .state('page', {
    url: '/page10',
    templateUrl: 'templates/page.html',
    controller: 'pageCtrl'
  })

  .state('rEGISTERNOW', {
    url: '/page9',
    templateUrl: 'templates/rEGISTERNOW.html',
    controller: 'rEGISTERNOWCtrl'
  })

$urlRouterProvider.otherwise('/page1')

  

});