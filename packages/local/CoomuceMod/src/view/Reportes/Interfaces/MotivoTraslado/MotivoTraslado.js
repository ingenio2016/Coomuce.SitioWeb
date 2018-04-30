Ext.define("CoomuceMod.view.Reportes.Interfaces.MotivoTraslado", {
    extend: "Ext.panel.Panel",

    requires: [
        "CoomuceMod.view.Reportes.Interfaces.MotivoTrasladoController",
        "CoomuceMod.view.Reportes.Interfaces.MotivoTrasladoModel"
    ],

    controller: "reportes-interfaces-motivotraslado",
    viewModel: {
        type: "reportes-interfaces-motivotraslado"
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
