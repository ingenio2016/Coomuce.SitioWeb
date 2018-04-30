Ext.define("CoomuceMod.view.ReportesIndividuales.Interfaces.ConsolidadoFactorRiesgo", {
    extend: "Ext.panel.Panel",
    id: "Form-Hfdfr-Report",
    requires: [
    "CoomuceMod.view.ReportesIndividuales.Interfaces.ConsolidadoFactorRiesgoController",
    "CoomuceMod.view.ReportesIndividuales.Interfaces.ConsolidadoFactorRiesgoModel"
    ],

    controller: "reportes-individuales-interfaces-consolidadofactorriesgo",
    viewModel: {
        type: "reportes-individuales-interfaces-consolidadofactorriesgo"
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
            id: "CFR-ParamDocumento",
            width: 300
        },
        "->",
        {
            text: "Buscar",
            handler: "onBotonBuscarClick"
        }
        ],
            //listeners: {
            //    beforerender: "onToolbarBeforeRender"
            //},
            ui: "footer"
        },
        {
            xtype: "toolbar",
            dock: "top",
            items: [
                {
            xtype: "combo",
            bind: {
                store: "{getHistorias}"
            },
            displayField: "fechaVisitaHfdfr",
            editable: false,
            fieldLabel: "Historias Disponibles",
            id: "CFR-ParamFichas",
            queryMode: "local",
            valueField: "fechaVisitaHfdfr"
        },
        "->",
        {
            text: "Generar",
            handler: "onBotonGenerarReporteClick"
        }
            ],
            ui: "footer"
        }
        ]

    });
