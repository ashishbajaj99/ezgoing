(function() {
    var egModal = angular.module('egModal',['EgDataManager']);

    egModal.directive('egPropModal', function() {
        return {
            restrict: 'E',
            scope: {},
            transclude: true,
            templateUrl: '../../../views/properties-modal.html',
            // require: 'mySpinner',
            link: function(scope, element, attr, spinnerCtrl) {
                scope.spinnerCtrl = spinnerCtrl;
            },
            controller: ['$scope', 'egDataFactory', function($scope, egDataFactory) {
                var isEditable;
                var activeTabId = 2;
                $scope.propModalData = {};
                $scope.propCoreName = '';
                $scope.editableFlags = {};
                $scope.disableClose = false;
                $scope.isTabSelected = function(id) {
                    return (id === activeTabId);
                }
                $scope.selectTab = function(id) {
                    activeTabId = id;
                }
                $scope.getKeys = function(obj) {
                    //if null object return empty array, else return the keys
                    return obj? Object.keys(obj) : [];
                }
                $scope.editItem = function(key) {
                    if(isEditable)
                        $scope.editableFlags[key] = true;
                }
                $scope.doneEditing = function(key) {
                    $scope.editableFlags[key] = false;
                }                
                $scope.saveToServer = function() {
                    // $scope.spinnerCtrl.startSpinner();
                    $scope.disableClose = true;
                    egDataFactory.saveCoreProperties();
                }
                $scope.$on('savingSuccess', function() {
                    // $scope.spinnerCtrl.stopSpinner();
                    $scope.disableClose = false;
                });
                //API Definition for all Child Directives of <eg-prop-modual> directive
                this.launchModal = function(coreName, modalData, editableFlag) {
                    var keys = Object.keys(modalData);
                    var editable = {};
                    isEditable = editableFlag;
                    for (var i = keys.length - 1; i >= 0; i--) {
                        editable[keys] = false;
                    }
                    $scope.propModalData = modalData;
                    $scope.propCoreName = coreName;
                    $scope.editableFlags = editable;
                    // NOTE: jqlite doesn't support element.children(0).modal('toggle') so directly calling jquery
                    // Use $apply to call the $digest() function in angular so that the propModalData two way data binding is complete
                    $scope.$apply($("#properties-modal").modal('toggle'));
                }   
            }]
        };
    });

})();    