define(['angular', 'services'], function(angular, services) {
    'use strict';

    /* Directives */

    angular.module('WoS.directives', ['WoS.services'])
        .directive('appVersion', ['version', function(version) {
            return function(scope, elm, attrs) {
                elm.text(version);
            };
        }]);
});