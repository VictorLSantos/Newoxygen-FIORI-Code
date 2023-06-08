sap.ui.define(
  [
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
  ],
  function (UIComponent, JSONModel, ResourceModel) {
    "use strict";

    return UIComponent.extend("my.app.Component", {
      metadata: {
        interfaces: ["sap.ui.core.IAsyncContentCreation"],
        manifest: "json",
        // rootView: {
        //   viewName: "my.app.view.MainPage",
        //   type: "XML",
        //   id: "app",
        // },
      },

      init: function () {
        UIComponent.prototype.init.apply(this, arguments);
        var oData = {
          recipient: {
            name: "",
          },
        };

        var oModel = new JSONModel(oData);
        this.setModel(oModel);

        // create the views based on the url/hash
        this.getRouter().initialize();

        var i18nModel = new ResourceModel({
          bundleName: "my.app.i18n.i18n",
        });
        this.setModel(i18nModel, "i18n");
      },
    });
  }
);
