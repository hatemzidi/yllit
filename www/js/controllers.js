define(['angular'], function (angular) {
    return angular.module('WoS.controllers', [])

        // get all data
        .controller('WoSPostsIndexCtrl', function ($scope, dataService) {
            $scope.posts = dataService.all();


            $scope.rightButtons = [{
                type: 'button-icon icon ion-plus',
                tap: function(e) {
                    $state.go('main.manageMember', { 'membersId' : 'new' });
                }
            }];


        })

        // get data for a given post
        .controller('WoSPostDetailCtrl', function ($scope, $stateParams, $ionicNavBarDelegate, dataService) {
            $scope.post = dataService.get($stateParams.postId);

            $scope.leftButtons = [{
                type: 'button-icon icon ion-home',
                tap: function(e) {
                    $state.go('main.home', { 'membersId' : 'new' });
                }
            }];

            $scope.back = function () {
                console.log('here')
                $ionicNavBarDelegate.back();
            };
        });
});
