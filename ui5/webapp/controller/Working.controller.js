sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/m/MessageBox"
], function (Controller, MessageToast, MessageBox) {
	"use strict";

	return Controller.extend("com.odatatransient.ui5.controller.Working", {
		onInit: function () {

		},
		
		onAdd: function(oEvent) {
			var oBinding = this.getView().byId("idTable").getBinding("items");
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
			this.getView().byId("idTable").getBinding("items").resetChanges("updateGroup");
		}
	});
});