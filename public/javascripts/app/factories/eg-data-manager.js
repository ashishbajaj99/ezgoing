(function() {
    var egDataManager = angular.module('egDataManager', []);

    egDataManager.factory('egDataFactory', ['$rootScope', '$http', function($rootScope, $http) {
        var egDataFactory = {};
        var data = [];
        var history = [];
        var defaultUrl = '/platforms?id='; //default URL to load from

        /* Variable to Manage Views of Cores (rectangles) */
        var coreView = null;
        var coreViewParent = null;
        var coreProperties = null;

        /* Variables to Manage Views of Voltage Domains (ellipses) */
        var voltageDomains = null;

        /* Variables to Manage Views of PDN (arrows) */
        var pdnConnections = null;
        var showPdnConnectionsFlag = false;

        // Rewind the view object one step up
        // Start updating view from data.coreData[history[2]]
        var rewindViewOneStep = function() {
            history.splice(history.length-1, 1);
            var i=2;

            // Iterate the views till last element of history is found
            coreViewParent = history[i++];
            coreView = data[coreViewParent].coreData;
            coreProperties = null;
            showPdnConnectionsFlag = true;            
            for(; i<history.length; i++) {
                coreViewParent = history[i];
                coreView = coreView[coreViewParent];
                showPdnConnectionsFlag = false;
            }
        }

        egDataFactory.fetchViewData = function(viewName) {
            var id=viewName;
            var url = defaultUrl+id;
            coreViewParent = viewName;

            if(history.length < 2) {
                $rootScope.$broadcast('loading');
                $http.get(url)
                .success(function(response) {
                    data = response;
                    history.push(viewName);
                    coreView = data;
                    coreProperties = null;
                    showPdnConnectionsFlag = false;                    
                    $rootScope.$broadcast('loadingSuccess');                
                })
                .error(function(response) {
                    data = [];
                    $rootScope.$broadcast('loadingFailure');
                });  
            } else {
                /* after loading 2 levels, data cached locally, avoid server transaction */
                /* on 2nd load, init coreView from data, all other times traverse coreView directly */
                if(history.length == 2) {
                    coreView = data[viewName].coreData;
                    pdnConnections = data[viewName].pdn;
                    voltageDomains = data[viewName].vddToRailMap;
                    coreProperties = null;
                    showPdnConnectionsFlag = true;
                    history.push(viewName);
                } else {
                    if(coreView[viewName].userParameters == null) {
                        coreView = coreView[viewName];
                        coreProperties = null;
                        showPdnConnectionsFlag = false;                        
                        history.push(viewName);
                    } else {
                        coreProperties = coreView[viewName].userParameters;
                    }
                }
                $rootScope.$broadcast('loadingSuccess');
            }
        }

        egDataFactory.saveCoreProperties = function() {
            var postUrl = defaultUrl;
            for (var i = 0; i < history.length; i++) {
                postUrl += history[i]
                postUrl += '?id' + (i+1) + '='
            }
            postUrl += coreViewParent;
            console.log('Saving to server at URL: ' + postUrl + ', data = ' + coreProperties);
            $rootScope.$broadcast('saving');
            $http.post(postUrl, coreProperties)
                .success(function(response) {
                    console.log(response);
                    $rootScope.$broadcast('savingSuccess');                  
                })
                .error(function(response) {
                    console.log(response);
                    $rootScope.$broadcast('savingFailure');                                      
                });  

        }

        egDataFactory.getCores = function() {
            //retval format: JSON: key=parent, value=coreNames
            var retval = {};
            retval[coreViewParent] = null;

            if(coreProperties == null) 
                retval[coreViewParent] = Object.keys(coreView);
            
            return retval;
        }

        egDataFactory.getCoreProperties = function() {
            return coreProperties;
        }

        egDataFactory.fetchViewHistory = function() {
            if(history.length > 1) {
                if(history.length > 3) {
                    rewindViewOneStep();
                    $rootScope.$broadcast('loadingSuccess');
                } else {
                    // remove current page from history, fetch the previous canvas from history
                    var newView = history.splice(history.length-2, 2); 
                    egDataFactory.fetchViewData(newView[0]);
                }
            }
        }

        egDataFactory.getPdnConnections = function() {
            return showPdnConnectionsFlag? pdnConnections : null;
        }

        egDataFactory.getVoltageDomains = function(coreName) {
            var retval = [];
            for(var core in voltageDomains) {
                if(core == coreName) {
                    retval = voltageDomains[core];
                }
            }
            return retval;
        }

        egDataFactory.getCurrCoreDomains = function(coreName) {
          // return views[view].coreDomains? views[view].coreDomains[coreName] : null;
        }
        
        return egDataFactory;
    }]);

})();    