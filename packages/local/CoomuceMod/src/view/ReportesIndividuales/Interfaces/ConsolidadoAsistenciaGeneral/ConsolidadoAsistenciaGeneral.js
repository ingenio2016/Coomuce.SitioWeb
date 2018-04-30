Ext.define("CoomuceMod.view.ReportesIndividuales.Interfaces.ConsolidadoAsistenciaGeneral", {
    extend: "Ext.panel.Panel",

    requires: [
    "CoomuceMod.view.ReportesIndividuales.Interfaces.ConsolidadoAsistenciaGeneralController",
    "CoomuceMod.view.ReportesIndividuales.Interfaces.ConsolidadoAsistenciaGeneralModel"
    ],

    controller: "reportes-individuales-interfaces-consolidadoasistenciageneral",
    viewModel: {
        type: "reportes-individuales-interfaces-consolidadoasistenciageneral"
    },

    layout: "fit",

    dockedItems: [
    {
        xtype: "toolbar",
        layout: {
            align: "middle"
        },
        items: [
        {
            xtype: "textfield",
            fieldLabel: "Documento del Afiliado",
            hideLabel: false,
            id: "CAG-ParamDocumento",
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
