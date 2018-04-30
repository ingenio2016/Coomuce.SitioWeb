Ext.define("CoomuceMod.view.Reportes.Generar", {
    extend: "Ext.panel.Panel",

    requires: [
        "CoomuceMod.view.Reportes.GenerarController",
        "CoomuceMod.view.Reportes.GenerarModel"
    ],

    controller: "reportes-generar",
    viewModel: {
        type: "reportes-generar"
    },

    layout: "border",

    items: [
        {
            xtype: "grid",
            bind: {
                store: "{getListaReportes}"
            },
            border: true,

            columns: [
                { dataIndex: "nombreReporte", header: "Seleccione reporte", width: 300 }
            ],
            columnLines: true,

            loadMask: true,

            reference: "gridListaReportes",
            region: "west",
            split: true,
            tbar: {
                ui: "footer",
                items: [
                    { text: "Abrir vista de reporte", handler: "onBotonAbrirTabClick" },
                    { minWidth: 80, text: 'Cancelar', handler: 'onBotonCancelarClick' }
                ]
            },
            width: 250
        },
        {
            xtype: "tabpanel",
            reference: "tabReportes",
            region: "center",
            split: true
        }
    ]
});
