define([
    'angular',
    'angularIonic',
    'controllers',
    'services'
], function (angular) {
  // Ionic WoS App

  return angular.module('starter', [
      'ionic',
      'WoS.services',
      'WoS.controllers'
  ]);

});