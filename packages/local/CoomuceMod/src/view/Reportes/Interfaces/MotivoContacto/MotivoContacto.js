Ext.define("CoomuceMod.view.Reportes.Interfaces.MotivoContacto", {
    extend: "Ext.panel.Panel",

    requires: [
        "CoomuceMod.view.Reportes.Interfaces.MotivoContactoController",
        "CoomuceMod.view.Reportes.Interfaces.MotivoContactoModel"
    ],

    controller: "reportes-interfaces-motivocontacto",
    viewModel: {
        type: "reportes-interfaces-motivocontacto"
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
