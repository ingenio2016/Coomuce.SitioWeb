Ext.define("CoomuceMod.view.Reportes.Interfaces.ProgramasResolucion412", {
    extend: "Ext.panel.Panel",

    requires: [
        "CoomuceMod.view.Reportes.Interfaces.ProgramasResolucion412Controller",
        "CoomuceMod.view.Reportes.Interfaces.ProgramasResolucion412Model"
    ],

    controller: "reportes-interfaces-programasresolucion412",
    viewModel: {
        type: "reportes-interfaces-programasresolucion412"
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
