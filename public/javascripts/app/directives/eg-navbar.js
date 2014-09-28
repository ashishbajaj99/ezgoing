(function() {
    var egNavbar = angular.module('egNavbar', ['EgDataManager']);

    egNavbar.directive('egNavbar', function() {
        var navbarLinks = [
            { title: 'Home', glyphicon: 'glyphicon-home', url: '/', show: true },
            { title: 'Save', glyphicon: 'glyphicon-floppy-open', onclickHandler: 'saveIsClicked()', url: '/users', show: true },
            { title: 'Back', glyphicon: 'glyphicon-arrow-left', onclickHandler: 'backIsClicked()', url: '#', show: true },
            { title: 'Edit MSM', url: '/', show: false },
            { title: 'Login', url: '/login.html', show: false }
        ];

        return {
            restrict: 'E',
            scope: true,
            templateUrl: '../../../views/navbar.html',      
            controller: [ '$http', '$scope', 'egDataFactory', function($http, $scope, egDataFactory) {
                $scope.links = navbarLinks;
                $scope.users = {}; //mark empty until get request is honored

                $http.get('/users', {'test': 'body'}).success(function(data) {
                    $scope.users = data;
                });

                $scope.onclickHandler = function(callback) {
                    $scope.$eval(callback);
                }

                $scope.saveIsClicked = function() {
                    alert('saveIsClicked');
                }

                $scope.backIsClicked = function() {
                    egDataFactory.fetchViewHistory();
                }
            }]
        };
    });

})();    