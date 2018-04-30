Ext.define("CoomuceMod.view.ReportesIndividuales.Interfaces.FichaIdentificacion", {
    extend: "Ext.panel.Panel",
    id: "Form-Ifppir-Report",
    requires: [
    "CoomuceMod.view.ReportesIndividuales.Interfaces.FichaIdentificacionController",
    "CoomuceMod.view.ReportesIndividuales.Interfaces.FichaIdentificacionModel"
    ],

    controller: "reportes-individuales-interfaces-fichaidentificacion",
    viewModel: {
        type: "reportes-individuales-interfaces-fichaidentificacion"
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
            id: "FDI-ParamDocumento",
            width: 300
        },
        "->",
        {
            text: "Buscar",
            handler: "onBotonBuscarClick",
            width: 200
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
                store: "{getFichas}"
            },
            displayField: "fechaAplicacionIfppir",
            editable: false,
            fieldLabel: "Fichas Disponibles",
            id: "FDI-ParamFichas",
            queryMode: "local",
            valueField: "fechaAplicacionIfppir",
            width: 300
        },
        "->",
        {
            text: "Generar",
            handler: "onBotonGenerarReporteClick",
            width: 200
        }
            ],
            ui: "footer"
        }
        ]


    });
