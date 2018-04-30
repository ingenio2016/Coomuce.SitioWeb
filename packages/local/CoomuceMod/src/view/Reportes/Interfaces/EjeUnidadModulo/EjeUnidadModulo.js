Ext.define("CoomuceMod.view.Reportes.Interfaces.EjeUnidadModulo", {
    extend: "Ext.panel.Panel",

    requires: [
        "CoomuceMod.view.Reportes.Interfaces.EjeUnidadModuloController",
        "CoomuceMod.view.Reportes.Interfaces.EjeUnidadModuloModel"
    ],

    controller: "reportes-interfaces-ejeunidadmodulo",
    viewModel: {
        type: "reportes-interfaces-ejeunidadmodulo"
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
