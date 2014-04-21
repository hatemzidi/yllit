define(['angular', 'app'], function (angular, app) {
    'use strict';

    return app.config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider

            // setup an abstract state for the tabs directive
            .state('tab', {
                url: "/tab",
                abstract: true,
                templateUrl: "templates/tabs.html"
            })

            .state('tab.posts-index', {
                url: '/posts',
                views: {
                    'posts-tab': {
                        templateUrl: 'templates/posts-index.html',
                        controller: 'WoSPostsIndexCtrl'
                    }
                }
            })

            .state('tab.posts-thumbs', {
                url: '/posts',
                views: {
                    'posts-tab': {
                        templateUrl: 'templates/posts-thumbs.html',
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
                url: '/profile',
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