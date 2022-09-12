sap.ui.define([
    "sap/ui/base/Object",
    "sap/ui/model/json/JSONModel",
    "./ODataServiceComms",
],
    function (BaseObject, JSONModel, ODataServiceComms) {

        /**
         * @extends sap.ui.base.Object
         * @name tools.ServiceManeger .
         */
        return BaseObject.extend("tools.ServiceManager", /** @lends tools.ServiceManager */ {
            constructor: function (modelName, model) {
                this._modelName = modelName;

                // Instance Odata Service Communications
                this._SvcComms = new ODataServiceComms(model);
            },

            getModelName: function () {
                return this._modelName;
            },

            // Function Exemple
            functionExemple: function (...args) {
                
                //Define Promise
                return new Promise((resolve, reject) => {
                    //Call Odata Methods Here ...
                    this._SvcComms.read('/ZC_MM_XNFE_HD_POGRADE' 
                        /* Method Arguments */
                        // sPath       /* Entity Sets Name */, 
                        // payload     /* Object with Entity Type values */
                        // mParameters /* Odata Parameters (filters, sorters, urlParameters (top, skip, expands ...))*/
                        
                        ).then(success => {
                            //Put logic here if necessary ...
                            resolve(/* Object Resolve Arguments */ success);
                        
                        }).catch(error => {
                            //Put error logic here if necessary ...
                            reject(/* Object Reject Arguments (error)*/ error);

                        });
                });
            }
        });
});