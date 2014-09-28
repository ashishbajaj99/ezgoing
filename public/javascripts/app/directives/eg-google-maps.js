(function() {
    var googleMaps = angular.module('EgGoogleMaps', ['EgDataManager']);

    googleMaps.directive('egGoogleMaps', function() {
        

        return {
            restrict: 'E',
            scope: true,
            templateUrl: '../../../views/map.html',      
            controller: [ '$scope', '$location', 'egDataFactory', function($scope, $location, egDataFactory) {
                var map, marker=[];
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
                        zoom: 15,
                        center: currPosition,
                        mapTypeId: google.maps.MapTypeId.ROADMAP,
                        animation: google.maps.Animation.DROP,
                        draggable: true
                    }
                    map = new google.maps.Map(document.getElementById('map'), mapOptions);
                    marker = new google.maps.Marker({
                        position: currPosition,
                        map: map,
                        title:'Hello ' + info.name,
                        draggable: true
                    });
                    $scope.map = map;
                    // google.maps.event.addListener(marker, 'click', toggleBounce);
                }

                var showAllTsp = function() {
                    var info = (egDataFactory.getViewData());
                    var city = new google.maps.LatLng(17.438382, 78.348220);
                    var mapOptions = {
                        zoom: 14,
                        center: city,
                        mapTypeId: google.maps.MapTypeId.ROADMAP,
                        animation: google.maps.Animation.DROP,
                        draggable: true
                    }
                    map = new google.maps.Map(document.getElementById('map'), mapOptions);

                    for (var tsp in info) {
                        var currPosition = new google.maps.LatLng(info[tsp].position.latitude, info[tsp].position.longitude);
                        marker.push(new google.maps.Marker({
                            position: currPosition,
                            map: map,
                            title:'Hello ' + info[tsp].name,
                            draggable: true
                        }));
                    }

                    $scope.map = map;
                    // google.maps.event.addListener(marker, 'click', toggleBounce);
                }
                var admin = $location.$$absUrl.split('/');
                if(admin[admin.length-1] === 'admin.html') {
                    egDataFactory.fetchAdminData('tsp');
                }

                $scope.$on('loadingSuccess', showUserPosition);
                $scope.$on('adminLoadingSuccess', showAllTsp);
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