angular.module('starter.controllers', ['starter.services', 'ionic'])

    .controller('DashCtrl', function ($scope, $timeout, $ionicLoading, Api) {
        //$scope.end = false;
        //var count = 0;
        $ionicLoading.show({
            template: '<ion-spinner icon="lines"></ion-spinner>'
        });

        Api.todayPosts(function (data) {
            $scope.posts = data.posts;
            $ionicLoading.hide();
        })

        /*$scope.nextDay = function () {
         count++;
         console.log(count);
         if (count == 100) {
         $scope.end = true;
         }
         $scope.$broadcast("scroll.infiniteScrollComplete");
         };*/

        $scope.doRefresh = function () {
            $scope.posts = null;
            Api.todayPosts(function (data) {
                $scope.posts = data.posts;
                $scope.$broadcast('scroll.refreshComplete');
            })
        };

    })

    .controller('MyHuntsCtrl', function ($scope, $timeout, $ionicLoading, Api) {

        $ionicLoading.show({
            template: '<ion-spinner icon="lines"></ion-spinner>'
        });


        Api.myHunts(function (data) {
            $scope.myHunts = data.user;
            Api.myVotes(function (data) {
                $scope.myVotes = data.votes;
                $ionicLoading.hide();
            });
        })

        $scope.doRefresh = function () {
            $scope.myHunts = null;
            $scope.myVotes = null;
            Api.myHunts(function (data) {
                $scope.myHunts = data.user;
                Api.myVotes(function (data) {
                    $scope.myVotes = data.votes;
                    $scope.$broadcast('scroll.refreshComplete');
                });
            })
        };
    });
