sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/UIComponent",
    "../tools/ServiceManager",
    
], function (Controller, JSONModel, UIComponent, ServiceManeger) {

    "use strict";

    return Controller.extend("controller.BaseController", /** @lends controller.BaseController */ {

        // some basic functionalities

        // just this.getRouter() ...
        getRouter: function () {

            // ... instead of
            return UIComponent.getRouterFor(this);

        },

        // just this.getModel() ...
        getModel: function (sName) {

            // ... instead of
            return this.getView().getModel(sName);

        },

        // just this.setModel() ...
        setModel: function (oModel, sName) {

            // ... instead of
            return this.getView().setModel(oModel, sName);

        },

        // just this.getResoureBundle() ... 
        getResourceBundle: function () {

            // ... instead of
            return this.getOwnerComponent().getModel("i18n").getResourceBundle();

        },

        // just this.getServiceManager() ...
        getServiceManager: function (sName) {
            // necessary to get in all controllers
            if (!this.getOwnerComponent().getModel('mServiceManager')) {
                this.getOwnerComponent().setModel(new JSONModel({
                    aServiceManagerList: [new ServiceManeger(sName, this.getModel(sName))]
                }), 'mServiceManager');
            } else if (!this.getOwnerComponent().getModel('mServiceManager').getProperty('/aServiceManagerList').find(el => {
                return el.getModelName() == sName;
            })) {
                this.getOwnerComponent().getModel('mServiceManager').getProperty('/aServiceManagerList').push(new ServiceManeger(sName, this.getModel(sName)))
            }

            // ... instead of
            return this.getOwnerComponent().getModel('mServiceManager').getProperty('/aServiceManagerList').find(el => { return el.getModelName() == sName; });
        }

    });

});