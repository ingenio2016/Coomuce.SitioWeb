Ext.define("CoomuceMod.view.Reportes.Interfaces.MotivoConsulta", {
    extend: "Ext.panel.Panel",

    requires: [
        "CoomuceMod.view.Reportes.Interfaces.MotivoConsultaController",
        "CoomuceMod.view.Reportes.Interfaces.MotivoConsultaModel"
    ],

    controller: "reportes-interfaces-motivoconsulta",
    viewModel: {
        type: "reportes-interfaces-motivoconsulta"
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
