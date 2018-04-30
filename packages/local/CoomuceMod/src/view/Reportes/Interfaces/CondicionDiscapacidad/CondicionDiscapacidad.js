Ext.define("CoomuceMod.view.Reportes.Interfaces.CondicionDiscapacidad", {
    extend: "Ext.panel.Panel",

    requires: [
        "CoomuceMod.view.Reportes.Interfaces.CondicionDiscapacidadController",
        "CoomuceMod.view.Reportes.Interfaces.CondicionDiscapacidadModel"
    ],

    controller: "reportes-interfaces-condiciondiscapacidad",
    viewModel: {
        type: "reportes-interfaces-condiciondiscapacidad"
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
