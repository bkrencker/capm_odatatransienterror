/*global QUnit*/

sap.ui.define([
	"com/odatatransient/ui5/controller/Working.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Working Controller");

	QUnit.test("I should test the Working controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});