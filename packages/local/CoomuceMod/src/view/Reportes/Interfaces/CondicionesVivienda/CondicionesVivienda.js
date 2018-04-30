Ext.define("CoomuceMod.view.Reportes.Interfaces.CondicionesVivienda", {
    extend: "Ext.panel.Panel",

    requires: [
        "CoomuceMod.view.Reportes.Interfaces.CondicionesViviendaController",
        "CoomuceMod.view.Reportes.Interfaces.CondicionesViviendaModel"
    ],

    controller: "reportes-interfaces-condicionesvivienda",
    viewModel: {
        type: "reportes-interfaces-condicionesvivienda"
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
