Ext.define("CoomuceMod.view.Reportes.Interfaces.GrupoPoblacional", {
    extend: "Ext.panel.Panel",

    requires: [
        "CoomuceMod.view.Reportes.Interfaces.GrupoPoblacionalController",
        "CoomuceMod.view.Reportes.Interfaces.GrupoPoblacionalModel"
    ],

    controller: "reportes-interfaces-grupopoblacional",
    viewModel: {
        type: "reportes-interfaces-grupopoblacional"
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
