define(['angular'], function (angular) {
    return angular.module('WoS.services', [])

    /**
     * A simple example service that returns some data.
     */
        .factory('dataService', function () {
            // Might use a resource here that returns a JSON array

            // Some fake testing data
            var data = [
                { id: 0, nickname: 'Grumpy 1', avatar: 'img/tom.png', image: 'img/cookie.jpg', location:"kitchen", timestamp: '1m', counter: '120', idisliked: 'yes', description: 'Furry little creatures. Obsessed with plotting assassination, but never following through on it.' },
                { id: 1, nickname: 'Foulen', avatar: 'img/house0.png', image: 'img/ps4.jpg', location:"home", timestamp: '5d', counter: '0', idisliked: 'no', description: 'Lovable. Loyal almost to a fault. Smarter than they let on.' },
                { id: 2, nickname: 'MutherFkr', avatar: 'img/house1.jpg', image: 'img/car.jpg', location:"autostara, italy", timestamp: '1w', counter: '504', idisliked: 'no', description: 'Everyone likes turtles.' },
                { id: 3, nickname: 'Meh', avatar: 'img/house2.png', image: 'img/microsoft.jpg', location:"", timestamp: '1m', counter: '666', idisliked: 'yes', description: 'An advanced pet. Needs millions of gallons of salt water. Will happily eat you.' }
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
        });
});