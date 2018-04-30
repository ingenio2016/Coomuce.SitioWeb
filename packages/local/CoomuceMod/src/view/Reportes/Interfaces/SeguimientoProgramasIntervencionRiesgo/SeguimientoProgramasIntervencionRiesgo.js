Ext.define("CoomuceMod.view.Reportes.Interfaces.SeguimientoProgramasIntervencionRiesgo", {
    extend: "Ext.panel.Panel",

    requires: [
        "CoomuceMod.view.Reportes.Interfaces.SeguimientoProgramasIntervencionRiesgoController",
        "CoomuceMod.view.Reportes.Interfaces.SeguimientoProgramasIntervencionRiesgoModel"
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
