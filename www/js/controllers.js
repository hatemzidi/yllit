define(['angular',
    'async!http://maps.google.com/maps/api/js?sensor=false!callback'
], function (angular) {
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
        .controller('WoSPostsIndexCtrl', function ($scope, $state, $timeout, $ionicActionSheet, dataService) {
            $scope.posts = dataService.all();

            $scope.getMap = function () {
                $state.go('tab.map');
            };

            $scope.clearFilter = function () {
                $scope.searchQuery = '';
            };

            $scope.switch = function () {

                // Show the action sheet
                $ionicActionSheet.show({
                    buttons: [
                        { text: 'Timeline' },
                        { text: 'Thumbnails' }
                    ],
                    cancelText: 'Cancel',
                    buttonClicked: function (index) {
                        return true;
                    }
                });

            };


            $scope.doRefresh = function () {
                $timeout(function () {
                    $scope.posts = dataService.all();
                    //Stop the ion-refresher from spinning
                    $scope.$broadcast('scroll.refreshComplete');
                }, 1000);

            };
        })

        // get data for a given post
        .controller('WoSPostDetailCtrl', function ($scope, $stateParams, $ionicNavBarDelegate, dataService) {
            $scope.post = dataService.get($stateParams.postId);

            $scope.gpMap = function (postId) {
                $state.go('tab.map');
            };

        })

        // get map
        .controller('WoSMapCtrl', function ($scope, $stateParams, $ionicNavBarDelegate, $ionicLoading, dataService, WoSMapUserLocation) {
            function initialize() {

                var mapOptions = {
                    center: new google.maps.LatLng(37.09024, -95.7128910),
                    zoom: 4,
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    disableDefaultUI: true,
                    mapTypeControl: true,
                    mapTypeControlOptions: {
                        style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
                        position: google.maps.ControlPosition.TOP_CENTER,
                        mapTypeIds: [google.maps.MapTypeId.ROADMAP, google.maps.MapTypeId.SATELLITE]
                    }
                };
                var map = new google.maps.Map(document.getElementById("map"),
                    mapOptions);

                $scope.map = map;
                $scope.markers = [];
            }

            //TODO is this the good place ?
            $scope.goBack = function () {
                $ionicNavBarDelegate.back();
            };


            $scope.setMapPosition = function (postId) {
                var position = dataService.getCoords(postId);
                $scope.placeLocationMarker(position);
            };

            $scope.centerOnMe = function () {
                if (!$scope.map) {
                    return;
                }

                $scope.loading = $ionicLoading.show({
                    content: 'Getting current location...',
                    showBackdrop: false
                });

                WoSMapUserLocation.get(function (location) {

                    if (location) {

                        $scope.map.setCenter(location);
                        $scope.map.setZoom(11);
//                        $scope.setUserLocation(location);
                        $scope.placeUserLocationMarker(location);
                        $scope.loading.hide();

//                        $scope.setSearchFormLocation(location, function(){
//                            $scope.partyMap.setZoom(11);
//                            $scope.searchForEvents();
//                        });
                    } else {
                        alert('Unable to get location: ' + error.message);
                    }
                });
            };

            $scope.setUserLocation = function (val) {
                $scope.userLocation = val;
            }

            $scope.placeUserLocationMarker = function (location) {
                new google.maps.Marker({
                    position: location,
                    icon: new google.maps.MarkerImage('img/client-location.svg', null, null, null, new google.maps.Size(25, 25)),
                    title: "Your location",
                    map: $scope.map
                });
            };

            $scope.placeLocationMarker = function (location) {
                var pos = new google.maps.LatLng(location.latitude, location.longitude);

                new google.maps.Marker({
                    position: pos,
                    icon: new google.maps.MarkerImage('img/marker.svg', null, null, null, new google.maps.Size(40, 40)),
                    title: "POST LOCATION",
                    map: $scope.map
                });
            };

            if (!$scope.map) {
                initialize()
            }

            if ($stateParams.postId) {
                $scope.setMapPosition($stateParams.postId);
            }


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
