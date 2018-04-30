Ext.define("CoomuceMod.view.Reportes.Interfaces.Ips", {
    extend: "Ext.panel.Panel",

    requires: [
        "CoomuceMod.view.Reportes.Interfaces.IpsController",
        "CoomuceMod.view.Reportes.Interfaces.IpsModel"
    ],

    controller: "reportes-interfaces-ips",
    viewModel: {
        type: "reportes-interfaces-ips"
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
