define([
    'angular',
    'angularIonic',
    'controllers',
    'services',
    'filters',
    'timeAgo'
], function (angular) {
  // Ionic yllit App

  return angular.module('yllit', [
      'ionic',
      'yllit.services',
      'yllit.controllers',
      'yllit.filters',
      'yaru22.angular-timeago'
  ]);

});