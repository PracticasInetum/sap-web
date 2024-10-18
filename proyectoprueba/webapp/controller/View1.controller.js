sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel"],
  function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("proyectoprueba.controller.View1", {
      onInit: function () {
        const modelo = new JSONModel(sap.ui.require.toUrl("proyectoprueba/model/productos.json"));
        this.getOwnerComponent().setModel(modelo, "Productos");
         
      },

      press: function () {
        const modelo = this.getView().getModel("MiModelo");
        const valor = modelo.getProperty("/ValorInput");
        alert(valor);
        modelo.setProperty("/TextoBoton", valor);
      },

      onBtnNav: function () {
        const router = this.getOwnerComponent().getRouter();
        router.navTo("RouteView2");
      },
      onListItemPress: function (event) {
        console.log(event)

        const elemento = event.getSource().getBindingContext("Productos").getObject();
        const modeloProductos = this.getView().getModel("Productos");
        const datos = modeloProductos.getProperty("/ListaProductos");
        const index = datos.indexOf(elemento);

        const router = this.getOwnerComponent().getRouter();
        router.navTo("RouteView2", {numProduct: index});
      },
    });
  }
);
