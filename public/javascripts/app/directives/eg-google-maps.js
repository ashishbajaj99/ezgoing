(function() {
    var googleMaps = angular.module('EgGoogleMaps', ['EgDataManager']);

    googleMaps.directive('egGoogleMaps', function() {
        

        return {
            restrict: 'E',
            scope: true,
            templateUrl: '../../../views/map.html',
            require: '^egPropModal',
            link: function(scope, element, attr, modalCtrl) {
                scope.setModalData = modalCtrl.setModalData;
                scope.launchModal = modalCtrl.launchModal;
            },                
            controller: [ '$scope', '$location', 'egDataFactory', function($scope, $location, egDataFactory) {
                Array.min = function( array ){
                  return Math.min.apply( Math, array );
                };
                var map, marker=[], currPosition;
                var originsObj;
                var toggleBounce = function() {
                    if(marker.getAnimation() != null) {
                        marker.setAnimation(null);
                    } else {
                        marker.setAnimation(google.maps.Animation.BOUNCE);
                    }
                }

                var showUserPosition = function() {
                    var info = (egDataFactory.getViewData());

                    currPosition = new google.maps.LatLng(info.position.latitude, info.position.longitude);
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
                        var tspPos = new google.maps.LatLng(info[tsp].position.latitude, info[tsp].position.longitude);
                        marker.push(new google.maps.Marker({
                            position: tspPos,
                            map: map,
                            title:'Hello ' + info[tsp].name,
                            draggable: true
                        }));
                    }

                    $scope.map = map;
                    // google.maps.event.addListener(marker, 'click', toggleBounce);
                }

                var createDistanceMatrixRequest = function() {
                    //currPosition = destination

                    originsObj = egDataFactory.getViewData();
                    var originsArr = [];
                    for(var origin in originsObj) {
                        originsArr.push(new google.maps.LatLng(originsObj[origin].position.latitude, originsObj[origin].position.longitude));
                    }
                    var service = new google.maps.DistanceMatrixService();
                    service.getDistanceMatrix(
                      {
                        origins: originsArr,
                        destinations: [currPosition],
                        travelMode: google.maps.TravelMode.DRIVING,
                        unitSystem: google.maps.UnitSystem.METRIC,
                        durationInTraffic: true,
                        avoidHighways: false,
                        avoidTolls: false
                      }, closestDriver);
                    console.log(
                      {
                        origins: originsArr,
                        destinations: [currPosition],
                        travelMode: google.maps.TravelMode.DRIVING,
                        unitSystem: google.maps.UnitSystem.METRIC,
                        durationInTraffic: true,
                        avoidHighways: false,
                        avoidTolls: false
                      });
                }

                var closestDriver = function(response, status) {
                    if (status == google.maps.DistanceMatrixStatus.OK) {
                        var durations = [];
                        var durationMsg = [];
                        var distanceMsg = [];
                        var origins = response.originAddresses;
                        var destinations = response.destinationAddresses;

                        for (var i = 0; i < origins.length; i++) {
                            var results = response.rows[i].elements;
                            for (var j = 0; j < results.length; j++) {
                                var element = results[j];
                                var distance = element.distance.value;
                                var duration = element.duration.value;
                                var from = origins[i];
                                var to = destinations[j];
                                // console.log(duration);
                                durations.push(duration);
                                durationMsg.push(element.duration.text);
                                distanceMsg.push(element.distance.text);
                            }
                        }
                        var minDuration = durations[0], minIndex = 0;
                        for(var i=0;i<durations.length;i++) {
                            if(durations[i] < minDuration) {
                                minDuration = durations[i];
                                minIndex = i;
                            }
                        }
                        var j=0;
                        for(var origin in originsObj) {
                            if(j == minIndex) {
                                console.log('closestDriver ' + originsObj[origin].name);
                                $scope.launchModal('Closest Driver', {
                                    'ETA': durationMsg[minIndex],
                                    'Distance': distanceMsg[minIndex],
                                    'Driver Name': originsObj[origin].name,
                                    'Phone': originsObj[origin].phone,
                                    'Car Number':  originsObj[origin].car
                                }, false);
                            }
                            j++;
                        }          
                    }
                }

                var admin = $location.$$absUrl.split('/');
                if(admin[admin.length-1] === 'admin.html') {
                    egDataFactory.fetchAdminData('tsp');
                }

                $scope.$on('userAndTspDataAvailable', createDistanceMatrixRequest);
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