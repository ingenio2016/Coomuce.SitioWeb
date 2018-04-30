Ext.define("CoomuceMod.view.Reportes.Interfaces.CicloVital", {
    extend: "Ext.panel.Panel",

    requires: [
        "CoomuceMod.view.Reportes.Interfaces.CicloVitalController",
        "CoomuceMod.view.Reportes.Interfaces.CicloVitalModel"
    ],

    controller: "reportes-interfaces-ciclovital",
    viewModel: {
        type: "reportes-interfaces-ciclovital"
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
