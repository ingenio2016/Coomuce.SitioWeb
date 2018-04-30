Ext.define("CoomuceMod.view.Reportes.Interfaces.GrupoInteres", {
    extend: "Ext.panel.Panel",

    requires: [
        "CoomuceMod.view.Reportes.Interfaces.GrupoInteresController",
        "CoomuceMod.view.Reportes.Interfaces.GrupoInteresModel"
    ],

    controller: "reportes-interfaces-grupointeres",
    viewModel: {
        type: "reportes-interfaces-grupointeres"
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
