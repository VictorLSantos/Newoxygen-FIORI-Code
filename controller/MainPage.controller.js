sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    // "sap/m/MessageToast",
    // "sap/ui/model/json/JSONModel",
    // "sap/ui/model/resource/ResourceModel",
  ],
  function (Controller) {
    "use strict";
    return Controller.extend("my.app.controller.MainPage", {
      //   onInit: function () {
      //     var oData = {
      //       recipient: {
      //         name: "World",
      //       },
      //     };
      //     var oModel = new JSONModel(oData);
      //     this.getView().setModel(oModel);
      //     var i18nModel = new ResourceModel({
      //       bundleName: "my.app.i18n.i18n",
      //     });
      //     this.getView().setModel(i18nModel, "i18n");
      //   },
      //   onShowNotification: function () {
      //     var oBundle = this.getView().getModel("i18n").getResourceBundle();
      //     var sRecipient = this.getView()
      //       .getModel()
      //       .getProperty("/recipient/name");
      //     var sMsg = oBundle.getText("notificationMsg", [sRecipient]);
      //     // show message
      //     MessageToast.show(sMsg);
      //   },
    });
  }
);
