define([
    'angular',
    'angularIonic',
    'controllers',
    'services',
    'timeAgo'
], function (angular) {
  // Ionic WoS App

  return angular.module('WoS', [
      'ionic',
      'WoS.services',
      'WoS.controllers',
      'yaru22.angular-timeago'
  ]);

});