define(['angular', 'async!http://maps.google.com/maps/api/js?key=AIzaSyB16sGmIekuGIvYOfNoW9T44377IU2d2Es&sensor=false!callback'], function (angular) {
    return angular.module('WoS.controllers', [])


        .controller('WoSTabsCtrl', function ($scope, $state, $ionicNavBarDelegate) {
            $scope.goPosts = function () {
                $state.go('tab.posts-index');
            }

            $scope.goBack = function () {
                $ionicNavBarDelegate.back();
            }
        })

        // get all data
        .controller('WoSPostsIndexCtrl', function ($scope, $state, $timeout, dataService) {
            $scope.posts = dataService.all();

            $scope.getMap = function () {
                $state.go('tab.map');
            };

            $scope.doRefresh = function() {

                console.log('Refreshing!');
                $timeout( function() {

                    $scope.posts = dataService.all();
                    //Stop the ion-refresher from spinning
                    $scope.$broadcast('scroll.refreshComplete');

                }, 1000);

            };
        })

        // get data for a given post
        .controller('WoSPostDetailCtrl', function ($scope, $stateParams, $ionicNavBarDelegate, dataService) {
            $scope.post = dataService.get($stateParams.postId);
        })

        // get map
        .controller('WoSMapCtrl', function ($scope, $ionicNavBarDelegate, $ionicLoading) {
            function initialize() {
                console.log('here')

                var mapOptions = {
                    center: new google.maps.LatLng(0, 0),
                    zoom: 16,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                };
                var map = new google.maps.Map(document.getElementById("map"),
                    mapOptions);

                $scope.map = map;
            }

            if (!$scope.map) {
                initialize()
            }

            $scope.goBack = function () {
                $ionicNavBarDelegate.back();
            }

            $scope.centerOnMe = function () {
                if (!$scope.map) {
                    return;
                }

                $scope.loading = $ionicLoading.show({
                    content: 'Getting current location...',
                    showBackdrop: false
                });

                navigator.geolocation.getCurrentPosition(function (pos) {
                    $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
                    $scope.loading.hide();
                }, function (error) {
                    alert('Unable to get location: ' + error.message);
                });
            };
        })

        // inspired from : https://github.com/yafraorg/ionictests
        .controller('WoSCamCtrl', ['$scope', '$location', 'GetUU',
            function ($scope, $location, GetUU) {

                // init variables
                $scope.data = {};
                $scope.obj;
                var pictureSource;   // picture source
                var destinationType; // sets the format of returned value
                var url;

                // on DeviceReady check if already logged in (in our case CODE saved)
                ionic.Platform.ready(function () {
                    console.log("ready get camera types");
                    if (!navigator.camera) {
                        // error handling
                        return;
                    }
                    //pictureSource=navigator.camera.PictureSourceType.PHOTOLIBRARY;
                    pictureSource = navigator.camera.PictureSourceType.CAMERA;
                    destinationType = navigator.camera.DestinationType.FILE_URI;
                });

                // get upload URL for FORM
                GetUU.query(function (response) {
                    $scope.data = response;
                    console.log("got upload url ", $scope.data.uploadurl);
                });



                // take picture
                $scope.takePicture = function () {
                    console.log("got camera button click");
                    var options = {
                        quality: 50,
                        destinationType: navigator.camera.DestinationType.FILE_URI,
                        sourceType: navigator.camera.PictureSourceType.CAMERA,
                        encodingType: 0
                    };
                    if (!navigator.camera) {
                        // error handling
                        return;
                    }
                    navigator.camera.getPicture(
                        function (imageURI) {
                            console.log("got camera success ", imageURI);
                            $scope.mypicture = imageURI;
                            $scope.$apply();
                        },
                        function (err) {
                            console.log("got camera error ", err);
                            // error handling camera plugin
                        },
                        options);
                };

                // do POST on upload url form by http / html form
                $scope.update = function (obj) {
                    if (!$scope.data.uploadurl) {
                        // error handling no upload url
                        return;
                    }
                    if (!$scope.mypicture) {
                        // error handling no picture given
                        return;
                    }
                    var options = new FileUploadOptions();
                    options.fileKey = "ffile";
                    options.fileName = $scope.mypicture.substr($scope.mypicture.lastIndexOf('/') + 1);
                    options.mimeType = "image/jpeg";
                    var params = {};
                    params.other = obj.text; // some other POST fields
                    options.params = params;

                    //console.log("new imp: prepare upload now");
                    var ft = new FileTransfer();
                    ft.upload($scope.mypicture, encodeURI($scope.data.uploadurl), uploadSuccess, uploadError, options);
                    function uploadSuccess(r) {
                        // handle success like a message to the user
                    }

                    function uploadError(error) {
                        console.log("upload error source " + error.source);
                        console.log("upload error target " + error.target);
                    }
                };
            }]);
})
;
