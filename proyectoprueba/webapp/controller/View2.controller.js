sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel"],
  function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("proyectoprueba.controller.View2", {
      //Cuando se carga la vista por primera vez
      onInit: function () {
        const oRouter = this.getOwnerComponent().getRouter();
        oRouter.getRoute("RouteView2").attachPatternMatched(this.onRouteMatched, this);
        
      },

      onRouteMatched: function (event) {
        const argumnts = event.getParameter("arguments");
        console.log(argumnts);
        this.getView().bindElement(`Productos>/ListaProductos/${argumnts.numProduct}`)
      },

      //Cuando se sale de la vista
      onExit: function () {

      }
    });
  }
);
