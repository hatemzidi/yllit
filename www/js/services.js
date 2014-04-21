define(['angular'], function (angular) {
    return angular.module('WoS.services', [])

        // get upload url for file transfer (upload to http post service)
        .factory('GetUU', function () {
            var uploadurl = "http://localhost/upl";
            return  {
                query: function () {
                    return uploadurl;
                }
            }
        })

        // A simple example service that returns some data.

        .factory('dataService', function () {
            // Might use a resource here that returns a JSON array

            // Some fake testing data
            var data = [
                { id: 6, grumpy: {nickname: 'Grumpy 1', avatar: 'img/tom.png'}, image: 'img/cookie.jpg', location: {name :"kitchen"}, "timestamp": (new Date()).toISOString(), counter: '120', idisliked: 'yes', description: 'Furry little creatures. Obsessed with plotting assassination, but never following through on it.' },
                { id: 7, grumpy: {nickname: 'Foulen', avatar: 'img/house0.png'}, image: 'img/ps4.jpg', location: {name :"home"}, "timestamp": "2014-01-01T10:01:19 -01:00", counter: '0', idisliked: 'no', description: 'Lovable. Loyal almost to a fault. Smarter than they let on.' },
                { id: 8, grumpy: {nickname: 'MutherFkr', avatar: 'img/house1.jpg'}, image: 'img/car.jpg', location: {name :"autostara, italy"}, "timestamp": "2014-04-16T10:01:19 -01:00", counter: '504', idisliked: 'no', description: 'Everyone likes turtles.' },
                { id: 9, grumpy: {nickname: 'Meh', avatar: 'img/house2.png'}, image: 'img/microsoft.jpg', location: {}, "timestamp": "2014-03-21T10:01:19 -01:00", counter: '666', idisliked: 'yes', description: 'An advanced pet. Needs millions of gallons of salt water. Will happily eat you.' },
                { id: 10, grumpy: {nickname: 'House M.D.', avatar: 'img/house2.png'}, image: 'img/cookie.jpg', location: {}, "timestamp": "2012-04-21T10:01:19 -01:00", counter: '123213', idisliked: 'yes', description: 'An advanced pet. Needs millions of gallons of salt water. Will happily eat you.' },

                {
                    "id": 0,
                    "grumpy": {
                        "nickname": "Johns",
                        "avatar": "img/tom.png"
                    },
                    "image": "img/cookie.jpg",
                    "location": {
                        "name": "somewhere",
                        "latitude": 88,
                        "longitude": 0
                    },
                    "timestamp": "2014-03-04T05:01:19 -01:00",
                    "counter": 728,
                    "tags": [
                        "commodo",
                        "irure",
                        "exercitation",
                        "non",
                        "eu",
                        "dolore",
                        "nulla"
                    ],
                    "idisliked": "yes",
                    "description": "Proident fugiat mollit non nulla minim pariatur voluptate ex. Sint incididunt sunt ipsum fugiat proident sint commodo ut. Labore labore occaecat aliquip pariatur. Et anim laboris duis esse eiusmod elit. Adipisicing duis ea eiusmod culpa ipsum dolore deserunt culpa.\r\n"
                },
                {
                    "id": 1,
                    "grumpy": {
                        "nickname": "Peters",
                        "avatar": "img/house0.png"
                    },
                    "image": "img/cookie.jpg",
                    "location": {
                        "name": "there",
                        "latitude": -40,
                        "longitude": 143
                    },
                    "timestamp": "2014-02-04T17:09:50 -01:00",
                    "counter": 933,
                    "tags": [
                        "ea",
                        "minim",
                        "qui",
                        "deserunt",
                        "excepteur",
                        "adipisicing",
                        "do"
                    ],
                    "idisliked": "no",
                    "description": "Consequat enim duis laborum proident sint cupidatat aliqua. Tempor aute velit eiusmod cillum cupidatat enim ad ex non. Occaecat ad incididunt magna aliqua labore deserunt ex sunt.\r\n"
                },
                {
                    "id": 2,
                    "grumpy": {
                        "nickname": "Oneal",
                        "avatar": "img/house1.jpg"
                    },
                    "image": "img/cookie.jpg",
                    "location": {
                        "name": "bordeaux",
                        "latitude": -86,
                        "longitude": -68
                    },
                    "timestamp": "2014-02-07T08:05:12 -01:00",
                    "counter": 2566,
                    "tags": [
                        "nulla",
                        "laboris",
                        "commodo",
                        "in",
                        "proident",
                        "cillum",
                        "elit"
                    ],
                    "idisliked": "no",
                    "description": "Culpa ullamco cupidatat quis consectetur aute elit sit aliquip adipisicing excepteur dolor duis aliquip qui. Commodo occaecat non aliquip amet est culpa officia sit cillum deserunt ea dolore. Sunt eiusmod reprehenderit ea velit. Excepteur eu dolor qui tempor amet cillum. Labore duis aliqua adipisicing elit.\r\n"
                },
                {
                    "id": 3,
                    "grumpy": {
                        "nickname": "Kennedy",
                        "avatar": "img/tom.png"
                    },
                    "image": "img/cookie.jpg",
                    "location": {
                    },
                    "timestamp": "2014-02-08T07:51:30 -01:00",
                    "counter": 2684,
                    "tags": [
                        "dolore",
                        "cupidatat",
                        "mollit",
                        "excepteur",
                        "ad",
                        "laborum",
                        "eiusmod"
                    ],
                    "idisliked": "yes",
                    "description": "Mollit labore deserunt irure non Lorem reprehenderit anim deserunt enim cillum tempor nisi nostrud non. Eiusmod aliqua fugiat aliqua aliqua deserunt dolor dolor aliqua labore commodo eiusmod. Enim excepteur et aliqua tempor est elit commodo mollit pariatur adipisicing culpa. Adipisicing exercitation laboris et pariatur consectetur. Commodo cupidatat aute irure proident non commodo ipsum occaecat occaecat sint non ad veniam exercitation.\r\n"
                },
                {
                    "id": 4,
                    "grumpy": {
                        "nickname": "Roman",
                        "avatar": "img/house2.png"
                    },
                    "image": "img/cookie.jpg",
                    "location": {
                        "name": "at work",
                        "latitude": -60,
                        "longitude": -94
                    },
                    "timestamp": "2014-01-21T15:04:10 -01:00",
                    "counter": 1906,
                    "tags": [
                        "cillum",
                        "adipisicing",
                        "amet",
                        "exercitation",
                        "ut",
                        "tempor",
                        "est"
                    ],
                    "idisliked": "yes",
                    "description": "Anim est velit proident tempor Lorem adipisicing mollit qui sit. Esse eu reprehenderit deserunt consequat excepteur aliquip anim aute. Est nulla velit ad pariatur id sunt qui culpa Lorem fugiat Lorem. Sunt sunt esse exercitation magna reprehenderit aliqua amet excepteur officia. Reprehenderit est culpa dolore mollit deserunt duis dolor consequat amet ad. Lorem ipsum reprehenderit ipsum pariatur eiusmod officia minim non deserunt minim eu veniam qui.\r\n"
                },
                {
                    "id": 5,
                    "grumpy": {
                        "nickname": "Welch",
                        "avatar": "img/tom.png"
                    },
                    "image": "img/cookie.jpg",
                    "location": {
                        "name": "127.0.0.1",
                        "latitude": -75,
                        "longitude": 75
                    },
                    "timestamp": "2014-02-04T01:24:34 -01:00",
                    "counter": 2871,
                    "tags": [
                        "labore",
                        "quis",
                        "sit",
                        "eiusmod",
                        "nisi",
                        "et",
                        "incididunt"
                    ],
                    "idisliked": "no",
                    "description": "Occaecat exercitation do anim ea qui ut incididunt laboris consequat cupidatat qui. Pariatur nisi reprehenderit consectetur ea adipisicing officia amet ad veniam nulla. Nulla minim minim est est aliqua est culpa dolor pariatur.\r\n"
                }
            ];

            return {
                all: function () {
                    return data;
                },
                get: function (Id) {
                    // Simple index lookup
                    return data[Id];
                }
            }
        })

        .service('WoSMapUserLocation', function () {

            this.get = function (callback) {

                if (navigator.geolocation) {

                    navigator.geolocation.getCurrentPosition(function (position) {

                        userLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                        callback(userLocation);

                    }, function (err) {
                        callback(false);
                    });

                } else {
                    callback(false);
                }

            };
        });
});