sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("com.odatatransient.ui5.controller.Error", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf com.odatatransient.ui5.view.Error
		 */
		onInit: function () {

		},
		
		onAdd: function(oEvent) {
			var oBinding = this.getView().byId("idTable").getBinding("rows");
			var oContext = oBinding.create({
				"ID": "",
				"name": ""
			});
		},
		
		onSave: function(oEvent) {
			var fnSuccess = function () {
				MessageToast.show("Success");
			}.bind(this);

			var fnError = function (oError) {
				MessageBox.error(oError.message);
			}.bind(this);

			this.getView().getModel().submitBatch("updateGroup").then(fnSuccess, fnError);
		},
		
		onCancel: function(oEvent) {
			this.getView().byId("idTable").getBinding("rows").resetChanges("updateGroup");
		}

	});

});