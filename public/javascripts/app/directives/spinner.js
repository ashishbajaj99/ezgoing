(function() {
    var spinner = angular.module('Spinner', []);


    spinner.directive('mySpinner', function() {
        return {
            restrict: 'A',
            scope: {},
            templateUrl: '../../../views/spinner.html',
            transclude: true,
            controller: ['$scope', '$attrs', function($scope, $attrs) {

                var remove = null;

                var holderId = $attrs.id;
                var r1 = $attrs.r1? parseInt($attrs.r1) : 7; //default 7 if unspecified
                var r2 = $attrs.r2? parseInt($attrs.r2) : 12; //default 12 if unspecified
                var count = $attrs.count? parseInt($attrs.count) : 12; //default 12 if unspecified
                var strokeWidth = $attrs.strokeWidth? parseInt($attrs.strokeWidth) : 2.5; //default 2.5 if unspecified
                var color = $attrs.color? $attrs.color : "rainbow"; //default rainbow if unspecified

                //API Definition for all Child Directives of <my-spinner> directive
                this.startSpinner = function(msg) {
                    if(remove == null) {
                        remove = Raphael.fn.spinner(holderId, r1, r2, count, strokeWidth, color);
                    }
                }

                this.stopSpinner = function() {
                    if(remove != null) {
                        remove();
                        remove = null;
                    }
                }

            }]
        };
    });

})();    