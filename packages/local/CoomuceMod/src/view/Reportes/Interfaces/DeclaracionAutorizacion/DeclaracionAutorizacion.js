Ext.define("CoomuceMod.view.Reportes.Interfaces.DeclaracionAutorizacion", {
    extend: "Ext.panel.Panel",

    requires: [
        "CoomuceMod.view.Reportes.Interfaces.DeclaracionAutorizacionController",
        "CoomuceMod.view.Reportes.Interfaces.DeclaracionAutorizacionModel"
    ],

    controller: "reportes-interfaces-declaracionautorizacion",
    viewModel: {
        type: "reportes-interfaces-declaracionautorizacion"
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
