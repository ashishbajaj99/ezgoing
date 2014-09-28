(function() {
    var googleMaps = angular.module('EgGoogleMaps', ['egDataManager']);

    googleMaps.directive('egGoogleMaps', function() {
        

        return {
            restrict: 'E',
            scope: true,
            templateUrl: '../../../views/map.html',      
            controller: [ '$scope', 'egDataFactory', function($scope, egDataFactory) {
                var map, marker;
                var userId = 'bajaj.ashish@gmail.com';
                var toggleBounce = function() {
                    if(marker.getAnimation() != null) {
                        marker.setAnimation(null);
                    } else {
                        marker.setAnimation(google.maps.Animation.BOUNCE);
                    }
                }

                var showUserPosition = function() {
                    var info = (egDataFactory.getViewData());

                    var currPosition = new google.maps.LatLng(info.position.latitude, info.position.longitude);
                    var mapOptions = {
                        zoom: 16,
                        center: currPosition,
                        mapTypeId: google.maps.MapTypeId.ROADMAP,
                        animation: google.maps.Animation.DROP,
                        draggable: true
                    }
                    map = new google.maps.Map(document.getElementById('map'), mapOptions);
                    marker = new google.maps.Marker({
                        position: currPosition,
                        map: map,
                        title:'Hello ' + info.name
                    });
                    $scope.map = map;
                    // google.maps.event.addListener(marker, 'click', toggleBounce);
                }

                $scope.$on('loadingSuccess', showUserPosition);

                egDataFactory.fetchViewData('users', 'bajaj.ashish@gmail.com');

                // getLocation();

                /*
                    $scope.markers = [];
                    
                    var infoWindow = new google.maps.InfoWindow();
                    
                    var createMarker = function (info){
                        
                        var marker = new google.maps.Marker({
                            map: $scope.map,
                            info: new google.maps.LatLng(info.lat, info.long),
                            title: info.city
                        });
                        marker.content = '<div class="infoWindowContent">' + info.desc + '</div>';
                        
                        google.maps.event.addListener(marker, 'click', function(){
                            infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
                            infoWindow.open($scope.map, marker);
                        });
                        
                        $scope.markers.push(marker);
                        
                    }  
                    
                    for (i = 0; i < cities.length; i++){
                        createMarker(cities[i]);
                    }

                    $scope.openInfoWindow = function(e, selectedMarker){
                        e.preventDefault();
                        google.maps.event.trigger(selectedMarker, 'click');
                    }
                */                
            }]
        };
    });

})();    