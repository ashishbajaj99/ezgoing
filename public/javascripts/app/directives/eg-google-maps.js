(function() {
    var googleMaps = angular.module('EgGoogleMaps', []);

    googleMaps.directive('egGoogleMaps', function() {
        

        return {
            restrict: 'E',
            scope: true,
            templateUrl: '../../../views/map.html',      
            controller: [ '$rootScope', '$scope', function($rootScope, $scope) {
                var map, marker;
                var toggleBounce = function() {
                    if(marker.getAnimation() != null) {
                        marker.setAnimation(null);
                    } else {
                        marker.setAnimation(google.maps.Animation.BOUNCE);
                    }
                }

                var showPosition = function(position) {
                    // var currPosition = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                    var currPosition = new google.maps.LatLng(17.434940, 78.341380);
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
                        title:'Hello Ashish!'
                    });
                    $scope.map = map;
                    console.log('Fetch successful');
                    google.maps.event.addListener(marker, 'click', toggleBounce);
                    // $rootScope.$broadcast('geolocationSuccess');
                }

                var getLocation = function() {
                    if(navigator.geolocation) {
                        console.log('Fetching Position...');
                        navigator.geolocation.getCurrentPosition(showPosition);
                    } else {
                        $rootScope.$broadcast('geolocationError');
                    }
                }
                
                getLocation();

                /*
                    $scope.markers = [];
                    
                    var infoWindow = new google.maps.InfoWindow();
                    
                    var createMarker = function (info){
                        
                        var marker = new google.maps.Marker({
                            map: $scope.map,
                            position: new google.maps.LatLng(info.lat, info.long),
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