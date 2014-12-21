(function() {
    var egVideoChat = angular.module('EgVideoChat', ['EgDataManager']);

    egVideoChat.directive('egVideoChat', function() {
        return {
            restrict: 'E',
            scope: true,
            templateUrl: '../../../views/videochat.html',      
            controller: [ '$scope', '$attrs', 'egDataFactory', function($scope, $attrs, egDataFactory) {
                var peerConnectionConfig = {};
                var webrtc = {};
                egDataFactory.fetchIceServers();

                var startCall = function() {
                    peerConnectionConfig = egDataFactory.getIceServers();
                    console.log(peerConnectionConfig);
                    webrtc = new SimpleWebRTC({
                                                    // the id/element dom element that will hold "our" video
                                                    localVideoEl: 'localVideo',
                                                    // the id/element dom element that will hold remote videos
                                                    remoteVideosEl: 'remotesVideos',
                                                    // immediately ask for camera access
                                                    autoRequestMedia: true,
                                                    debug: false,
                                                    detectSpeakingEvents: true,
                                                    autoAdjustMic: false,
                                                    // add the iceServer information
                                                    peerConnectionConfig: peerConnectionConfig
                                            });
                    // we have to wait until it's ready
                    webrtc.on('readyToCall', function () {
                        // you can name it anything
                        webrtc.joinRoom('ashish');
                    });
                }

                $scope.$on('iceServersAvailable', startCall);
            }]
        };
    });

})();    