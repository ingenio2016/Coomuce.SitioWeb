Ext.define("CoomuceMod.view.Reportes.Interfaces.PiezasInformativas", {
    extend: "Ext.panel.Panel",

    requires: [
        "CoomuceMod.view.Reportes.Interfaces.PiezasInformativasController",
        "CoomuceMod.view.Reportes.Interfaces.PiezasInformativasModel"
    ],

    controller: "reportes-interfaces-piezasinformativas",
    viewModel: {
        type: "reportes-interfaces-piezasinformativas"
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
