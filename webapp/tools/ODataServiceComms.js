sap.ui.define(["sap/ui/base/Object"],

    function (BaseObject) {

        /**
         * @extends sap.ui.base.Object
         * @name tools.ODataServiceComms .
         */
        return BaseObject.extend("tools.ODataServiceComms", /** @lends tools.ODataServiceComms */ {

            constructor: function (model) {
                this.model = model;
            },

            read: function (sPath, mParameters) {
                return new Promise(function (resolve, reject) {
                    this.model.read(sPath, this._returnData(resolve, reject, mParameters));
                }.bind(this));
            },
            create: function (sPath, payload, mParameters) {
                return new Promise(function (resolve, reject) {
                    this.model.create(sPath, payload, this._returnData(resolve, reject, mParameters));
                }.bind(this));
            },
            update: function (sPath, payload) {
                return new Promise(function (resolve, reject) {
                    this.model.update(sPath, payload, this.returnData(resolve, reject));
                }.bind(this));
            },
            delete: function (sPath) {
                return new Promise(function (resolve, reject) {
                    this.model.remove(sPath, this.returnData(resolve, reject));
                }.bind(this));
            },
            callFunction: function (sPath, mParameters) {
                return new Promise(function (resolve, reject) {
                    this.model.callFunction(sPath, this._returnData(resolve, reject, mParameters));
                }.bind(this));
            },

            /**
             * @private
             */
            _returnData: function (resolve, reject, mParameters) {
                return {
                    method: !!mParameters ? mParameters.method : '',
                    urlParameters: !!mParameters ? mParameters.urlParameters : '',
                    filters: !!mParameters ? mParameters.filters : '',
                    sorters: !!mParameters ? mParameters.sorters : '',
                    success: function (data, response) {
                        resolve({ data: data, response: response });
                    },
                    error: function (oError) {
                        reject(oError);
                    }
                };
            }
        });
});