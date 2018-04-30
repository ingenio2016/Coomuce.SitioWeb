Ext.define("CoomuceMod.view.ReportesIndividuales.Generar", {
    extend: "Ext.panel.Panel",

    requires: [
        "CoomuceMod.view.ReportesIndividuales.GenerarController",
        "CoomuceMod.view.ReportesIndividuales.GenerarModel"
    ],

    controller: "reportes-individuales-generar",
    viewModel: {
        type: "reportes-individuales-generar"
    },

    layout: "border",

    items: [
        {
            xtype: "grid",
            bind: {
                store: "{getListaReportesIndividuales}"
            },
            border: true,

            columns: [
                { dataIndex: "nombreReporte", header: "Seleccione reporte", width: 300 }
            ],
            columnLines: true,

            loadMask: true,

            reference: "gridListaReportesIndividuales",
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
