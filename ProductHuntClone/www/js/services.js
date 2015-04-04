angular.module('starter.services', [])

    .factory('Api', function ($http) {
        // Might use a resource here that returns a JSON array
        var apiUrl = 'https://api.producthunt.com/v1/';
        var token = 'e721b2f67529d47269120b7e891f790c759b6e5fa82cb1476461480d2553540e';

        return {
            todayPosts: function (success) {
                var config = {
                    headers: {
                        'Authorization': 'Bearer ' + token,
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                };

                //var postUrl = '/posts';
                var postUrl = apiUrl + 'posts';
                $http.get(postUrl, config).success(function (data) {
                    success(data);
                });
            },
            myHunts: function (success) {
                var config = {
                    headers: {
                        'Authorization': 'Bearer ' + token,
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                };
                //var postUrl = '/myhunts';
                var postUrl = apiUrl + 'users/baymucuk';
                $http.get(postUrl, config).success(function (data) {
                    success(data);
                });
            },
            myVotes: function (success) {
                var config = {
                    headers: {
                        'Authorization': 'Bearer ' + token,
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                };
                //var postUrl = '/myvotes';
                var postUrl = apiUrl + 'users/44726/votes?order=desc&per_page=50';
                $http.get(postUrl, config).success(function (data) {
                    success(data);
                });
            }

        }
    });
