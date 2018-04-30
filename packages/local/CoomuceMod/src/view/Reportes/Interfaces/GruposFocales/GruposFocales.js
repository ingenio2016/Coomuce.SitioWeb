Ext.define("CoomuceMod.view.Reportes.Interfaces.GruposFocales", {
    extend: "Ext.panel.Panel",

    requires: [
        "CoomuceMod.view.Reportes.Interfaces.GruposFocalesController",
        "CoomuceMod.view.Reportes.Interfaces.GruposFocalesModel"
    ],

    controller: "reportes-interfaces-gruposfocales",
    viewModel: {
        type: "reportes-interfaces-gruposfocales"
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
