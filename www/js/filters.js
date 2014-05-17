define(['angular', 'services'], function (angular, services) {
    'use strict';

    /* Filters */

    angular.module('yllit.filters', ['yllit.services'])
        .filter('interpolate', ['version', function(version) {
            return function(text) {
                return String(text).replace(/\%VERSION\%/mg, version);
            };
        }])
        .filter('kilo', function() {
            return function(num, precision) {
                if (isNaN(parseFloat(num)) || !isFinite(num)) return '-';
                if (parseFloat(num) === 0) return '0';
                if (typeof precision === 'undefined') precision = 1;
                var units = ['', 'k', 'M', 'G'],
                    number = Math.floor(Math.log(num) / Math.log(1000));
                return (num / Math.pow(1000, Math.floor(number))).toFixed(precision) +  '' + units[number];
            }
        })
        .filter('bytes', function() {
            return function(bytes, precision) {
                if (isNaN(parseFloat(bytes)) || !isFinite(bytes)) return '-';
                if (parseFloat(bytes) === 0) return '0';
                if (typeof precision === 'undefined') precision = 1;
                var units = ['bytes', 'kB', 'MB', 'GB', 'TB', 'PB'],
                    number = Math.floor(Math.log(bytes) / Math.log(1024));
                return (bytes / Math.pow(1024, Math.floor(number))).toFixed(precision) +  '' + units[number];
            }
        });;
});