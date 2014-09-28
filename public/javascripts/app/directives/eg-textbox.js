(function() {
    var egTextbox = angular.module('EgTextbox', ['EgDataManager']);

    egTextbox.directive('egTextbox', function() {
        return {
            restrict: 'E',
            scope: true,
            templateUrl: '../../../views/textbox.html',      
            controller: [ '$scope', '$attrs', 'egDataFactory', function($scope, $attrs, egDataFactory) {
                $scope.userId = '';
                $scope.findMe = function() {
                    // console.log($scope.userId);
                    egDataFactory.fetchViewData('users', $scope.userId);
                }
                $scope.pickMeUp = function() {
                    egDataFactory.fetchAvailTsp();

                    // egDataFactory.calculateDistances('')
                }
                //Manage fetch button, request pickup, username text
            }]
        };
    });

})();    