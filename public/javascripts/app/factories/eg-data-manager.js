(function() {
    var egDataManager = angular.module('egDataManager', []);

    egDataManager.factory('egDataFactory', ['$rootScope', '$http', function($rootScope, $http) {
        var egDataFactory = {};
        var data = [];
        var history = [];
        var defaultUrl = '/position?type='; //default URL to load from

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

        return egDataFactory;
    }]);

})();    