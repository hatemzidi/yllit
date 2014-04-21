define(['angular', 'app'], function (angular, app) {
    'use strict';

    return app.config(function ($stateProvider, $urlRouterProvider) {

        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider

            // setup an abstract state for the tabs directive
            .state('tab', {
                url: "/tab",
                abstract: true,
                templateUrl: "templates/tabs.html"
            })

            // the pet tab has its own child nav-view and history
            .state('tab.posts-index', {
                url: '/posts',
                views: {
                    'posts-tab': {
                        templateUrl: 'templates/posts-index.html',
                        controller: 'WoSPostsIndexCtrl'
                    }
                }
            })

            .state('tab.post-detail', {
                url: '/post/:postId',
                views: {
                    'posts-tab': {
                        templateUrl: 'templates/post-detail.html',
                        controller: 'WoSPostDetailCtrl'
                    }
                }
            })

            .state('tab.map', {
                url: '/map/:postId',
                views: {
                    'posts-tab': {
                        templateUrl: 'templates/map.html',
                        controller: 'WoSMapCtrl'
                    }
                }
            })

            .state('tab.profile', {
                url: '/profile/:profileId',
                views: {
                    'profile-tab': {
                        templateUrl: 'templates/profile.html'
                    }
                }
            })

            .state('tab.camera', {
                url: '/camera',
                views: {
                    'camera-tab': {
                        templateUrl: 'templates/camera.html',
                        controller: 'WoSCamCtrl'
                    }
                }
            });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/tab/posts');

    })
});