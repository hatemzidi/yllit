define([
    'angular',
    'angularIonic',
    'controllers',
    'services',
    'filters',
    'timeAgo'
], function (angular) {
  // Ionic WoS App

  return angular.module('WoS', [
      'ionic',
      'WoS.services',
      'WoS.controllers',
      'WoS.filters',
      'yaru22.angular-timeago'
  ]);

});