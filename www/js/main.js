require.config({
    paths: {
        cordova: '../cordova',
        angular: '../lib/angular/angular',
        angularAnimate: '../lib/angular-animate/angular-animate',
        angularTouch: '../lib/angular-touch/angular-touch',
        angularSanitize: '../lib/angular-sanitize/angular-sanitize',
        uiRouter: '../lib/angular-ui-router/release/angular-ui-router',
        timeAgo : '../lib/angular-timeago/src/timeAgo',
        ionic: '../lib/ionic/js/ionic',
        angularIonic: '../lib/ionic/js/ionic-angular',
        async: '../lib/requirejs-plugins/src/async',
    },
    shim: {
        'angular': {'exports': 'angular'},
        'angularAnimate': ['angular'],
        'angularTouch': ['angular'],
        'angularSanitize': ['angular'],
        'uiRouter': ['angular'],
        'ionic': {'exports': 'ionic'},
        'angularIonic': ['angular', 'ionic', 'uiRouter', 'angularAnimate', 'angularTouch', 'angularSanitize']
    },
    priority: [
        "angular"
    ]
});

require([
    'cordova',
    'ionic',
    'angular',
    'app',
    'routes'
], function (cordova, ionic, angular, app, routes) {
    'use strict';

    var start = function () {
        angular.bootstrap(document, [app['name']]);
    }
        (document.body && device) ? start() : ionic.Platform.ready(start);

});
