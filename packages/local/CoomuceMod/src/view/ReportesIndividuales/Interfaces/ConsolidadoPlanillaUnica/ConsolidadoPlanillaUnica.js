Ext.define("CoomuceMod.view.ReportesIndividuales.Interfaces.ConsolidadoPlanillaUnica", {
    extend: "Ext.panel.Panel",

    requires: [
    "CoomuceMod.view.ReportesIndividuales.Interfaces.ConsolidadoPlanillaUnicaController",
    "CoomuceMod.view.ReportesIndividuales.Interfaces.ConsolidadoPlanillaUnicaModel"
    ],

    controller: "reportes-individuales-interfaces-consolidadoplanillaunica",
    viewModel: {
        type: "reportes-individuales-interfaces-consolidadoplanillaunica"
    },

    layout: "fit",

    dockedItems: [
    {
        xtype: "toolbar",
        dock: "top",
        layout: {
            align: "middle"
        },
        items: [
        {
            xtype: "textfield",
            fieldLabel: "Documento del Afiliado",
            hideLabel: false,
            id: "CPU-ParamDocumento",
            width: 300
        },
        "->",
        {
            text: "Generar",
            handler: "onBotonGenerarReporteClick"
        }
        ],
            //listeners: {
            //    beforerender: "onToolbarBeforeRender"
            //},
            ui: "footer"
        }
        ]
    });
