sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel"],
  function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("my.app.controller.ProductList", {
      onInit: function () {
        var oViewModel = new JSONModel({
          currency: "EUR",
        });
        this.getView().setModel(oViewModel, "view");
      },

      onPress: function () {
        var oRouter = this.getOwnerComponent().getRouter();
        oRouter.navTo("DetailProducts");
      },
    });
  }
);
