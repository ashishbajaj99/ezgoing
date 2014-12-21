(function() {
    var egDataManager = angular.module('EgDataManager', []);

    egDataManager.factory('egDataFactory', ['$rootScope', '$http', function($rootScope, $http) {
        var egDataFactory = {};
        var data = [];
        var history = [];
        var defaultUrl = '/position?type='; //default URL to load from
        var iceServers = {};

        egDataFactory.fetchViewData = function(viewName, userId) {
            var url = defaultUrl+viewName+'&userId='+userId;

            $rootScope.$broadcast('loading');
            $http.get(url)
                .success(function(response) {
                    data = response;
                    $rootScope.$broadcast('loadingSuccess');                
                })
                .error(function(response) {
                    data = [];
                    $rootScope.$broadcast('loadingFailure');
                });  
        }

        egDataFactory.fetchAvailTsp = function() {
            var url = defaultUrl+'tsp';
            
            $rootScope.$broadcast('loading');
            $http.get(url)
                .success(function(response) {
                    data = response;
                    $rootScope.$broadcast('userAndTspDataAvailable');
                })
                .error(function(response) {
                    data = [];
                    $rootScope.$broadcast('loadingFailure');
                });
        }

        egDataFactory.fetchAdminData = function(viewName) {
            var url = defaultUrl+viewName;
            
            $rootScope.$broadcast('loading');
            $http.get(url)
                .success(function(response) {
                    data = response;
                    $rootScope.$broadcast('adminLoadingSuccess');
                })
                .error(function(response) {
                    data = [];
                    $rootScope.$broadcast('adminLoadingFailure');
                });
        }

        egDataFactory.updatePosition = function(viewName, userId) {
            var url = defaultUrl+viewName+'&userId='+userId;

            $rootScope.$broadcast('saving');
            $http.post(url, coreProperties)
                .success(function(response) {
                    $rootScope.$broadcast('savingSuccess');                  
                })
                .error(function(response) {
                    $rootScope.$broadcast('savingFailure');                                      
                });  
        }

        egDataFactory.getViewData = function() {
            return data;
        }
        
        egDataFactory.getLocation = function() {
            if(navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function(position) {
                    // console.log(position.coords.latitude, position.coords.longitude);
                    $rootScope.$broadcast('geolocationSuccess');
                });
            } else {
                $rootScope.$broadcast('geolocationError');
            }
        }

        egDataFactory.fetchIceServers = function() {
            var url = 'https://api.xirsys.com/getIceServers';
            var data = { ident: "ashish",
                         secret: "2b7854f1-8965-4093-a9cf-f11a3d300659",
                         domain: "https://ezgoing.herokuapp.com",
                         application: "default",
                         room: "default",
                         secure: 1
                        };
            var config = { headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
                           transformRequest: function(obj) {
                                var str = [];
                                for(var p in obj)
                                    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                                return str.join("&");
                            }
                         };

            $http.post(url, data, config)
                .success(function(response) {
                    iceServers = response.d;
                    $rootScope.$broadcast('iceServersAvailable');
                })
                .error(function(response) {
                    //do nothing
                });
        }

        egDataFactory.getIceServers = function() {
            return iceServers;
        }

        return egDataFactory;
    }]);

})();    