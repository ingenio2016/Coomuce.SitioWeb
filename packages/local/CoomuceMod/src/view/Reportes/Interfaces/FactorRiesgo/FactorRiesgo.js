Ext.define("CoomuceMod.view.Reportes.Interfaces.FactorRiesgo", {
    extend: "Ext.panel.Panel",

    requires: [
        "CoomuceMod.view.Reportes.Interfaces.FactorRiesgoController",
        "CoomuceMod.view.Reportes.Interfaces.FactorRiesgoModel"
    ],

    controller: "reportes-interfaces-factorriesgo",
    viewModel: {
        type: "reportes-interfaces-factorriesgo"
    },

    layout: "fit",

    tbar: {
        xtype: "toolbar",
        layout: {
            align: "middle"
        },
        listeners: {
            beforerender: "onToolbarBeforeRender"
        },
        ui: "footer"
    }

});
