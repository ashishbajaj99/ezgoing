(function() {
    var loader = angular.module('Loader',[]);

    loader.directive('loader', function() {
        return {
            restrict: 'A',
            templateUrl: '../../views/loader.html',
            require: '^mySpinner',
            link: function(scope, element, attr, spinnerCtrl) {
                scope.msg='';
                scope.leftMargin=0;
                if(attr.leftMargin) {
                    scope.leftMargin = attr.leftMargin;
                }

                if(attr.startSignal) {
                    scope.$on(attr.startSignal, function() {
                        spinnerCtrl.startSpinner();
                        if(attr.startMsg)
                            scope.msg = attr.startMsg;
                    });
                }

                if(attr.successSignal) {
                    scope.$on(attr.successSignal, function() {
                        spinnerCtrl.stopSpinner();
                        scope.msg = '';
                    });
                }

                if(attr.errorSignal) {
                    scope.$on(attr.errorSignal, function() {
                        scope.msg = attr.errorMsg;
                    });
                }
            }
        }});

})();    